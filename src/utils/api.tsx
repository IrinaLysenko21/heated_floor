import axios from 'axios';

export const fetchProducts = () => axios.get('http://localhost:4000/products');
