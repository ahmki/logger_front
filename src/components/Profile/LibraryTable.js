/* eslint-disable react/prop-types */
import React from 'react';
import './LibraryTable.css';
import LibraryTableItem from './LibraryTableItem';

// eslint-disable-next-line react/prop-types
const LibraryTable = ({ logs }) => {
  return (
    <div>

      <table>
        <thead>
          <tr>
            <th>header</th>
          </tr>
        </thead>

        <tbody>
          {
            logs.map(log =>
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