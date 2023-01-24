import { COMPONENT } from "../util/constants";

export default class AppContext {
  readonly elementId: string;
  private rootReactElement: Element | null;
  private componentName: string | null;
  private rootRemoteAppElement: Element | null;

  constructor(elementId: string) {
    this.elementId = elementId;
    this.rootReactElement = null;
    this.componentName = null;
    this.rootRemoteAppElement = null;
  }

  setRootReactElement(rootElement: Element) {
    this.rootReactElement = rootElement;
  }

  getRootReactElement(): Element {
    if (this.rootReactElement === null)
      throw new Error("Root react element not set");
    return this.rootReactElement;
  }

  private getRootRemoteAppElement(): Element {
    if (this.rootRemoteAppElement === null) {
      let element = this.getRootReactElement();
      while (element.tagName !== this.elementId.toUpperCase()) {
        if (element.parentElement === null) {
          throw new Error(
            `Could not find element with tag name ${this.elementId}`
          );
        }
        element = element.parentElement;
      }

      this.rootRemoteAppElement = element;
    }

    return this.rootRemoteAppElement;
  }

  private getAttribute(key: string, val: string | null): string {
    if (val === null) {
      const root = this.getRootRemoteAppElement();
      val = root.getAttribute(key);
    }

    if (val === null) {
      throw new Error(
        `Element ${this.elementId} did not have an attribute called ${key}`
      );
    }

    return val;
  }

  getComponentName(): string {
    this.componentName = this.getAttribute(COMPONENT, this.componentName);
    return this.componentName;
  }
}
