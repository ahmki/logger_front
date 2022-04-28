import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBarTab.css';
import PropTypes from 'prop-types';


const NavBarTab = ({ tabname, link }) => {

  return (
    <div className="tab">
      <NavLink
        to={link}
        className={({ isActive }) =>
          isActive ? 'activeLink' : 'link'
        }
      >
        {tabname}
      </NavLink>
    </div>
  );
};

NavBarTab.propTypes = {
  tabname: PropTypes.string,
  link: PropTypes.string
};

export default NavBarTab;