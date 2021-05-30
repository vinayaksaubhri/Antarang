import React from 'react';
import { TouchableOpacity } from 'react-native';

import Home from '../../assets/Svg/Home';
import { Icon, IconContainer, Icon_Text } from '../../style/dashboard';

const Utilites_icon = ({ App_icon }) => {
  return (
    <IconContainer>
      <Icon>{App_icon}</Icon>
      <Icon_Text>Supplies</Icon_Text>
    </IconContainer>
  );
};

export default Utilites_icon;
