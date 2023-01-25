import React, { useMemo } from "react";
import AppContext from "./context/AppContext";
import Sender from "./components/Sender";
import Receiver from "./components/Receiver";

const getSelectedComponent = (componentName: string) => {
  switch (componentName) {
    case "Sender":
      return <Sender />;
    case "Receiver":
      return <Receiver />;
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
