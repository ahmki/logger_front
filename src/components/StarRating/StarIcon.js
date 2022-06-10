import React from 'react';
import PropTypes from 'prop-types';
import { BsStar, BsStarFill } from 'react-icons/bs';

const StarIcon = ({ fill }) => {
  return (
    <div>
      {
        fill
          ? <BsStarFill />
          : <BsStar />
      }
    </div>
  );
};

StarIcon.propTypes = {
  fill: PropTypes.bool,
};

export default StarIcon;