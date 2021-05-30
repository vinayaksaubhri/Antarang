import styled from 'styled-components/native';
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
export const Input = styled.TextInput`
  width: 305px;
  height: 40px;
  background-color: ${Color.White};
  border-radius: 6px;
`;

export const Search_view = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${Color.White};
  border-radius: 6px;
`;
