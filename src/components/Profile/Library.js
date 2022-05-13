import React from 'react';
import ProfileNavBar from '../NavBar/ProfileNavBar';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Library = () => {
  const { id } = useParams();
  const profile = useSelector(state => state.profile);

  return (
    <div className='profileBg'>
      <div className='profile'>
        <div className='profileNav'>
          <ProfileNavBar id={id} />
        </div>

        <div>
          {profile.username}
        </div>

      </div>
    </div>
  );
};


export default Library;