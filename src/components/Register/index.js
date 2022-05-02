import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import './Register.css';

const registerSchema = yup.object().shape({
  username: yup.string()
    .min(3, 'Username needs to be atleast 3 characters long!')
    .max(15, 'Username cant exceed 15 characters!')
    .required('Username is required'),
  password: yup.string()
    .min(5, 'Password must be atleast 5 characters long!')
    .max(30, 'Password cant exceed 30 characters!')
    .required('Password is required'),
  passwordConfirm: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords dont match!')
    .required('Password confirmation is required!')
});

const initialValues = {
  username: '',
  password: '',
  passwordConfirm: ''
};

const Register = () => {

  const registerHandler = (values) => {
    console.log('register', values);
  };

  return (
    <div className='registerBg'>
      <div className='register'>
        <Formik
          initialValues={initialValues}
          onSubmit={registerHandler}
          validationSchema={registerSchema}
        >
          {({ handleSubmit, errors, touched }) => (
            <Form onSubmit={handleSubmit}>

              <div className='inputForm'>
                <Field
                  name='username'
                  type='text'
                  placeholder='Username'
                />
              </div>
              {errors.username && touched.username ? (
                <div>{errors.username}</div>
              ): null }

              <div className='inputForm'>
                <Field
                  name='password'
                  type='password'
                  placeholder='Password'
                />
              </div>
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ): null }

              <div className='inputForm'>
                <Field
                  name='passwordConfirm'
                  type='password'
                  placeholder='Confirm your password'
                />
              </div>
              {errors.passwordConfirm && touched.passwordConfirm ? (
                <div>{errors.passwordConfirm}</div>
              ): null }

              <div>
                <button type="submit">Register</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;