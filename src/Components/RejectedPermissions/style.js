import styled from 'styled-components/native';
import { theme } from '../../global';

export const Container = styled.View`
  flex: 1;
  margin: 10px;
`;

export const AdviceContainer = styled.View`
  flex: 2;
  justify-content: center;
`;
export const Advice = styled.Text`
  font-size: 25px;
  color: ${theme.colors.primary};
  text-align: center;
  font-family: ${theme.fonts.title700};
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const ButtonContainer = styled.View`
  max-height: 50px;
  border-radius: 5px;
  /* padding: 20px; */
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: ${theme.colors.secondary30};
`;

export const ButtonText = styled.Text`
  font-family: ${theme.fonts.title500};
  font-size: 15px;
  text-align: center;
`;
