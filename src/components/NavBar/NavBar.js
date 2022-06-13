import React from 'react';
import { useSelector } from 'react-redux';
import SearchBar from '../SearchBar';
import './NavBar.css';
import NavBarTab from './NavBarTab';

const NavBar = () => {
  const user = useSelector(state => state.user);

  return (
    <div className='barContainer'>
      <div className="taskbar">
        <SearchBar />
        <NavBarTab tabname="home" link="/"/>

        {!user
          ?
          <>
            <NavBarTab tabname="sign in" link="/signin" />
            <NavBarTab tabname="register" link="/register" />
          </>
          :
          <>
            <NavBarTab tabname="add custom entry" link="/logentry" />
            <NavBarTab tabname="profile" link={`/profile/${user.id}`} />
            <NavBarTab tabname="sign out" link="/signout" />
          </>
        }
      </div>
    </div>
  );
};

export default NavBar;