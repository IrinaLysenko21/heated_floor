import * as types from './categoriesTypes';

export const getCategories = () => ({
  type: types.GET_CATEGORIES,
});

export const getCategoriesStart = () => ({
  type: types.GET_CATEGORIES_START,
});

export const getCategoriesSuccess = (
  categories: types.CategoryType[] | [],
) => ({
  type: types.GET_CATEGORIES_SUCCESS,
  payload: {
    categories,
  },
});

export const getCategoriesError = () => ({
  type: types.GET_CATEGORIES_ERROR,
});
