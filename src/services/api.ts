import axios from 'axios';
import config from '../config/config';
import * as mappers from './mappers';
const WooCommerceRestApi = require('@woocommerce/woocommerce-rest-api').default;

const api = new WooCommerceRestApi({
  url: config.BASE_URL,
  consumerKey: config.CONSUMER_KEY,
  consumerSecret: config.CONSUMER_PASSWORD,
  version: 'wc/v3',
});

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
  try {
    const response = await api.get('products/categories', {
      per_page: 20,
    });

    return mappers.categoriesMapper(response.data);
  } catch (err) {
    console.log(err);
  }
};
