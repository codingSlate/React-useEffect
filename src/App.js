import React from 'react';
import Counter from './Counter';
import Random from './Random';
import './style.css';

export default function App() {
  return (
    <div>
      <h3>Reusable component</h3>
      <Counter />
      <Random />
    </div>
  );
}
