import React from 'react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';

const StarRating = () => {
  return (
    <div>
      <h2>
        <BsStar />
        <BsStarFill />
        <BsStarHalf />
      </h2>
    </div>
  );
};

export default StarRating;