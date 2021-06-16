import React, {useState} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {Avatar, Input} from 'react-native-elements';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {moderateScale} from 'react-native-size-matters';
import ProfileOver from '../../Component/ProfileOver';
import SheetBottom from '../../Component/ProfileOver';

import {COLORS} from '../../Utils/Constant';

const ProfileScreen = () => {
  const [Visible, setVisible] = useState(false);

  const toggleBottom = () => setVisible(!Visible);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeView}>
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
        </View>
      </SafeAreaView>
      {/* Overlay profile */}
      <ProfileOver visible={Visible} toggle={toggleBottom} />
    </SafeAreaProvider>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  safeView: {
    height: heightPercentageToDP(100),
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
    paddingHorizontal: moderateScale(10),
    marginTop: moderateScale(60),
  },
  textInput: {
    color: 'white',
    fontSize: moderateScale(20),
    marginTop: moderateScale(5),
  },
  bottomStyle: {
    height: heightPercentageToDP(90),
    backgroundColor: COLORS.primaryBlack,
    borderBottomStartRadius: moderateScale(30),
    borderBottomEndRadius: moderateScale(30),
  },
});
