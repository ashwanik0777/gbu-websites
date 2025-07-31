 import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = ({ hoverColor = '#c7d2fe', neighborColor = '#a5b4fc', normalColor = 'black' }) => {

  const [aboutOpen, setAboutOpen] = useState(false);
  const [academicOpen, setAcademicOpen] = useState(false);

  const navLinkBase = `transition-colors duration-300 font-bold text-lg px-4 py-2 rounded-lg`;
  const hoverBox =
    'hover:bg-white/10 hover:backdrop-blur-md hover:border hover:border-white/20 hover:text-indigo-100 transition-all duration-300 px-4 py-2 rounded-lg';

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 h-20 w-[80%] bg-white/10 backdrop-blur-md border border-white/20 flex justify-between items-center px-6 rounded-xl z-50 shadow-xl">
      {/* University Logo + Name */}
      <div className="flex items-center gap-4">
        <img
          src="/assets/logo.webp"
          alt="GBU Logo"
          className="h-12 w-12 rounded-full border border-white/30"
        />
        <div>
          <div className="text-lg font-bold text-white">GAUTAM BUDDHA UNIVERSITY</div>
          <div className="text-xs text-white/80 hidden sm:block">
            An Ultimate Destination for Higher Learning
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex space-x-4 items-center text-white text-base">
        <Link to="/" className={navLinkBase} style={{ color: normalColor }}>
          <span className={hoverBox}>Home</span>
        </Link>
        <Link to="/admission" className={navLinkBase} style={{ color: normalColor }}>
          <span className={hoverBox}>Admission</span>
        </Link>

        {/* About Us Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setAboutOpen(true)}
          onMouseLeave={() => setAboutOpen(false)}
        >
          <div className={`${navLinkBase} cursor-pointer`} style={{ color: normalColor }}>
            <span className={`${hoverBox} flex items-center justify-between`}>About Us ▾</span>
          </div>
          {aboutOpen && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-2 shadow-lg z-50">
              <Link
                to="/vision-mission"
                className="block py-2 px-3 font-bold hover:bg-white/20 hover:text-indigo-100 rounded-md transition"
              >
                Vision & Mission
              </Link>
              <Link
                to="/administration"
                className="block py-2 px-3 font-bold hover:bg-white/20 hover:text-indigo-100 rounded-md transition"
              >
                Administration
              </Link>
              <Link
                to="/campus-life"
                className="block py-2 px-3 font-bold hover:bg-white/20 hover:text-indigo-100 rounded-md transition"
              >
                Campus Life
              </Link>
            </div>
          )}
        </div>

        {/* Academic Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setAcademicOpen(true)}
          onMouseLeave={() => setAcademicOpen(false)}
        >
          <div className={`${navLinkBase} cursor-pointer`} style={{ color: normalColor }}>
            <span className={`${hoverBox} flex items-center justify-between`}>Academic ▾</span>
          </div>
          {academicOpen && (
            <div className="absolute top-full left-0 mt-2 w-56 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-2 shadow-lg z-50">
              <Link
                to="/programs"
                className="block py-2 px-3 font-bold hover:bg-white/20 hover:text-indigo-100 rounded-md transition"
              >
                Programs
              </Link>
              <Link
                to="/schools-departments"
                className="block py-2 px-3 font-bold hover:bg-white/20 hover:text-indigo-100 rounded-md transition"
              >
                Schools & Departments
              </Link>
              <Link
                to="/academic-calendar"
                className="block py-2 px-3 font-bold hover:bg-white/20 hover:text-indigo-100 rounded-md transition"
              >
                Academic Calendar
              </Link>
            </div>
          )}
        </div>

        <Link to="/placements" className={navLinkBase} style={{ color: normalColor }}>
          <span className={hoverBox}>Placements</span>
        </Link>
        <Link to="/contact" className={navLinkBase} style={{ color: normalColor }}>
          <span className={hoverBox}>Contact</span>
        </Link>

        {/* CTA Button */}
        <Link
          to="/login"
          className="bg-indigo-600 text-white px-5 py-2 rounded-xl font-bold hover:bg-indigo-500 transition-all duration-300"
        >
          My GBU Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
