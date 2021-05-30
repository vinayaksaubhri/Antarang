import React from 'react';
import { View, Text } from 'react-native';
import { Heading, HeadingText, RecentTransactionTextContainer, RecentTransactionView } from '../../style/dashboard';
import TransactionText from './TransactionText';

const RecentTransactions = ({ headingText, ActivityText, BorrowedText, DateText, Transaction }) => {
  return (
    <RecentTransactionView>
      <TransactionText heading="Activity" headingText={ActivityText} />
      <TransactionText heading="Amount Borrowed" headingText={BorrowedText} />
      <TransactionText heading="Date" headingText={DateText} />
      <TransactionText heading="Transaction ID" headingText={Transaction} />
    </RecentTransactionView>
  );
};

export default RecentTransactions;
