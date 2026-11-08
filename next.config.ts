import type { NextConfig } from "next";

// Set by actions/configure-pages in CI. Empty for a user site
// (username.github.io) and "/<repo>" for a project site.
const pagesBasePath = process.env.PAGES_BASE_PATH;

const nextConfig: NextConfig = {
  // GitHub Pages serves static files, so the build must emit HTML/CSS/JS.
  output: "export",
  ...(pagesBasePath ? { basePath: pagesBasePath } : {}),
  experimental: {
    agentFeedback: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
