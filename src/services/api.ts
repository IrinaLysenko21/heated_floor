import axios from 'axios';
import config from '../config/config';

export const getProducts = async () => {
  try {
    const response = await axios.get(
      `${config.BASE_URL}/wp-json/wp/v2/products`,
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getCategories = async () => {
  const categoriesMapper = (categories: Array<any>) =>
    categories.map(category => ({
      id: category.id,
      name: category.name,
      slug: category.slug,
      imgURL:
        category.description !== ''
          ? JSON.parse(category.description).imgURL
          : '',
    }));

  try {
    const response = await axios.get(
      `${config.BASE_URL}/wp-json/wp/v2/categories`,
    );

    return categoriesMapper(response.data);
  } catch (err) {
    console.log(err);
  }
};
