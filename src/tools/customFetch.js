import axios from 'axios';

export const customFecth = axios.create({
  baseURL: 'http://localhost:3000',
});
