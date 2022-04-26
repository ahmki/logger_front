import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import SignIn from './components/SignIn';
import SignOut from './components/SignIn/SignOut';
import Home from './components/Home';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setUser } from './reducers/usersReducer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const loggedUserLs = window.localStorage.getItem('loggedUser');
    if (loggedUserLs) {
      dispatch(setUser(JSON.parse(loggedUserLs)));
    } 
  }, [dispatch])

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
