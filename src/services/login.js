import axios from 'axios';
import { apiBaseUrl } from '../constants';

export const login = async (credentials) => {
  const res = await axios.post(`${apiBaseUrl}/login`, credentials);
  console.log('res.data', res.data);
  return res.data;
}
