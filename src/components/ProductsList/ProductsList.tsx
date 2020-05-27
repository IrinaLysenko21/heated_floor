import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/products/productsActions';
import { productsSelector } from '../../redux/products/productsSelectors';
import { ProductType } from '../../redux/products/productsTypes';
import styles from './ProductsList.module.css';

const ProductsList: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const products: ProductType[] | [] = useSelector(productsSelector);
  console.log(products);

  return (
    <>
      <h2>ProductsList</h2>
      {/* {products.length > 0 ? (
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
      ) : (
        <p></p>
      )} */}
    </>
  );
};

export default ProductsList;
