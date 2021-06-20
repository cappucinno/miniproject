import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';
import {Header, Input, Button, Overlay, Avatar} from 'react-native-elements';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import {moderateScale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {putDataProfile} from '../Screen/Profile/Redux/ActionEditProfile';
import {COLORS} from '../Utils/Constant';

import {launchImageLibrary} from 'react-native-image-picker';

const ProfileOver = props => {
  const [fullName, setfullName] = useState('');
  const [userName, setuserName] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [profilePicture, setprofilePicture] = useState({});

  const logindata = useSelector(state => state.Login.data.data);
  const dispatch = useDispatch();

  const changePhoto = () => {
    launchImageLibrary({maxWidth: 300, maxHeight: 300}, res => {
      if (res.didCancel) {
        return;
      } else {
        const img = {
          ...res.assets[0],
        };

        setprofilePicture(img);
      }
    });
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <KeyboardAvoidingView behavior="position">
        <Overlay
          overlayStyle={styles.overStyle}
          isVisible={props.visible}
          onBackdropPress={props.toggle}
          animationType="slide"
          statusBarTranslucent={true}
          fullScreen>
          {/* overlay view */}
          <View style={styles.overlayView}>
            <Header
              leftComponent={{
                icon: 'arrow-back',
                color: COLORS.cream,
                onPress: props.toggle,
              }}
              centerComponent={{
                text: 'Edit Profile',
                style: {color: COLORS.cream},
              }}
              rightComponent={{
                icon: 'check',
                color: COLORS.cream,
                onPress: () => {
                  dispatch(
                    putDataProfile({
                      fullName,
                      userName,
                      email,
                      password,
                      id: logindata.id,
                      profilePicture,
                    }),
                  );
                  props.toggle;
                },
              }}
              containerStyle={styles.headerStyle}
            />

            <View style={styles.photoView}>
              <Avatar
                rounded
                source={{
                  uri: !logindata
                    ? 'https://placeimg.com/640/480/people'
                    : profilePicture
                    ? profilePicture.uri
                    : logindata
                    ? logindata.profilePicture
                    : logindata.profilePicture
                    ? logindata.profilePicture.uri
                    : logindata.profilePicture.uri,
                }}
                size={moderateScale(120)}>
                <Avatar.Accessory
                  style={styles.accStyle}
                  color="white"
                  size={moderateScale(20)}
                  onPress={changePhoto}
                />
              </Avatar>
            </View>
            {/* input */}
            <View style={styles.inputView}>
              <Input
                onChangeText={input => setfullName(input)}
                defaultValue={props.fullName}
                placeholder="Write Your Fullname"
                inputContainerStyle={{borderBottomColor: COLORS.redOld}}
                labelStyle={{color: COLORS.redOld}}
                label="Fullname"
                style={styles.styleInput}
              />

              <Input
                onChangeText={input => setuserName(input)}
                defaultValue={props.userName}
                placeholder="Write Your Username"
                inputContainerStyle={{borderBottomColor: COLORS.redOld}}
                labelStyle={{color: COLORS.redOld}}
                label="Username"
                style={styles.styleInput}
              />

              <Input
                onChangeText={input => setemail(input)}
                defaultValue={props.email}
                placeholder="Write Your Email"
                inputContainerStyle={{borderBottomColor: COLORS.redOld}}
                labelStyle={{color: COLORS.redOld}}
                label="Email"
                style={styles.styleInput}
              />

              <Input
                onChangeText={input => setpassword(input)}
                placeholder="Write Your Password"
                inputContainerStyle={{borderBottomColor: COLORS.redOld}}
                labelStyle={{color: COLORS.redOld}}
                label="New Password"
                secureTextEntry
                style={styles.styleInput}
              />
            </View>
            {/* overlay button submit */}
            <Button
              title="Logout"
              buttonStyle={styles.styleButton}
              titleStyle={styles.titleButton}
              onPress={props.logout}
            />
          </View>
        </Overlay>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default ProfileOver;

const styles = StyleSheet.create({
  boldText: {
    fontWeight: 'bold',
    fontSize: moderateScale(20),
  },
  overStyle: {
    backgroundColor: COLORS.primaryBlack,
    alignItems: 'center',
  },
  overlayView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: moderateScale(5),
    height: heightPercentageToDP(55),
  },
  headerStyle: {
    borderBottomColor: COLORS.redOld,
    backgroundColor: COLORS.redOld,
    borderRadius: moderateScale(20),
  },
  photoView: {
    height: heightPercentageToDP(18),
    alignItems: 'center',
    justifyContent: 'center',
  },
  accStyle: {
    position: 'absolute',
    marginBottom: moderateScale(10),
    marginRight: moderateScale(10),
  },

  styleInput: {
    fontSize: moderateScale(18),
    textAlign: 'justify',
    fontWeight: '400',
    color: COLORS.cream,
  },
  inputView: {
    width: widthPercentageToDP(90),
  },
  styleButton: {
    backgroundColor: COLORS.redOld,
    borderRadius: moderateScale(15),
    width: widthPercentageToDP(20),
    height: heightPercentageToDP(5),
    alignItems: 'center',
    justifyContent: 'center',
    padding: moderateScale(0),
  },
  titleButton: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: moderateScale(11),
  },
});
