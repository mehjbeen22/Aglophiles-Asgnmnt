import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-black text-white">
      <div className="flex items-center">
        <img
          className="h-12 w-auto mr-4"
          src="https://img.freepik.com/free-photo/view-3d-cinema-elements_23-2150720822.jpg"
          alt="movieLogo"
        />
        <h1 className="text-2xl font-bold">MOVIE CATALOG</h1>
      </div>

      <Link to="/login" className="text-sm border rounded px-2 py-1">
        SIGN IN
      </Link>
    </nav>
  );
};

export default Navbar;
