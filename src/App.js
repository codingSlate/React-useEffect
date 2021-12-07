import React from 'react';
import Counter from './Counter';
import Random from './Random';
import TitleChange from './TitleChange';
import LocalStorageValue from './LocalStorageValue';
import AparentComp from './AparentComp';
import UseEffectCleanUp2 from './UseEffectCleanUp2';
import './style.css';

export default function App() {
  return (
    <div>
      {/* <h3>Reusable component</h3>
      <Counter /> */}
      <hr />
      {/* <Random /> */}
      <hr />
      {/* <h1>Change Document title</h1>
      <TitleChange /> */}
      <hr />
      {/* <h1>Local storage</h1>
      <LocalStorageValue /> */}
      <hr />
      <h1>useEffect Clean up</h1>
      <AparentComp />
      <h4>useEffect Clean up execute every time when dependency updates</h4>
      <UseEffectCleanUp2 />
    </div>
  );
}
