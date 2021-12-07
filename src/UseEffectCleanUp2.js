import React, { useState, useEffect } from 'react';
const UseEffectCleanUp = () => {
  const [counter, setCounter] = useState(0);
  const subscribe = (c) => {
    console.log(`subscribe ${c}`);
  };
  const unsubscribe = (c) => {
    console.log(`unsubscribe ${c}`);
  };

  useEffect(() => {
    subscribe(counter);

    return () => {
      unsubscribe(counter);
    };
  }, [counter]);

  const onIncrementHandler = () => {
    setCounter((c) => c + 1);
  };

  return (
    <>
      <p>Load number : {counter}</p>
      <button onClick={onIncrementHandler}>Increse Number</button>
    </>
  );
};
export default UseEffectCleanUp;
