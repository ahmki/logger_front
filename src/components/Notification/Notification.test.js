/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Notification from './Notification';

test('Notification', () => {

  const testNotification = {
    message: 'testing infomessage',
    class: 'info',
    display: true
  };

  render(<Notification
    notification={testNotification}
  />);

  const notification = screen.getByTestId('notifTest');

  expect(notification).toBeDefined();
});