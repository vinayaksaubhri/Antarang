import styled from 'styled-components';
import { Color } from './color';

export const Upper_box = styled.View`
  flex: 1;
  margin-top: 30;
  flex-wrap: wrap;
`;

export const Header = styled.Text`
  font-style: normal;
  font-weight: bold;
  margin-left: 35%;
  top: 64px;
  font-size: 16px;
  color: ${Color.Black};
`;

export const Sub_header = styled.Text`
  margin-left: 7%;
  top: 117px;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: ${Color.Black};
`;

export const Input_box = styled.View`
  flex: 2;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-bottom: 20%;
`;

export const Name = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  left: 5%;
  padding: 2%;
  color: ${Color.Black};
`;

export const Input_name = styled.TextInput`
  width: 322px;
  height: 45px;
  left: 25px;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
`;

export const Bottom_box = styled.View`
  flex: 2;
  flex-wrap: wrap;
  background-color: pink;
  justify-content: space-around;
  padding-bottom: 15%;
`;

export const Bottom_text = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  margin-left: 9%;
  color: ${Color.Black};
`;

export const Donate_button = styled.View`
  width: 86%;
  height: 55px;
  align-items: center;
  justify-content: center;
  left: 57%;
  background: #0172ff;
  border-radius: 6px;
`;

export const Donate_now = styled.Text`
  color: white;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
`;
