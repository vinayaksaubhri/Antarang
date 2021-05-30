import React from 'react';

import { Global_container } from '../../style/global';
import { Upper_flex, Lower_flex, Title_heading, Flex_container } from '../../style/Catergory';
import Cat_Box from '../Components/Cat_box';
import ProfileName from '../Components/ProfileName';
import Search from '../Components/Search';
import { TitleText } from '../../style/dashboard';
import Button_catagories from '../Components/Button_catagories';
import { View } from 'react-native';
import Flour from '../../assets/Svg/Flour';
import Pluses from '../../assets/Svg/Pluses';
import Rice from '../../assets/Svg/Rice';
import Salt from '../../assets/Svg/Salt';
import Oils from '../../assets/Svg/Oils';
import Spices from '../../assets/Svg/Spices';
import Dairy from '../../assets/Svg/Dairy';
import Bevereges from '../../assets/Svg/Beverages';
import Mask from '../../assets/Svg/Mask';
import { TouchableOpacity } from 'react-native';

const Categories = (props) => {
  return (
    <Global_container>
      <Upper_flex>
        <ProfileName color="white" />
        <Title_heading>What do you want to buy?</Title_heading>
        <Search />
      </Upper_flex>
      <Lower_flex>
        <TitleText>Categories</TitleText>
        <Flex_container>
          <Cat_Box Title_Name="Flour" Icon_name={<Flour />} />
          <Cat_Box Title_Name=" Pulses" Icon_name={<Pluses />} />
          <Cat_Box Title_Name="Rice" Icon_name={<Rice />} />
          <Cat_Box Title_Name="Salt & Sugar" Icon_name={<Salt />} />
          <Cat_Box Title_Name="Oils" Icon_name={<Oils />} />
          <Cat_Box Title_Name="Spices" Icon_name={<Spices />} />
          <Cat_Box Title_Name="Dairy Products" Icon_name={<Dairy />} />
          <Cat_Box Title_Name="Beverages" Icon_name={<Bevereges />} />
          <Cat_Box Title_Name="Mask&Santizers" Icon_name={<Mask />} />
        </Flex_container>
      </Lower_flex>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Cart')}>
          <Button_catagories />
        </TouchableOpacity>
      </View>
    </Global_container>
  );
};

export default Categories;
