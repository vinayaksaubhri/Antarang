import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import {
  Card,
  Profile_img,
  Profile_name,
  Ration_number,
  RecentTransactionContainer,
  TitleText,
  Transaction,
  UtilitesContainer,
} from '../../style/dashboard';
import { Global_container } from '../../style/global';
import DashboardCard from '../Components/DashboardCard';
import RecentTransactions from '../Components/RecentTransactions';
import Utilites_icon from '../Components/UtilitesIcon';

const dashBoardScreen = () => {
  return (
    <ScrollView>
      <Profile_img source={require('../../assets/Images/Profile_image.png')} />
      <Profile_name>Laxmi Rathod</Profile_name>
      <Ration_number>4590547888</Ration_number>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
      </ScrollView>
      <TitleText>Manage Utilites</TitleText>
      <UtilitesContainer>
        <Utilites_icon />
        <Utilites_icon />
        <Utilites_icon />
        <Utilites_icon />
        <Utilites_icon />
        <Utilites_icon />
      </UtilitesContainer>
      <Transaction>
        <TitleText>Manage Utilites</TitleText>
        <RecentTransactionContainer>
          <RecentTransactions />
          <RecentTransactions />
          <RecentTransactions />
          <RecentTransactions />
        </RecentTransactionContainer>
      </Transaction>
    </ScrollView>
  );
};

export default dashBoardScreen;
