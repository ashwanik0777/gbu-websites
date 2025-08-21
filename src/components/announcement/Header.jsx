import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchableWrapper from '../Searchbar/SearchableWrapper';

// Simple Button component
const Button = ({ children, className = '', ...props }) => (
  <button
    className={`inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow hover:from-blue-600 hover:to-blue-800 active:scale-95 ${className}`}
    {...props}
  >
    {children}
  </button>
);

// Menu (hamburger) icon
const Menu = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </svg>
);

// X (close) icon
const X = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'News', path: '/news' },
    { label: 'Notices', path: '/notices' },
    { label: 'Events', path: '/events' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Newsletter', path: '/newsletter' },
  ];

  return (
    <SearchableWrapper>
    <header className="bg-gradient-to-r from-blue-50 via-white to-blue-100 shadow-xl sticky top-0 z-50 border-b border-blue-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-105">
              <span className="text-white font-extrabold text-2xl tracking-wider drop-shadow-lg">GBU</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-extrabold text-blue-800 tracking-tight leading-tight drop-shadow-sm">
                Gautam Buddha University
              </h1>
              <p className="text-sm text-blue-600 font-medium">Greater Noida, UP</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                  location.pathname === item.path
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-blue-700 hover:bg-blue-100 hover:text-blue-900'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button className="ml-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            className="md:hidden bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-blue-100 bg-white rounded-b-xl shadow-lg animate-fade-in-down">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-6 py-3 rounded-lg font-semibold transition-all duration-150 ${
                  location.pathname === item.path
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-blue-700 hover:bg-blue-100 hover:text-blue-900'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button className="w-full mt-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg">
              Contact Us
            </Button>
          </nav>
        )}
      </div>
      {/* Subtle animated underline for active nav */}
      <style>{`
        .animate-fade-in-down {
          animation: fadeInDown 0.25s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-16px);}
          to { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </header>
    </SearchableWrapper>
  );
};

export default Header;
