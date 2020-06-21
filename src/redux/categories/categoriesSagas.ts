import { takeEvery, put, call } from 'redux-saga/effects';
import { GET_CATEGORIES } from './categoriesTypes';
import {
  getCategoriesStart,
  getCategoriesSuccess,
  getCategoriesError,
} from './categoriesActions';
import * as API from '../../services/api';

function* categoriesSagaWorker() {
  try {
    yield put(getCategoriesStart());
    const payload = yield call(API.getCategories);

    yield put(getCategoriesSuccess(payload));
  } catch (err) {
    yield put(getCategoriesError());
    console.log(err);
  }
}

function* categoriesSagaWatcher() {
  yield takeEvery(GET_CATEGORIES, categoriesSagaWorker);
}

export default categoriesSagaWatcher;
