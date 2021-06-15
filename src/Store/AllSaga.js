import {all} from 'redux-saga/effects';
import {SagaReview} from '../Screen/Review/Redux/SagaReview';

export function* AllSaga() {
  yield all([SagaReview()]);
}
