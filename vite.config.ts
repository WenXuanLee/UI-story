import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import fs from 'fs';

const componentsDir = path.resolve(__dirname, "src/components");
const componentEntries = fs
  .readdirSync(componentsDir) // Read all component folders
  .filter((name) => fs.statSync(path.join(componentsDir, name)).isDirectory()) // Ensure only directories
  .reduce((entries, name) => {
    entries[name] = path.join(componentsDir, name, "index.tsx"); // Each component's entry
    return entries;
  }, {} as Record<string, string>);

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // ✅ Ensures Vite & Rollup recognize "@/"
    },
  },
  build: {
    lib: {
      entry: {
        index: path.resolve(__dirname, "src/main.tsx"),
        ...componentEntries, // ✅ Add component entries
      },
      name: "nanaben-ui",
      formats: ["es", "cjs"],
      fileName: (format, entryName) =>
      entryName === "index" ? `index.${format}.js` : `${entryName}/index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"], // Mark dependencies as external
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        manualChunks: {
          // Grouping specific modules into a single chunk
          'vendor': ['react-icons'],
          'utils': ['./src/utils/style-utility-cn.tsx'],
        },
      }
    },
  },
  plugins: [react()],
})
