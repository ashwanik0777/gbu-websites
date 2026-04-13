import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileOpenMenus, setMobileOpenMenus] = useState({});
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRefs = useRef({});

  const toggleMenu = (menuKey) => {
    setOpenMenu((prev) => (prev === menuKey ? null : menuKey));
  };

  const toggleMobileMenu = (menuKey) => {
    setMobileOpenMenus((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey],
    }));
  };

  const handleClickOutside = (event) => {
    const isClickInsideAnyMenu = Object.values(menuRefs.current).some((ref) =>
      ref?.contains(event.target),
    );
    if (!isClickInsideAnyMenu) setOpenMenu(null);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        setMobileOpenMenus({});
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const routes = {
    home: "/schools/ict",
    faculty: "/schools/ict/faculty",
    about: {
      dean: "/schools/ict/about/dean",
      coeidrone: "/schools/ict/about/coeidrone",
      cyber: "/schools/ict/about/cyber",
      coeiraem: "/schools/ict/about/coeiraem",
      board: "/schools/ict/about/board",
      staff: "/schools/ict/about/staff",
      labs: "/schools/ict/about/labs",
      activities: "/schools/ict/about/activities",
    },
    departments: {
      cse: "/schools/ict/departments/cse",
      it: "/schools/ict/departments/it",
      ece: "/schools/ict/departments/ece",
    },
    placement: "/schools/ict/placement",
    research: {
      profile: "/schools/ict/research/profile",
      consultancy: "/schools/ict/research/consultancy",
      scholars: "/schools/ict/research/scholars",
      projects: "/schools/ict/research/projects",
      patents: "/schools/ict/research/patents",
    },
    contact: "/schools/ict/contact",
  };

  const dropdownMenus = [
    {
      key: "about",
      label: "About Us",
      items: [
        { label: "Dean's Message", href: routes.about.dean },
        { label: "USICT COEIDrone Technologies", href: routes.about.coeidrone },
        { label: "USICT Cyber Security Lab", href: routes.about.cyber },
        { label: "USICT COEIRAEM", href: routes.about.coeiraem },
        { label: "USICT Board of Studies", href: routes.about.board },
        { label: "USICT Staff Members", href: routes.about.staff },
        { label: "USICT Laboratories", href: routes.about.labs },
        { label: "USICT Activities", href: routes.about.activities },
      ],
    },
    {
      key: "departments",
      label: "Departments", // short label for desktop
      fullLabel: "Departments & Academic Programs", // full label for drawer
      items: [
        {
          label: "Computer Science & Engineering",
          href: routes.departments.cse,
        },
        { label: "Information Technology", href: routes.departments.it },
        { label: "Electronic & Communication", href: routes.departments.ece },
      ],
    },
    {
      key: "research",
      label: "Research",
      items: [
        { label: "Research Area and Profile", href: routes.research.profile },
        {
          label: "Training and Consultancy",
          href: routes.research.consultancy,
        },
        { label: "Research Scholars", href: routes.research.scholars },
        { label: "Research Projects", href: routes.research.projects },
        { label: "Patents", href: routes.research.patents },
      ],
    },
  ];

  return (
    <>
      {/* Top accent bar */}
      <div className="top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-700 via-blue-500 to-indigo-500 z-50" />

      <motion.nav
        className={`fixed top-10 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/98 backdrop-blur-xl shadow-md border-b border-gray-100"
            : "bg-white border-b border-gray-100"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* ── Main bar ── */}
        <div className="w-full px-4 sm:px-5 lg:px-7 xl:px-10 h-14 sm:h-16 flex items-center justify-between gap-3">
          {/* Logo */}
          <motion.div
            className="flex items-center shrink-0 cursor-pointer"
            onClick={() => (window.location.href = "/")}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src="/assets/logo.svg"
              alt="USICT Logo"
              // Scales logo gracefully across breakpoints
              className="h-8 sm:h-9 lg:h-10 w-auto object-contain
                         max-w-[160px] sm:max-w-[200px] lg:max-w-[240px] xl:max-w-none"
            />
          </motion.div>

          {/* ════════════════════════════════════════
              DESKTOP NAV  (≥ 1024px)
          ════════════════════════════════════════ */}
          <div className="hidden lg:flex items-center gap-0.5 flex-1 justify-end min-w-0">
            <ul className="flex items-center gap-0">
              {/* Home */}
              <li>
                <Link
                  to={routes.home}
                  className="relative flex items-center px-2.5 xl:px-3 py-2 rounded-md
                             text-[12px] xl:text-[13px] font-medium text-gray-600
                             hover:text-blue-700 hover:bg-blue-50 transition-all duration-200
                             whitespace-nowrap group"
                >
                  <span
                    className="absolute bottom-1 left-2.5 right-2.5 h-[2px] bg-blue-600
                                   rounded-full scale-x-0 group-hover:scale-x-100
                                   transition-transform duration-300 origin-left"
                  />
                  Home
                </Link>
              </li>

              {/* Faculty */}
              <li>
                <Link
                  to={routes.faculty}
                  className="relative flex items-center px-2.5 xl:px-3 py-2 rounded-md
                             text-[12px] xl:text-[13px] font-medium text-gray-600
                             hover:text-blue-700 hover:bg-blue-50 transition-all duration-200
                             whitespace-nowrap group"
                >
                  <span
                    className="absolute bottom-1 left-2.5 right-2.5 h-[2px] bg-blue-600
                                   rounded-full scale-x-0 group-hover:scale-x-100
                                   transition-transform duration-300 origin-left"
                  />
                  Faculty
                </Link>
              </li>

              {/* Dropdown menus */}
              {dropdownMenus.map(({ key, label, items }) => (
                <li
                  key={key}
                  className="relative"
                  ref={(el) => (menuRefs.current[key] = el)}
                >
                  <button
                    type="button"
                    onClick={() => toggleMenu(key)}
                    className={`flex items-center gap-1 px-2.5 xl:px-3 py-2 rounded-md
                                text-[12px] xl:text-[13px] font-medium transition-all duration-200 whitespace-nowrap
                                ${
                                  openMenu === key
                                    ? "text-blue-700 bg-blue-50"
                                    : "text-gray-600 hover:text-blue-700 hover:bg-blue-50"
                                }`}
                  >
                    {label}
                    <motion.span
                      animate={{ rotate: openMenu === key ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center"
                    >
                      <ChevronDown size={12} strokeWidth={2.5} />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {openMenu === key && (
                      <motion.div
                        className="absolute top-full left-0 mt-1.5 w-60 xl:w-68
                                   bg-white shadow-xl rounded-xl border border-gray-100
                                   overflow-hidden z-50"
                        initial={{ opacity: 0, y: -8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.97 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                      >
                        <div className="h-0.5 bg-gradient-to-r from-blue-600 to-indigo-500" />
                        <ul className="py-1.5">
                          {items.map((item, idx) => (
                            <li key={idx}>
                              <Link
                                to={item.href}
                                className="flex items-center gap-2.5 px-4 py-2.5
                                           text-[12px] xl:text-[12.5px] text-gray-600
                                           hover:text-blue-700 hover:bg-blue-50
                                           transition-all duration-150 group"
                                onClick={() => setOpenMenu(null)}
                              >
                                <span
                                  className="w-1.5 h-1.5 rounded-full bg-blue-200
                                                 group-hover:bg-blue-500 transition-colors shrink-0"
                                />
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}

              {/* Placement */}
              <li>
                <Link
                  to={routes.placement}
                  className="relative flex items-center px-2.5 xl:px-3 py-2 rounded-md
                             text-[12px] xl:text-[13px] font-medium text-gray-600
                             hover:text-blue-700 hover:bg-blue-50 transition-all duration-200
                             whitespace-nowrap group"
                >
                  <span
                    className="absolute bottom-1 left-2.5 right-2.5 h-[2px] bg-blue-600
                                   rounded-full scale-x-0 group-hover:scale-x-100
                                   transition-transform duration-300 origin-left"
                  />
                  Placement
                </Link>
              </li>

              {/* Contact */}
              <li>
                <Link
                  to={routes.contact}
                  className="relative flex items-center px-2.5 xl:px-3 py-2 rounded-md
                             text-[12px] xl:text-[13px] font-medium text-gray-600
                             hover:text-blue-700 hover:bg-blue-50 transition-all duration-200
                             whitespace-nowrap group"
                >
                  <span
                    className="absolute bottom-1 left-2.5 right-2.5 h-[2px] bg-blue-600
                                   rounded-full scale-x-0 group-hover:scale-x-100
                                   transition-transform duration-300 origin-left"
                  />
                  Contact
                </Link>
              </li>
            </ul>

            <div className="w-px h-5 bg-gray-200 mx-2 shrink-0" />

            <Link
              to="/login"
              className="shrink-0 inline-flex items-center px-3.5 xl:px-4 py-1.5 rounded-lg
                         text-[12px] xl:text-[13px] font-semibold text-white
                         bg-blue-700 hover:bg-blue-800 transition-colors duration-200
                         shadow-sm shadow-blue-200 whitespace-nowrap"
            >
              Login
            </Link>
          </div>

          {/* ════════════════════════════════════════
              TABLET + MOBILE right controls  (< 1024px)
          ════════════════════════════════════════ */}
          <div className="lg:hidden flex items-center gap-2 shrink-0">
            {/* Login pill visible on tablet in the bar */}
            <Link
              to="/login"
              className="hidden sm:inline-flex items-center px-3 py-1.5 rounded-lg
                         text-[12px] font-semibold text-white bg-blue-700 hover:bg-blue-800
                         transition-colors duration-200 shadow-sm shadow-blue-200 whitespace-nowrap"
            >
              Login
            </Link>

            {/* Hamburger */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center justify-center w-9 h-9 rounded-lg
                         text-gray-600 hover:bg-gray-100 border border-gray-200
                         hover:border-gray-300 transition-all duration-200"
              whileTap={{ scale: 0.93 }}
              aria-label="Toggle navigation"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="w-4 h-4" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="w-4 h-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* ════════════════════════════════════════
            MOBILE / TABLET DRAWER  (< 1024px)
        ════════════════════════════════════════ */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
            >
              {/* Scrollable on very small screens */}
              <div className="max-h-[75dvh] overflow-y-auto overscroll-contain">
                <ul className="px-3 sm:px-5 py-2 flex flex-col gap-0.5">
                  {/* Home */}
                  <li>
                    <Link
                      to={routes.home}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center py-3 px-3 rounded-xl text-[13.5px] font-medium
                                 text-gray-700 hover:text-blue-700 hover:bg-blue-50
                                 transition-all duration-200"
                    >
                      Home
                    </Link>
                  </li>

                  {/* Faculty */}
                  <li>
                    <Link
                      to={routes.faculty}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center py-3 px-3 rounded-xl text-[13.5px] font-medium
                                 text-gray-700 hover:text-blue-700 hover:bg-blue-50
                                 transition-all duration-200"
                    >
                      Faculty
                    </Link>
                  </li>

                  {/* Accordion dropdowns */}
                  {dropdownMenus.map(({ key, label, fullLabel, items }) => (
                    <li key={key}>
                      <button
                        onClick={() => toggleMobileMenu(key)}
                        className={`w-full flex justify-between items-center py-3 px-3 rounded-xl
                                    text-[13.5px] font-medium text-left transition-all duration-200
                                    ${
                                      mobileOpenMenus[key]
                                        ? "text-blue-700 bg-blue-50"
                                        : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                                    }`}
                      >
                        <span>{fullLabel || label}</span>
                        <motion.span
                          animate={{ rotate: mobileOpenMenus[key] ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-center ml-2 shrink-0 text-gray-400"
                        >
                          <ChevronDown size={16} />
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {mobileOpenMenus[key] && (
                          <motion.ul
                            className="overflow-hidden ml-3 mt-0.5 mb-1 pl-3 border-l-2 border-blue-100"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22 }}
                          >
                            {items.map((item, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -6 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.03 }}
                              >
                                <Link
                                  to={item.href}
                                  className="flex items-center gap-2.5 py-2.5 px-2 rounded-lg
                                             text-[13px] text-gray-600 hover:text-blue-700
                                             hover:bg-blue-50 transition-all duration-150"
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setMobileOpenMenus({});
                                  }}
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-blue-300 shrink-0" />
                                  {item.label}
                                </Link>
                              </motion.li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  ))}

                  {/* Placement */}
                  <li>
                    <Link
                      to={routes.placement}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center py-3 px-3 rounded-xl text-[13.5px] font-medium
                                 text-gray-700 hover:text-blue-700 hover:bg-blue-50
                                 transition-all duration-200"
                    >
                      Placement
                    </Link>
                  </li>

                  {/* Contact */}
                  <li>
                    <Link
                      to={routes.contact}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center py-3 px-3 rounded-xl text-[13.5px] font-medium
                                 text-gray-700 hover:text-blue-700 hover:bg-blue-50
                                 transition-all duration-200"
                    >
                      Contact us
                    </Link>
                  </li>

                  {/* Login — only on phones; tablets already show it in the bar */}
                  <li className="sm:hidden pt-2 pb-1">
                    <Link
                      to="/login"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-center py-3 px-3 rounded-xl
                                 text-[13.5px] font-semibold text-white bg-blue-700
                                 hover:bg-blue-800 transition-colors duration-200"
                    >
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
