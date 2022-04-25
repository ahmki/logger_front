import React from 'react';
import './NavBar.css';
import NavBarTab from './NavBarTab';

const NavBar = () => {
  return (
    <div className="taskbar">
      <div>
        <NavBarTab tabname="asd" />
      </div>
    </div>
  );
}

export default NavBar;