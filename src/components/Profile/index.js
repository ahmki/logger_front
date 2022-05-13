import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { displayNotification } from '../../reducers/notificationReducer';
import { setProfileData } from '../../reducers/profileReducer';
import Entry from '../Entry';
import ProfileNavBar from '../NavBar/ProfileNavBar';
import './Profile.css';

const Profile = () => {
  const { id } = useParams();
  const profile = useSelector(state => state.profile);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /* Hook gets the profile data from API backend incase redux doesn't have
  cached profile or if cached profile is a wrong profile
  */
  useEffect(() => {
    const fetchUser = async () => {
      // id from url parameter is of type string, converted to number here
      if (!profile || profile.id !== parseFloat(id)) {
        try {
          dispatch(setProfileData(id));
        }
        catch(err) {
          dispatch(displayNotification({
            message: 'couldnt get users data',
            class: 'error'
          }, 4));
        }
      }
    };

    fetchUser();
  }, [id]);

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