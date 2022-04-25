import React from 'react';
import './NavBar.css';
import NavBarTab from './NavBarTab';

const NavBar = () => {
  return (
    <div className="taskbar">
      <NavBarTab tabname="home" link="/"/>
      <NavBarTab tabname="Sign in" link="/signin" />
    </div>
  );
}

export default NavBar;