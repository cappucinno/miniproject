import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {Rating, Input, Button, Overlay, Avatar} from 'react-native-elements';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import {moderateScale} from 'react-native-size-matters';
import {COLORS} from '../Utils/Constant';

const ProfileOver = props => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <KeyboardAvoidingView behavior="padding">
        <Overlay
          overlayStyle={styles.overStyle}
          isVisible={props.visible}
          onBackdropPress={props.toggle}
          animationType="slide"
          statusBarTranslucent={true}>
          {/* overlay view */}
          <View style={styles.overlayView}>
            <Text style={styles.boldText}>Edit Profile</Text>

            <View style={styles.photoView}>
              <Avatar
                rounded
                source={{uri: 'https://placeimg.com/640/480/people'}}
                size={moderateScale(120)}>
                <Avatar.Accessory
                  style={styles.accStyle}
                  color="white"
                  size={moderateScale(20)}
                  onPress={props.toggle}
                />
              </Avatar>
            </View>
            {/* input */}
            <View style={styles.inputView}>
              <Input label="Fullname" style={styles.styleInput}>
                Isumi Kartika
              </Input>
              <Input label="Username" style={styles.styleInput}>
                aiko.d.aurora
              </Input>
              <Input label="Email" style={styles.styleInput}>
                Isumi.karina@gmail.com
              </Input>
              <Input label="Password" secureTextEntry style={styles.styleInput}>
                Isumi.karina@gmail.com
              </Input>
            </View>
            {/* overlay button submit */}
            <Button
              title="Submit"
              buttonStyle={styles.styleButton}
              titleStyle={styles.titleButton}
              onPress={props.submit}
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
    backgroundColor: COLORS.champagne,
    opacity: 0.9,
    height: heightPercentageToDP(99),
    width: widthPercentageToDP(97),
    borderRadius: moderateScale(30),
    alignItems: 'center',
  },
  overlayView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: moderateScale(5),
    height: heightPercentageToDP(55),
  },
  photoView: {
    height: heightPercentageToDP(25),
    alignItems: 'center',
    justifyContent: 'center',
  },
  accStyle: {
    position: 'absolute',
    marginBottom: moderateScale(10),
    marginRight: moderateScale(10),
  },

  styleInput: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    textAlign: 'justify',
  },
  inputView: {
    width: widthPercentageToDP(70),
    paddingVertical: moderateScale(20),
  },
  styleButton: {
    backgroundColor: COLORS.primaryBlack,
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
  reviewPlaceholder: {
    alignItems: 'flex-start',
  },
});
