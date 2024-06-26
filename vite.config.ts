import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      shared: "/src/shared",
      entities: "/src/entities",
      features: "/src/features",
      widgets: "/src/widgets",
      pages: "/src/pages",
      app: "/src/app",
    },
  },
});
