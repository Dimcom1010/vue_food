import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products';

// получение первичного списка продуктов
export const getPreloadData = async () => {
  try {
    const response = await axios.get(`${API_URL}?limit=5`);
    return response.data;
  } catch (error) {
    throw new Error('Первичного списка продуктов');
  }
};

// получение одиночного продукта 
export const getOneProduct = async (id:number) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Ошибка при получении одиночного продукта ');
  }
};