import { StoreType } from '../storeType';
import { ProductType } from './productsTypes';

export const productsSelector = (store: StoreType): ProductType[] | [] =>
  store.products;
