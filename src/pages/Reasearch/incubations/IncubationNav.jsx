// src/components/IncubationNav.jsx
import React from "react";

import SearchableWrapper from "../../../components/Searchbar/SearchableWrapper";

const IncubationNav = () => {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Focus Areas", href: "#focus" },
    { label: "Services", href: "#services" },
    { label: "Team", href: "#team" },
    { label: "Startups", href: "#startups" },
    { label: "Gallery", href: "#gallery" },
    { label: "Events", href: "#events" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <SearchableWrapper>
    <nav className="bg-white shadow sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center flex-wrap items-center gap-6 py-4">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-gray-600 hover:text-blue-600 font-medium transition"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
    </SearchableWrapper>
  );
};

export default IncubationNav;
