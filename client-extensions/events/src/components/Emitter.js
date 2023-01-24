import React, { useCallback } from 'react';
import { EVENT_NAME } from '../util/constants';
import { getLiferay } from '../util/liferay';
const Emitter = () => {
    const clickHandler = useCallback(() => {
        getLiferay().fire(EVENT_NAME, "The button was clicked");
    }, []);
    return (React.createElement("button", { onClick: clickHandler }, "Click me."));
};
export default Emitter;
//# sourceMappingURL=Emitter.js.map