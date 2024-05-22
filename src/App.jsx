 import React from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import MoviesCatalog from './components/MoviesCatalog';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes> */}
        <MoviesCatalog />
      </Router>
    </>
  );
};

export default App;
