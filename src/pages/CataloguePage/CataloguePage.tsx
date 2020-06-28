import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import { getCategories } from '../../redux/categories/categoriesActions';
import { categoriesSelector } from '../../redux/categories/categoriesSelectors';
import { CategoryType } from '../../redux/categories/categoriesTypes';
// import styles from './CataloguePage.module.css';

const CataloguePage: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const categories: CategoryType[] | [] = useSelector(categoriesSelector);

  return (
    <PageWrapper>
      {categories.length > 0 && <CategoriesList categories={categories} />}
    </PageWrapper>
  );
};

export default CataloguePage;
