import styled from 'styled-components';
import { Color } from './color';

export const Tag = styled.View`
  flex: 1;
  display: flex;
  padding-top: 20px;
  color: ${Color.White};
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-left: 22px;
  margin-top: 10px;
  color: ${Color.Black};
`;

export const UpperBox = styled.View`
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
  padding-top: 30px;
  color: ${Color.White};
  flex-direction: row;
  overflow: hidden;
`;

export const Box = styled.View`
  width: 150px;
  height: 100px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${Color.Grey};
  color: ${Color.White};
  margin: 7px;
  flex-direction: row;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  margin-left: 18px;
  margin-top: 18px;
`;
export const SubTitlebar = styled.Text`
  font-size: 12px;
  margin-left: 18px;
  margin-top: 4px;
`;
