import React from 'react';
import { CategoryType } from '../../redux/categories/categoriesTypes';

type CategoryPropsType = {
  category: CategoryType;
};

const Category = ({ category }: CategoryPropsType): JSX.Element => {
  return (
    <div>
      <h1>{category.name}</h1>
      <img src={category.imgURL} alt={category.name} />
    </div>
  );
};

export default Category;
