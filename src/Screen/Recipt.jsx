import React from 'react';
import { Image } from 'react-native';
import { Global_container } from '../../style/global';
import { Upper_flex, Lower_flex, Recipt_container } from '../../style/recipt';
import Button from '../Components/Button';
import ProfileName from '../Components/ProfileName';

const Recipt = () => {
  return (
    <Global_container>
      <ProfileName color="black" />
      <Recipt_container>
        <Image source={require('../../assets/Images/Recipt.png')} resizeMode="center" />
      </Recipt_container>
      <Button Title="Done" />
    </Global_container>
  );
};

export default Recipt;
