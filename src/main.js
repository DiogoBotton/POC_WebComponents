// Define global para ambientes de navegador
if (typeof window !== 'undefined' && typeof global === 'undefined') {
  window.global = window;
}

// Define process.env se não existir
if (typeof process === 'undefined') {
  window.process = {
    env: {
      NODE_ENV: 'production'
    }
  };
}

import React from "react";
import ReactDOM from "react-dom";
import reactToWebComponent from "react-to-webcomponent";
import MyButton from "./MyButton";

// Converter o componente React em Web Component
const MyButtonElement = reactToWebComponent(MyButton, React, ReactDOM);

// Registrar no navegador
customElements.define("my-button", MyButtonElement);