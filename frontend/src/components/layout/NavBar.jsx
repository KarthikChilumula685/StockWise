import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const isLoggedIn = !!localStorage.getItem('token'); // simulate login

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">
            <Link to="/">StockWise</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
            <Link to="/" className="hover:text-blue-600 transition">Home</Link>
            <Link to="/about" className="hover:text-blue-600 transition">About</Link>

            {isLoggedIn ? (
              <>
                <Link to="/dashboard" className="hover:text-blue-600 transition">Dashboard</Link>
                <Link to="/portfolio" className="hover:text-blue-600 transition">Portfolio</Link>
                <button
                  onClick={handleLogout}
                  className="text-red-500 hover:text-red-600 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="hover:text-blue-600 transition">Login</Link>
                <Link
                  to="/signup"
                  className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Hamburger Icon (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}
                viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 py-4 space-y-3 shadow-md text-gray-700 font-medium">
          <Link to="/" className="block hover:text-blue-600" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className="block hover:text-blue-600" onClick={() => setMenuOpen(false)}>About</Link>

          {isLoggedIn ? (
            <>
              <Link to="/dashboard" className="block hover:text-blue-600" onClick={() => setMenuOpen(false)}>Dashboard</Link>
              <Link to="/portfolio" className="block hover:text-blue-600" onClick={() => setMenuOpen(false)}>Portfolio</Link>
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="block text-red-500"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="block hover:text-blue-600" onClick={() => setMenuOpen(false)}>Login</Link>
              <Link
                to="/signup"
                className="block bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition"
                onClick={() => setMenuOpen(false)}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
