/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import Entry from './index';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('Entry', () => {

  const testLog = {
    id: 4,
    name: 'tester',
    review: 'good',
    mediaType: 'movie',
    /* Not the format dates are sent from backend, still should be formatted correctly */
    date: '2016/04/20'
  };

  render(<Entry log={testLog} />);

  const name = screen.getByText('tester');
  const review = screen.getByText('good');
  const media = screen.getByText('movie');
  const date = screen.getByText('20/04/2016');

  expect(name).toBeDefined();
  expect(review).toBeDefined();
  expect(media).toBeDefined();
  expect(date).toBeDefined();
});