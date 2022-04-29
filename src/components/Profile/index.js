import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserData } from '../../services/userService';
import './Profile.css';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const { id } = useParams();

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

  /* Main rendered JSX */
  const profileView = () => {
    return (
      <div className='profile'>
        <div className='header'>
          entries
        </div>
        <div className='entries'>
          {
            userData.logs.map(log =>
              <div className='entryItem' key={log.id}>
                <div className='entryName'>{log.name}</div>
                <div className='entryReview'>{log.review}</div>
              </div>
            )
          }
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