import React, { useEffect, useState } from 'react';
import { PARAM_UPDATE, MESSAGE } from '../util/constants';
import { getLiferay } from '../util/liferay';

const DEFAULT_MESSAGE = "No message yet"

const Receiver = () => {
  const params = new URLSearchParams(window.location.search);
  const [message, setMessage] = useState(params.get(MESSAGE) || DEFAULT_MESSAGE); // Check if param is already set. If not, provide default message.

  useEffect(() => {
    getLiferay().on(PARAM_UPDATE, () => {
      const search = window.location.search;
      const params = new URLSearchParams(search);
      const message = params.get(MESSAGE);

      if (message) setMessage(message);
    })
  }, []);


  return (
    <div>{message}</div>
  )
}

export default Receiver;