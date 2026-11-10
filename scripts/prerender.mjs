// scripts/prerender.mjs
import { preview } from "vite";
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { existsSync, readdirSync } from "node:fs";
import { homedir } from "node:os";

const DIST = "dist";
const ORIGIN = "http://localhost:4173";
const SEED_ROUTES = ["/", "/cv"];
const EXCLUDE = [
  /^\/assets\//,
  /^\/_/,
  /\.(pdf|png|jpg|jpeg|svg|ico|css|js|json|txt|xml)$/i,
];

const normalize = (href) => href.split(/[?#]/)[0].replace(/\/+$/, "") || "/";

/** Locate a Chrome binary in the local puppeteer cache (macOS / Windows). */
function findCachedChrome() {
  const cacheDir = join(homedir(), ".cache", "puppeteer", "chrome");
  if (!existsSync(cacheDir)) {
    throw new Error(
      `Chrome cache not found at ${cacheDir}. Run: npx puppeteer browsers install chrome`,
    );
  }
  const versions = readdirSync(cacheDir).filter((v) => !v.startsWith("."));
  if (versions.length === 0) {
    throw new Error(
      "Chrome cache empty. Run: npx puppeteer browsers install chrome",
    );
  }
  const latest = versions.sort((a, b) => {
    const av = a.split(".").map(Number);
    const bv = b.split(".").map(Number);
    for (let i = 0; i < Math.max(av.length, bv.length); i++) {
      const diff = (bv[i] || 0) - (av[i] || 0);
      if (diff !== 0) return diff;
    }
    return 0;
  })[0];
  const versionDir = join(cacheDir, latest);
  const subdirs = readdirSync(versionDir).filter((d) =>
    d.startsWith("chrome-"),
  );
  if (subdirs.length === 0) {
    throw new Error(`No chrome-* subdir inside ${versionDir}`);
  }
  const sub = subdirs[0];
  let exe;
  if (sub.startsWith("chrome-mac")) {
    exe = join(
      versionDir,
      sub,
      "Google Chrome for Testing.app",
      "Contents",
      "MacOS",
      "Google Chrome for Testing",
    );
  } else if (sub === "chrome-win64" || sub === "chrome-win32") {
    exe = join(versionDir, sub, "chrome.exe");
  } else {
    throw new Error(`Unsupported chrome subdir: ${sub}`);
  }
  if (!existsSync(exe)) {
    throw new Error(
      `Chrome binary missing at ${exe}. Run: npx puppeteer browsers install chrome`,
    );
  }
  return exe;
}

async function getBrowserLauncher() {
  const puppeteer = (await import("puppeteer-core")).default;

  if (process.platform === "linux") {
    const chromium = (await import("@sparticuz/chromium")).default;
    return {
      puppeteer,
      launch: {
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath(),
        headless: chromium.headless,
      },
    };
  }

  return {
    puppeteer,
    launch: {
      executablePath: findCachedChrome(),
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    },
  };
}

/** Keep only one <title> and one <meta name="description">. */
function dedupeHead(html) {
  const titles = [...html.matchAll(/<title[^>]*>[\s\S]*?<\/title>/gi)];
  if (titles.length > 1) {
    // Keep the LAST one — that's the React-rendered title from PageSeo.
    for (let i = 0; i < titles.length - 1; i++) {
      html = html.replace(titles[i][0], "");
    }
  }
  const descs = [...html.matchAll(/<meta\s+name="description"[^>]*>/gi)];
  if (descs.length > 1) {
    for (let i = 0; i < descs.length - 1; i++) {
      html = html.replace(descs[i][0], "");
    }
  }
  return html;
}

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
      const r = normalize(href);
      if (EXCLUDE.some((re) => re.test(r))) continue;
      if (!seen.has(r)) {
        seen.add(r);
        queue.push(r);
      }
    }
  }
  return [...seen];
}

async function main() {
  console.log(`[prerender] platform=${process.platform} arch=${process.arch}`);
  console.log("[prerender] starting vite preview…");
  const server = await preview({ preview: { port: 4173, strictPort: true } });

  console.log("[prerender] launching chrome…");
  const { puppeteer, launch } = await getBrowserLauncher();
  const browser = await puppeteer.launch(launch);

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

        let html = await page.content();
        html = dedupeHead(html);

        const outDir = route === "/" ? DIST : join(DIST, route);
        await mkdir(outDir, { recursive: true });
        await writeFile(join(outDir, "index.html"), html, "utf8");

        written++;
        console.log(`ok (${(html.length / 1024).toFixed(1)} kB)`);
      } catch (err) {
        failed++;
        console.error(`FAILED: ${err.message}`);
      }
    }

    console.log(`\n[prerender] done — ${written} written, ${failed} failed`);
    if (failed > 0 && !process.env.VERCEL && !process.env.CI) {
      process.exit(1);
    }
  } finally {
    await browser.close();
    await new Promise((resolve) => server.httpServer.close(resolve));
  }
}

main().catch((err) => {
  console.error("[prerender] fatal:", err.message);
  console.error(err.stack);
  // Vercel / CI: fall back to SPA instead of failing the deploy.
  if (process.env.VERCEL || process.env.CI) {
    console.warn("[prerender] continuing with SPA-only build");
    process.exit(0);
  }
  // Local: fail loudly so we see the error.
  process.exit(1);
});
