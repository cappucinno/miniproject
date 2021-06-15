import {combineReducers} from 'redux';
import ReducerReview from '../Screen/Review/Redux/ReducerReview';
import GlobalReducer from './GlobalReducer';

export const AllReducer = combineReducers({
  Review: ReducerReview,
  Global: GlobalReducer,
});
