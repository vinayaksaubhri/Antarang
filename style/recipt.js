import styled from 'styled-components';
import { Color } from './color';
import Constants from 'expo-constants';

export const Upper_flex = styled.View`
  background-color: ${Color.White};
`;
export const Recipt_container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const Lower_flex = styled.View`
  height: 100px;
  width: 100px;
  background-color: ${Color.Black};
  justify-content: center;
  align-items: center;
`;
