import React, { useState, useEffect } from 'react';
const UseEffectCleanUp = () => {
  const [counter, setCounter] = useState(0);
  const subscribe = () => {
    console.log('subscribe');
  };
  const unsubscribe = () => {
    console.log('unsubscribe');
  };

  useEffect(() => {
    subscribe();

    return () => {
      unsubscribe();
    };
  }, []);

  const onIncrementHandler = () => {
    setCounter((c) => c + 1);
  };

  return (
    <>
      <p>
        To check the checnup function we can see it from ite parent component
        'AparentComp' with show/subscribe, hide/unsubscribe
      </p>
      <p>Load number : {counter}</p>
      <button onClick={onIncrementHandler}>Increse Number</button>
    </>
  );
};
export default UseEffectCleanUp;
