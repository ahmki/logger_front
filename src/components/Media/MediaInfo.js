import React from 'react';
import PropTypes from 'prop-types';
import { generatePath, useNavigate } from 'react-router-dom';

const MediaInfo = ({ Title, Poster, Year, Plot, Director, Genre, Type }) => {
  const navigate = useNavigate();

  const navigateToEntryForm = () => {
    navigate(
      generatePath('/logentry/:title/:type', {
        title: `${Title}`,
        type: `${Type}`
      })
    );
  };

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
        <button onClick={navigateToEntryForm}>add to logs</button>
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
  Type: PropTypes.string,
};

export default MediaInfo;