import React from 'react';
import { useSelector } from 'react-redux';
import './NavBar.css';
import NavBarTab from './NavBarTab';

const NavBar = () => {
  const user = useSelector(state => state.user);
  return (
    <div className="taskbar">
      <NavBarTab tabname="home" link="/"/>

      {!user
        ? <NavBarTab tabname="Sign in" link="/signin" />
        : <NavBarTab tabname="Sign out" link="/signout" />
      }
    </div>
  );
}

export default NavBar;