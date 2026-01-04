import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // For GitHub Pages: if repository name is username.github.io, use '/', otherwise use '/repository-name/'
  const repoName = process.env.GITHUB_REPOSITORY_NAME || '';
  const isUserPage = repoName.endsWith('.github.io');
  const base = process.env.GITHUB_PAGES 
    ? (isUserPage ? '/' : `/${repoName}/`)
    : '/';

  return {
    base,
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
