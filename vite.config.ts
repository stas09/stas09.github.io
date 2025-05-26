import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { viteStaticCopy } from "vite-plugin-static-copy";
import path from "path";

export default defineConfig(async () => {
  return {
    base: './',
    plugins: [
      react(),
      runtimeErrorOverlay(),
      viteStaticCopy({
        targets: [
          {
            src: 'public/_redirects', // <--- относительный путь
            dest: '.',                // <--- корень dist
          },
        ],
      }),
      ...(process.env.NODE_ENV !== "production" &&
        process.env.REPL_ID !== undefined
        ? [
          (await import("@replit/vite-plugin-cartographer")).cartographer(),
        ]
        : []),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@shared": path.resolve(__dirname, "./shared"),
        "@assets": path.resolve(__dirname, "./attached_assets"),
      },
    },
    build: {
      outDir: path.resolve(__dirname, 'dist'),
      emptyOutDir: true,
    },
  };
});
