import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {put, select, takeLatest} from 'redux-saga/effects';
import {navigate} from '../../../../function/nav';
import {
  GET_ALL_REVIEW_MOVIE,
  setReviewAllMovie,
} from '../Action/ActionAllReview';

function* getAllReview(action) {
  const token = yield select(state => state.Login.token);

  try {
    const res = yield axios.get(
      `https://movieapp-team-b-2021.herokuapp.com/api/rMovie/get/review/${action.payload.id}?page=${action.payload.page}&size=20`,
      {headers: {Authorization: token}},
    );

    if (res.status === 200) {
      yield put(
        setReviewAllMovie({data: res.data.data, movieId: action.payload.id}),
      );
      yield navigate('AllReview');
    }
  } catch (error) {
    yield ToastAndroid.showWithGravity(
      error.message,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
  }
}

export function* SagaAllReview() {
  yield takeLatest(GET_ALL_REVIEW_MOVIE, getAllReview);
}
