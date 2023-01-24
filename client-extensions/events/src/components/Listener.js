import React, { useEffect, useState } from 'react';
import { EVENT_NAME } from '../util/constants';
import { getLiferay } from '../util/liferay';
const Listener = () => {
    const [message, setMessage] = useState("No message yet");
    useEffect(() => {
        getLiferay().on(EVENT_NAME, (payload) => {
            setMessage(payload.details[0]);
        });
    }, []);
    return (React.createElement("div", null, message));
};
export default Listener;
//# sourceMappingURL=Listener.js.map