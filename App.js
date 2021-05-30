import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Role from './src/Screen/Role';
import Personal_details from './src/Screen/Personal_details';
import OTP from './src/Screen/OTP';
import Cart from './src/Screen/Cart';
import Navigation from './src/Components/Navigation';
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      {/* <Role /> */}
      {/* <Personal_details /> */}
      {/* <OTP /> */}
      {/* <Navigation /> */}
      <Cart />
    </>
  );
}
