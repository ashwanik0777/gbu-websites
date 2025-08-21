import React, { useState, useEffect } from 'react';
import SearchableWrapper from '../Searchbar/SearchableWrapper';

const Card = ({ children, ...props }) => (
  <div className="bg-white shadow rounded-lg" {...props}>{children}</div>
);

const CardContent = ({ children, className = '', ...props }) => (
  <div className={`p-6 ${className}`} {...props}>{children}</div>
);

const ClubNavigation = () => {
  const [activeSection, setActiveSection] = useState('about');

  const navigationItems = [
    { id: 'about', label: 'About', icon: '📖' },
    { id: 'policies', label: 'Policies', icon: '📋' },
    { id: 'team', label: 'Team', icon: '👥' },
    { id: 'events', label: 'Events', icon: '📅' },
    { id: 'reports', label: 'Reports', icon: '📊' },
    { id: 'join', label: 'Join Club', icon: '🚀' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      }));

      const currentSection = sections.find(section => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <SearchableWrapper>
    <Card>
      <CardContent className="p-4">
        <h3 className="font-semibold text-gray-900 mb-4">Quick Navigation</h3>
        <nav className="space-y-2">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all duration-200 ${
                activeSection === item.id
                  ? 'bg-blue-100 text-blue-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              <span className="text-sm">{item.icon}</span>
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </nav>
      </CardContent>
    </Card>
    </SearchableWrapper>
  );
};

export default ClubNavigation;
