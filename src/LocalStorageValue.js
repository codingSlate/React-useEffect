import React, { useState, useEffect } from 'react';
const LocalStorageValue = () => {
  const [counter, setCounter] = useState(0);

  // useEffect(()=>{
  //   document.LocalStorage.
  // })

  const onIncrementHandler = () => {
    setCounter((c) => c + 1);
  };
  const onSaveLocalHandler = () => {
    localStorage.setItem('myCounterValue', counter)
  };
  return (
    <>
      <p>Load number : {counter}</p>
      <button onClick={onIncrementHandler}>Increse Number</button>
      <button onClick={onSaveLocalHandler}>Store Number</button>
    </>
  );
};
export default LocalStorageValue;
