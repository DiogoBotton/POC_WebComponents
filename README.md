# POC_WebComponents
Repositório com a finalidade de estudar e realizar POC's envolvendo Web Components

Os Web Components fornecem encapsulamento nativo, o que significa que o estilo e a lógica de um componente são isolados do resto da página, evitando conflitos de estilos e nomes.

### Criar app React com Vite

```bash
# Com typescript
pnpm create vite@latest my-app -- --template react-ts

# Sem typescript
pnpm create vite@latest my-app -- --template react
```

#### Artigo de apoio para criação de Web Component com React Js e Vite

[Create a Web Component from a React Component](https://techblog.skeepers.io/create-a-web-component-from-a-react-component-bbe7c5f85ee6)

### Melhor solução

**O problema**: renderizar Widgets de forma dinâmica, onde a partir de uma API o front receberá uma lista de URL's que correspondem aos links de onde estarão armazenados os Web Components (arquivos JS buildados, bundles). A partir desta lista, o front tem o desafio de renderizar esses componentes dinâmicamente (em tempo de execução) sem a necessidade de rebuildar o front após acrescentar um novo Widget.

**Criação de Web Component com React + Vite**

Há duas formas abordadas nesta POC para renderizar os Web Components de forma dinâmica:
- Hospedar os arquivos no Github Pages.
- Adquirir o *raw* do arquivo no próprio Github.

Os exemplos acima servem para projetos pequenos ou com propósitos de estudos. Porém, a **forma mais recomendada para produção** seria subir em algum **servidor de armazenamento de arquivos**, como S3 da Amazon ou Azure Blob Storage da Microsoft Azure.

**Exemplos de criação e consumo de Web Components**

Nos diretórios *'web-component-vite/src/components/portfolio'* e *'src/components/post'* há alguns exemplos da criação e definição de alguns componentes. O arquivo *wcConfig.tsx* serve para definir os elementos customizados e este será referenciado no *'vite.config.js'* para gerar o build.

No diretório *'wc-renderer_next/src/app/page.tsx'* é possível visualizar o consumo de Web Components via URL.

### Como fazer o Build

Para ser gerado um arquivo js buildado (bundle) de um componente específico é recomendado gerar um por vez para gerar apenas um único arquivo js. Caso for feito build para vários componentes com a propriedade *rollupOptions* será gerado um arquivo *'assets/index.xxxx.js'* com assets/chunks compartilhados entre os componentes, onde baseado no nosso objetivo não será adequado.

**Um build por vez:**
```js
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
```

**Vários builds por vez:**
```js
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
    target: "esnext",
    rollupOptions: {
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
```

