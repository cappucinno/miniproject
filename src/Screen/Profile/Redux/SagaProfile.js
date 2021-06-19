import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {put, select, takeLatest} from 'redux-saga/effects';
import {PUT_DATA_PROFILE, setNewDataProfile} from './ActionEditProfile';
import {navigate} from '../../../../function/nav';

function* putDataProfile(action) {
  const token = yield select(state => state.Login.token);
  try {
    const res = yield axios.put(
      `https://movieapp-team-b-2021.herokuapp.com/api/rMovie/profile/update/${action.payload.id}`,
      action.payload,
      {Headers: {Authorization: token}},
    );

    if (res.status === 200) {
      yield put(setNewDataProfile({data: action.payload}));
      yield ToastAndroid.showWithGravity(
        res.data.statusText,
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
    }
  } catch (error) {
    yield ToastAndroid.showWithGravity(
      error,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
  }
}

export function* SagaProfile() {
  yield takeLatest(PUT_DATA_PROFILE, putDataProfile);
}
