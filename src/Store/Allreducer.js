import {combineReducers} from 'redux';
import LoginReducer from '../Screen/LoginScreen/Redux/reducer/LoginReducer';
import RegisterReducer from '../Screen/RegisterScreen/Redux/RegisterReducer';
import ReducerReview from '../Screen/Review/Redux/Reducer/ReducerReview';
import GlobalReducer from './GlobalReducer';
import ReducerAllReview from '../Screen/Review/Redux/Reducer/ReducerAllReview';

export const AllReducer = combineReducers({
  Review: ReducerReview,
  Global: GlobalReducer,
  Register: RegisterReducer,
  Login: LoginReducer,
  AllReview: ReducerAllReview,
});
