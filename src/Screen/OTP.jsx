import React from 'react';
import { View, KeyboardAvoidingView, ScrollView, Platform, TouchableOpacity, BackHandler } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Upper_box, Lower_box, Header, Sub_header, Input, Para } from '../../style/otp';
import Antarang from '../../assets/Svg/AntarangLogo';
import Button from '../Components/Button';
import { Global_container } from '../../style/global';

const OTP = (props) => {
  BackHandler.addEventListener('hardwareBackPress', function () {
    return true;
  });
  return (
    <>
      <Global_container>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
          <ScrollView contentContainerStyle={{ flex: 1 }}>
            <Upper_box>
              <TouchableOpacity onPress={() => props.navigation.navigate('Cart')}>
                <Antarang />
              </TouchableOpacity>
              <Header>Antarang</Header>
            </Upper_box>
            <Lower_box>
              <View style={{ alignSelf: 'center' }}>
                <Sub_header>Mobile Number</Sub_header>
                <Input keyboardType="numeric" placeholder="10-digit number" />
              </View>
              <View style={{ margin: '9%' }}>
                <Sub_header>Ration Card Number</Sub_header>
                <Input keyboardType="numeric" placeholder="1234567895" />
              </View>
              <View>
                <Picker style={{ width: 322, height: 45, alignSelf: 'center' }}>
                  <Picker.Item label="Employed" value="employed" />
                  <Picker.Item label="Unemployed" value="unemployed" />
                </Picker>
                <Para style={{ marginLeft: '11%' }}>
                  *Household employment status(Employment of highest salaried member)
                </Para>
              </View>

              <View style={{ margin: '9%' }}>
                <Sub_header>One Time Password(OTP)</Sub_header>
                <Input keyboardType="numeric" />
                <Para>*Enter OTP sent to your registered mobile number linked with ration card</Para>
              </View>
              <TouchableOpacity onPress={() => props.navigation.navigate('Cart')}>
                <Button Title="Continue" />
              </TouchableOpacity>
            </Lower_box>
          </ScrollView>
        </KeyboardAvoidingView>
      </Global_container>
    </>
  );
};

export default OTP;
