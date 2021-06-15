import {createStore, applyMiddleware} from 'redux';
import Logger from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createSaga from 'redux-saga';
import {persistReducer, persistStore} from 'redux-persist';
import {AllReducer} from './Allreducer';
import {AllSaga} from './AllSaga';

const configPersist = {
  key: 'MovieReact',
  storage: AsyncStorage,
};

const SagaMiddleware = createSaga();

const reducerPersist = persistReducer(configPersist, AllReducer);

export const Store = createStore(
  reducerPersist,
  {},
  applyMiddleware(Logger, SagaMiddleware),
);

export const storePersist = persistStore(Store);

SagaMiddleware.run(AllSaga);
