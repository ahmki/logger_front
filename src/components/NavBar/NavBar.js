import React from 'react';
import { useSelector } from 'react-redux';
import SearchBar from '../SearchBar';
import './NavBar.css';
import NavBarTab from './NavBarTab';

const NavBar = () => {
  const user = useSelector(state => state.user);

  return (
    <div className="taskbar">
      <SearchBar />
      <NavBarTab tabname="home" link="/"/>

      {!user
        ?
        <>
          <NavBarTab tabname="Sign in" link="/signin" />
          <NavBarTab tabname="Register" link="/register" />
        </>
        :
        <>
          <NavBarTab tabname="Add entry" link="/logentry" />
          <NavBarTab tabname="Profile" link={`/profile/${user.id}`} />
          <NavBarTab tabname="Sign out" link="/signout" />
        </>
      }
    </div>
  );
};

export default NavBar;