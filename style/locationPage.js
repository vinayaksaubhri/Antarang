import styled from 'styled-components';
import { Color } from './color';

export const TextContainer = styled.View`
  align-self: center;
`;
export const LocationText = styled.Text`
  font-weight: bold;
  font-size: 24px;
  color: ${Color.Black};
  align-self: center;
`;
export const LocationDes = styled.Text`
  align-self: center;
  font-weight: normal;
  font-size: 9px;
  color: ${Color.Black};
  text-align: center;
  margin-top: 15px;
`;
export const LogoContainer = styled.View`
  flex-direction: row;
  align-self: center;
  padding-right: 15px;
`;
export const LogoName = styled.Text`
  font-weight: bold;
  font-size: 29px;
  color: ${Color.Black};
  align-self: center;
  margin-left: 17px;
`;
