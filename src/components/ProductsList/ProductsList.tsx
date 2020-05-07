import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from '../../interfaces';
import { fetchProducts } from '../../redux/products/productsActions';
import styles from './ProductsList.module.css';

const ProductsList: React.FC = () => {
  const products = useSelector((state: IStore) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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
