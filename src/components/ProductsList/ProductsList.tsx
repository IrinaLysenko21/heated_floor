import React from 'react';
import { ProductType } from '../../redux/products/productsTypes';
import styles from './ProductsList.module.css';

type ProductsListPropTypes = {
  products: ProductType[];
};

const ProductsList = ({ products }: ProductsListPropTypes): JSX.Element => {
  console.log(products);

  return (
    <h2>ProductsList</h2>
    // <ul>
    //   {products.map(product => (
    //     <li key={product.id}>
    //       <h3>{product.title}</h3>
    //       <p>{product.description}</p>
    //       <div className={styles.priceWrapper}>
    //         <span className={styles.price}>{product.price}</span>
    //         <span>{product.currency}</span>
    //       </div>
    //     </li>
    //   ))}
    // </ul>
  );
};

export default ProductsList;
