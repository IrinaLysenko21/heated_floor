import React, { useEffect } from 'react';
import {
  useRouteMatch,
  useParams,
  useHistory,
  useLocation,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/products/productsActions';
import { productsSelector } from '../../redux/products/productsSelectors';
import { ProductType } from '../../redux/products/productsTypes';
import ProductsList from '../../components/ProductsList/ProductsList';

const CategoryPage: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const products: ProductType[] | [] = useSelector(productsSelector);
  console.log(products);

  let { categoryName } = useParams();
  console.log('categoryName', categoryName);

  return (
    <div>
      <h1>Category {categoryName}</h1>
      <ProductsList products={products} />
    </div>
  );
};

export default CategoryPage;
