import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {Header, Input, Avatar, Button} from 'react-native-elements';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';
import LoginStyle from '../Screen/styles/LoginStyle';
import {COLORS} from '../Utils/Constant';

const ModalProfile = props => {
  return (
    <KeyboardAvoidingView style={LoginStyle.window}>
      <Modal
        statusBarTranslucent={true}
        animationType="slide"
        visible={props.visible}>
        <View>
          <View style={styles.overlayView}>
            <Header
              leftComponent={{icon: 'arrow-back', onPress: props.toggle}}
              centerComponent={{text: 'Edit Profile'}}
              rightComponent={{icon: 'check'}}
              containerStyle={styles.headerStyle}
            />

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
              <Input
                inputContainerStyle={{borderBottomColor: COLORS.primaryBlack}}
                labelStyle={{color: COLORS.primaryBlack}}
                label="Fullname"
                style={styles.styleInput}>
                Isumi Kartika
              </Input>
              <Input
                inputContainerStyle={{borderBottomColor: COLORS.primaryBlack}}
                labelStyle={{color: COLORS.primaryBlack}}
                label="Username"
                style={styles.styleInput}>
                aiko.d.aurora
              </Input>
              <Input
                inputContainerStyle={{borderBottomColor: COLORS.primaryBlack}}
                labelStyle={{color: COLORS.primaryBlack}}
                label="Email"
                style={styles.styleInput}>
                Isumi.karina@gmail.com
              </Input>
              <Input
                inputContainerStyle={{borderBottomColor: COLORS.primaryBlack}}
                labelStyle={{color: COLORS.primaryBlack}}
                label="Password"
                secureTextEntry
                style={styles.styleInput}>
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
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

export default ModalProfile;

const styles = StyleSheet.create({
  boldText: {
    fontWeight: 'bold',
    fontSize: moderateScale(20),
  },
  overStyle: {
    backgroundColor: COLORS.gold,
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
    borderBottomColor: COLORS.gold,
    backgroundColor: COLORS.gold,
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
  },
  inputView: {
    width: widthPercentageToDP(90),
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
});
