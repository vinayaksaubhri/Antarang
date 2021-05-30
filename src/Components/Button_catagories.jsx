import React from 'react';
import { View, Text } from 'react-native';
import { ButtonView, ItemText, Line, PriceText } from '../../style/Catagories';
import Basket from '../../assets/Svg/Basket';
import { ButtonText } from '../../style/global';
import Arrow from '../../assets/Svg/Arrow';

const Button_catagories = () => {
  return (
    <View style={{ marginTop: 50, marginBottom: 10 }}>
      <ButtonView>
        <View style={{ flex: 1, margin: 13, marginLeft: 35 }}>
          <Basket />
        </View>
        <ButtonText style={{ flex: 3 }}>Your Cart is Empty</ButtonText>
      </ButtonView>
    </View>
  );
};

export default Button_catagories;
