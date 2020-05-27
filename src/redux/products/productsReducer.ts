import {
  GET_PRODUCTS_SUCCESS,
  GetProductsSuccessActionType,
} from './productsTypes';

const productsReducer = (state = [], action: GetProductsSuccessActionType) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return action.payload.products;

    default:
      return state;
  }
};

export default productsReducer;
