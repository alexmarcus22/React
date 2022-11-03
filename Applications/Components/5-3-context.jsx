import React from 'react';
const CounterContext = React.createContext({});
export const CounterProvider = CounterContext.Provider;
export default CounterContext;