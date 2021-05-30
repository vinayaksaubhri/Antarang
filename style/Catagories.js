import styled from 'styled-components/native';
import { Color } from './color';
export const ButtonView = styled.View`
  width: 86%;
  height: 55px;
  background: ${Color.Blue};
  border-radius: 8px;
  flex-direction: row;
`;

export const ItemText = styled.Text`
  font-weight: normal;
  font-size: 8px;
  color: ${Color.White};
`;
export const PriceText = styled.Text`
  font-weight: 500;
  font-size: 12px;
  color: ${Color.White};
`;
