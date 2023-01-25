import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,

} from "react-router-dom";

import AppComponent from "./AppComponent";

const ELEMENT_ID = "query-param-communication";
export class CustomElement extends HTMLElement {
  connectedCallback() {
    const root = this;

    ReactDOM.render(
      <BrowserRouter>
        <AppComponent elementId={ELEMENT_ID} root={root} />
      </BrowserRouter>,
      root);
  }

}

if (customElements.get(ELEMENT_ID)) {
  console.info(
    `Skipping registration for <${ELEMENT_ID}> (already registered)`
  );
} else {
  customElements.define(ELEMENT_ID, CustomElement);
}
