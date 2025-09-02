import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  define: {
    "process.env": {
      NODE_ENV: "production"
    }
  },
  plugins: [react()],
  build: {
    lib: {
      entry: "./src/components/post/wcConfig.tsx",
      name: "widgets",
      fileName: (format) => `post-widget.${format}.js`,
    },
    target: "esnext",
  }
})
