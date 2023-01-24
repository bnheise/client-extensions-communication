import React, { useCallback } from 'react';
import { EVENT_NAME } from '../util/constants';
import { getLiferay } from '../util/liferay';

const Emitter = () => {
  const clickHandler = useCallback(() => {
    getLiferay().fire(EVENT_NAME, "The button was clicked")
  }, []);
  return (
    <button onClick={clickHandler}>Click me.</button>
  )
}

export default Emitter