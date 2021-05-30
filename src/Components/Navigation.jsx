import * as React from 'react';
import Role from '../Screen/Role';
import OTP from '../Screen/OTP';
import Cart from '../Screen/Cart';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Role" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Role" component={Role} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
