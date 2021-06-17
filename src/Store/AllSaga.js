import {all} from 'redux-saga/effects';
import {SagaMovie} from '../Screen/Home/Redux/sagaHome';
import {SagaLogin} from '../Screen/LoginScreen/Redux/saga/SagaLogin';
import {SagaRegister} from '../Screen/RegisterScreen/Redux/SagaRegister';
import {SagaReview} from '../Screen/Review/Redux/SagaReview';

export function* AllSaga() {
  yield all([SagaReview(), SagaRegister(), SagaLogin(), SagaMovie()]);
}
