import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';
import {
  Menu,
  X,
  Home,
  BookOpen,
  HandMetal,
  BarChart3,
} from "lucide-react";

const navLinks = [
  { to: "/", label: "Home", icon: <Home size={18} /> },
  { to: "/lessons", label: "Lessons", icon: <BookOpen size={18} /> },
  { to: "/practice", label: "Practice", icon: <HandMetal size={18} /> },
  { to: "/progress", label: "Progress", icon: <BarChart3 size={18} /> },
];

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { isLoggedIn, user, logout } = useAuth();

  if (
    location.pathname === "/login" ||
    location.pathname === "/register"
  ) {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className="
          mx-auto mt-4 flex max-w-7xl items-center justify-between
          rounded-[28px] border border-white/20 bg-white/70
          px-6 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-2xl
        "
      >
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-4">
          <div
            className="
              flex h-14 w-14 items-center justify-center rounded-2xl
              bg-gradient-to-br from-blue-600 via-violet-600 to-purple-600
              text-white shadow-lg
            "
          >
            <HandMetal size={26} />
          </div>
          <div>
            <h1
              className="
                text-2xl font-black tracking-tight bg-gradient-to-r
                from-blue-600 to-violet-600 bg-clip-text text-transparent
              "
            >
              SignLearn
            </h1>
            <p className="text-xs font-medium text-slate-500">
              AI Learning Platform
            </p>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-3 lg:flex">
          <ul className="flex items-center gap-2">
            {navLinks.map((link) => {
              const active = location.pathname === link.to;
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`
                      flex items-center gap-2 rounded-2xl px-5 py-3
                      font-semibold transition-all duration-300
                      ${active
                        ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-blue-600'
                      }
                    `}
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* AUTH BUTTONS */}
          <div className="flex gap-2 items-center ml-4">
            {isLoggedIn ? (
              <div className="flex items-center gap-3">
                <span className="font-semibold text-slate-700 text-sm">
                  👋 Hi, {user?.name?.split(' ')[0]}!
                </span>
                <button
                  onClick={logout}
                  className="
                    px-4 py-2 rounded-xl bg-red-500 text-white
                    font-bold hover:bg-red-600 transition-all
                  "
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="
                    px-5 py-2 rounded-2xl border border-slate-200
                    font-semibold text-slate-700 hover:bg-slate-100
                    transition-all duration-300
                  "
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="
                    px-5 py-2 rounded-2xl bg-gradient-to-r from-blue-600
                    to-violet-600 font-bold text-white shadow-lg
                    hover:opacity-90 transition-all duration-300
                  "
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            flex h-12 w-12 items-center justify-center rounded-2xl
            bg-slate-100 text-slate-700 transition-all hover:bg-slate-200 lg:hidden
          "
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`
          overflow-hidden transition-all duration-300 lg:hidden
          ${menuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div
          className="
            mx-4 mt-3 rounded-[28px] border border-white/20
            bg-white/90 p-5 shadow-2xl backdrop-blur-xl
          "
        >
          <ul className="space-y-3">
            {navLinks.map((link) => {
              const active = location.pathname === link.to;
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className={`
                      flex items-center gap-3 rounded-2xl px-5 py-4
                      font-semibold transition-all duration-300
                      ${active
                        ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white'
                        : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                      }
                    `}
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* MOBILE AUTH */}
          <div className="mt-5">
            {isLoggedIn ? (
              <div className="flex flex-col gap-3">
                <p className="text-center font-semibold text-slate-700">
                  👋 Hi, {user?.name?.split(' ')[0]}!
                </p>
                <button
                  onClick={() => { logout(); setMenuOpen(false); }}
                  className="
                    w-full rounded-2xl bg-red-500 py-3 text-center
                    font-bold text-white
                  "
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="
                    rounded-2xl border border-slate-200 py-3
                    text-center font-semibold text-slate-700
                  "
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setMenuOpen(false)}
                  className="
                    rounded-2xl bg-gradient-to-r from-blue-600
                    to-violet-600 py-3 text-center font-bold text-white shadow-lg
                  "
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;