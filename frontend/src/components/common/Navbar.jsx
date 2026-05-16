import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home', icon: '🏠' },
  { to: '/lessons', label: 'Lessons', icon: '📚' },
  { to: '/practice', label: 'Practice', icon: '🤟' },
  { to: '/progress', label: 'Progress', icon: '📊' },
];

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="sticky top-0 z-50 backdrop-blur-xl
      bg-white/70 border-b border-white/20 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            to="/"
            aria-label="SignLearn Home"
            className="flex items-center gap-3 group"
          >
            <div
              className="w-12 h-12 rounded-2xl bg-gradient-to-br
              from-blue-600 to-purple-600 flex items-center
              justify-center text-2xl shadow-lg
              group-hover:scale-105 transition"
            >
              🤟
            </div>

            <div className="leading-tight">
              <h1
                className="text-2xl font-black tracking-tight
                bg-gradient-to-r from-blue-600 to-purple-600
                bg-clip-text text-transparent"
              >
                SignLearn
              </h1>

              <p className="text-xs text-gray-500 font-medium">
                AI Learning Platform
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul
            className="hidden md:flex items-center gap-2"
            role="menubar"
          >
            {navLinks.map(link => {
              const active = location.pathname === link.to;

              return (
                <li key={link.to} role="none">
                  <Link
                    to={link.to}
                    role="menuitem"
                    aria-current={active ? 'page' : undefined}
                    className={`
                      relative flex items-center gap-2
                      px-5 py-3 rounded-2xl
                      font-semibold transition-all duration-300
                      ${active
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                      }
                    `}
                  >
                    <span className="text-lg">{link.icon}</span>
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className="px-5 py-2.5 rounded-2xl
              border border-gray-300 text-gray-700
              font-semibold hover:border-blue-500
              hover:text-blue-600 transition-all"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-5 py-2.5 rounded-2xl
              bg-gradient-to-r from-blue-600 to-purple-600
              text-white font-bold shadow-lg
              hover:scale-105 hover:shadow-xl
              transition-all duration-300"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="md:hidden w-11 h-11 rounded-xl
            bg-gray-100 text-2xl text-gray-700
            hover:bg-gray-200 transition
            focus-visible:ring-4 focus-visible:ring-yellow-400"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div
          className="px-6 pb-6 pt-2 bg-white/90
          backdrop-blur-xl border-t border-gray-100"
        >
          <ul className="flex flex-col gap-3" role="menu">
            {navLinks.map(link => {
              const active = location.pathname === link.to;

              return (
                <li key={link.to} role="none">
                  <Link
                    to={link.to}
                    role="menuitem"
                    onClick={() => setMenuOpen(false)}
                    className={`
                      flex items-center gap-3
                      px-5 py-4 rounded-2xl
                      font-semibold transition-all
                      ${active
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }
                    `}
                  >
                    <span className="text-xl">{link.icon}</span>
                    {link.label}
                  </Link>
                </li>
              );
            })}

            {/* Mobile Buttons */}
            <div className="flex gap-3 mt-4">
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="flex-1 text-center py-3 rounded-2xl
                border border-gray-300 text-gray-700
                font-semibold"
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="flex-1 text-center py-3 rounded-2xl
                bg-gradient-to-r from-blue-600 to-purple-600
                text-white font-bold shadow-lg"
              >
                Register
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;