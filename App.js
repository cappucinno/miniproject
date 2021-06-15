import 'react-native-gesture-handler';
import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTab from './src/Component/BottomTab';
import HomeDetail from './src/Screen/Home/HomeDetail';

const Stack = createStackNavigator();

const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#1b1717',
  },
};

export default function App({navigation}) {
  return (
    <NavigationContainer theme={myTheme}>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={BottomTab}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="HomeDetail"
          component={HomeDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
