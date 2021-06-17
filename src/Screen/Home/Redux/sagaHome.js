import axios from 'axios';
import {takeLatest, put} from 'redux-saga/effects';
import {getMovieData} from './actionHome';

function* SagaMovie(action) {
  try {
    yield axios.get(
      'https://movieapp-team-b-2021.herokuapp.com/api/rMovie/home',
      action.payload,
    );
  } catch (error) {}
}

function* getMovie() {
  yield takeLatest();
}
export default getMovie;
