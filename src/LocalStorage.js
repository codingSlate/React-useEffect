import React, { useState, useEffect } from 'react';
const LocalStorage = () => {
  const [counter, setCounter] = useState(0);

  const onIncrementHandler = () => {};
  const onSaveLocalHandler = () => {};
  return (
    <>
      <p>Load number : {counter}</p>
      <button onClick={onIncrementHandler}>Increse Number</button>
      <button onClick={onSaveLocalHandler}>Store Number</button>
    </>
  );
};
export default LocalStorage;
