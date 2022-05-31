/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import './LibraryTable.css';
import LibraryTableItem from './LibraryTableItem';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const LibraryTable = ({ logs }) => {
  const [sort, setSort] = useState('asc');
  const [logsToShow, setLogsToShow] = useState(logs);
  const [fieldToSort, setFieldToSort] = useState('asc');
  const navigate = useNavigate();

  useEffect(() => {
    changeSort();
  }, [fieldToSort]);

  const handleSortChange = (field) => {
    setFieldToSort(field);
    if (sort === 'dsc') {
      setSort('asc');
    }
    if (sort === 'asc') {
      setSort('dsc');
    }
    changeSort();
  };

  const directToLog = (id) => {
    navigate(`/logs/${id}`);
  };

  /* sometimes sorts only few ratings for unknown reason after sorting date*/
  const changeSort = () => {
    switch(sort) {

    case 'asc':
      // eslint-disable-next-line no-case-declarations
      const ascSortedLogs = logs.sort((a, b) => {
        if (fieldToSort === 'rating') {
          return b.rating - a.rating;
        }
        if (fieldToSort === 'date') {
          const date1 = new Date(a.date);
          const date2 = new Date(b.date);
          return date1 - date2;
        }
      });
      setLogsToShow(ascSortedLogs);
      break;

    case 'dsc':
      // eslint-disable-next-line no-case-declarations
      const dscSortedLogs = logs.sort((a, b) => {
        if (fieldToSort === 'rating') {
          return a.rating - b.rating;
        }
        if (fieldToSort === 'date') {
          const date1 = new Date(a.date);
          const date2 = new Date(b.date);
          return date2 - date1;
        }
      });
      setLogsToShow(dscSortedLogs);
      break;

    /*change later*/
    default:
      // eslint-disable-next-line no-case-declarations
      const sortedLogs = logs.sort((a, b) => b.rating - a.rating);
      setLogsToShow(sortedLogs);
      break;
    }
  };

  return (
    <div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th onClick={() => handleSortChange('rating')}>Rating</th>
            <th>Type</th>
            <th>Review</th>
            <th onClick={() => handleSortChange('date')}>Date</th>
          </tr>
        </thead>

        <tbody>
          {
            logsToShow.map(log =>
              <tr key={log.id}>
                <LibraryTableItem log={log} directToLog={directToLog}/>
              </tr>
            )
          }
        </tbody>
      </table>

    </div>
  );
};

const LogProp = PropTypes.shape({
  date: PropTypes.string,
  id: PropTypes.number,
  name: PropTypes.string,
  mediaType: PropTypes.string,
  rating: PropTypes.number,
  review: PropTypes.string,
});

LibraryTable.propTypes = {
  logs: PropTypes.arrayOf(LogProp)
};

export default LibraryTable;