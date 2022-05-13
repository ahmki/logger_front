import React from 'react';
import NavBarTab from './NavBarTab';
import PropTypes from 'prop-types';

const ProfileNavBar = ({ id }) => {
  return (
    <div>
      <NavBarTab tabname='profile' link={`/profile/${id}`} />
      <NavBarTab tabname='library' link={`/profile/${id}/library`} />
    </div>
  );
};

ProfileNavBar.propTypes = {
  id: PropTypes.string,
};

export default ProfileNavBar;