import { all } from 'redux-saga/effects';
import productsSagaWatcher from './products/productsSagas';

export default function* rootSaga() {
  yield all([productsSagaWatcher()]);
}
