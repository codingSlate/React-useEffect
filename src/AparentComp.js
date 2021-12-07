import React, { useState } from 'react';
import UseEffectCleanUp from './UseEffectCleanUp';
const AparentComp = () => {
  const [show, setShow] = useState(false);
  const onClickHandler = () => {
    setShow((a) => !a);
  };
  return (
    <>
      <button type="button" onClick={onClickHandler} aria-pressed={!show}>
        Show/ Hide
      </button>
      {show && 
      <UseEffectCleanUp />
      }
    </>
  );
};
export default AparentComp;
