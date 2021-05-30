import * as React from 'react';
import Role from '../Screen/Role';
import OTP from '../Screen/OTP';
import Cart from '../Screen/Cart';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Catergories from '../Screen/Catergories';
import DashBoardScreen from '../Screen/DashBoardScreen';
import LocationScreen from '../Screen/LocationScreen';
import Recipt from '../Screen/Recipt';
import Language from '../Screen/Language';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../Screen/Home';
import Passbook from '../Screen/Passbook';
import Support from '../Screen/Support';
import Notification from '../Screen/Notification';

import Tab_Navigation from '../Components/Tab_Navigation';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Stack_Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Language" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Role" component={Role} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Location" component={LocationScreen} />
        <Stack.Screen name="Catergories" component={Catergories} />
        <Stack.Screen name="Language" component={Language} />
        <Stack.Screen name="Recipt" component={Recipt} />
        <Stack.Screen name="DashBoardScreen" component={DashBoardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Stack_Navigation;
