import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true, // Ensures correct routing
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Correct alias for the "src" directory
    },
  },
});
