import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { displayNotification } from '../../reducers/notificationReducer';
import { getEntry } from '../../services/logService';
import Entry from '../Entry';

const LogEntryPage = () => {
  const [logEntry, setLogEntry] = useState(null);
  const [userIsOwner, setUserIsOwner] = useState(false);
  const id = useParams().id;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.user);

  /* COULD MAKE A CUSTOM HOOK */
  useEffect(() => {

    const fetchEntry = async () => {
      try {
        const fetchedEntry = await getEntry(id);
        setLogEntry(fetchedEntry);

        if(fetchedEntry.userId === user.id) {
          setUserIsOwner(true);
        }
      }
      catch(err) {
        navigate(-1);
        dispatch(displayNotification({
          message: 'no logs found by this id',
          class: 'error'
        }, 5));
      }
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
        <Entry log={logEntry} showOptions={userIsOwner}/>
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