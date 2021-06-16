import React, {useState} from 'react';
import {View, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {
  Avatar,
  Button,
  BottomSheet,
  Input,
  Header,
} from 'react-native-elements';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {moderateScale} from 'react-native-size-matters';

import {COLORS} from '../../Utils/Constant';

const ProfileScreen = () => {
  const [SheetBottom, setSheetBottom] = useState(false);

  const toggleBottom = () => setSheetBottom(!SheetBottom);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeView}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.bottomStyle}>
            {/* avatar */}
            <View style={styles.photoView}>
              <Avatar
                rounded
                source={{uri: 'https://placeimg.com/640/480/people'}}
                size={moderateScale(120)}>
                <Avatar.Accessory
                  style={styles.accStyle}
                  color="white"
                  size={moderateScale(20)}
                  onPress={toggleBottom}
                />
              </Avatar>
            </View>
            {/* input */}
            <View style={styles.inputView}>
              <Input label="Fullname" disabled style={styles.textInput}>
                Isumi Kartika
              </Input>
              <Input label="Username" disabled style={styles.textInput}>
                aiko.d.aurora
              </Input>
              <Input label="Email" disabled style={styles.textInput}>
                Isumi.karina@gmail.com
              </Input>
            </View>
            {/* bottom sheet */}
            <BottomSheet
              containerStyle={styles.bottomContainer}
              isVisible={SheetBottom}>
              <Header
                leftComponent={{
                  onPress: toggleBottom,
                  icon: 'transit-enterexit',
                  size: 24,
                  color: 'white',
                }}
                rightComponent={{icon: 'check', color: 'white', size: 24}}
                containerStyle={styles.headerContainer}
              />
              <View style={styles.photoSheet}>
                <Avatar
                  rounded
                  source={{uri: 'https://placeimg.com/640/480/people'}}
                  size={moderateScale(100)}>
                  <Avatar.Accessory
                    style={styles.accStyle}
                    color="white"
                    size={moderateScale(20)}
                    onPress={toggleBottom}
                  />
                </Avatar>
              </View>
              <View style={styles.inputSheet}>
                <Input
                  onChangeText={() => {}}
                  label="Fullname"
                  style={styles.textInput}
                  placeholder="Write Your Fullname Here">
                  Isumi Kartika
                </Input>
                <Input
                  onChangeText={() => {}}
                  placeholder="Write Your Username Here"
                  label="Username"
                  style={styles.textInput}>
                  aiko.d.aurora
                </Input>
                <Input
                  onChangeText={() => {}}
                  placeholder="Write Your Email Here"
                  label="Email"
                  style={styles.textInput}>
                  Isumi.karina@gmail.com
                </Input>
                <Input
                  onChangeText={() => {}}
                  placeholder="Write Your Password Here"
                  label="Password"
                  secureTextEntry
                  style={styles.textInput}>
                  Isumi.karina@gmail.com
                </Input>
              </View>
              <View style={styles.buttonView}>
                <Button title="Logout" buttonStyle={styles.buttonStyle} />
              </View>
            </BottomSheet>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    backgroundColor: COLORS.redOld,
  },
  photoView: {
    alignItems: 'center',
    backgroundColor: COLORS.redOld,
    borderBottomEndRadius: moderateScale(50),
    height: heightPercentageToDP(25),
    justifyContent: 'center',
  },
  accStyle: {
    marginRight: moderateScale(5),
    marginBottom: moderateScale(5),
    backgroundColor: COLORS.red,
  },
  inputView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: heightPercentageToDP(40),
    paddingHorizontal: moderateScale(10),
    marginTop: moderateScale(60),
  },
  textInput: {
    color: 'white',
    fontSize: moderateScale(20),
    marginTop: moderateScale(5),
  },
  photoSheet: {
    alignItems: 'center',
    paddingTop: moderateScale(20),
    height: heightPercentageToDP(20),
  },
  inputSheet: {
    height: heightPercentageToDP(52),
    paddingHorizontal: moderateScale(10),
  },
  buttonView: {
    height: heightPercentageToDP(20),
    alignItems: 'center',
    marginTop: moderateScale(20),
  },
  buttonStyle: {
    borderRadius: moderateScale(15),
    width: moderateScale(100),
  },
  bottomContainer: {
    backgroundColor: 'rgba(0.5, 0.25, 0, 0.9)',
  },
  headerContainer: {
    marginBottom: moderateScale(40),
  },
  bottomStyle: {
    height: heightPercentageToDP(91),
    backgroundColor: COLORS.primaryBlack,
    borderBottomStartRadius: moderateScale(30),
    borderBottomEndRadius: moderateScale(30),
  },
});
