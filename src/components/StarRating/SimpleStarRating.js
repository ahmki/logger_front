import React from 'react';
import PropTypes from 'prop-types';
import './StarRating.css';
import StarIcon from './StarIcon';

const SimpleStarRating = ({ numberOfStars }) => {

  const arrayOfStarFillBools = [];
  for (let i = 0; i < 5; i++) {
    if (i < numberOfStars) {
      arrayOfStarFillBools.push(true);
    }
    else {
      arrayOfStarFillBools.push(false);
    }
  }

  return (
    <div className='starRate'>
      {arrayOfStarFillBools.map((starBool, i) => {
        return (
          <div key={i}>
            <StarIcon fill={starBool} />
          </div>
        );
      })}
    </div>
  );
};

SimpleStarRating.propTypes = {
  numberOfStars: PropTypes.number,
};

export default SimpleStarRating;