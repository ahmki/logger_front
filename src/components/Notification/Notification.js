/* eslint-disable react/prop-types */
import React from 'react';
import './Notification.css';

const Notification = ({ notification }) => {
  const { message } = notification;
  const showWhenVisible = notification.display ? '' : 'd-none';

  return (
    <div className={showWhenVisible}>
      <div data-testid='notifTest' className={notification.class}>
        {message}
      </div>
    </div>
  );
};

export default Notification;