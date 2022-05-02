import React from 'react';
import { useSelector } from 'react-redux';
import './Notification.css';

const Notification = () => {
  const notification = useSelector(state => state.notification);
  const showWhenVisible = notification.display ? '' : 'd-none';

  return (
    <div className={showWhenVisible}>
      <div className={notification.class}>
        {notification.message}
      </div>
    </div>
  );
};

export default Notification;