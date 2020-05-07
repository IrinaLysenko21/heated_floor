import { IProduct } from '../../interfaces';

export const REQUEST_PRODUCTS = 'products/REQUEST_PRODUCTS';
export const FETCH_PRODUCTS = 'products/FETCH_PRODUCTS';

export interface IFetchProductsAction {
  type: typeof FETCH_PRODUCTS;
  payload: {
    products: IProduct[];
  };
}
