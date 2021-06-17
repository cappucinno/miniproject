import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import {Input} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import styles from '../styles/LoginStyle';
import FastImage from 'react-native-fast-image';
import {useDispatch, useSelector} from 'react-redux';
import {loginAction} from './Redux/action/authAction';

const LoginScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const registerData = useSelector(state => state.Register.data);

  const submit = () => {
    dispatch(loginAction({email, password, token: registerData.data.token}));
  };

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
            <Text style={styles.smallTextButton}>MovReact</Text>
          </View>

          {/* input email */}
          <Input
            onChangeText={text => setEmail(text)}
            value={email}
            placeholder="Email"
            placeholderTextColor="#EFBF7F"
            style={styles.formInput}></Input>
          {/* input password */}
          <Input
            onChangeText={text => setPassword(text)}
            value={password}
            placeholder="Password"
            placeholderTextColor="#EFBF7F"
            style={styles.formInput}
            secureTextEntry></Input>

          <View style={styles.rightPos}>
            <TouchableOpacity>
              {/* onPress={() => props.navigation.navigate('RegisterScreen')}> */}
              <Text style={styles.warnText}>Forgot Password ?</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.centerPos}>
            {/* {props.isLoading ? (
              <TouchableOpacity
                onPress={() => console.info('disabled')}
                style={styles.mainButton}>
                <ActivityIndicator size="large" color="#333333" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={submit} style={styles.mainButton}>
                <Text style={styles.buttonText}>LOGIN</Text>
              </TouchableOpacity>
            )} */}
            <TouchableOpacity onPress={submit} style={styles.mainButton}>
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
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
