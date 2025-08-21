import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

import SearchableWrapper from "../../components/Searchbar/SearchableWrapper.jsx";

function SitemapAbout() {
  return (
    <SearchableWrapper>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="flex items-center hover:text-blue-600 transition-colors">
            <Home className="w-4 h-4 mr-1" />
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="font-medium text-gray-900">About Us</span>
        </nav>

        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-lg text-gray-600 mb-8">
            Learn more about our institution, vision, and leadership.
          </p>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
            <p className="text-gray-700 mb-4">
              This is a placeholder page for the About Us section.
            </p>
            <p className="text-gray-600">
              Content will be added here based on your university's information.
            </p>
          </div>
        </div>
      </div>
    </div>
    </SearchableWrapper>
  );
}

export default SitemapAbout;
