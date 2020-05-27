import {
  GET_CATEGORIES_SUCCESS,
  GetCategoriesSuccessActionType,
} from './categoriesTypes';

const categoriesReducer = (
  state = [],
  action: GetCategoriesSuccessActionType,
) => {
  switch (action.type) {
    case GET_CATEGORIES_SUCCESS:
      return action.payload.categories;

    default:
      return state;
  }
};

export default categoriesReducer;
