import axios from 'axios';
import config from '../config/config';

export const getProducts = async () => {
  try {
    const response = await axios.get(`${config.BASE_URL}/products`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get(`${config.BASE_URL}/categories`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
