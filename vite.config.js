import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/omwankhede8.github.io/",
  build: {
    outDir: "./docs",
  },
});
