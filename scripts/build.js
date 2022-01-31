#!/usr/bin/env node
process.env.NODE_ENV = "production";
const esbuild = require("esbuild");
const eslintSassPlugin = require("esbuild-sass-plugin");

esbuild.build({
  entryPoints: ["app/javascript/application.js"],
  bundle: true,
  minify: true,
  sourcemap: true,
  splitting: true,
  format: "esm",
  outdir: "app/assets/javascripts",
  plugins: [
    eslintSassPlugin.sassPlugin(),
  ],
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
