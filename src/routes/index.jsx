import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Router from './router';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

export default function Routes() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Router />
    </NavigationContainer>
  );
}
