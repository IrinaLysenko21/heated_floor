import React from 'react';
import { Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import { CategoryType } from '../../redux/categories/categoriesTypes';
import styles from './CategoriesList.module.css';

type CategoriesListPropTypes = {
  categories: CategoryType[];
};

const CategoriesList = ({
  categories,
}: CategoriesListPropTypes): JSX.Element => {
  const match = useRouteMatch();

  return (
    <ul className={styles.categoriesList}>
      {categories.map(category => {
        return (
          <li className={styles.categoriesListItem} key={category.id}>
            <Link
              className={styles.categoryLink}
              to={`${match.url}catalogue/${category.slug}`}
            >
              <div className={styles.categoryWrapper}>
                <img
                  className={styles.categoryImg}
                  src={category.imgURL}
                  alt={category.name}
                />
                <h3 className={styles.categoryName}>{category.name}</h3>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default CategoriesList;
