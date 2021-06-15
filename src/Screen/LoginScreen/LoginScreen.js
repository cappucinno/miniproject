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
import RegisterScreen from '../RegisterScreen/RegisterScreen';
import {connect} from 'react-redux';
import {loginAction} from './Redux/action/authAction';

function LoginScreen(props) {
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const navigation = useNavigation();

  const submit = () => {
    if (!username) {
      setMessage('Username Must be Field !!');
    } else if (!password) {
      setMessage('Password Must be Field !!');
    } else {
      props.processLogin({username, password});
    }
  };

  return (
    <KeyboardAvoidingView style={styles.window}>
      <View style={styles.container}>
        <View style={styles.contInput}>
          <View style={styles.contLogo}>
            <Image
              source={require('../../Assets/Images/Logo.png')}
              style={styles.logo}
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
                onPress={() => submit()}
                style={styles.mainButton}>
                <Text style={styles.buttonText}>LOGIN</Text>
              </TouchableOpacity>
            )}
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('RegisterScreen')}>
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
}

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
});

const mapDispatchToProps = dispatch => ({
  processLogin: data => dispatch(loginAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
