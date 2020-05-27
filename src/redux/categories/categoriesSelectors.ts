import { StoreType } from '../storeType';
import { CategoryType } from './categoriesTypes';

export const categoriesSelector = (store: StoreType): CategoryType[] | [] =>
  store.categories;
