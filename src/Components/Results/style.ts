import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../global';

const { height } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  justify-content: space-around;
  margin: 10px;
`;

export const TextContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${height * 0.03}px;
  color: ${theme.colors.secondary40};
  margin-right: 10px;
`;

export const Subtitle = styled.Text`
  font-size: ${height * 0.035}px;
  color: ${theme.colors.secondary100};
`;

export const ButtonContainer = styled.View`
  flex: 1;
  flex-direction: row-reverse;
  align-items: flex-end;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${props => props.theme};
  margin-left: 10px;
  width: ${height * 0.04}px;
  height: ${height * 0.04}px;
  border-radius: ${(height * 0.04) / 2}px;
  justify-content: center;
  align-items: center;
`;
