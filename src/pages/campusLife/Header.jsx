import React, { useState } from 'react';
import { Menu, X, Home, Map, Calendar, Book, Coffee, Leaf, LogIn } from 'lucide-react';
import SearchableWrapper from '../../components/Searchbar/SearchableWrapper';
const Button = ({ children, className = '', variant = 'default', ...props }) => {
  const baseStyle =
    'px-4 py-2 rounded-lg font-semibold transition-all duration-300 focus:outline-none';
  const variants = {
    default: 'bg-red-600 text-white hover:bg-red-700',
    outline: 'border border-red-600 text-red-600 hover:bg-red-600 hover:text-white',
  };
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};




const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { icon: Home, label: 'Home', href: '#home' },
    { icon: Map, label: 'Campus Tour', href: '#campus-tour' },
    { icon: Home, label: 'Hostel Life', href: '#hostel-life' },
    { icon: Calendar, label: 'Clubs & Events', href: '#clubs-events' },
    { icon: Book, label: 'Library', href: '#library' },
    { icon: Home, label: 'Sports & Wellness', href: '#sports-wellness' },
    { icon: Coffee, label: 'Cafes & Food', href: '#cafes-food' },
    { icon: Leaf, label: 'Eco-Campus', href: '#eco-campus' },
    // { icon: LogIn, label: 'Login', href: '#login' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <SearchableWrapper>
    <header className="fixed top-30 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.href)}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded-lg px-3 py-2"
              >
                <item.icon size={16} />
                <span className="text-sm font-medium">{item.label}</span>
              </Button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4 animate-fade-in shadow-lg rounded-b-lg">
            <nav className="grid grid-cols-2 gap-2">
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center space-x-2 justify-start p-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                >
                  <item.icon size={16} />
                  <span className="text-sm font-medium">{item.label}</span>
                </Button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
    </SearchableWrapper>
  );
};

export default Header;
