import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SearchItem = ({ item }) => {
  const { Title, Type, Year, imdbID } = item;

  return (
    <div className='searchItem'>
      <Link to={`/media/${imdbID}`}>{Title}</Link>
      , {Type}, {Year}
    </div>
  );
};

SearchItem.propTypes = {
  item: PropTypes.shape({
    Title: PropTypes.string,
    Type: PropTypes.string,
    Year: PropTypes.string,
    imdbID: PropTypes.string,
  })
};

export default SearchItem;