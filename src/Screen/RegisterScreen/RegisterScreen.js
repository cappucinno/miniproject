import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
} from 'react-native';
import {Input} from 'react-native-elements';
import styles from '../styles/RegisterStyle';
import {useNavigation} from '@react-navigation/native';
import {moderateScale} from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';

function RegisterScreen(props) {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [message, setMessage] = useState(null);
  const navigation = useNavigation();

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
      navigation.navigate('MainNavigator');
    }
  };

  return (
    <KeyboardAvoidingView style={styles.window} behavior="position">
      <View style={styles.container}>
        <View style={styles.contInput}>
          <View style={styles.contLogo}>
            <Image
              source={require('../../Assets/Images/Logo.png')}
              style={styles.logo}
              resizeMode={FastImage.resizeMode.cover}
            />
            <Text style={styles.smallTextButton}>MovReact</Text>
          </View>
          <Text style={styles.warnText}>{message}</Text>
          <TextInput
            onChangeText={text => setName(text)}
            value={name}
            placeholder="Name"
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
            <TouchableOpacity
              onPress={() => submit()}
              style={styles.mainButton}>
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

    // <KeyboardAvoidingView>
    //   <View
    //     style={{
    //       flex: 1,
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //       height: 100,
    //       width: 100,
    //     }}>
    //     <Image source={require('../../Assets/Images/Logo.png')} />
    //   </View>
    //   <Text>MovReact</Text>
    // </KeyboardAvoidingView>
  );
}

export default RegisterScreen;
