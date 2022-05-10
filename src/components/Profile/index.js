import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { displayNotification } from '../../reducers/notificationReducer';
import { getUserData } from '../../services/userService';
import Entry from '../Entry';
import './Profile.css';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /* Needs some fixing with dependencies so deleting makes rerender happen
  Current fix: deleted buttons on profile
  */
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const fetchedUser = await getUserData(id);
        setUserData(fetchedUser);
      }
      catch(err) {
        dispatch(displayNotification({
          message: 'couldnt get users data',
          class: 'error'
        }, 4));
      }
    };

    fetchUser();
  }, []);

  const directToLog = (id) => {
    navigate(`/logs/${id}`);
  };

  /* Main rendered JSX */
  const profileView = () => {
    return (
      <div className='profileBg'>
        <div className='profile'>
          <div className='header'>
            entries
          </div>
          <div className='entries'>
            {
              userData.logs.map(log =>
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
      {!userData
        ? loadView()
        : profileView()
      }
    </>
  );
};

export default Profile;