import React, { useState } from 'react';
import storeContext from './context';

function Provider({ children }) {
  const [counter, setCounter] = useState('0:00');
  const [isActive, setIsActive] = useState(false);
  const [done, setDone] = useState(false);
  const [clear, setClear] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [distance, setDistance] = useState(0);

  const contextValue = {
    counter,
    setCounter,
    isActive,
    setIsActive,
    done,
    setDone,
    clear,
    setClear,
    startTime,
    setStartTime,
    distance,
    setDistance,
  };

  return (
    <storeContext.Provider value={contextValue}>
      {children}
    </storeContext.Provider>
  );
}

export default Provider;
