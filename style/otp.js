import styled from 'styled-components';
import { Color } from './color';

export const Upper_box = styled.View`
  flex: 1;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-content: center;
`;

export const Header = styled.Text`
  font-style: normal;
  font-weight: bold;
  color: ${Color.Black};
  font-size: 29px;
`;

export const Lower_box = styled.View`
  flex: 2;
  flex-wrap: wrap;
  padding-bottom: 20%;
`;

export const Sub_header = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: ${Color.Black};
  padding: 2%;
`;

export const Input = styled.TextInput`
  width: 322px;
  height: 45px;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
`;

export const Para = styled.Text`
  font-style: normal;
  font-weight: 300;
  font-size: 8px;
  color: ${Color.Black};
`;
