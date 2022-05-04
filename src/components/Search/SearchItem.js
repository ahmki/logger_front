import React from 'react';
import PropTypes from 'prop-types';

const SearchItem = ({ item }) => {
  const { Title, Type, Year } = item;

  return (
    <div>
      {Title}, {Type}, {Year}
    </div>
  );
};

SearchItem.propTypes = {
  item: PropTypes.shape({
    Title: PropTypes.string,
    Type: PropTypes.string,
    Year: PropTypes.string,
  })
};

export default SearchItem;