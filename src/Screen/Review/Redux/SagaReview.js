import {takeEvery} from 'redux-saga/effects';

export function* SagaReview() {
  yield takeEvery('GET_REVIEW_DATA', getReviewData);
}

function* getReviewData() {
  console.log('Saga');
}
