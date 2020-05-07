import { IStore } from '../../interfaces';
import { IProduct } from '../../interfaces';

export const products = (store: IStore): IProduct[] | [] => store.products;
