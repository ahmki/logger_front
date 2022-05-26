import React from 'react';
import ProfileNavBar from '../NavBar/ProfileNavBar';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LibraryTable from './LibraryTable';

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
          {
            profile
              ? <LibraryTable logs={profile.logs} />
              : <div>loading</div>
          }
        </div>

      </div>
    </div>
  );
};


export default Library;