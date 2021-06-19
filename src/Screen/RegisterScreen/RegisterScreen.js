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
} from 'react-native';
import styles from '../styles/RegisterStyle';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import {useDispatch, useSelector} from 'react-redux';
import {PostNewUser} from './Redux/RegisterAction';
import {setPasswordUser} from '../Profile/Redux/ActionEditProfile';

function RegisterScreen(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [profilPicture, setprofilPicture] = useState(
    'https://placeimg.com/640/480/people',
  );
  const [roleId, setroleId] = useState(1);
  const navigation = useNavigation();
  const dispatch = useDispatch();

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
          profilPicture: profilPicture,
          password,
          roleId,
        }),
      );
      dispatch(setPasswordUser(password));

      navigation.navigate('LoginScreen');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.window}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.container}>
        <View style={styles.contInput}>
          <View style={styles.contLogo}>
            <TouchableOpacity>
              <Image
                source={require('../../Assets/Images/user.png')}
                style={styles.logo}
                resizeMode={FastImage.resizeMode.cover}
              />
            </TouchableOpacity>
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
