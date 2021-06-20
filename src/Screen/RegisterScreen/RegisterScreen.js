import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  Alert,
  Platform,
} from 'react-native';
import styles from '../styles/RegisterStyle';
import {Avatar} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {PostNewUser} from './Redux/RegisterAction';
import {setPasswordUser} from '../Profile/Redux/ActionEditProfile';

import {launchImageLibrary} from 'react-native-image-picker';
import {moderateScale} from 'react-native-size-matters';

function RegisterScreen(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [profilePicture, setprofilePicture] = useState({});
  const [roleId, setroleId] = useState(1);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const changePhoto = () => {
    launchImageLibrary({maxHeight: 300, maxWidth: 300}, res => {
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

  const submit = () => {
    if (!name) {
      setMessage('Name Must be Field !!');
    } else if (!email) {
      setMessage('Email Must be Field !!');
    } else if (!username) {
      setMessage('Username Must be Field !!');
    } else if (!password) {
      setMessage('Password Must be Field !!');
    } else {
      dispatch(
        PostNewUser({
          fullName: name,
          userName: username,
          email,
          profilePicture,
          password,
          roleId,
        }),
      );
      dispatch(setPasswordUser(password));
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.window}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.container}>
        <View style={styles.contInput}>
          <View style={styles.contLogo}>
            <View style={styles.photoView}>
              <Avatar
                rounded
                source={{
                  uri: profilePicture ? profilePicture.uri : '',
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
          </View>
          <Text style={styles.warnText}>{message}</Text>
          <TextInput
            onChangeText={text => setName(text)}
            value={name}
            placeholder="Fullname"
            placeholderTextColor="#EFBF7F"
            style={styles.formInput}
          />

          <TextInput
            onChangeText={text => setUsername(text)}
            value={username}
            placeholder="Username"
            placeholderTextColor="#EFBF7F"
            style={styles.formInput}
          />

          <TextInput
            onChangeText={text => setEmail(text)}
            value={email}
            placeholder="Email"
            placeholderTextColor="#EFBF7F"
            style={styles.formInput}
          />

          <TextInput
            onChangeText={text => setPassword(text)}
            value={password}
            placeholder="Password"
            placeholderTextColor="#EFBF7F"
            style={styles.formInput}
            secureTextEntry
          />
          <View style={styles.centerPos}>
            <TouchableOpacity onPress={submit} style={styles.mainButton}>
              <Text style={styles.buttonText}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <View style={styles.centerPos}>
              <Text style={styles.smallTextButton}>
                Already have an account ? Sign In
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default RegisterScreen;
