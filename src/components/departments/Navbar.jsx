import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, Search, Menu, X } from "lucide-react";
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
      ref?.contains(event.target)
    );
    if (!isClickInsideAnyMenu) {
      setOpenMenu(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      label: "Departments & Academic Programs",
      items: [
        {
          label: "Department of Computer Science and Engineering",
          href: routes.departments.cse,
        },
        {
          label: "Department of Information Technology",
          href: routes.departments.it,
        },
        {
          label: "Department of Electronic & Communication",
          href: routes.departments.ece,
        },
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

  const navVariants = {
    initial: { y: -100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const logoVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.2 },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.nav
      className={`fixed top-9 left-0 w-full z-30 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100"
          : "bg-white shadow"
      } px-4 md:px-16 py-3 flex items-center justify-between`}
      variants={navVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div
        className="flex items-center space-x-3 cursor-pointer"
        onClick={() => (window.location.href = "/")}
        variants={logoVariants}
        whileHover="hover"
      >
        <motion.img
          src="/assets/logo.svg"
          alt="USICT Logo"
          className="w-64 h-12 mr-3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </motion.div>

      {/* Hamburger Menu */}
      <div className="md:hidden">
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-700 focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Desktop Nav */}
      <motion.ul
        className="hidden md:flex flex-wrap justify-center gap-6 text-sm text-gray-700 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.li whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
          <Link
            to={routes.home}
            className="hover:text-purple-700 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-purple-700 after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </Link>
        </motion.li>
        <motion.li whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
          <Link
            to={routes.faculty}
            className="hover:text-purple-700 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-purple-700 after:transition-all after:duration-300 hover:after:w-full"
          >
            Faculty
          </Link>
        </motion.li>

        {dropdownMenus.map(({ key, label, items }) => (
          <motion.li
            key={key}
            className="relative"
            ref={(el) => (menuRefs.current[key] = el)}
            aria-haspopup="true"
            aria-expanded={openMenu === key}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <motion.button
              type="button"
              onClick={() => toggleMenu(key)}
              className={`flex items-center gap-1 cursor-pointer transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-purple-700 after:transition-all after:duration-300 ${
                openMenu === key
                  ? "text-purple-700 after:w-full"
                  : "hover:text-purple-700 hover:after:w-full"
              }`}
              whileTap={{ scale: 0.98 }}
            >
              {label}
              <motion.div
                animate={{ rotate: openMenu === key ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown size={14} />
              </motion.div>
            </motion.button>
            <AnimatePresence>
              {openMenu === key && (
                <motion.ul
                  className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-lg shadow-xl rounded-xl border border-gray-200 p-2 z-50"
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {items.map((item, idx) => (
                    <motion.li key={idx} variants={itemVariants}>
                      <Link
                        to={item.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-lg transition-all duration-200 transform hover:translate-x-1"
                        onClick={() => setOpenMenu(null)}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.li>
        ))}
        <motion.li whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
          <Link
            to={routes.placement}
            className="hover:text-purple-700 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-purple-700 after:transition-all after:duration-300 hover:after:w-full"
          >
            Placement
          </Link>
        </motion.li>
        <motion.li whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
          <Link
            to={routes.contact}
            className="hover:text-purple-700 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-purple-700 after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact us
          </Link>
        </motion.li>
        <motion.li
          className="flex items-center gap-1 cursor-pointer hover:text-purple-700 transition-colors duration-200"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        ></motion.li>
      </motion.ul>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200 md:hidden z-50 px-4 py-4 overflow-hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.ul className="flex flex-col gap-2 text-sm text-gray-700">
              <motion.li variants={mobileItemVariants}>
                <Link
                  to={routes.home}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-3 px-3 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-all duration-200 block"
                >
                  Home
                </Link>
              </motion.li>
              <motion.li variants={mobileItemVariants}>
                <Link
                  to={routes.faculty}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-3 px-3 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-all duration-200 block"
                >
                  Faculty
                </Link>
              </motion.li>
              {dropdownMenus.map(({ key, label, items }) => (
                <motion.li key={key} variants={mobileItemVariants}>
                  <motion.button
                    onClick={() => toggleMobileMenu(key)}
                    className="w-full flex justify-between items-center py-3 px-3 text-left hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-all duration-200"
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{label}</span>
                    <motion.div
                      animate={{ rotate: mobileOpenMenus[key] ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </motion.button>
                  <AnimatePresence>
                    {mobileOpenMenus[key] && (
                      <motion.ul
                        className="pl-6 flex flex-col gap-1 mt-2 overflow-hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {items.map((item, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            <Link
                              to={item.href}
                              className="block py-2 px-3 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-all duration-200"
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setMobileOpenMenus({});
                              }}
                            >
                              {item.label}
                            </Link>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </motion.li>
              ))}
              <motion.li
                className="flex items-center gap-2 py-3 px-3 cursor-pointer hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-all duration-200"
                variants={mobileItemVariants}
                whileTap={{ scale: 0.98 }}
              >
                <Search size={16} />
                Search
              </motion.li>
              <motion.li variants={mobileItemVariants}>
                <Link
                  to={routes.contact}
                  className="block py-3 px-3 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact us
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
