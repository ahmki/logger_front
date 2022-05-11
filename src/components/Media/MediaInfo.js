import React from 'react';
import PropTypes from 'prop-types';

const MediaInfo = ({ Title, Poster, Year, Plot, Director, Genre }) => {
  return (
    <div className='mediaWrapper'>
      <div className='mediaPoster'>
        <img src={Poster}></img>
      </div>
      <div className='mediaInfo'>
        <h2>{Title}</h2>
        <div className='mediaYear'>{Year}</div>
        <div className='mediaPlot'>{Plot}</div>
        <div className='mediaDirector'>{Director}</div>
        <span>{Genre}</span>
      </div>
    </div>
  );
};

MediaInfo.propTypes = {
  Title: PropTypes.string,
  Poster: PropTypes.string,
  Year: PropTypes.string,
  Plot: PropTypes.string,
  Director: PropTypes.string,
  Genre: PropTypes.string,
};

export default MediaInfo;