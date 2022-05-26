import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useProfile from '../../hooks/useProfile';
import Entry from '../Entry';
import ProfileNavBar from '../NavBar/ProfileNavBar';
import './Profile.css';

const Profile = () => {
  const { id } = useParams();
  const profile = useProfile(id);
  const navigate = useNavigate();

  const directToLog = (id) => {
    navigate(`/logs/${id}`);
  };

  /* Main rendered JSX */
  const profileView = () => {
    return (
      <div className='profileBg'>
        <div className='profile'>
          <div className='profileNav'>
            <ProfileNavBar id={id} />
          </div>
          <div className='entries'>
            {
              profile.logs.map(log =>
                <div className='entryContainer' key={log.id}>
                  <button onClick={() => directToLog(log.id)}>
                      see
                  </button>
                  <Entry log={log} showOptions={false}/>
                </div>
              )
            }
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