import axios from 'axios';
import { apiBaseUrl } from '../constants';

const addEntry = async (entry, user) => {
  const config = {
    headers: { Authorization: 'Bearer ' + user.token }
  };

  const res = await axios.post(
    `${apiBaseUrl}/logs`,
    entry,
    config
  );
  return res.data;
};

const getEntry = async (id) => {
  const res = await axios.get(
    `${apiBaseUrl}/logs/${id}`
  );
  return res.data;
};

const deleteEntry = async (id) => {
  const res = await axios.delete(
    `${apiBaseUrl}/logs/${id}`
  );
  return res.data;
};

const editEntry = async (id, editedReview) => {
  const res = await axios.put(
    `${apiBaseUrl}/logs/${id}`,
    {
      review: editedReview
    }
  );
  return res.data;
};

export {
  addEntry,
  getEntry,
  deleteEntry,
  editEntry
};