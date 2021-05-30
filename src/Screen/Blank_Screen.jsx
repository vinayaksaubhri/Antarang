import React from 'react';
import { View, Text } from 'react-native';
import Flour from '../../assets/Svg/Flour';
import Button_catagories from '../Components/Button_catagories';

const Blank_Screen = () => {
  return (
    <View>
      <Button_catagories />
      <Flour />
    </View>
  );
};

export default Blank_Screen;
