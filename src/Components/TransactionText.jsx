import React from 'react';
import { View, Text } from 'react-native';
import { Heading, HeadingText, RecentTransactionTextContainer } from '../../style/dashboard';

const TransactionText = ({ heading, headingText }) => {
  return (
    <RecentTransactionTextContainer>
      <Heading>{heading}</Heading>
      <HeadingText>{headingText}</HeadingText>
    </RecentTransactionTextContainer>
  );
};

export default TransactionText;
