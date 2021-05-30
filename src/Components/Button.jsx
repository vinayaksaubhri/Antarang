import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ButtonView, ButtonText } from '../../style/global';

const Button = ({ Title }) => {
  return (
    <ButtonView>
      <ButtonText>{Title}</ButtonText>
    </ButtonView>
  );
};

export default Button;
