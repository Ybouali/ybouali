import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "vite-plugin-sitemap";
import Pages from "vite-plugin-pages";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
    plugins: [
        tailwindcss(),
        sitemap({
            hostname: "https://ybouali.dev",
            outDir: "dist",
            generateRobotsTxt: true,
            changefreq: "monthly",
            priority: 0.8,
            dynamicRoutes: [
                "/",
                "/who-i-am",
                "/projects",
                "/education",
                "/certificates",
                "/contact",
                "/blog",
                "/cv",
            ],
        }),
        Pages({
            dirs: "src/pages",
            extensions: ["tsx", "ts", "jsx", "js"],
            resolver: "react",
        }),
        visualizer({
            filename: "dist/stats.html",
            open: true,
            gzipSize: true,
            brotliSize: true,
        }),
    ],
    base: "/",
});
