import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home', icon: '🏠' },
  { to: '/lessons', label: 'Lessons', icon: '📚' },
  { to: '/practice', label: 'Practice', icon: '🤟' },
  { to: '/progress', label: 'Progress', icon: '📊' },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="bg-primary text-white px-6 py-4 flex items-center justify-between shadow-lg"
    >
      <Link to="/" aria-label="SignLearn Home" className="text-2xl font-bold tracking-tight">
        🤟 SignLearn
      </Link>

      <ul className="flex gap-6 list-none" role="menubar">
        {navLinks.map(link => (
          <li key={link.to} role="none">
            <Link
              to={link.to}
              role="menuitem"
              aria-current={location.pathname === link.to ? 'page' : undefined}
              className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors
                ${location.pathname === link.to
                  ? 'bg-white text-primary font-bold'
                  : 'hover:bg-blue-700'
                }`}
            >
              <span aria-hidden="true">{link.icon}</span>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;