import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screen/Home/HomeScreen';
import HomeDetails from '../Screen/Home/HomeDetails';

const Stack = createStackNavigator();
const HomeRoute = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={HomeDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AllReview"
        component={HomeDetails}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeRoute;
