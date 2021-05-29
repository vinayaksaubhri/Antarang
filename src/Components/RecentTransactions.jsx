import React from 'react';
import { View, Text } from 'react-native';
import { Heading, HeadingText, RecentTransactionTextContainer, RecentTransactionView } from '../../style/dashboard';
import TransactionText from './TransactionText';

const RecentTransactions = () => {
  return (
    <RecentTransactionView>
      <TransactionText />
      <TransactionText />
      <TransactionText />
      <TransactionText />
    </RecentTransactionView>
  );
};

export default RecentTransactions;
