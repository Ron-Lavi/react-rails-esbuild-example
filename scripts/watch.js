#!/usr/bin/env node
process.env.NODE_ENV = "development";

require("esbuild").build({
  entryPoints: ["app/javascript/application.js"],
  bundle: true,
  watch: true,
  minify: true,
  sourcemap: true,
  splitting: true,
  format: "esm",
  outdir: "app/assets/javascripts",
  loader: {
    ".html": "text",
    ".js": "jsx",
    ".svg": "dataurl",
    ".png": "dataurl",
    ".jpg": "dataurl",
    ".woff": "dataurl",
    ".woff2": "dataurl",
  },
});
