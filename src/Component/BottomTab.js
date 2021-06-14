import React from 'react';

//component
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

//screen
import HomeScreen from '../Screen/Home/HomeScreen';
import ReviewScreen from '../Screen/Review/ReviewScreen';
import ProfileScreen from '../Screen/Profile/ProfileScreen';

//icon
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

//other
import {moderateScale} from 'react-native-size-matters';
import {Avatar} from 'react-native-elements';

const Tabs = createMaterialBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tabs.Navigator initialRouteName="Home" activeColor="#fff" shifting>
      <Tabs.Screen
        name="Review"
        component={ReviewScreen}
        options={{
          tabBarLabel: 'Review',
          tabBarColor: '#12103D',
          tabBarIcon: ({color}) => (
            <MaterialIcons
              name="rate-review"
              color={color}
              size={moderateScale(22)}
            />
          ),
          height: 150,
        }}
      />
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#F20231',
          tabBarIcon: ({color}) => (
            <Entypo name="home" color={color} size={moderateScale(22)} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#0C5D7B',
          tabBarIcon: () => (
            <Avatar rounded size={moderateScale(30)} title="Pr" />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
