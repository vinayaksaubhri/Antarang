import styled from 'styled-components';
import { Color } from './color';

export const Upper_flex = styled.View`
  background-color: ${Color.Blue};
  justify-content: space-evenly;
  flex: 1;
`;
export const Title_heading = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: ${Color.White};
  margin-left: 25px;
`;
export const Lower_flex = styled.View`
  flex: 3;
  background-color: ${Color.White};
`;
export const Flex_container = styled.View`
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

export const Box = styled.View`
  height: 75px;
  width: 80px;
  border-radius: 8px;

  background-color: ${Color.LightBlue};
  margin-bottom: 25px;
  margin-right: 15px;

  justify-content: center;
  align-items: center;
`;
export const Title = styled.Text`
  margin-top: 5px;
  font-size: 10px;
  font-weight: 500;
`;
