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

O problema: renderizar Widgets de forma dinâmica, onde a partir de uma API o front receberá uma lista de URL's que correspondem aos links de onde estarão armazenados os Web Components (arquivos JS buildados, bundles). A partir desta lista, o front tem o desafio de renderizar esses componentes dinâmicamente (em tempo de execução) sem a necessidade de rebuildar o front após acrescentar um novo Widget.

**Criação de Web Component com React + Vite**

Há duas formas abordadas nesta POC para renderizar os Web Components de forma dinâmica:
- Hospedar os arquivos no Github Pages.
- Adquirir o *raw* do arquivo no próprio Github.

Os exemplos acima servem para projetos pequenos ou com propósitos de estudos. Porém, a **forma mais recomendada para produção** seria subir em algum **servidor de armazenamento de arquivos**, como S3 da Amazon ou Azure Blob Storage da Microsoft Azure.