import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {Avatar, Input} from 'react-native-elements';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import ProfileOver from '../../Component/ProfileOver';
import {navigate} from '../../function/nav';

import {COLORS} from '../../Utils/Constant';
import {logoutAction} from '../LoginScreen/Redux/action/authAction';

const ProfileScreen = () => {
  const [Visible, setVisible] = useState(false);

  const dataProfile = useSelector(state => state.Login.data.data);

  const dispatch = useDispatch();

  const toggleBottom = () => setVisible(!Visible);

  return (
    <SafeAreaView style={styles.safeView}>
      {dataProfile !== undefined ? (
        <>
          <View style={styles.bottomStyle}>
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

            <View style={styles.inputView}>
              <Input label="Fullname" disabled style={styles.textInput}>
                {dataProfile.fullName}
              </Input>
              <Input label="Username" disabled style={styles.textInput}>
                {dataProfile.userName}
              </Input>
              <Input label="Email" disabled style={styles.textInput}>
                {dataProfile.email}
              </Input>
            </View>
          </View>

          <ProfileOver
            fullName={dataProfile.fullName}
            userName={dataProfile.userName}
            email={dataProfile.email}
            password={dataProfile.password}
            visible={Visible}
            toggle={toggleBottom}
            logout={() => {
              dispatch(logoutAction());
              navigate('LoginScreen');
            }}
          />
        </>
      ) : null}
    </SafeAreaView>
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
