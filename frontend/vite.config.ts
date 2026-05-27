import { mkdirSync, renameSync, rmSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { defineConfig, PluginOption } from "vite";
import react from "@vitejs/plugin-react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const frontendDir = dirname(fileURLToPath(import.meta.url));
const staticOutDir = resolve(frontendDir, "../src/main/resources/static");
const templatesOutDir = resolve(frontendDir, "../src/main/resources/templates");

function moveIndexHtmlToTemplates(): PluginOption {
  return {
    name: "move-index-html-to-templates",
    closeBundle() {
      const generatedIndex = resolve(staticOutDir, "index.html");
      const templateIndex = resolve(templatesOutDir, "index.html");

      mkdirSync(templatesOutDir, { recursive: true });
      rmSync(templateIndex, { force: true });
      renameSync(generatedIndex, templateIndex);
    }
  };
}

export default defineConfig({
  plugins: [react(), moveIndexHtmlToTemplates()],
  publicDir: "src/assets",
  build: {
    outDir: staticOutDir,
    assetsDir: "generated",
    emptyOutDir: true
  },
  server: {
    open: true
  },
  experimental: {
    renderBuiltUrl: (filename, { type }) => {
      console.log(`Processing file ${filename}`, type);
      if (type == "asset") {
        return `/static/${filename}`;
      }
      return "";
    }
  }
});
