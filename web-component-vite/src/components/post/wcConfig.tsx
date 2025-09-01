import ReactDOM from "react-dom/client"
import { type IPostProps, Post } from "./Post"

export const normalizeAttribute = (attribute: string) => {
  return attribute.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
};

class PostWebComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback(){
        const props = this.getPropsFromAttributes<IPostProps>();
        const root = ReactDOM.createRoot(this.shadowRoot as ShadowRoot);
        root.render(<Post {...props} />)
    }

    private getPropsFromAttributes<T>() : T {
        const props: Record<string, string> = {};

        for (let index = 0; index < this.attributes.length; index++) {
            const attribute = this.attributes[index];
            props[normalizeAttribute(attribute.name)] = attribute.value;
        }

        return props as T;
    }
}

export default PostWebComponent; // Necessário exportar apenas se for necessário realizar a definição dos elementos em outro lugar

customElements.define("post-widget", PostWebComponent);