import React from "react";
import ReactDOM from "react-dom";
import reactToWebComponent from "react-to-webcomponent";
import MyButton from "./MyButton";

// Converter o componente React em Web Component
const MyButtonElement = reactToWebComponent(MyButton, React, ReactDOM);

// Registrar no navegador
customElements.define("my-button", MyButtonElement);