import React, { useContext, useState } from 'react';
import CounterContext from './5-3-context';

const Counter = () => {
  const { count, increase, decrease } = useContext(CounterContext);
  return (
    <h2>
      <button onClick={decrease}>Decrement</button>
      <span className='count'>{count}</span>
      <button onClick={increase}>Increment</button>
    </h2>
  )
}

export default Counter;