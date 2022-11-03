import React, { useState } from 'react';
import Counter from './5-contextCounter';
import { CounterProvider } from './5-3-context';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  }

  const decrease = () => {
    setCount(count - 1);
  }

  return (
    <div>
      <CounterProvider value={{ count, increase, decrease }}>
        <Counter />
      </CounterProvider>
    </div>
  )
}

export default CounterApp;