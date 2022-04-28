import React from 'react';
import { Formik, Form, Field } from 'formik';
import { addEntry } from '../../services/logService';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const initialValues = {
  name: '',
  review: '',
  mediaType: 'movie',
};

const LogEntryForm = () => {
  const user = useSelector(state => state.user);
  const navigate = useNavigate();

  const entryHandler = async (values) => {

    try {
      const entry = await addEntry(values, user);
      navigate(`/logs/${entry.id}`);
    }
    catch(err) {
      console.log('error: ', err);
    }
  };

  return (

    <Formik
      initialValues={initialValues}
      onSubmit={entryHandler}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <div className='inputForm'>
            <Field
              name="name"
              type="text"
              placeholder="Name"
            />
          </div>

          <div className='inputForm'>
            <Field
              name="review"
              type="text"
              placeholder="review"
            />
          </div>

          <div className='inputForm'>
            <Field
              name="mediaType"
              type="text"
              placeholder="Type e.g movie, tv"
            />
          </div>

          <div>
            <button type="submit">Add entry</button>
          </div>
        </Form>
      )}

    </Formik>
  );
};

export default LogEntryForm;
