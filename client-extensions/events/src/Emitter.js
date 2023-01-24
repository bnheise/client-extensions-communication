import React, { useCallback } from 'react';
import { EVENT_NAME } from './constants';
import { getLiferay } from './liferay';
const Emitter = () => {
    console.log("EMIETTER");
    const clickHandler = useCallback(() => {
        getLiferay().fire(EVENT_NAME, "The button was clicked");
    }, []);
    return (React.createElement("button", { onClick: clickHandler }, "Click me."));
};
export default Emitter;
//# sourceMappingURL=Emitter.js.map