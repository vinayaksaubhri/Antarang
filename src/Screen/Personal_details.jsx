import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
// import {} from 'react-native-paper';
import {
  Upper_box,
  Input_box,
  Bottom_box,
  Header,
  Sub_header,
  Name,
  Input_name,
  Bottom_text,
  Donate_button,
  Donate_now,
} from '../../style/personal_details';

const Personal_details = () => {
  return (
    <>
      <Upper_box>
        <Header>Personal Details</Header>
        <Sub_header>Enter your details</Sub_header>
      </Upper_box>

      <Input_box>
        <View>
          <Name>Name</Name>
          <Input_name placeholder="Full name" />
        </View>
        <View>
          <Name>Contact Number</Name>
          <Input_name keyboardType="numeric" placeholder="+91-(10)digit number" />
        </View>
      </Input_box>
      <Bottom_box>
        <View>
          <Bottom_text>Donate as anonymous</Bottom_text>
          {/* <RadioButton /> */}
        </View>
        <TouchableOpacity onPress={() => console.warn('clicked')}>
          <Donate_button>
            <Donate_now>Donate Now</Donate_now>
          </Donate_button>
        </TouchableOpacity>
      </Bottom_box>
    </>
  );
};

export default Personal_details;
