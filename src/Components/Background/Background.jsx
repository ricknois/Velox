import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global';

export default function Background({ children }) {
  const { secondary100, secondary80 } = theme.colors;
  return (
    <LinearGradient style={{ flex: 1 }} colors={[secondary80, secondary100]}>
      {children}
    </LinearGradient>
  );
}
