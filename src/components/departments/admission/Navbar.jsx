
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Bell, Menu, X } from 'lucide-react';
// DropdownMenu components implemented here for custom UI

const DropdownMenu = ({ children }) => (
  <div className="relative inline-block">{children}</div>
);

const DropdownMenuTrigger = ({ children, className = '', ...props }) => {
  const [open, setOpen] = React.useState(false);
  // Provide context to children
  return (
    <DropdownMenuContext.Provider value={{ open, setOpen }}>
      <button
        className={className}
        onClick={() => setOpen((v) => !v)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        type="button"
        {...props}
      >
        {children}
      </button>
    </DropdownMenuContext.Provider>
  );
};

const DropdownMenuContext = React.createContext();

const DropdownMenuContent = ({ children, className = '' }) => {
  const ctx = React.useContext(DropdownMenuContext);
  if (!ctx?.open) return null;
  return (
    <div
      className={
        "absolute left-0 mt-2 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50 " +
        className
      }
      tabIndex={-1}
    >
      {children}
    </div>
  );
};

const DropdownMenuItem = ({ children, asChild = false, ...props }) => {
  const itemClass =
    "cursor-pointer select-none px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors rounded";
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: (children.props.className || '') + ' ' + itemClass,
      ...props,
    });
  }
  return (
    <div className={itemClass} {...props}>
      {children}
    </div>
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
  );
};

export default Navbar;
