import React from 'react';
import { View, Text } from 'react-native';
import { Heading, HeadingText, RecentTransactionTextContainer } from '../../style/dashboard';

const TransactionText = () => {
  return (
    <RecentTransactionTextContainer>
      <Heading>Activity</Heading>
      <HeadingText>Bought Supplies</HeadingText>
    </RecentTransactionTextContainer>
  );
};

export default TransactionText;
