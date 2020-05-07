import { takeEvery, put, call } from 'redux-saga/effects';
import { REQUEST_PRODUCTS, FETCH_PRODUCTS } from './productsTypes';
import * as API from '../../services/api';

function* productsSagaWorker() {
  try {
    // yield put(showLoader());
    const payload = yield call(API.fetchProducts);
    yield put({ type: FETCH_PRODUCTS, payload: { products: payload } });
    // yield put(hideLoader());
  } catch (err) {
    // yield put(showAlert('Что-то пошло не так'));
    // yield put(hideLoader());
    console.log(err);
  }
}

function* productsSagaWatcher() {
  yield takeEvery(REQUEST_PRODUCTS, productsSagaWorker);
}

export default productsSagaWatcher;
