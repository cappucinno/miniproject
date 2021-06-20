import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {put, select, takeLatest} from 'redux-saga/effects';
import {PUT_DATA_PROFILE, setNewDataProfile} from './ActionEditProfile';
import {navigate} from '../../../../function/nav';

function* putDataProfile(action) {
  try {
    const token = yield select(state => state.Login.token);
    const {id, fullName, userName, email, password, profilePicture} =
      action.payload;
    const requestBody = new FormData();
    requestBody.append('fullName', fullName);
    requestBody.append('email', email);
    requestBody.append('userName', userName);
    requestBody.append('password', password);
    requestBody.append('profilePicture', {
      type: profilePicture.type,
      uri: profilePicture.uri,
      name: profilePicture.fileName,
    });
    const res = yield axios({
      url: `https://movieapp-team-b-2021.herokuapp.com/api/rMovie/profile/update/${id}`,
      data: requestBody,
      method: 'PUT',
      headers: {Authorization: token, 'content-type': 'multipart/form-data'},
      validateStatus: status => status < 505,
    });

    console.log(res, 'after Fetching');

    if (res.status === 200) {
      yield put(
        setNewDataProfile({data: {data: action.payload}, token: token}),
      );
      yield ToastAndroid.showWithGravity(
        res.data.message,
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
    }
  } catch (error) {
    yield ToastAndroid.showWithGravity(
      error.message,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
  }
}

export function* SagaProfile() {
  yield takeLatest(PUT_DATA_PROFILE, putDataProfile);
}
