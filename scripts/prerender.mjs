// scripts/prerender.mjs
import { preview } from "vite";
import puppeteer from "puppeteer";
import { mkdir, writeFile, readFile, access } from "node:fs/promises";
import { join, dirname } from "node:path";

const DIST = "dist";
const ORIGIN = "http://localhost:4173";

// Seed routes ensure /cv is always included, even if the crawl misses it
const SEED_ROUTES = ["/", "/cv"];

// Skip static assets, PDFs, and internal Vite paths
const EXCLUDE = [
  /^\/assets\//,
  /^\/_/,
  /\.(pdf|png|jpg|jpeg|svg|ico|css|js|json|txt|xml)$/i,
];

const normalize = (href) => href.split(/[?#]/)[0].replace(/\/+$/, "") || "/";

async function discoverRoutes(page) {
  const seen = new Set(SEED_ROUTES.map(normalize));
  const queue = [...seen];

  while (queue.length > 0) {
    const route = queue.shift();
    try {
      await page.goto(`${ORIGIN}${route}`, {
        waitUntil: "networkidle0",
        timeout: 30000,
      });
    } catch (err) {
      console.warn(`  ! crawl skip ${route}: ${err.message}`);
      continue;
    }

    const links = await page.$$eval("a[href]", (anchors) =>
      anchors
        .map((a) => a.getAttribute("href"))
        .filter((h) => h && h.startsWith("/")),
    );

    for (const href of links) {
      const route = normalize(href);
      if (EXCLUDE.some((re) => re.test(route))) continue;
      if (!seen.has(route)) {
        seen.add(route);
        queue.push(route);
      }
    }
  }
  return [...seen];
}

async function main() {
  console.log("[prerender] starting vite preview…");
  const server = await preview({ preview: { port: 4173, strictPort: true } });

  console.log("[prerender] launching puppeteer…");
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900 });

    console.log("[prerender] discovering routes…");
    const routes = await discoverRoutes(page);
    console.log(`[prerender] found ${routes.length} routes`);

    let written = 0;
    let failed = 0;

    for (const route of routes) {
      process.stdout.write(`[prerender] ${route} … `);
      try {
        await page.goto(`${ORIGIN}${route}`, {
          waitUntil: "networkidle0",
          timeout: 30000,
        });
        await new Promise((r) => setTimeout(r, 250));

        const html = await page.content();
        const outDir = route === "/" ? DIST : join(DIST, route);
        const outFile = join(outDir, "index.html");

        await mkdir(outDir, { recursive: true });
        await writeFile(outFile, html, "utf8");
        written++;
        console.log(`ok (${(html.length / 1024).toFixed(1)} kB)`);
      } catch (err) {
        failed++;
        console.error(`FAILED: ${err.message}`);
      }
    }

    console.log(`\n[prerender] done — ${written} written, ${failed} failed`);
    if (failed > 0) process.exitCode = 1;
  } finally {
    await browser.close();
    await new Promise((resolve) => server.httpServer.close(resolve));
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
