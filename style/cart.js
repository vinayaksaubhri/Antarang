import styled from 'styled-components';
import { Color } from './color';

export const Upper_box = styled.View`
  flex: 1;
  flex-wrap: wrap;
  background-color: #ebf4ff;
  align-items: center;
  justify-content: space-around;
  align-content: center;
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

export const Rice_view = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Header = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  color: ${Color.Black};
`;

export const Sub_header = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 8px;
  color: #b8b8b8;
`;

export const Item_view = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Item_box = styled.View`
  width: 141px;
  height: 42px;
  border: 1px solid #b8b8b8;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin: 2%;
  background-color: ${Color.White};
`;

export const Item_text = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  color: ${Color.Black};
`;

export const Lower_box = styled.View`
  flex: 2;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  padding-bottom: 25%;
`;

export const Lower_header = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: ${Color.Black};
`;

export const Cart_box = styled.View`
  width: 323px;
  height: 150px;
  border-radius: 8px;
  border: 1px solid #d9d9d9;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Bag = styled.View`
  justify-content: space-evenly;
`;
export const Bag_detail = styled.View`
  display: flex;
  justify-content: space-evenly;
`;

export const Modal_view = styled.View`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${Color.White};
  border-radius: 10;
  margin-top: 90%;
`;

export const Quantity_view = styled.View`
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;
`;

export const Pay_view = styled.View`
  width: 322px;
  height: 45px;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Pay_inner = styled.View`
  flex-direction: row;
`;
