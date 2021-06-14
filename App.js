import 'react-native-gesture-handler';
import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTab from './src/Component/BottomTab';

const Stack = createStackNavigator();

const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#1b1717',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={myTheme}>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={BottomTab}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
