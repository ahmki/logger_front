import React from 'react';
import { useSelector } from 'react-redux';
import SearchItem from './SearchItem';
import './Search.css';

const Search = () => {
  const search = useSelector(state => state.search);

  if (!search) {
    return (
      <div>no searches yet!</div>
    );
  }

  return (
    <div className='search'>
      <div className='searchContainer'>
        {
          search.map(searchItem =>
            <div key={searchItem.imdbID}>
              <SearchItem item={searchItem} />
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Search;