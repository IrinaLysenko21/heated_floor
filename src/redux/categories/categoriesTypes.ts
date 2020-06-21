export const GET_CATEGORIES = 'categories/GET_CATEGORIES';
export const GET_CATEGORIES_START = 'categories/GET_CATEGORIES_START';
export const GET_CATEGORIES_SUCCESS = 'categories/GET_CATEGORIES_SUCCESS';
export const GET_CATEGORIES_ERROR = 'categories/GET_CATEGORIES_ERROR';

export interface CategoryType {
  id: string;
  name: string;
  slug: string;
  imgURL: string;
}

export interface GetCategoriesActionType {
  type: typeof GET_CATEGORIES;
}

export interface GetCategoriesStartActionType {
  type: typeof GET_CATEGORIES_START;
}

export interface GetCategoriesSuccessActionType {
  type: typeof GET_CATEGORIES_SUCCESS;
  payload: {
    categories: CategoryType[] | [];
  };
}

export interface GetCategoriesErrorActionType {
  type: typeof GET_CATEGORIES_ERROR;
}
