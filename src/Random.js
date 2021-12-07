import React, { useState } from 'react';
import InteractiveView from './InteractiveView';

const Random = () => {
  const [randomNum, setRandomNum] = useState(0);
  const onRandomiseHandler = () => {
    setRandomNum(Math.floor(Math.random() * 1000));
  };
  return (
    <InteractiveView
      value={randomNum}
      onAction={onRandomiseHandler}
      actionText="Random NUmber"
    />
  );
};

export default Random;
