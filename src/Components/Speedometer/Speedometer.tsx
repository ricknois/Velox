import * as Location from 'expo-location';
import getDistance from 'geolib/es/getDistance';
import React, { useContext, useEffect, useState } from 'react';
import storeContext from '../../Context/context';
import { Container, Speed } from './style';

export default function Speedometer() {
  const [speed, setSpeed] = useState(0);
  const [location, setLocation] = useState(0);
  const [initialPoint, setInitialPoint] = useState({});

  const {
    isActive,
    setIsActive,
    done,
    setDone,
    setStartTime,
    setClear,
    setDistance,
  } = useContext(storeContext);

  const handleDistance = type => {
    if (type === 'start') {
      setInitialPoint(location);
    }
    if (type === 'finish') {
      const { latitude } = location;
      const { longitude } = location;
      const result = getDistance(
        { latitude: initialPoint.latitude, longitude: initialPoint.longitude },
        { latitude, longitude }
      );
      setDistance(result);
    }
  };

  const handleStop = () => {
    if (speed <= 2 && !done) {
      setIsActive(false);
      setClear(true);
    }
    if (speed >= 3 && !done) {
      setIsActive(true);
      setClear(false);
    }
    if (speed >= 100 && !done) {
      setIsActive(false);
      setDone(true);
      handleDistance('finish');
    }
  };

  const handlePositionWatch = async () => {
    await Location.watchPositionAsync(
      {
        accuracy: 2,
        timeInterval: 0,
        distanceInterval: 0,
      },
      position => {
        setLocation(position.coords);
      }
    );
  };

  useEffect(() => {
    handlePositionWatch();
  }, []);

  useEffect(() => {
    setStartTime(Date.now());
    handleDistance('start');
  }, [isActive]);

  useEffect(() => {
    if (location) {
      const formatedSpeed = (location.speed * 3.6).toFixed(0);
      setSpeed(formatedSpeed);
      handleStop();
    }
  }, [location]);

  return (
    <Container>
      <Speed Value={speed} testID="speedometer">{`${speed} km/h`}</Speed>
    </Container>
  );
}
