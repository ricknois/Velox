import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Container, Content } from './style';

export default function RowHiddenButton({ onPress }) {
  return (
    <Container onPress={onPress}>
      <Content>
        <Ionicons name="trash-outline" size={24} color="black" />
      </Content>
    </Container>
  );
}
