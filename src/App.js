import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import SignIn from './components/SignIn';
import Home from './components/Home';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector(state => state.user);
  console.log('user', user);
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
