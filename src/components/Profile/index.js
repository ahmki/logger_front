import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserData } from '../../services/userService';

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

  const dataView = () => {
    return (
      <div>
        {
          userData.logs.map(log =>
            <li key={log.id}>
              {log.name}
            </li>
          )
        }
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
        : dataView()
      }
    </>
  );
};

export default Profile;