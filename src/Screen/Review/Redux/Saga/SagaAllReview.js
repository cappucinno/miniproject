import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';
import {navigate} from '../../../../function/nav';
import {
  GET_ALL_REVIEW_MOVIE,
  setReviewAllMovie,
} from '../Action/ActionAllReview';

function* getAllReview(action) {
  try {
    const res = yield axios.get(
      `https://movieapp-team-b-2021.herokuapp.com/api/rMovie/get/review/${action.payload.id}?page=${action.payload.page}&size=20`,
      {headers: {Authorization: action.payload.token}},
    );

    if (res.status === 200) {
      yield put(
        setReviewAllMovie({data: res.data.data, movieId: action.payload.id}),
      );
      yield navigate('AllReview');
    }
  } catch (error) {
    console.log(error);
  }
}

export function* SagaAllReview() {
  yield takeLatest(GET_ALL_REVIEW_MOVIE, getAllReview);
}
