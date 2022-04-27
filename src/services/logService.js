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
  return res.data
}

export { addEntry };