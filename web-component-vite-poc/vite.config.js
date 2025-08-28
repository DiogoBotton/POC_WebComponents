import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/main.js",   // nosso entry point
      name: "MyButtonWidget",     // nome global (se precisar)
      fileName: "my-button",      // saída: dist/my-button.js
      formats: ["es"]             // formato ES Module
    },
    rollupOptions: {
      // não externalize react/react-dom, queremos que venham juntos no bundle
      external: [],
    }
  }
});
