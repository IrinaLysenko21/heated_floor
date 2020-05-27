import * as types from './productsTypes';

export const getProducts = () => ({
  type: types.GET_PRODUCTS,
});

export const getProductsStart = () => ({
  type: types.GET_PRODUCTS_START,
});

export const getProductsSuccess = (products: types.ProductType[] | []) => ({
  type: types.GET_PRODUCTS_SUCCESS,
  payload: {
    products,
  },
});

export const getProductsError = () => ({
  type: types.GET_PRODUCTS_ERROR,
});
