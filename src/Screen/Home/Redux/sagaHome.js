import axios from 'axios';
import {takeLatest, put} from 'redux-saga/effects';
import {
  currentCategory,
  GET_MOVIE_BY_CATEGORY,
  GET_MOVIE_CATEGORY,
  GET_MOVIE_DATA,
  GET_MOVIE_DETAIL,
  GET_SEACRHED_MOVIE,
  setMovieByCategory,
  setMovieCategory,
  setMovieData,
  setMovieDetail,
  setSearchedMovie,
} from './actionHome';
import {navigate} from '../../../function/nav';
import {ToastAndroid} from 'react-native';

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
      yield put(setMovieDetail(res.data));
      yield navigate('Detail');
    } else {
      console.log(res.data.statusCode);
    }
  } catch (error) {
    yield ToastAndroid.showWithGravity(
      error,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
  }
}

function* getSearchedMovie(action) {
  try {
    const res = yield axios.get(
      'https://movieapp-team-b-2021.herokuapp.com/api/rMovie/find?title=' +
        action.payload,
    );
    console.log(res, '<====ini movie searched');
    if (res.status === 200) {
      yield put(setSearchedMovie(res.data.data));
    } else {
      console.log(res.data.statusCode);
    }
  } catch (error) {
    console.log(error);
  }
}

function* getMovieCategory(action) {
  try {
    const res = yield axios.get(
      'https://movieapp-team-b-2021.herokuapp.com/api/rMovie/allCategories',
      action.payload,
    );
    console.log(res, 'show catagory');
    if (res.status === 200) {
      yield put(setMovieCategory(res.data.data));
    } else {
      console.log(res.data.statusCode);
    }
  } catch (error) {
    console.log(error);
  }
}

function* getMovieByCategory(action) {
  try {
    const res = yield axios.get(
      'https://movieapp-team-b-2021.herokuapp.com/api/rMovie/movieCategory/' +
        action.payload,
    );
    console.log(res, 'show movie by catagory');
    if (res.status === 200) {
      yield put(setMovieByCategory(res.data.data.movies));
      yield put(currentCategory(res.data.data.category.categoryName));
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
  yield takeLatest(GET_SEACRHED_MOVIE, getSearchedMovie);
  yield takeLatest(GET_MOVIE_CATEGORY, getMovieCategory);
  yield takeLatest(GET_MOVIE_BY_CATEGORY, getMovieByCategory);
}
