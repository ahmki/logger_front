import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBarTab.css';

const NavBarTab = ({ tabname, link }) => {

  return (
    <div className="tab">
      <NavLink className="link" to={link}>{tabname}</NavLink>
    </div>
  )
}

export default NavBarTab;