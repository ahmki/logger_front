import axios from 'axios';
import { apiBaseUrl } from '../constants';

const searchMovie = async (search) => {
  const res = await axios.get(
    `${apiBaseUrl}/movies/search/${search}`
  );
  return res.data;
};

const getMovieInfo = async (id) => {
  const res = await axios.get(
    `${apiBaseUrl}/movies/${id}`
  );
  return res.data;
};

export { searchMovie, getMovieInfo };