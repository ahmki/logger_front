import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

const LibraryTableItem = ({ log, directToLog }) => {
  const dateFormatted = format(new Date(log.date), 'dd/MM/yyyy');

  return (
    <>
      <td>{log.name}</td>
      <td>{log.rating}</td>
      <td>{log.mediaType}</td>
      <td>{log.review}</td>
      <td>{dateFormatted}</td>
      <td>
        <button onClick={() => directToLog(log.id)}>
          see
        </button>
      </td>
    </>
  );
};

LibraryTableItem.propTypes = {
  directToLog: PropTypes.func,
  log: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    review: PropTypes.string,
    mediaType: PropTypes.string,
    date: PropTypes.string,
    rating: PropTypes.number,
  })
};

export default LibraryTableItem;