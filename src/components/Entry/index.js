import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { deleteEntry, editEntry } from '../../services/logService';
import { displayNotification } from '../../reducers/notificationReducer';
import './Entry.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';

const Entry = ({ log, showOptions })  => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [editView, setEditView] = useState(false);
  /* Review needs state because of the possibility of editing it */
  const [reviewState, setReviewState] = useState('');

  const { id, name, review, mediaType, date } = log;
  const dateFormatted = format(new Date(date), 'dd/MM/yyyy');

  // Hook to rerender the review after editing it.
  useEffect(() => {
    setReviewState(review);
  }, [review]);

  const handleDelete = async () => {
    try {
      await deleteEntry(id);
      dispatch(displayNotification({
        message: 'successfully deleted entry!',
        class: 'info'
      }, 5));

      if (location.pathname === `/logs/${id}`) {
        navigate('/');
      }
    }
    catch (err) {
      dispatch(displayNotification({
        message: 'error deleting',
        class: 'error'
      }, 5));
    }
  };

  const changeEditView = () => {
    setEditView(true);
  };

  const submitEdit = async ({ reviewEdit }) => {
    try {
      await editEntry(id, reviewEdit);
      setReviewState(reviewEdit);
      setEditView(false);
      dispatch(displayNotification({
        message: 'successfully edited',
        class: 'info'
      }, 3));
    }
    catch(err) {
      dispatch(displayNotification({
        message: 'something went wrong with the edit',
        class: 'error'
      }, 4));
    }
  };

  /* JSX for the input form when editing is enabled */
  const editInput = () => {
    const initialValues = {
      reviewEdit: review
    };

    return (
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={submitEdit}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Field
                className='reviewEdit'
                name='reviewEdit'
                type='text'
              />
              <button type='submit'>
              OK
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  };

  const entryButtons = () => {
    return (
      <div className='entryButtons'>
        <button className='deleteBtn' onClick={handleDelete}>
          Delete
        </button>
        <button className='editBtn' onClick={changeEditView}>
          Edit review
        </button>
      </div>
    );
  };

  return (
    <div className='entryItem'>

      <div className='entryItemInfo' key={id}>
        <div className='entryName'>{name}</div>
        <div className='entryMedia'>{mediaType}</div>
        <div className='entryDate'>{dateFormatted}</div>
      </div>

      <div className='entryItemReview'>
        {
          editView
            ? editInput()
            : <div className='entryReview'>{reviewState}</div>
        }
      </div>

      {
        showOptions
          ? entryButtons()
          : <div></div>
      }

    </div>
  );
};

Entry.propTypes = {
  showOptions: PropTypes.bool,
  log: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    review: PropTypes.string,
    mediaType: PropTypes.string,
    date: PropTypes.string
  })
};

export default Entry;