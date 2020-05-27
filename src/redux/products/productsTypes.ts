export const GET_PRODUCTS = 'products/GET_PRODUCTS';
export const GET_PRODUCTS_START = 'products/GET_PRODUCTS_START';
export const GET_PRODUCTS_SUCCESS = 'products/GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_ERROR = 'products/GET_PRODUCTS_ERROR';

export interface ProductType {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
}

export interface getProductsActionType {
  type: typeof GET_PRODUCTS;
}

export interface GetProductsStartActionType {
  type: typeof GET_PRODUCTS_START;
}

export interface GetProductsSuccessActionType {
  type: typeof GET_PRODUCTS_SUCCESS;
  payload: {
    products: ProductType[] | [];
  };
}

export interface GetProductsErrorActionType {
  type: typeof GET_PRODUCTS_ERROR;
}
