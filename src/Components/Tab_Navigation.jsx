import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screen/Home';
import Passbook from '../Screen/Passbook';
import Support from '../Screen/Support';
import Notification from '../Screen/Notification';

const Tab_Navigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Passbook" component={Passbook} />
        <Tab.Screen name="Support" component={Support} />
        <Tab.Screen name="Notification" component={Notification} />>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tab_Navigation;
