import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, Text } from 'react-native';
import Blank_Screen from './src/Screen/Blank_Screen';
import Categories from './src/Screen/Catergories';
import DashBoardScreen from './src/Screen/dashBoardScreen';
import Language from './src/Screen/Language';
import LocationScreen from './src/Screen/locationScreen';
import Recipt from './src/Screen/Recipt';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      {/* <DashBoardScreen /> */}
      {/* <Blank_Screen /> */}
      {/* <LocationScreen /> */}
      <Recipt />
      {/* <Categories /> */}
      {/* <Language /> */}
    </>
  );
}
