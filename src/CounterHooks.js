import React, { useState, useContext } from 'react';
import { ThemeContext } from './App';
// Function Hooks
// use props,
export default function CounterHooks({ initialCount }) {
  //React Hooks useState
  console.log('Render Counter Hooks.');
  const [count, setCount] = useState(initialCount);
  const style = useContext(ThemeContext);
  return (
    <div>
      <button style={style} onClick={() => setCount((prevCount) => prevCount - 1)}>
        {' '}
        -
      </button>
      <span>{count}</span>
      <button style={style} onClick={() => setCount((prevCount) => prevCount + 1)}>
        {' '}
        +{' '}
      </button>
    </div>
  );
}
