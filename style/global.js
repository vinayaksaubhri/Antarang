import styled from 'styled-components';
import Constants from 'expo-constants';
import { Color } from './color';

export const Global_container = styled.View`
  padding-top: ${Constants.statusBarHeight}px;
  flex: 1;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const Heading = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${Color.Black};
  align-self: center;
`;

export const ButtonView = styled.View`
  width: 86%;
  height: 55px;
  background: ${Color.Blue};
  border-radius: 8px;
  justify-content: center;
  align-self: center;
`;
export const ButtonText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: ${Color.White};
  align-self: center;
`;
