import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { IProduct } from '../../utils/interfaces';
import styles from './ProductsList.module.css';

type ProductsListProps = {
  products: IProduct[];
};

const ProductsList: React.FC<ProductsListProps> = ({ products }) => {
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <div className={styles.priceWrapper}>
            <span className={styles.price}>{product.price}</span>
            <span>{product.currency}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;
