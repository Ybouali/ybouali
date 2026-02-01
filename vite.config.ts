import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import sitemap from 'vite-plugin-sitemap';

export default defineConfig({
    plugins: [
        tailwindcss(),
        sitemap({
            hostname: 'https://ybouali.dev',
            outDir: 'dist',
            generateRobotsTxt: true,
            changefreq: 'monthly',
            priority: 0.8,
        }),
    ],
    base: '/',
});
