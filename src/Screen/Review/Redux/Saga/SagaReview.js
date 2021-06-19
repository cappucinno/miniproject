import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {put, select, takeEvery, takeLatest} from 'redux-saga/effects';
import {navigate} from '../../../../function/nav';
import {
  DELETE_MY_REVIEW,
  GET_MY_REVIEW_DATA,
  POST_MY_NEW_REVIEW,
  PUT_MY_REVIEW_DATA,
  setReviewData,
} from '../Action/ActionReview';

function* getReviewData(action) {
  const token = yield select(state => state.Login.token);
  try {
    const res = yield axios.get(
      `https://movieapp-team-b-2021.herokuapp.com/api/rMovie/get/reviewUser/${action.payload}`,
      {headers: {Authorization: token}},
    );

    if (res.status === 200) {
      yield put(setReviewData(res.data));
    }
  } catch (error) {
    console.log(error);
  }
}

function* postReview(action) {
  try {
    const res = yield axios.post(
      'https://movieapp-team-b-2021.herokuapp.com/api/rMovie/post/review',
      action.payload,
      {headers: {Authorization: action.payload.token}},
    );

    if (res.status === 200) {
      ToastAndroid.showWithGravity(
        res.data.message,
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
      yield navigate('HomeScreen');
    }
  } catch (error) {
    console.log(error);
  }
}

function* putMyReview(action) {
  try {
    const res = yield axios.put(
      `https://movieapp-team-b-2021.herokuapp.com/api/rMovie/put/review/${action.payload.id}`,
      action.payload,
      {headers: {Authorization: action.payload.token}},
    );

    if (res.status === 200) {
      yield ToastAndroid.showWithGravity(
        res.data.message,
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
    }
  } catch (error) {
    console.log(error);
  }
}

function* deleteReview(action) {
  const token = yield select(state => state.Login.token);
  try {
    const res = yield axios.delete(
      `https://movieapp-team-b-2021.herokuapp.com/api/rMovie/delete/reviews/${action.payload}`,
      {headers: {Authorization: token}},
    );

    if (res.status === 200) {
      yield ToastAndroid.showWithGravity(
        res.data.message,
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

export function* SagaReview() {
  yield takeEvery(GET_MY_REVIEW_DATA, getReviewData);
  yield takeLatest(POST_MY_NEW_REVIEW, postReview);
  yield takeLatest(PUT_MY_REVIEW_DATA, putMyReview);
  yield takeLatest(DELETE_MY_REVIEW, deleteReview);
}
