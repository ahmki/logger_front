import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import './Entry.css';

const Entry = ({ log })  => {
  const { id, name, review, mediaType, date } = log;

  const dateFormatted = format(new Date(date), 'dd/MM/yyyy');

  return (
    <div className='entryItem'>
      <div className='entryItemInfo' key={id}>
        <div className='entryName'>{name}</div>
        <div className='entryMedia'>{mediaType}</div>
        <div className='entryDate'>{dateFormatted}</div>
      </div>
      <div className='entryItemReview'>
        <div className='entryReview'>{review}</div>
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