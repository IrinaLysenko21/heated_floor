import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import { getCategories } from '../../redux/categories/categoriesActions';
import { categoriesSelector } from '../../redux/categories/categoriesSelectors';
import { CategoryType } from '../../redux/categories/categoriesTypes';
import styles from './CataloguePage.module.css';

const CataloguePage: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const categories: CategoryType[] | [] = useSelector(categoriesSelector);

  return (
    <div>
      <h1>Catalogue</h1>
      {categories.length > 0 && <CategoriesList categories={categories} />}
    </div>
  );
};

export default CataloguePage;
