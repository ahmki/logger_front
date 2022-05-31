import React from 'react';
import { useParams } from 'react-router-dom';
import useProfile from '../../hooks/useProfile';
import ProfileNavBar from '../NavBar/ProfileNavBar';
import './Profile.css';

const Profile = () => {
  const { id } = useParams();
  const profile = useProfile(id);

  /* Main rendered JSX */
  const profileView = () => {
    return (
      <div className='profileBg'>
        <div className='profile'>
          <div className='profileNav'>
            <ProfileNavBar id={id} />
          </div>
          <div className='userInfo'>
            {profile.username}
          </div>
          <div className='activity'>

          </div>
        </div>
      </div>
    );
  };

  const loadView = () => {
    return (
      <div>
        loading...
      </div>
    );
  };

  return (
    <>
      {!profile
        ? loadView()
        : profileView()
      }
    </>
  );
};

export default Profile;