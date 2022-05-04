import React from 'react';
import { useSelector } from 'react-redux';
import SearchItem from './SearchItem';

const Search = () => {
  const search = useSelector(state => state.search);

  if (!search) {
    return (
      <div>no searches yet!</div>
    );
  }

  return (
    <div>
      {
        search.map(searchItem =>
          <div key={searchItem.imdbID}>
            <SearchItem item={searchItem} />
          </div>
        )
      }

    </div>
  );
};

export default Search;