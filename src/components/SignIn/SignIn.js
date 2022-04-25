import React, { useState } from 'react';
import './SignIn.css';
import { setLoggedUser } from '../../reducers/usersReducer';
import { useDispatch } from 'react-redux';

const SignIn = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const signInHandler = (e) => {
    e.preventDefault();

    dispatch(setLoggedUser({ username, password }))
      .catch(err => {
        console.error('error: ', err);
      });

    setUsername('');
    setPassword('');
  }
    
  return (
    <form onSubmit={signInHandler}>
      <div className='inputForm'>
        <input 
          type="text" 
          placeholder='Username'
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div className='inputForm'>
        <input 
          type="password" 
          placeholder='Password'
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
        <div>
          <button type="submit">Sign In</button>
        </div>
      </div>

    </form>
  )
}

export default SignIn;