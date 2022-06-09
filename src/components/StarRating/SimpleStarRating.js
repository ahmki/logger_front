import React from 'react';
import PropTypes from 'prop-types';
import { BsStarFill } from 'react-icons/bs';
import './StarRating.css';

const SimpleStarRating = ({ numberOfStars }) => {
  return (
    <div className='starRate'>
      <h3>
        {[...Array(numberOfStars)].map((j, i) => {
          return (
            <div key={i} className='starRate'>
              <BsStarFill />
            </div>
          );
        })}
      </h3>
    </div>
  );
};

SimpleStarRating.propTypes = {
  numberOfStars: PropTypes.number,
};

export default SimpleStarRating;