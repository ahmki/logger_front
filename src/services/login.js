import axios from 'axios';
import { apiBaseUrl } from '../constants';

export const login = async (credentials) => {
  const res = await axios.post(`${apiBaseUrl}/login`, credentials);
  return res.data;
};
