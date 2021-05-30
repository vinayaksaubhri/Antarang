import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Tag, Title, UpperBox } from '../../style/Language';
import Button from '../Components/Button';
import Box_lang from '../Components/Box';
import { Global_container } from '../../style/global';
const Language = (props) => {
  return (
    <Global_container>
      <Tag>
        <Title>Choose language </Title>
      </Tag>
      <UpperBox>
        <Box_lang SubTitle_box="English" SubTitlebar_box="" />
        <Box_lang SubTitle_box="English" SubTitlebar_box="Hindi" />
        <Box_lang SubTitle_box="English" SubTitlebar_box="Marathi" />
        <Box_lang SubTitle_box="English" SubTitlebar_box="Malayalam" />
        <Box_lang SubTitle_box="English" SubTitlebar_box="Telugu" />
        <Box_lang SubTitle_box="English" SubTitlebar_box="Tamil" />
        <Box_lang SubTitle_box="English" SubTitlebar_box="Kannada" />
        <Box_lang SubTitle_box="English" SubTitlebar_box="Gujarati" />
        <Box_lang SubTitle_box="English" SubTitlebar_box="Bangla" />
      </UpperBox>
      <TouchableOpacity onPress={() => props.navigation.navigate('Role')}>
        <Button Title="Continue" />
      </TouchableOpacity>
    </Global_container>
  );
};

export default Language;
