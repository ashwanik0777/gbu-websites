
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Bell, Menu, X } from 'lucide-react';
import SearchableWrapper from '../Searchbar/SearchableWrapper';
// Simple dropdown menu components using Headless UI style logic and Tailwind CSS

const DropdownMenu = ({ children }) => (
  <div className="relative">{children}</div>
);

const DropdownMenuTrigger = ({ children, className = '', ...props }) => {
  const [open, setOpen] = React.useState(false);
  // Pass open/close state via context
  const context = React.createContext();
  return (
    <context.Provider value={{ open, setOpen }}>
      <button
        className={className}
        onClick={() => setOpen((o) => !o)}
        {...props}
        type="button"
      >
        {children}
      </button>
      {open && props.menu}
    </context.Provider>
  );
};

// Context for dropdown open state
const DropdownMenuContext = React.createContext();

const DropdownMenuContent = ({ children, className = '' }) => {
  const [open, setOpen] = React.useState(false);
  // Listen for outside clicks to close
  const ref = React.useRef();
  React.useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);
  return (
    <DropdownMenuContext.Provider value={{ open, setOpen }}>
      <div
        ref={ref}
        className={`absolute right-0 mt-2 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50 ${className}`}
        style={{ minWidth: 200 }}
      >
        {children}
      </div>
    </DropdownMenuContext.Provider>
  );
};

const DropdownMenuItem = ({ children, asChild = false, ...props }) => {
  const Comp = asChild ? React.Fragment : 'button';
  return (
    <Comp
      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer"
      {...props}
    >
      {children}
    </Comp>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const admissionPages = [
    { title: 'Admission Process', href: '/admission-process' },
    { title: 'Courses Offered (UG | PG | PhD)', href: '/courses' },
    { title: 'Eligibility & Reservation', href: '/eligibility' },
    { title: 'Fee Structure & Prospectus', href: '/fee-structure' },
    { title: 'International Admissions', href: '/international' },
  ];

  return (
    <SearchableWrapper>
    <nav className="bg-white shadow-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">U</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">University Portal</h1>
              <p className="text-xs text-gray-600">Excellence in Education</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
                <span>Admission Portal</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 bg-white border shadow-lg">
                {admissionPages.map((page) => (
                  <DropdownMenuItem key={page.href} asChild>
                    <Link 
                      to={page.href} 
                      className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {page.title}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 transition-colors">
              Dashboard
            </Link>
            
            <Link to="/notices" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-1">
              <Bell className="w-4 h-4" />
              <span>Notices</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <div className="space-y-2">
                <p className="font-medium text-gray-900">Admission Portal</p>
                {admissionPages.map((page) => (
                  <Link 
                    key={page.href}
                    to={page.href} 
                    className="block pl-4 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {page.title}
                  </Link>
                ))}
              </div>
              <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 transition-colors">
                Dashboard
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
    </SearchableWrapper>
  );
};

export default Navbar;
