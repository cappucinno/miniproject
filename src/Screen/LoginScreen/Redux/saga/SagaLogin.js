import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';
import {navigate} from '../../../../function/nav';
import {LOGIN} from '../action/actionTypes';
import {setDataLogin} from '../action/authAction';

function* login(action) {
  try {
    const res = yield axios.post(
      'https://movieapp-team-b-2021.herokuapp.com/api/rMovie/login',
      action.payload,
      {headers: {Authorization: action.payload.token}},
    );

    if (res.status === 200) {
      yield put(setDataLogin(res.data));
      yield navigate('MainScreen');
    } else {
      console.log(res.data.statusCode);
    }
  } catch (error) {
    console.log(error);
  }
}

export function* SagaLogin() {
  yield takeLatest(LOGIN, login);
}
