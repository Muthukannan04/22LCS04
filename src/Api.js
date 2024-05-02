import axios from 'axios';

const Api = axios.create({
  baseURL: 'http://localhost:9876',
});

export const fetchNumbers = async (numberId) => {
  try {
    const response = await Api.get(`/numbers/${numberId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export default Api;
