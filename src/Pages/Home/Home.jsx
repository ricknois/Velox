import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { AdBanner } from '../../global';
import { Container, SubContainer } from './style';
import {
  Timer,
  Results,
  Speedometer,
  RejectedPermissions,
} from '../../Components';

export default function Home() {
  const [service, setService] = useState(false);
  const [permission, setPermission] = useState(false);

  const handleGpsStart = async () => {
    await Location.enableNetworkProviderAsync();
    return setService(true);
  };

  const handlePermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    status === 'granted' ? setPermission(true) : setPermission(false);
  };

  useEffect(() => {
    handleGpsStart();
    handlePermission();
  }, []);
  if (!service || !permission) {
    return (
      <RejectedPermissions
        permission={permission}
        service={service}
        handleGpsStart={handleGpsStart}
        handlePermission={handlePermission}
      />
    );
  }
  return (
    <Container>
      <Speedometer />
      <Timer />
      <SubContainer>
        <Results />
      </SubContainer>
      <AdBanner />
    </Container>
  );
}
