import React from 'react';
import {View} from 'react-native';

//component
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

//screen
import HomeScreen from '../Screen/Home/HomeScreen';
import ReviewScreen from '../Screen/Review/ReviewScreen';
import ProfileScreen from '../Screen/Profile/ProfileScreen';

//icon
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

//other
import {moderateScale} from 'react-native-size-matters';
import {Avatar} from 'react-native-elements';
import AllReviewScreen from '../Screen/Review/AllReviewScreen';
import {COLORS} from '../Utils/Constant';

const Tabs = createMaterialBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      labeled={false}
      shifting
      activeColor={COLORS.primaryBlack}
      inactiveColor={COLORS.cream}
      barStyle={{
        backgroundColor: 'white',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* tab review */}
      <Tabs.Screen
        name="Review"
        component={ReviewScreen}
        options={{
          tabBarLabel: 'Review',
          tabBarColor: 'white',
          tabBarIcon: ({color}) => (
            <Ionicons
              name="chatbubble-sharp"
              color={color}
              size={moderateScale(22)}
            />
          ),
        }}
      />

      {/* tab home */}
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: 'white',
          tabBarIcon: ({color}) => (
            <Entypo name="home" color={color} size={moderateScale(22)} />
          ),
        }}
      />

      {/* testing allreview */}
      {/* <Tabs.Screen
        name="All Review"
        component={AllReviewScreen}
        options={{
          tabBarLabel: 'All Review',
          tabBarColor: '#0C5D7B',
          tabBarIcon: () => (
            <Avatar rounded size={moderateScale(30)} title="AR" />
          ),
        }}
      /> */}

      {/* tab profile */}
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarColor: 'white',
          tabBarIcon: () => (
            <Avatar
              rounded
              size={moderateScale(25)}
              source={{uri: 'https://placeimg.com/640/480/people'}}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
