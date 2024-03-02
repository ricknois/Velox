import React from 'react';
import { Container } from './style';

export default function Button({ onPress, children }) {
  return <Container onPress={() => onPress()}>{children}</Container>;
}
