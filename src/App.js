import React from 'react';
import Counter from './Counter';
import Random from './Random';
import TitleChange from './TitleChange';
import './style.css';

export default function App() {
  return (
    <div>
      <h3>Reusable component</h3>
      <Counter />
      <hr />
      <Random />
      <hr />
      Change Document title
      <TitleChange />
    </div>
  );
}
