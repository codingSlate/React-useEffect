import React, { useState, useEffect } from 'react';
const TitleChange = () => {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const onClickHandler = () => {
    setCount((c) => c + 1);
  };
  const onClickHandlerTwo = () => {
    setCountTwo((c) => c + 1);
  };

  useEffect(() => {
    document.title = `React useEffect  :  ${count}`;
    console.log('useEffect title set');
  }, [count]);
  // when state change entire component along with sub components re-rendered
  console.log('Re rendered');
  // document.title = `React useEffect  :  ${count}`;

  return (
    <>
      <p>The increment Number is : {count}</p>
      <button onClick={onClickHandler}>Change 1</button>
      <button onClick={onClickHandlerTwo}>No updating but re-rendering </button>
    </>
  );
};
export default TitleChange;
