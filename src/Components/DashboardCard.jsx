import React from 'react';
import { View, Text } from 'react-native';
import { Amount, Card, CardDes, Title } from '../../style/dashboard';

const DashboardCard = () => {
  return (
    <Card>
      <Title>Total Amount Borrowed</Title>
      <Amount>₹ 506.00</Amount>
      <CardDes>
        This is the total amount of money that you have spent using this app. Do not hesitate to buy supplies bills. All
        payments are interest free and subsidized by the Government of India. There is no limit to amount borrowed.
      </CardDes>
    </Card>
  );
};

export default DashboardCard;
