import React, { useMemo } from "react";
import AppContext from "./context/AppContext";
import Emitter from "./components/Emitter";
import Listener from "./components/Listener";

const getSelectedComponent = (componentName: string) => {
  switch (componentName) {
    case "Emitter":
      return <Emitter />;
    case "Listener":
      return <Listener />;
    default:
      throw new Error("Invalid component name provided");
  }
}

type Props = {
  elementId: string;
  root: HTMLElement;
}

export default function AppComponent({ elementId, root }: Props) {
  const context = useMemo(() => {
    const context = new AppContext(elementId);
    context.setRootReactElement(root);
    return context;
  }, [elementId]);


  return (
    <>
      {getSelectedComponent(context.getComponentName())}
    </>
  );
}
