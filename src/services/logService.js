import axios from 'axios';
import { apiBaseUrl } from '../constants';

const addEntry = async (entry, user) => {
  const config = {
    headers: { Authorization: 'Bearer ' + user.token }
  }

  const res = await axios.post(
    `${apiBaseUrl}/logs`, 
    entry,
    config
  );
  return res.data;
}

const getEntry = async (id) => {
  const res = await axios.get(
    `${apiBaseUrl}/logs/${id}`
  )
  return res.data;
}

export { addEntry, getEntry };