import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieInfo } from '../../services/movieService';

const Media = () => {
  const [mediaData, setMediaData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMovieInfo(id);
        setMediaData(data);
      }
      catch(err) {
        console.log('err :>> ', err);
      }
    };
    fetchData();
  }, [id]);

  const mediaView = () => {
    return (
      <>
        {mediaData.Title}
      </>
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