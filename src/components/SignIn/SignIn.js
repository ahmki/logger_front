import React from 'react';
import * as yup from 'yup';
import './SignIn.css';
import { useNavigate } from 'react-router-dom';
import { setLoggedUser } from '../../reducers/usersReducer';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { displayNotification } from '../../reducers/notificationReducer';

const signInValidationSchema = yup.object().shape({
  username: yup.string()
    .min(2, 'Too short!')
    .required('Username is required'),
  password: yup.string()
    .required('Password is required'),
});

const initialValues = {
  username: '',
  password: '',
};

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /*const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');*/

  const signInHandler = (values) => {

    const { username, password } = values;
    dispatch(setLoggedUser({ username, password }))
      .then(() => {
        /*setUsername('');
        setPassword('');*/
        dispatch(displayNotification({
          message: 'successfully logged in',
          class: 'info'
        }, 4));
        navigate('/');
      })
      .catch(err => {
        console.log('error: ', err);
      });
  };

  return (
    <div className='signInBg'>
      <div className='signIn'>
        <Formik
          initialValues={initialValues}
          onSubmit={signInHandler}
          validationSchema={signInValidationSchema}
        >
          {({ handleSubmit, errors, touched }) => (
            <Form onSubmit={handleSubmit}>

              <div className='inputForm'>
                <Field
                  name="username"
                  type="text"
                  placeholder='Username'
                  /*value={username}
                  onChange={({ target }) => setUsername(target.value)}*/
                />
                {errors.username && touched.username ? (
                  <div>{errors.username}</div>
                ): null }
              </div>

              <div className='inputForm'>
                <Field
                  name="password"
                  type="password"
                  placeholder='Password'
                  /*value={password}
                  onChange={({ target }) => setPassword(target.value)}*/
                />
                {errors.password && touched.password ? (
                  <div>{errors.password}</div>
                ): null }
              </div>

              <div>
                <button type="submit">Sign In</button>
              </div>

            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignIn;