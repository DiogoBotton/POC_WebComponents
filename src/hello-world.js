import html from "./hello-world.html";
import css from "./hello-world.css";

export class HelloWorld extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });

    shadow.innerHTML = `
      <style>${css.toString()}</style>
      ${html}
    `;
  }
}

customElements.define("hello-world", HelloWorld);
