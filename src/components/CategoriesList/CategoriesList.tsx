import React from 'react';
import { Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import Category from '../Category/Category';
import { CategoryType } from '../../redux/categories/categoriesTypes';

type CategoriesListPropTypes = {
  categories: CategoryType[];
};

const CategoriesList = ({
  categories,
}: CategoriesListPropTypes): JSX.Element => {
  const match = useRouteMatch();

  return (
    <ul>
      {categories.map(category => {
        return (
          <li key={category.id}>
            <Link to={`${match.url}catalogue/${category.slug}`}>
              <Category category={category} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default CategoriesList;
