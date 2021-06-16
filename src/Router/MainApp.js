import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../Screen/LoginScreen/LoginScreen';
import RegisterScreen from '../Screen/RegisterScreen/RegisterScreen';
import BottomTab from '../Component/BottomTab';

const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainScreen"
        component={BottomTab}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainApp;
