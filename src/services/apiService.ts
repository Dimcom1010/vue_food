import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products';

export const fetchData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Ошибка при получении данных');
  }
};