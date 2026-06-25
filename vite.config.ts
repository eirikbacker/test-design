import path from "node:path";
import react from "@vitejs/plugin-react";
import postcssNesting from "postcss-nesting";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import pkg from "./package.json" with { type: "json" };

const root = path.resolve(__dirname, "src");
const dist = path.resolve(__dirname, "dist"); // Using mtds as dist name for readable clojurescript imports: (io/resource "mtds/logo.svg")

export default defineConfig(() => ({
  css: {
    postcss: { plugins: [postcssNesting] }, // Polyfill support modern CSS nesting for Samsung Internet
  },
  plugins: [
    react(),
    dts({
      entryRoot: root,
      outDir: dist,
    }),
  ],
  build: {
    emptyOutDir: false, // This runs after IIFE build, so we don't want to clear the dist folder
    outDir: dist,
    sourcemap: true,
    minify: true,
    lib: {
      entry: [path.resolve(root, "index.ts")],
      cssFileName: "styles",
      fileName: "[name]",
      formats: ["es"],
    },
    rollupOptions: {
      // Externalize React
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        ...Object.keys(pkg.dependencies),
      ].map((name) => new RegExp(`^${name}(/.*)?`)),
      output: {
        // Needed to truly enable being treeshakable when Vite is in lib mode
        // https://stackoverflow.com/questions/74362685/tree-shaking-does-not-work-in-vite-library-mode
        preserveModules: true,
        preserveModulesRoot: root,
        // See https://github.com/rollup/rollup/issues/3684#issuecomment-1535836196
        entryFileNames: ({ name }) =>
          `${name.includes("node_modules") ? name.replace(/node_modules/, "external") : "[name]"}.js`,
      },
    },
  },
}));
