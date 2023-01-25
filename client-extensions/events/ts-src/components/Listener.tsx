import React, { useEffect, useState } from 'react'
import { EVENT_NAME } from '../util/constants';
import { getLiferay } from '../util/liferay';

const Listener = () => {
  const [message, setMessage] = useState("No message yet");

  useEffect(() => {
    getLiferay().on(EVENT_NAME, (payload) => {
      console.log("triggered")
      setMessage(payload.details[0])
    })
  }, []);
  return (
    <div>{message}</div>
  )
}

export default Listener