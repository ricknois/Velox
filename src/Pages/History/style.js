import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../global';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  margin-top: 30px;
  margin-bottom: 60px;
`;

export const Content = styled.View`
  margin-bottom: 10px;
  margin-right: 20px;
  margin-left: 20px;
  padding: 30px;
  background-color: ${theme.colors.secondary30};
  border-radius: 5px;
`;

export const TextContainer = styled.View`
  flex-direction: row;
`;

export const Label = styled.Text`
  font-family: ${theme.fonts.title500};
  font-size: ${height * 0.022}px;
  color: ${theme.colors.secondary40};
`;

export const Result = styled.Text`
  font-family: ${theme.fonts.title700};
  font-size: ${height * 0.022}px;
  color: ${theme.colors.secondary100};
`;

export const Date = styled.Text`
  position: absolute;
  bottom: 5px;
  right: 10px;
  font-size: ${height * 0.018}px;
`;

export const AdviceContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Advice = styled.Text`
  font-size: ${width * 0.05}px;
  color: ${theme.colors.level1};
  font-family: ${theme.fonts.text400};
`;
