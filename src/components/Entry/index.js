import React from 'react';
import PropTypes from 'prop-types';
// import { parse, format } from 'date-fns';

const Entry = ({ log })  => {
  const { id, name, review, mediaType, date } = log;
  console.log('log', log);

  return (
    <div>
      <div className='entryItem' key={id}>
        <div className='entryName'>{name}</div>
        <div className='entryReview'>{review}</div>
        <div className='entryMedia'>{mediaType}</div>
        <div className='entryDate'>{date}</div>
      </div>
    </div>
  );
};


Entry.propTypes = {
  log: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    review: PropTypes.string,
    mediaType: PropTypes.string,
    date: PropTypes.string
  })
};

export default Entry;