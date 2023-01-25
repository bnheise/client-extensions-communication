import React, { useCallback } from 'react';
import { useSearchParams } from "react-router-dom";
import { MESSAGE, PARAM_UPDATE } from '../util/constants';
import { getLiferay } from '../util/liferay';

const Sender = () => {
  const [searchParams, setSeachParams] = useSearchParams();

  const clickHandler = useCallback(() => {
    setSeachParams({ [MESSAGE]: "The button was clicked.", ...searchParams });
    getLiferay().fire(PARAM_UPDATE, {});
  }, []);

  return (
    <button onClick={clickHandler}>Click me.</button>
  )
}

export default Sender