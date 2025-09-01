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
    // Caso for um único Web Component
    // lib: {
    //   entry: "./src/index.tsx",
    //   name: "widgets",
    //   fileName: (format) => `widget.${format}.js`,
    // },
    target: "esnext",
    rollupOptions: {
      // Caso for vários WebComponents
      input: {
        'portfolio-widget': './src/components/portfolio/wcConfig.tsx',
        'post-widget': './src/components/post/wcConfig.tsx'
      },
      output: {
        entryFileNames: `[name].js`,
        format: "es"
      },
    }
  }
})
