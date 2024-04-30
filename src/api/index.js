import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getItems = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    const items = await response.data;
    return items;
  } catch (error) {
    console.log(`Error bringing items`, error);
    return [];
  }
};
