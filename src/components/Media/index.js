import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { displayNotification } from '../../reducers/notificationReducer';
import { getMovieInfo } from '../../services/movieService';
import './Media.css';
import MediaInfo from './MediaInfo';

const Media = () => {
  const [mediaData, setMediaData] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMovieInfo(id);
        setMediaData(data);
      }
      catch(err) {
        dispatch(displayNotification({
          message: 'no movie found by id',
          class: 'error'
        }, 5));
      }
    };
    fetchData();
  }, [id]);

  const mediaView = () => {
    return (
      <MediaInfo
        Title={mediaData.Title}
        Poster={mediaData.Poster}
        Year={mediaData.Year}
        Plot={mediaData.Plot}
        Genre={mediaData.Genre}
      />
    );
  };

  return (
    <div>
      {
        mediaData
          ? mediaView()
          : <div>loading</div>
      }
    </div>
  );
};

export default Media;