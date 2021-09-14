import styled from 'styled-components/native';
import { theme } from '../../global';

export const Container = styled.TouchableOpacity`
  flex: 1;
  width: 70px;
  margin-bottom: 11px;
  margin-right: 20px;
  margin-left: 20px;
  padding: 20px;
  background-color: ${theme.colors.level6};
  border-radius: 5px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
