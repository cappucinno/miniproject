import axios from 'axios';
import {put, takeEvery} from 'redux-saga/effects';
import {GET_MY_REVIEW_DATA, setReviewData} from '../Action/ActionReview';

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

export function* SagaReview() {
  yield takeEvery(GET_MY_REVIEW_DATA, getReviewData);
}
