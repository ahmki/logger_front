import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getUserData } from '../../services/userService';
import Entry from '../Entry';
import './Profile.css';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const fetchedUser = await getUserData(id);
        setUserData(fetchedUser);
      }
      catch(err) {
        console.log('error: ', err);
      }
    };

    fetchUser();
  }, [id]);

  const directToLog = () => {
    navigate('/logs/1');
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
                <div key={log.id}>
                  <button onClick={directToLog}>
                      see
                  </button>
                  <Entry log={log} />
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