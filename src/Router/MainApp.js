import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../Screen/LoginScreen/LoginScreen';
import RegisterScreen from '../Screen/RegisterScreen/RegisterScreen';
import BottomTab from '../Component/BottomTab';

const Stack = createStackNavigator();

const MainApp = () => {
  return (
<<<<<<< HEAD
    <Stack.Navigator initialRouteName="RegisterScreen">
=======
    <Stack.Navigator initialRouteName="LoginScreen">
>>>>>>> 3d41e311035f8c4e25efa25575ae05f70dde2893
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
