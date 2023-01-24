import { COMPONENT } from "./constants";
export default class AppContext {
    constructor(elementId) {
        this.elementId = elementId;
        this.rootReactElement = null;
        this.componentName = null;
        this.rootRemoteAppElement = null;
    }
    setRootReactElement(rootElement) {
        this.rootReactElement = rootElement;
    }
    getRootReactElement() {
        if (this.rootReactElement === null)
            throw new Error("Root react element not set");
        return this.rootReactElement;
    }
    getRootRemoteAppElement() {
        if (this.rootRemoteAppElement === null) {
            let element = this.getRootReactElement();
            while (element.tagName !== this.elementId.toUpperCase()) {
                if (element.parentElement === null) {
                    throw new Error(`Could not find element with tag name ${this.elementId}`);
                }
                element = element.parentElement;
            }
            this.rootRemoteAppElement = element;
        }
        return this.rootRemoteAppElement;
    }
    getAttribute(key, val) {
        if (val === null) {
            const root = this.getRootRemoteAppElement();
            val = root.getAttribute(key);
        }
        if (val === null) {
            throw new Error(`Element ${this.elementId} did not have an attribute called ${key}`);
        }
        return val;
    }
    getComponentName() {
        this.componentName = this.getAttribute(COMPONENT, this.componentName);
        return this.componentName;
    }
}
//# sourceMappingURL=AppContext.js.map