import { FETCH_PRODUCTS, IFetchProductsAction } from './productsTypes';

// const initialState: [] = [];

const productsReducer = (state = [], action: IFetchProductsAction) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return action.payload.products;

    default:
      return state;
  }
};

export default productsReducer;
