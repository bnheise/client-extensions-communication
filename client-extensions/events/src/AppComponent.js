import React, { useMemo } from "react";
import AppContext from "./context/AppContext";
import Emitter from "./components/Emitter";
import Listener from "./components/Listener";
const getSelectedComponent = (componentName) => {
    switch (componentName) {
        case "Emitter":
            return React.createElement(Emitter, null);
        case "Listener":
            return React.createElement(Listener, null);
        default:
            throw new Error("Invalid component name provided");
    }
};
export default function AppComponent({ elementId, root }) {
    const context = useMemo(() => {
        const context = new AppContext(elementId);
        context.setRootReactElement(root);
        return context;
    }, [elementId]);
    return (React.createElement(React.Fragment, null, getSelectedComponent(context.getComponentName())));
}
//# sourceMappingURL=AppComponent.js.map