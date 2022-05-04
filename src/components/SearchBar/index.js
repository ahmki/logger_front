import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { displayNotification } from '../../reducers/notificationReducer';
import { setSearch } from '../../reducers/searchReducer';
import { searchMovie } from '../../services/movieService';
import './SearchBar.css';

/* No autofill or suggestions on search bar for now since we are using
an external API with limited daily calls*/
const SearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchForm, setSearchForm] = useState('');

  const searchHandler = async (e) => {
    e.preventDefault();

    try {
      const result = await searchMovie(searchForm);
      dispatch(setSearch(result));
      setSearchForm('');
      navigate('/search');
    }
    catch(err) {
      dispatch(displayNotification({
        message: 'error with the search!',
        class: 'error'
      }, 4));
    }
  };

  return (
    <div className='searchbox'>
      <form onSubmit={searchHandler}>
        <input
          type='text'
          className='searchinput'
          placeholder='Look for something to log!'
          value={searchForm}
          onChange={({ target }) => setSearchForm(target.value)}
        ></input>
        <button type='submit'>search</button>
      </form>
    </div>
  );
};

export default SearchBar;