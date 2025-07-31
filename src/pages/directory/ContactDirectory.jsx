import React, { useState, useEffect, useMemo } from 'react';
import { Search, Users, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import ContactCard from '../../components/directory/ContactCard';
import CategoryDropdown from '../../components/directory/CategoryDropdown';
import { contactsData } from './contactsData';

import BannerSection from '../../components/HeroBanner';
import SearchableWrapper from '../../components/Searchbar/SearchableWrapper';

const ITEMS_PER_PAGE = 15;

const ContactDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1); // Reset to first page on filter/search change
  }, [searchTerm, selectedCategory]);

  const filteredContacts = useMemo(() => {
    let filtered = contactsData;

    if (selectedCategory) {
      filtered = filtered.filter(
        (contact) => contact.category === selectedCategory
      );
    }

    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase().trim();
      filtered = filtered.filter((contact) =>
        (contact.name?.toLowerCase().includes(searchLower) ||
          contact.designation?.toLowerCase().includes(searchLower) ||
          contact.department?.toLowerCase().includes(searchLower) ||
          contact.email?.toLowerCase().includes(searchLower) ||
          contact.phone?.includes(searchTerm.trim()))
      );
    }

    return filtered;
  }, [searchTerm, selectedCategory]);

  const totalPages = Math.ceil(filteredContacts.length / ITEMS_PER_PAGE);
  const paginatedContacts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredContacts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredContacts, currentPage]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
  };

  return (
    <SearchableWrapper>
       <BannerSection
          title="Contact Directory"
          subtitle="Gautam Buddha University"
          bgTheme={4}
        />
      <div className="relative mx-20 mb-20 bg-white min-h-screen smooth-transition">
       

        {/* Search & Filter Section */}
        <div className="container mx-auto px-4 py-6 md:py-10">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-between bg-white shadow-lg border border-slate-100 rounded-xl p-6 animate-fade-in-up">
            {/* Search */}
            <div className="relative w-full md:w-1/2">
              <Search
                className={`absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 transition-all ${
                  isSearchFocused ? 'text-blue-500' : 'text-slate-400'
                }`}
              />
              <input
                type="text"
                placeholder="Search by name, department, phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all bg-white text-slate-700 placeholder:text-slate-400 hover:shadow-md"
              />
            </div>

            {/* Category Filter */}
            <div className="w-full md:w-1/2 flex items-center gap-2">
              {/* <Filter className="h-5 w-5 text-slate-500" /> */}
              <CategoryDropdown
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>
          </div>

          {/* Filter Count + Clear */}
          <div className="flex justify-between mt-4 px-1">
            <div className="text-sm text-slate-600 font-medium flex items-center gap-2">
              <Users className="h-4 w-4 text-blue-600" />
              {filteredContacts.length} contact(s) found
            </div>
            {(searchTerm || selectedCategory) && (
              <button
                onClick={clearFilters}
                className="text-blue-600 hover:text-blue-800 font-medium text-sm px-3 py-2 rounded-md hover:bg-blue-50 transition"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>

        {/* Contacts Section */}
        <div className="container mx-auto px-4">
          {filteredContacts.length === 0 ? (
            <div className="text-center py-16 md:py-24 animate-fade-in">
              <Search className="h-20 w-20 mx-auto mb-6 text-slate-300" />
              <h3 className="text-xl md:text-2xl font-semibold text-slate-600 mb-3">
                No contacts found
              </h3>
              <p className="text-slate-500 mb-6 leading-relaxed">
                {searchTerm || selectedCategory
                  ? "Try adjusting your search or category filters."
                  : 'No contacts available currently.'}
              </p>
              {(searchTerm || selectedCategory) && (
                <button
                  onClick={clearFilters}
                  className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                  <Filter className="h-4 w-4" />
                  Clear all
                </button>
              )}
            </div>
          ) : (
            <>
              {/* Search Summary */}
              {(searchTerm || selectedCategory) && (
                <div className="text-center mb-6 animate-fade-in-up">
                  <p className="text-slate-600">
                    {searchTerm && (
                      <>
                        Showing results for{' '}
                        <span className="text-blue-700 font-semibold">
                          "{searchTerm}"
                        </span>
                        {selectedCategory && <span> in </span>}
                      </>
                    )}
                    {selectedCategory && (
                      <span className="text-emerald-700 font-semibold">
                        {selectedCategory}
                      </span>
                    )}
                  </p>
                </div>
              )}

              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedContacts.map((contact, index) => (
                  <div
                    key={contact.id}
                    className="animate-fade-in"
                    style={{
                      animationDelay: `${Math.min(index * 100, 800)}ms`,
                      animationFillMode: 'both',
                    }}
                  >
                    <ContactCard contact={contact} />
                  </div>
                ))}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-10 gap-4 items-center animate-fade-in-up">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    disabled={currentPage === 1}
                    className={`flex items-center gap-1 px-4 py-2 border rounded-md ${
                      currentPage === 1
                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                        : 'bg-white hover:bg-blue-50 text-blue-600'
                    }`}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Prev
                  </button>

                  <span className="text-slate-600 font-medium">
                    Page {currentPage} of {totalPages}
                  </span>

                  <button
                    onClick={() =>
                      setCurrentPage((p) => Math.min(p + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className={`flex items-center gap-1 px-4 py-2 border rounded-md ${
                      currentPage === totalPages
                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                        : 'bg-white hover:bg-blue-50 text-blue-600'
                    }`}
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </SearchableWrapper>
  );
};

export default ContactDirectory;