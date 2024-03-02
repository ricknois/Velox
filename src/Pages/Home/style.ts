import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../global';

const { height } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const SubContainer = styled.View`
  flex: 1;
  margin-bottom: ${height * 0.1}px;
  margin-left: 5%;
  margin-right: 5%;
  border-radius: 20px;
  background-color: ${theme.colors.secondary30};
`;
