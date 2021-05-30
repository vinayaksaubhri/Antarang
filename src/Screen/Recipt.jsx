import React from 'react';
import { Image } from 'react-native';
import { Global_container } from '../../style/global';
import { Upper_flex, Lower_flex } from '../../style/recipt';
import Button from '../Components/Button';

const Recipt = () => {
  return (
    <Global_container>
      <Upper_flex></Upper_flex>
      <Lower_flex>
        <Image source={require('../../assets/Recipt.png')} />
      </Lower_flex>
      <Button Title="Done" />
    </Global_container>
  );
};

export default Recipt;
