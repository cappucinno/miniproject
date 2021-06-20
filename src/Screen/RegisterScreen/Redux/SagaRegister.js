import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {put, takeLatest} from 'redux-saga/effects';
import {navigate} from '../../../function/nav';
import {POST_NEW_USER, SetNewUser} from './RegisterAction';

function* postNewUser(action) {
  try {
    const {fullName, userName, email, profilePicture, password, roleId} =
      action.payload;
    const requestBody = new FormData();
    requestBody.append('fullName', fullName);
    requestBody.append('userName', userName);
    requestBody.append('email', email);
    requestBody.append('profilePicture', {
      type: profilePicture.type,
      uri: profilePicture.uri,
      name: profilePicture.fileName,
    });
    requestBody.append('password', password);
    requestBody.append('roleId', roleId);
    const res = yield axios.post(
      'https://movieapp-team-b-2021.herokuapp.com/api/rMovie/signUp',
      requestBody,
    );

    if (res.status === 200) {
      yield put(SetNewUser(res.data));
      yield navigate('LoginScreen');
      yield ToastAndroid.show(res.data.message, ToastAndroid.BOTTOM);
    } else {
      console.log(res.statusText);
    }
  } catch (error) {
    yield ToastAndroid.showWithGravity(
      error.message,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
    yield navigate('RegisterScreen');
  }
}

export function* SagaRegister() {
  yield takeLatest(POST_NEW_USER, postNewUser);
}
