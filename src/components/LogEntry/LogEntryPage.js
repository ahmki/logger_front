import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEntry } from '../../services/logService';
import Entry from '../Entry';

const LogEntryPage = () => {
  const [logEntry, setLogEntry] = useState(null);
  const id = useParams().id;

  useEffect(() => {

    const fetchEntry = async () => {
      const fetchedEntry = await getEntry(id);
      setLogEntry(fetchedEntry);
    };

    fetchEntry();
  }, [id]);

  const noLogView = () => {
    return (
      <div>
        loading..
      </div>
    );
  };

  const logView = () => {
    return (
      <div>
        <Entry log={logEntry} />
      </div>
    );
  };

  return (
    <div>
      {
        logEntry ? logView() : noLogView()
      }
    </div>
  );
};

export default LogEntryPage;