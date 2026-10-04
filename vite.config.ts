import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

export default defineConfig({
  plugins: [
    tanstackStart({
      prerender: {
        enabled: true,
      },
      server: {
        entry: "server",
      },
    }),
    tailwindcss(),
    react(),
    tsconfigPaths(),
  ],
  server: {
    port: 8081,
    strictPort: false,
  },
});
