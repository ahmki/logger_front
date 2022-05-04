import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import SignIn from './components/SignIn';
import LogEntryForm from './components/LogEntry';
import Register from './components/Register';
import SignOut from './components/SignIn/SignOut';
import Profile from './components/Profile';
import Search from './components/Search';
import LogEntryPage from './components/LogEntry/LogEntryPage';
import Home from './components/Home';
import Notification from './components/Notification';
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
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
      <Notification />
      <Routes>
        <Route path="/logs/:id" element={<LogEntryPage />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/logentry" element={<LogEntryForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<Search />} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
