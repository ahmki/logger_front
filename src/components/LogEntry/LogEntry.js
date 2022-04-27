import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEntry } from '../../services/logService';

const LogEntry = () => {
  const [logEntry, setLogEntry] = useState({});
  const id = useParams().id;

  useEffect(() => {

    const fetchEntry = async () => {
      const fetchedEntry = await getEntry(id);
      setLogEntry(fetchedEntry);
    };

    fetchEntry();
  }, [id]);

  return (
    <div>
      <div>
        {logEntry.name}
      </div>
      <div>
        {logEntry.review}
      </div>
      <div>
        {logEntry.mediaType}
      </div>
    </div>
  );
};

export default LogEntry;