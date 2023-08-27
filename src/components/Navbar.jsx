import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="bg-blue-500 p-4 flex justify-between items-center font-sans">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className=" h-12 w-12 mr-2" />
          <span className="text-white font-800 font-sans text-lg">SMAN 14 Bekasi</span>
        </div>
        <div className="space-x-4 font-500">
          <Link to="/" className="text-white hover:underline hover:font-800 hover:text-gray-600" aria-current="page">
            Home
          </Link>
          <Link to="/About" className="text-white hover:underline hover:font-800 hover:text-gray-600" aria-current="page">
            About
          </Link>
          <Link to="/DataSiswa" className="text-white hover:underline hover:font-800 hover:text-gray-600" aria-current="page">
            Data Siswa
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
