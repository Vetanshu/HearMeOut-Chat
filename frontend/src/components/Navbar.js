import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-black text-2xl font-bold">HearMeOut</Link>
        <div className="space-x-4">
          <Link to="/about" className="text-black hover:text-purple-200 font-bold">About Us</Link>
          <Link to="/contact" className="text-black hover:scale-100 font-bold">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;