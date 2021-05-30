import * as React from 'react';
import Role from '../Screen/Role';
import OTP from '../Screen/OTP';
import Cart from '../Screen/Cart';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Catergories from '../Screen/Catergories';
import DashBoardScreen from '../Screen/DashBoardScreen';
import LocationScreen from '../Screen/LocationScreen';

const Stack = createStackNavigator();
function Stack_Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Role" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Role" component={Role} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Location" component={LocationScreen} />
        <Stack.Screen name="Catergories" component={Catergories} />
        <Stack.Screen name="DashBoardScreen" component={DashBoardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Stack_Navigation;
