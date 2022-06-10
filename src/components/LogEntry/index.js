import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { addEntry } from '../../services/logService';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { displayNotification } from '../../reducers/notificationReducer';
import './LogEntryForm.css';
import StarRating from '../StarRating';


const LogEntryForm = () => {
  const user = useSelector(state => state.user);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /* Set forms initial values from parameters */
  const { title, type } = useParams();

  const initialName = title !== undefined ? title : '';
  const initialType = type !== undefined ? type : '';
  const initialValues = {
    name: `${initialName}`,
    review: '',
    rating: '',
    mediaType: `${initialType}`,
  };

  /* StarRating handling functions */
  const onMouseEnter = (index) => {
    setHoverRating(index);
  };
  const onMouseLeave = () => {
    setHoverRating(0);
  };
  const onSaveRating = (index) => {
    setRating(index);
  };

  const entryHandler = async (values) => {

    try {
      const finalValues = {
        ...values,
        rating: rating
      };
      const entry = await addEntry(finalValues, user);
      dispatch(displayNotification({
        message: 'added log entry',
        class: 'info'
      }, 5));
      navigate(`/logs/${entry.id}`);
    }
    catch(err) {
      console.log('error: ', err);
    }
  };

  return (
    <div className='formContainer'>
      <Formik
        initialValues={initialValues}
        onSubmit={entryHandler}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div className='inputForm'>
              <Field
                className="nameForm"
                name="name"
                type="text"
                placeholder="Name"
              />
            </div>

            <div className='inputForm'>
              <Field
                className="reviewForm"
                name="review"
                type="text"
                placeholder="review"
              />
            </div>

            <div className='inputForm'>
              <Field
                className="mediaForm"
                name="mediaType"
                type="text"
                placeholder="Type e.g movie, series"
              />
            </div>
            <div className='starContainer'>
              {[1, 2, 3, 4, 5].map((index) => {
                return (
                  <div key={index}>
                    <StarRating
                      index={index}
                      rating={rating}
                      hoverRating={hoverRating}
                      onMouseEnter={onMouseEnter}
                      onMouseLeave={onMouseLeave}
                      onSaveRating={onSaveRating}
                    />
                  </div>
                );
              })}
            </div>

            <div>
              <button type="submit">Add entry</button>
            </div>
          </Form>
        )}

      </Formik>
    </div>
  );
};

export default LogEntryForm;
