import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {put, takeLatest} from 'redux-saga/effects';
import {PUT_DATA_PROFILE, setNewDataProfile} from './ActionEditProfile';
import {navigate} from '../../../../function/nav';

function* putDataProfile(action) {
  try {
    const res = yield axios.put(
      `https://movieapp-team-b-2021.herokuapp.com/api/rMovie/profile/update/${action.payload.id}`,
      {
        fullName: action.payload.fullName,
        userName: action.payload.userName,
        email: action.payload.email,
        profilPicture: action.payload.profilPicture,
        password: action.payload.password,
      },
      {Headers: {Authorization: action.payload.token}},
    );

    if (res.status === 200) {
      yield put(setNewDataProfile(res.data));
      yield ToastAndroid.showWithGravity(res.data.message, ToastAndroid.BOTTOM);
    }
  } catch (error) {
    console.log(error);
  }
}

export function* SagaProfile() {
  yield takeLatest(PUT_DATA_PROFILE, putDataProfile);
}
