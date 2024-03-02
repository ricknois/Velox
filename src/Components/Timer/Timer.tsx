import React, { useEffect, useContext } from 'react';
import { Time, Container } from './style';
import storeContext from '../../Context/context';

export default function Timer() {
  const { isActive, clear, startTime, counter, setCounter } =
    useContext(storeContext);

  useEffect(() => {
    let intervalId;

    if (clear) {
      setCounter('0:00');
    }

    if (isActive) {
      intervalId = setInterval(() => {
        const time = Date.now() - startTime;
        const newCounter = String((time / 1000).toFixed(2)).replace('.', ':');
        setCounter(newCounter);
      }, 10);
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter, clear]);

  return (
    <Container>
      <Time>{`${counter}`}</Time>
    </Container>
  );
}
