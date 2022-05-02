import axios from 'axios';
import { apiBaseUrl } from '../constants';

const getUserData = async (id) => {
  const res = await axios.get(
    `${apiBaseUrl}/users/${id}`
  );
  return res.data;
};

const registerUser = async (user) => {
  const res = await axios.post(
    `${apiBaseUrl}/users`, user
  );
  return res.data;
};

export { getUserData, registerUser };