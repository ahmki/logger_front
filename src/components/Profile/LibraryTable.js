/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import './LibraryTable.css';
import LibraryTableItem from './LibraryTableItem';

// eslint-disable-next-line react/prop-types
const LibraryTable = ({ logs }) => {

  const [sort, setSort] = useState('asc');
  const [logsToShow, setLogsToShow] = useState(logs);
  const [fieldToSort, setFieldToSort] = useState('');
  console.log(fieldToSort);

  useEffect(() => {
    changeSort();
  }, [sort, fieldToSort]);

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

  const changeSort = () => {
    switch(sort) {

    case 'asc':
      // eslint-disable-next-line no-case-declarations
      const ascSortedLogs = logs.sort((a, b) => {
        if (fieldToSort === 'rating' ) {
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
      const dscSortedLogs = logs.sort((a, b) => a.rating - b.rating);
      setLogsToShow(dscSortedLogs);
      break;

    /*change solution later*/
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
                <LibraryTableItem log={log} />
              </tr>
            )
          }
        </tbody>
      </table>

    </div>
  );
};

export default LibraryTable;