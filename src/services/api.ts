import axios from 'axios';
import config from '../config/config';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${config.BASE_URL}/products`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
