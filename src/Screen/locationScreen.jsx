import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Global_container, Heading } from '../../style/global';
import AntarangLogo from '../../assets/Svg/AntarangLogo';
import LocationSvg from '../../assets/Svg/LocationSvg';
import { LocationText, LocationDes, LogoName, LogoContainer, TextContainer } from '../../style/locationPage';
import Button from '../Components/Button';
import DontataSvg from '../../assets/Svg/DontateSvg';

const locationScreen = () => {
  return (
    <>
      <Global_container>
        <Heading>Welcome To</Heading>
        <LogoContainer>
          <AntarangLogo />
          <LogoName>Antarang</LogoName>
        </LogoContainer>
        <LocationSvg />
        <TextContainer>
          <LocationText>Allow your location</LocationText>
          <LocationDes>
            We will need your location so that right govt {'\n'}schemes can be applied to your profile
          </LocationDes>
        </TextContainer>
        <Button Title="Use my current location" />
      </Global_container>
    </>
  );
};

export default locationScreen;
