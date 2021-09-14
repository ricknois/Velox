import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../global';

const { height } = Dimensions.get('window');

export const Container = styled.View`
  align-items: center;
  margin-top: ${height * 0.15}px;
  margin-bottom: ${height * 0.15}px;
`;

export const Speed = styled.Text`
  color: ${({ Value }) =>
    Value < 10
      ? theme.colors.level1
      : Value >= 10 && Value < 20
      ? theme.colors.level2
      : Value >= 20 && Value < 50
      ? theme.colors.level3
      : Value >= 50 && Value < 70
      ? theme.colors.level4
      : Value >= 70 && Value <= 90
      ? theme.colors.level5
      : theme.colors.level6};
  font-size: ${height * 0.09}px;
  font-family: 'Rajdhani_700Bold';
`;
