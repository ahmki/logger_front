import axios from 'axios';
import { apiBaseUrl } from '../constants';

const searchMovie = async (search) => {
  const res = await axios.get(
    `${apiBaseUrl}/movies/search/${search}`
  );
  return res.data;
};

export { searchMovie };