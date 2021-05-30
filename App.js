import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Role from './src/Screen/Role';
import Personal_details from './src/Screen/Personal_details';
import OTP from './src/Screen/OTP';
import Cart from './src/Screen/Cart';
import Catergories from './src/Screen/Catergories';
import DashBoardScreen from './src/Screen/DashBoardScreen';
import LocationScreen from './src/Screen/LocationScreen';
import Stack_Navigation from './src/Components/Stack_Navigation';
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      {/* <Role /> */}
      {/* <Personal_details /> */}
      {/* <OTP /> */}
      <Stack_Navigation />
      {/* <Cart /> */}
      {/* <Catergories /> */}
      {/* <DashBoardScreen /> */}
      {/* <LocationScreen /> */}
    </>
  );
}
