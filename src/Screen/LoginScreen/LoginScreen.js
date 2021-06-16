import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../styles/LoginStyle';
import FastImage from 'react-native-fast-image';

const LoginScreen = props => {
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const navigation = useNavigation();

  // const submit = () => {
  //   if (!username) {
  //     setMessage('Username Must be Field !!');
  //   } else if (!password) {
  //     setMessage('Password Must be Field !!');
  //   } else {
  //     props.processLogin({username, password});
  //   }
  // };

  return (
    <KeyboardAvoidingView style={styles.window}>
      <View style={styles.container}>
        <View style={styles.contInput}>
          <View style={styles.contLogo}>
            <FastImage
              source={require('../../Assets/Images/logo.png')}
              style={styles.logo}
              resizeMode={FastImage.resizeMode.cover}
            />
          </View>

          <TextInput
            onChangeText={text => setEmail(text)}
            value={username}
            placeholder="Email"
            placeholderTextColor="#EFBF7F"
            style={styles.formInput}></TextInput>
          <TextInput
            onChangeText={text => setPassword(text)}
            value={password}
            placeholder="Password"
            placeholderTextColor="#EFBF7F"
            style={styles.formInput}
            secureTextEntry></TextInput>

          <View style={styles.rightPos}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('MainApps')}>
              <Text style={styles.warnText}>Forgot Password ?</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.centerPos}>
            {props.isLoading ? (
              <TouchableOpacity
                onPress={() => console.info('disabled')}
                style={styles.mainButton}>
                <ActivityIndicator size="large" color="#333333" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => props.navigation.navigate('MainScreen')}
                style={styles.mainButton}>
                <Text style={styles.buttonText}>LOGIN</Text>
              </TouchableOpacity>
            )}
          </View>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('RegisterScreen')}>
            <View style={styles.centerPos}>
              <Text style={styles.smallTextButton}>
                Don't have an account ? Sign Up
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
