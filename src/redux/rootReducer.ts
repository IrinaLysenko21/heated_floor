import { combineReducers } from 'redux';
import productsReducer from './products/productsReducer';
import categoriesReducer from './categories/categoriesReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
});

export default rootReducer;
