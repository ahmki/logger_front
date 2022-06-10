/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';
import StarIcon from './StarIcon';

const StarRating = ({
  index, rating, hoverRating, onMouseLeave, onMouseEnter, onSaveRating
}) => {

  const fill = useMemo(() => {
    if (hoverRating >= index) {
      return true;
    }
    else if (!hoverRating && rating >= index) {
      return true;
    }
    return false;
  }, [rating, hoverRating, index]);

  return (
    <div>
      <h2>
        <div
          className='starRate'
          onMouseEnter={() => onMouseEnter(index)}
          onMouseLeave={() => onMouseLeave()}
          onClick={() => onSaveRating(index)}
        >
          <StarIcon fill={fill} />
        </div>
      </h2>
    </div>
  );
};

export default StarRating;