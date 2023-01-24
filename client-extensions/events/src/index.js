import React from "react";
import ReactDOM from "react-dom";
import AppComponent from "./AppComponent";
const ELEMENT_ID = "event-communication";
export class CustomElement extends HTMLElement {
    connectedCallback() {
        const root = this;
        ReactDOM.render(React.createElement(AppComponent, { elementId: ELEMENT_ID, root: root }), root);
    }
}
if (customElements.get(ELEMENT_ID)) {
    console.info(`Skipping registration for <${ELEMENT_ID}> (already registered)`);
}
else {
    customElements.define(ELEMENT_ID, CustomElement);
}
//# sourceMappingURL=index.js.map