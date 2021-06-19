import axios from 'axios';
import {takeLatest, put} from 'redux-saga/effects';
import {
  GET_MOVIE_DATA,
  GET_MOVIE_DETAIL,
  setMovieData,
  setMovieDetail,
} from './actionHome';
import {navigate} from '../../../function/nav';

function* getDataMovie(action) {
  try {
    const res = yield axios.get(
      'https://movieapp-team-b-2021.herokuapp.com/api/rMovie/home',
      action.payload,
    );
    if (res.status === 200) {
      yield put(setMovieData(res.data.data));
    } else {
      console.log(res.data.statusCode);
    }
  } catch (error) {
    console.log(error);
  }
}

function* getDetailMovie(action) {
  try {
    const res = yield axios.get(
      'https://movieapp-team-b-2021.herokuapp.com/api/rMovie/title/' +
        action.payload,
    );
    console.log(res, '<====ini movie detail');
    if (res.status === 200) {
      yield put(setMovieDetail(res.data.data));
      yield navigate('Detail');
    } else {
      console.log(res.data.statusCode);
    }
  } catch (error) {
    console.log(error);
  }
}
export function* SagaMovie() {
  yield takeLatest(GET_MOVIE_DATA, getDataMovie);
  yield takeLatest(GET_MOVIE_DETAIL, getDetailMovie);
}
