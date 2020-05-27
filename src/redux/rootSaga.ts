import { all } from 'redux-saga/effects';
import productsSagaWatcher from './products/productsSagas';
import categoriesSagaWatcher from './categories/categoriesSagas';

export default function* rootSaga() {
  yield all([productsSagaWatcher(), categoriesSagaWatcher()]);
}
