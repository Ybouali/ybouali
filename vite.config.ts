import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import Pages from "vite-plugin-pages";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
    plugins: [
        tailwindcss(),

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