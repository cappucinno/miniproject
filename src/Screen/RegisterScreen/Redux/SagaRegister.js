import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';
import {POST_NEW_USER, SetNewUser} from './RegisterAction';

function* postNewUser(action) {
  try {
    const res = yield axios.post(
      'https://movieapp-team-b-2021.herokuapp.com/api/rMovie/signUp',

      action.payload,
    );
    console.log(res);

    if (res.status === 200) {
      yield put(SetNewUser(res.data));
    } else {
      console.log(res.statusText);
    }
  } catch (error) {
    console.log(error);
  }
}

export function* SagaRegister() {
  yield takeLatest(POST_NEW_USER, postNewUser);
}
