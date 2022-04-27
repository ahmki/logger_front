import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../reducers/usersReducer';

const SignOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signOutHandler = async () => {
    await localStorage.removeItem('loggedUser');
    dispatch(setUser(null));
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