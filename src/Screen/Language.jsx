import React from 'react';
import { Tag, Title, UpperBox } from '../../style/Language';
import Button from '../Components/Button';
import Box_lang from '../Components/Box';
import { Global_container } from '../../style/global';
const Language = () => {
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
      <Button Title="Continue" />
    </Global_container>
  );
};

export default Language;
