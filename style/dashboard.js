import styled from 'styled-components/native';
import { Color } from './color';
import Constants from 'expo-constants';

export const Dashboard_container = styled.View`
  padding-top: ${Constants.statusBarHeight}px;
  flex: 1;
`;
export const Profile_container = styled.View`
  flex-direction: row;
  margin: 20px;
`;
export const Profile_Text_container = styled.View`
  margin-left: 10px;
`;
export const Profile_img = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 50px;
`;
export const Profile_name_black = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: ${Color.Black};
`;
export const Ration_number_black = styled.Text`
  font-weight: 300;
  font-size: 14px;
  color: ${Color.Black};
`;
export const Profile_name_white = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: ${Color.White};
`;
export const Ration_number_white = styled.Text`
  font-weight: 300;
  font-size: 14px;
  color: ${Color.White};
`;
export const Card_container = styled.View`
  padding-left: 20;
`;
export const Card_blue = styled.View`
  height: 113px;
  width: 250px;
  background: ${Color.Blue};
  border-radius: 8px;
  margin-right: 20px;
  justify-content: space-evenly;
  padding: 15px;
  padding-left: 21px;
`;
export const Card_orange = styled.View`
  height: 113px;
  width: 250px;
  background: ${Color.Orange};
  border-radius: 8px;
  margin-right: 20px;
  justify-content: space-evenly;
  padding: 15px;
  padding-left: 21px;
`;
export const Title = styled.Text`
  font-weight: 500;
  font-size: 12px;
  color: ${Color.White};
`;
export const Amount = styled.Text`
  font-weight: 500;
  font-size: 28px;
  color: ${Color.White};
`;
export const CardDes = styled.Text`
  font-weight: normal;
  font-size: 5px;
  color: ${Color.White};
`;
export const TitleText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: ${Color.Black};
  padding-left: 25px;
  margin-top: 20px;
`;
export const UtilitesContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 55px;
  margin-bottom: 20px;
`;
export const IconContainer = styled.View`
  flex-direction: column;
`;
export const Icon = styled.View`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  background: ${Color.LightBlue};
  border-radius: 8px;
  margin-right: 50px;
  margin-top: 40px;
`;
export const Icon_Text = styled.Text`
  font-weight: 500;
  font-size: 10px;
  color: ${Color.Black};
  margin-left: 5px;
  margin-top: 5px;
`;
export const RecentTransactionContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding-left: 25px;
  margin-top: 12px;
`;
export const RecentTransactionView = styled.View`
  width: 323px;
  height: 120px;
  padding-left: 20px;
  padding-top: 15px;
  /* padding-bottom: 25px; */
  flex-wrap: wrap;
  background: ${Color.White};
  border-radius: 8px;
  margin-bottom: 15px;
`;
export const Heading = styled.Text`
  font-weight: normal;
  font-size: 8px;
  color: ${Color.Grey};
`;
export const HeadingText = styled.Text`
  margin-top: 1px;
  font-weight: 500;
  font-size: 12px;
  color: ${Color.Black};
`;
export const RecentTransactionTextContainer = styled.View`
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 25px;
  margin-right: 80px;
`;
export const Transaction = styled.View`
  background: ${Color.LightGrey};
  flex: 1;
`;
