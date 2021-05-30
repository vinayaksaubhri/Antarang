import React from 'react';
import { TouchableOpacity, Image, View, BackHandler } from 'react-native';
import { Sub_heading, Svg_box, Get_support, Get_text } from '../../style/role';
import { Global_container, Heading } from '../../style/global';
import OrLine from '../../assets/Svg/OrLine';

const Role = (props) => {
  BackHandler.addEventListener('hardwareBackPress', function () {
    return true;
  });
  return (
    <Global_container>
      <Heading>Select your role</Heading>
      <Sub_heading>I would like to...</Sub_heading>
      <Svg_box>
        <TouchableOpacity onPress={() => props.navigation.navigate('Location')}>
          <Image style={{ width: 140, height: 140 }} source={require('../../assets/Images/Get_support.png')} />
        </TouchableOpacity>
        <Get_text>Get Support</Get_text>
      </Svg_box>
      <View style={{ alignSelf: 'center' }}>
        <OrLine />
      </View>
      <Svg_box>
        <TouchableOpacity onPress={() => props.navigation.navigate('Location')}>
          <Image style={{ width: 140, height: 140 }} source={require('../../assets/Images/Donate.png')} />
        </TouchableOpacity>
        <Get_text>Donate</Get_text>
      </Svg_box>
    </Global_container>
  );
};

export default Role;
