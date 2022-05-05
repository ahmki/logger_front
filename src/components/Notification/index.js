import React from 'react';
import { useSelector } from 'react-redux';
import Notification from './Notification';
import './Notification.css';

const NotificationContainer = () => {
  const notification = useSelector(state => state.notification);

  return (
    <>
      <Notification
        notification={notification}
      />
    </>
  );
};

export default NotificationContainer;