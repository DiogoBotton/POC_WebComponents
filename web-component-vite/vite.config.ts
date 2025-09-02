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
    // Caso for um único Web Component, criar arquivo index importando e definindo o componente com:
    // import { type IMeuWebComponentProps, MeuWebComponent } from "./MeuWebComponent"
    // customElements.define("meu-web-component", MeuWebComponent);
    
    // Para buildar um componente por vez (comentar rollupOptions)
    lib: {
      entry: "./src/components/post/wcConfig.tsx",
      name: "widgets",
      fileName: (format) => `post-widget.${format}.js`,
    },
    target: "esnext",
    
    // rollupOptions: {
    //   // Caso for vários WebComponents, declare-os abaixo:
    //   input: {
    //     'portfolio-widget': './src/components/portfolio/wcConfig.tsx',
    //     'post-widget': './src/components/post/wcConfig.tsx'
    //   },
    //   output: {
    //     entryFileNames: `[name].js`,
    //     manualChunks: undefined,
    //     format: "es"
    //   },
    // }
  }
})
