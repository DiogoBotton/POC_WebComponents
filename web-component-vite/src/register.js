import React from 'react'
import { createRoot } from 'react-dom/client'
import MyWidget from './MyWidget'

class MyWidgetElement extends HTMLElement {
    constructor() {
        super()
        this._root = this.attachShadow({ mode: 'open' })
        this._mount = document.createElement('div')
        const style = document.createElement('style')
        style.textContent = `
            .my-widget {
              font-family: Arial, sans-serif;
              padding: 12px;
              background: #f7f7ff;
              border-radius: 8px;
            }
            .my-widget h3 {
              color: #0070f3;
              margin: 0 0 6px 0;
            }
        `
        this._root.appendChild(style)
        this._root.appendChild(this._mount)
        this._reactRoot = null
    }


    connectedCallback() {
        if (!this._reactRoot) {
            this._reactRoot = createRoot(this._mount)
        }
        this._render()
    }


    disconnectedCallback() {
        if (this._reactRoot) {
            this._reactRoot.unmount()
            this._reactRoot = null
        }
    }


    static get observedAttributes() {
        return ['name']
    }


    attributeChangedCallback() {
        this._render()
    }


    _render() {
        const props = { name: this.getAttribute('name') }
        this._reactRoot.render(React.createElement(MyWidget, props))
    }
}

if (!customElements.get('my-widget-vite')) {
    customElements.define('my-widget-vite', MyWidgetElement)
}