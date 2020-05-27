import React from 'react';
import CategoryFolder from '../../components/CategoryFolder/CategoryFolder';
import { CategoryType } from '../../redux/categories/categoriesTypes';

type CategoriesListPropsType = {
  categories: CategoryType[];
};

const CategoriesList = ({
  categories,
}: CategoriesListPropsType): JSX.Element => {
  return (
    <ul>
      {categories.map(category => (
        <li key={category.id}>
          <CategoryFolder category={category} />
        </li>
      ))}
    </ul>
  );
};

export default CategoriesList;
