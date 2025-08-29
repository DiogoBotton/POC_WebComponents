import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'MyReactWebComponents',
      fileName: (format) => `my-react-webcomponents.${format}.js`,
      formats: ['es']
    },
    rollupOptions: {
      // Se quiser manter React/ReactDOM externos (reduz bundle), descomente:
      // external: ['react', 'react-dom'],
      // output: { globals: { react: 'React', 'react-dom': 'ReactDOM' } }
    }
  }
})