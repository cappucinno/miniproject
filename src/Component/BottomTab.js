import React from 'react';
import {StyleSheet} from 'react-native';

//component
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

//screen

import ReviewScreen from '../Screen/Review/ReviewScreen';
import ProfileScreen from '../Screen/Profile/ProfileScreen';

//icon
import Ionicons from 'react-native-vector-icons/Ionicons';

//other
import {moderateScale} from 'react-native-size-matters';
import {Avatar} from 'react-native-elements';

import {COLORS} from '../Utils/Constant';
import HomeRoute from '../Router/HomeRoute';
import {useSelector} from 'react-redux';

const Tabs = createMaterialBottomTabNavigator();

const style = StyleSheet.create({
  styleBar: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function BottomTab() {
  const image = useSelector(state => state.Login.data.data);
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      labeled={false}
      shifting
      inactiveColor={COLORS.primaryBlack}
      barStyle={style.styleBar}>
      {/* tab review */}
      <Tabs.Screen
        name="Review"
        component={ReviewScreen}
        options={{
          tabBarLabel: 'Review',
          tabBarColor: COLORS.gold,
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <Ionicons
                name="chatbubble-sharp"
                color={COLORS.primaryBlack}
                size={moderateScale(22)}
                style={{transform: [{rotateY: '180deg'}]}}
              />
            ) : (
              <Ionicons
                name="chatbubble-outline"
                color={color}
                size={moderateScale(22)}
                style={{transform: [{rotateY: '180deg'}]}}
              />
            ),
        }}
      />

      {/* tab home */}
      <Tabs.Screen
        name="Home"
        component={HomeRoute}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: COLORS.imperialRed,
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <Ionicons
                name="home-sharp"
                color={COLORS.primaryBlack}
                size={moderateScale(22)}
              />
            ) : (
              <Ionicons
                name="home-outline"
                color={color}
                size={moderateScale(22)}
              />
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
          tabBarColor: COLORS.redOld,
          tabBarIcon: () => (
            <Avatar
              rounded
              size={moderateScale(25)}
              source={{
                uri:
                  image !== undefined
                    ? image.profilePicture || image.profilePicture.uri
                    : require('../Assets/Images/user.png'),
              }}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
