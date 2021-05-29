import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ButtonView, ButtonText } from '../../style/global';

const Button = ({ Title }) => {
  return (
    <TouchableOpacity>
      <ButtonView>
        <ButtonText>{Title}</ButtonText>
      </ButtonView>
    </TouchableOpacity>
  );
};

export default Button;
 