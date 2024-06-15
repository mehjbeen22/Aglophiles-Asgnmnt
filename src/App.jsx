import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import MoviesCatalog from './components/MoviesCatalog';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const loginTrue = localStorage.getItem('login');
  const [loginRedirect, setLoginRedirect] = useState(loginTrue);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Router>
        <Navbar />
        <Routes>
          {loginRedirect ? (
            <Route path="/" element={<MoviesCatalog />} />
          ) : (
            <Route path="/" element={<Signup />} />
          )}
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
