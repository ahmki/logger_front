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
      <table className='profile'>
        <thead>
          <tr>
            <th>name</th>
            <th>review</th>
          </tr>
        </thead>
        <tbody>
          {
            userData.logs.map(log =>
              <tr key={log.id}>
                <td>{log.name}</td>
                <td>{log.review}</td>
              </tr>
            )
          }
        </tbody>
      </table>
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