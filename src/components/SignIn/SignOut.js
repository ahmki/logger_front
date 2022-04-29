import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { displayNotification } from '../../reducers/notificationReducer';
import { setUser } from '../../reducers/usersReducer';

const SignOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signOutHandler = async () => {
    await localStorage.removeItem('loggedUser');
    dispatch(setUser(null));
    dispatch(displayNotification({
      message: 'successfully logged out',
      class: 'info'
    }, 5));
    navigate('/');
  };

  useEffect(() => {
    signOutHandler();
  });

  return (
    <>
      <div>logging out...</div>
    </>
  );
};

export default SignOut;