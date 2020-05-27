import { takeEvery, put, call } from 'redux-saga/effects';
import { GET_PRODUCTS } from './productsTypes';
import {
  getProductsStart,
  getProductsSuccess,
  getProductsError,
} from './productsActions';
import * as API from '../../services/api';

function* productsSagaWorker() {
  try {
    yield put(getProductsStart());
    const payload = yield call(API.getProducts);
    yield put(getProductsSuccess(payload));
  } catch (err) {
    yield put(getProductsError());
    console.log(err);
  }
}

function* productsSagaWatcher() {
  yield takeEvery(GET_PRODUCTS, productsSagaWorker);
}

export default productsSagaWatcher;
