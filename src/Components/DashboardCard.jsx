import React from 'react';
import { View, Text } from 'react-native';
import { Amount, Card_blue, Card_orange, CardDes, Title } from '../../style/dashboard';

const DashboardCard = ({ color, title = '', amount = '', Des = '' }) => {
  if (color === 'Blue') {
    return (
      <Card_blue>
        <Title>{title}</Title>
        <Amount>{amount}</Amount>
        <CardDes>{Des}</CardDes>
      </Card_blue>
    );
  } else {
    return (
      <Card_orange>
        <Title>{title}</Title>
        <Amount>{amount}</Amount>
        <CardDes>{Des}</CardDes>
      </Card_orange>
    );
  }
};

export default DashboardCard;
