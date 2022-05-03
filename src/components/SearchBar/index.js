import React, { useState } from 'react';
import { searchMovie } from '../../services/movieService';
import './SearchBar.css';

const SearchBar = () => {
  const [search, setSearch] = useState('');

  const searchHandler = async (e) => {
    e.preventDefault();

    try {
      const result = await searchMovie(search);
      console.log('result', result);
    }
    catch(err) {
      console.log(err);
    }
  };

  return (
    <div className='searchbox'>
      <form onSubmit={searchHandler}>
        <input
          type='text'
          className='searchinput'
          placeholder='Look for something to log!'
          value={search}
          onChange={({ target }) => setSearch(target.value)}
        ></input>
        <button type='submit'>search</button>
      </form>
    </div>
  );
};

export default SearchBar;