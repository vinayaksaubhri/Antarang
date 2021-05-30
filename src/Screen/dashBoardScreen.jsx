import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Electric from '../../assets/Svg/Electric';
import Gas from '../../assets/Svg/Gas';
import Home from '../../assets/Svg/Home';
import Router_svg from '../../assets/Svg/Router_svg';
import Supplies from '../../assets/Svg/Supplies';
import {
  Dashboard_container,
  RecentTransactionContainer,
  TitleText,
  Transaction,
  UtilitesContainer,
  Utilities,
} from '../../style/dashboard';
import DashboardCard from '../Components/DashboardCard';
import ProfileName from '../Components/ProfileName';
import RecentTransactions from '../Components/RecentTransactions';
import Utilites_icon from '../Components/UtilitesIcon';

const dashBoardScreen = (props) => {
  return (
    <Dashboard_container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileName color="black" />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingLeft: 20 }}>
          <DashboardCard
            color="Blue"
            title="Amount To Be Paid Back"
            amount="₹ 311.00"
            Des="This is the amount to be paid back. You may pay this in installments of your choice. There is no interest or fees for your payment. Payments can be made up to 2 years of salaried employment of the card holder/head of household."
          />
          <DashboardCard
            color="Orange"
            title="Total Amount Borrowed"
            amount="₹ 506.00"
            Des="This is the total amount of money that you have spent using this app. 
Do not hesitate to buy supplies bills. All payments are interest free and                            subsidized by the Government of India. There is no limit to amount borrowed."
          />
          <DashboardCard
            color="Blue"
            title="Amount Contributed To You"
            amount="₹ 110.00"
            Des="This is the amount paid by the government towards your borrowing."
          />
          <DashboardCard
            color="Orange"
            title="Amount Cleared By You"
            amount="₹ 85.00"
            Des="This is the amount you have paid to cleared your borrowing."
          />
        </ScrollView>

        <TitleText>Manage Utilites</TitleText>
        <UtilitesContainer>
          <TouchableOpacity onPress={() => props.navigation.navigate('Catergories')}>
            <Utilites_icon App_icon={<Supplies />} props />
          </TouchableOpacity>
          <Utilites_icon App_icon={<Electric />} />
          <Utilites_icon App_icon={<Gas />} />
          <Utilites_icon App_icon={<Electric />} />
          <Utilites_icon App_icon={<Router_svg />} />
          <Utilites_icon App_icon={<Home />} />
        </UtilitesContainer>

        <Transaction>
          <TitleText>Manage Utilites</TitleText>
          <RecentTransactionContainer>
            <RecentTransactions
              ActivityText="Bought Supplies"
              BorrowedText="₹ 85.00"
              DateText="Friday, 28th May 2021"
              Transaction="ZKH33GLMRV"
            />
            <RecentTransactions
              ActivityText="Paid Phone Bill"
              BorrowedText="₹ 67.00"
              DateText="Friday, 27th May 2021"
              Transaction="APO7992TPQ"
            />
            <RecentTransactions
              ActivityText="Bought Supplies"
              BorrowedText="₹ 85.00"
              DateText="Friday, 28th May 2021"
              Transaction="ZKH33GLMRV"
            />
            <RecentTransactions
              ActivityText="Paid Phone Bill"
              BorrowedText="₹ 67.00"
              DateText="Friday, 27th May 2021"
              Transaction="APO7992TPQ"
            />
          </RecentTransactionContainer>
        </Transaction>
      </ScrollView>
    </Dashboard_container>
  );
};

export default dashBoardScreen;
