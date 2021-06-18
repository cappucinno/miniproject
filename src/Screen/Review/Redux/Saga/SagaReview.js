import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {put, takeEvery, takeLatest} from 'redux-saga/effects';
import {navigate} from '../../../../function/nav';
import {
  GET_MY_REVIEW_DATA,
  POST_MY_NEW_REVIEW,
  setReviewData,
} from '../Action/ActionReview';

function* getReviewData(action) {
  try {
    const res = yield axios.get(
      `https://movieapp-team-b-2021.herokuapp.com/api/rMovie/get/reviewUser/${action.payload.id}`,
      {headers: {Authorization: action.payload.token}},
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
      ToastAndroid.show(res.data.message, ToastAndroid.BOTTOM);
      yield navigate('HomeScreen');
    }
  } catch (error) {
    console.log(error);
  }
}

export function* SagaReview() {
  yield takeEvery(GET_MY_REVIEW_DATA, getReviewData);
  yield takeLatest(POST_MY_NEW_REVIEW, postReview);
}
