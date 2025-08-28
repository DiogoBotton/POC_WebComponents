import React from "react";
import ReactDOM from "react-dom";
import reactToWebComponent from "react-to-webcomponent";
import MyButton from "./MyButton";

// Definir process.env se não estiver definido
if (typeof process === 'undefined') {
  global.process = {
    env: {
      NODE_ENV: 'production'
    }
  };
}

// Converter o componente React em Web Component
const MyButtonElement = reactToWebComponent(MyButton, React, ReactDOM);

// Registrar no navegador
customElements.define("my-button", MyButtonElement);