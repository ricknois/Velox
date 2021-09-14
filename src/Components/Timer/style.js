import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../global';

const { height } = Dimensions.get('window');

export const Container = styled.View`
  align-items: center;
  margin-bottom: ${height * 0.15}px;
`;
export const Time = styled.Text`
  font-size: ${height * 0.08}px;
  color: ${theme.colors.level1};
`;
