import React, { useState } from 'react';
import InteractiveView from './InteractiveView';
export default function Counter() {
  const [count, setCount] = useState(0);
  const onIncrementHandler = () => setCount((c) => c + 1);

  return (
    <InteractiveView
      value={count}
      onAction={onIncrementHandler}
      actionText="Increment"
    />
  );
}
