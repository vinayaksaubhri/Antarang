import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Language from './src/Screen/Language';
import Recipt from './src/Screen/Recipt';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Language />
      {/* <Recipt /> */}
    </>
  );
}
