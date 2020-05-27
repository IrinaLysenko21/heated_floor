import { ProductType } from './products/productsTypes';
import { CategoryType } from './categories/categoriesTypes';

export interface StoreType {
  products: ProductType[] | [];
  categories: CategoryType[] | [];
}
