import React, { useState, useRef, useEffect } from "react";
import { Search, X, ChevronRight, Hash, ExternalLink, Sparkles, ArrowUpDown, CornerDownLeft } from "lucide-react";

const NAVIGATION_CONFIG = [
  {
    key: "about",
    label: "About Us",
    baseRoute: "/about-us",
    items: [
      { slug: "About Gbu", label: "About GBU" },
      { slug: "chancellor-message", label: "Chancellor Message" },
      { slug: "vice-chancellor-message", label: "Vice Chancellor Message" },
      { slug: "governance-committees", label: "Governance Committees" },
      { slug: "policies-statutes-rti", label: "Policies Statutes RTI" },
      { slug: "mandatory-disclosures", label: "Mandatory Disclosures" },
    ],
  },
  {
    key: "academics",
    label: "Academics",
    baseRoute: "/academics",
    items: [
      { slug: "schools", label: "Schools & Departments" },
      { slug: "faculty", label: "Faculty Directory" },
      { slug: "academic-calendar", label: "Academic Calendar & Regulations" },
      { slug: "cbcs-framework", label: "CBCS Curriculum Framework" },
      { slug: "centers-of-excellence", label: "Centers of Excellence" },
      { slug: "international-collaboration", label: "International Collaboration" },
      { slug: "reports-publications", label: "Reports & Publications" },
    ],
  },
  {
    key: "admissions",
    label: "Admissions",
    baseRoute: "/admissions",
    items: [
      { slug: "admission-process", label: "Admission Process" },
      { slug: "courses-offered", label: "Courses Offered (UG | PG | PhD)" },
      { slug: "eligibility-reservation", label: "Eligibility & Reservation" },
      { slug: "fee-structure-prospectus", label: "Fee Structure & Prospectus" },
      { slug: "international-admissions", label: "International Admissions" },
    ],
  },
  {
    key: "research",
    label: "Research",
    baseRoute: "/research",
    items: [
      { slug: "research-centers", label: "Center of Excellence and Labs" },
      { slug: "publications-patents", label: "Publications, Patents and Projects" },
      { slug: "incubation", label: "GBU Incubation Cell" },
      { slug: "institution-innovation", label: "Institution and Innovation" },
      { slug: "ipr-cell", label: "IPR Cell" },
    ],
  },
  {
    key: "campus",
    label: "Campus Life",
    baseRoute: "/campus-life",
    items: [
      { slug: "hero", label: "Overview" },
      { slug: "hostel-facilities", label: "Hostels" },
      { slug: "sports-fitness", label: "Sports" },
      { slug: "clubs-societies", label: "Clubs and Societies" },
      { slug: "meditation-center", label: "Meditation Centre" },
      { slug: "NSS", label: "National Service Scheme (NSS)" },
      { slug: "NCC", label: "National Cadet Corps (NCC)" },
    ],
  },
  {
    key: "announcements",
    label: "Announcements",
    baseRoute: "/announcements",
    items: [
      { slug: "news-notifications", label: "News & Updates" },
      { slug: "event-calendar", label: "Upcoming Events" },
      { slug: "notices", label: "Notices & Circular" },
      { slug: "media-gallery", label: "Media Gallery" },
      { slug: "newsletter", label: "Newsletter" },
    ],
  },
  {
    key: "placements",
    label: "Placements",
    directPath: "/placements",
  },
  {
    key: "alumni",
    label: "Alumni",
    baseRoute: "/alumni",
    items: [
      { slug: "alumni-network", label: "Alumni Network" },
      { slug: "alumni-events", label: "Alumni Events" },
      { slug: "become-mentor", label: "Become a Mentor" },
    ],
  },
];

const Searchbar = ({ isMobile = false, onClose }) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const containerRef = useRef();
  const inputRef = useRef(null);
  const resultsRef = useRef([]);

  const handleToggle = () => {
    setOpen((prev) => !prev);
    setQuery("");
    setResults([]);
    setSelectedIndex(-1);
    
    // Close mobile menu when search is opened
    if (isMobile && onClose) {
      onClose();
    }
  };

  // Enhanced search function that includes in-page content
  const searchInPageContent = (searchQuery) => {
    const lowerQuery = searchQuery.toLowerCase();
    const contentMatches = [];
    
    // Find all elements with data-search attribute
    const searchableElements = document.querySelectorAll('[data-search="true"]');
    
    searchableElements.forEach((element, index) => {
      const textContent = element.textContent || element.innerText;
      
      if (textContent && textContent.toLowerCase().includes(lowerQuery)) {
        // Get a meaningful excerpt around the match
        const excerpt = getExcerptAroundMatch(textContent, lowerQuery);
        
        // Generate a unique ID for the element if it doesn't have one
        let elementId = element.id;
        if (!elementId) {
          elementId = `search-result-${index}`;
          element.id = elementId;
        }
        
        // Get the heading or context for this content
        const heading = findNearestHeading(element);
        
        contentMatches.push({
          label: excerpt,
          type: "content",
          category: "Page Content",
          icon: Hash,
          elementId: elementId,
          heading: heading,
          fullText: textContent.substring(0, 200) + (textContent.length > 200 ? "..." : "")
        });
      }
    });
    
    return contentMatches;
  };

  // Helper function to get text excerpt around the match
  const getExcerptAroundMatch = (text, query) => {
    const index = text.toLowerCase().indexOf(query.toLowerCase());
    const start = Math.max(0, index - 30);
    const end = Math.min(text.length, index + query.length + 30);
    
    let excerpt = text.substring(start, end);
    if (start > 0) excerpt = "..." + excerpt;
    if (end < text.length) excerpt = excerpt + "...";
    
    return excerpt;
  };

  // Helper function to find the nearest heading element
  const findNearestHeading = (element) => {
    const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
    let current = element;
    
    while (current && current.parentElement) {
      for (const heading of headings) {
        const headingElement = current.parentElement.querySelector(heading);
        if (headingElement) {
          return headingElement.textContent.trim();
        }
      }
      current = current.parentElement;
    }
    
    return "Content";
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    setSelectedIndex(-1);

    if (!value.trim()) {
      setResults([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    // Simulate search delay for better UX
    setTimeout(() => {
      const lowerQuery = value.toLowerCase();
      const matches = [];

      // Search navigation routes
      NAVIGATION_CONFIG.forEach((menu) => {
        const base = menu.baseRoute || menu.directPath || "#";

        if (menu.label.toLowerCase().includes(lowerQuery)) {
          matches.push({ 
            label: menu.label, 
            path: base, 
            type: "nav",
            category: "Navigation",
            icon: ChevronRight
          });
        }

        if (menu.items) {
          menu.items.forEach((item) => {
            if (item.label.toLowerCase().includes(lowerQuery)) {
              matches.push({
                label: item.label,
                path: `${base}/${item.slug}`,
                type: "nav",
                category: menu.label,
                icon: ExternalLink
              });
            }
          });
        }
      });

      // Search in-page content
      const contentMatches = searchInPageContent(value);
      
      // Combine results, prioritizing navigation matches
      const combinedResults = [...matches, ...contentMatches];
      
      // Limit results to prevent overwhelming the UI
      const limitedResults = combinedResults.slice(0, 15);
      
      setResults(limitedResults);
      setIsLoading(false);
    }, 300);
  };

  const handleKeyDown = (e) => {
    if (!open) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < results.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev > 0 ? prev - 1 : results.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && results[selectedIndex]) {
          handleResultClick(results[selectedIndex]);
        }
        break;
      case 'Escape':
        handleToggle();
        break;
    }
  };

  const handleResultClick = (item) => {
    if (item.type === "content") {
      // Scroll to the content element
      const element = document.getElementById(item.elementId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
        
        // Add highlight effect
        element.classList.add('search-highlight');
        setTimeout(() => {
          element.classList.remove('search-highlight');
        }, 3000);
      }
    } else if (item.type === "nav") {
      // Handle navigation (you can integrate with your router here)
      console.log(`Navigating to: ${item.path}`);
      // For React Router: navigate(item.path)
      // For Next.js: router.push(item.path)
    }
    
    setOpen(false);
    setQuery("");
    setResults([]);
    setSelectedIndex(-1);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
        setQuery("");
        setResults([]);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Focus input when opened
  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  // Keyboard navigation
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if (e.key === '/' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(true);
      }
    };

    document.addEventListener("keydown", handleGlobalKeyDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleGlobalKeyDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, selectedIndex, results]);

  // Add CSS for search highlight effect
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .search-highlight {
        background-color: rgba(59, 130, 246, 0.1) !important;
        border-radius: 4px !important;
        padding: 2px 4px !important;
        animation: highlightPulse 3s ease-in-out;
      }
      
      @keyframes highlightPulse {
        0% { background-color: rgba(59, 130, 246, 0.3); }
        50% { background-color: rgba(59, 130, 246, 0.1); }
        100% { background-color: rgba(59, 130, 246, 0.05); }
      }
    `;
    document.head.appendChild(style);
    
    return () => document.head.removeChild(style);
  }, []);

  const groupedResults = results.reduce((acc, item) => {
    const category = item.category || "Other";
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {});

  // Mobile Search Button (for mobile navbar)
  if (isMobile && !open) {
    return (
      <button
        onClick={handleToggle}
        className="w-full flex items-center gap-3 px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 transition-colors"
        aria-label="Open search"
      >
        <Search size={20} />
        <span>Search</span>
      </button>
    );
  }

  return (
    <div className={`relative ${isMobile ? 'w-full -top-80' : 'ml-4'}`} ref={containerRef}>
      {/* Search Toggle Button - Desktop */}
      {!isMobile && (
        <button
          onClick={handleToggle}
          className={`
            relative p-2 rounded-full transition-all duration-300 ease-out
            ${open 
              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-110 ring-4 ring-blue-200' 
              : 'bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg'
            }
            border border-gray-200 hover:border-gray-300
            group overflow-hidden
          `}
          aria-label={open ? "Close search" : "Open search"}
          title={open ? "Close Search (Esc)" : "Open Search (Cmd/Ctrl + /)"}
          type="button"
        >
          <div className="relative z-10">
            {open ? (
              <X size={20} className="transform rotate-90 transition-all duration-300" />
            ) : (
              <Search size={20} className="transform group-hover:scale-110 transition-transform duration-300" />
            )}
          </div>
          
          {/* Animated ripple effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse"></div>
          
          {/* Floating particles effect */}
          {!open && (
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <div className="absolute w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-30" style={{top: '20%', left: '30%'}}></div>
              <div className="absolute w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-30" style={{top: '70%', right: '25%', animationDelay: '0.5s'}}></div>
            </div>
          )}
        </button>
      )}

      {/* Search Dropdown */}
      {open && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" onClick={handleToggle}></div>
          
          <div className={`
            absolute z-50 bg-white/95 backdrop-blur-2xl
            border border-gray-200/50 shadow-2xl rounded-3xl
            transform transition-all duration-300 ease-out
            ${open ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-2'}
            before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-white/50 before:to-transparent before:pointer-events-none
            ${isMobile 
              ? 'inset-x-4 top-4 w-auto' 
              : 'right-0 mt-3 w-[20rem] sm:w-[24rem] md:w-[28rem] lg:w-[32rem] xl:w-[36rem]'
            }
          `}>
            {/* Header */}
            <div className="flex items-center px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-100/50 bg-gradient-to-r from-gray-50/50 to-white/50 rounded-t-3xl">
              <div className="relative flex-1 flex items-center">
                <div className="relative">
                  <Search size={18} className="text-gray-400 mr-3 sm:mr-4" />
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-blue-500 border-t-transparent"></div>
                    </div>
                  )}
                </div>
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={handleSearch}
                  className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 text-sm sm:text-base"
                  placeholder="Search navigation, content, or jump to sections..."
                  aria-label="Search pages or content"
                  autoComplete="off"
                />
              </div>
              <button
                onClick={handleToggle}
                className="p-2 hover:bg-gray-200/50 rounded-full transition-all duration-200 hover:scale-105"
                aria-label="Close search"
                type="button"
              >
                <X size={16} sm:size={18} className="text-gray-500" />
              </button>
            </div>

            {/* Results */}
            <div className="max-h-72 sm:max-h-80 md:max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
              {!query && (
                <div className="px-4 sm:px-6 py-8 sm:py-12 text-center">
                  <div className="relative mb-4 sm:mb-6">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full animate-pulse"></div>
                    </div>
                    <Sparkles className="relative mx-auto text-gray-400 animate-bounce" size={isMobile ? 28 : 32} />
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base mb-2">Start typing to search...</p>
                  <p className="text-gray-500 text-xs sm:text-sm mb-4">Search through navigation and page content</p>
                  {!isMobile && (
                    <div className="flex items-center justify-center space-x-2 text-xs text-gray-400">
                      <kbd className="px-2 py-1 bg-gray-100 rounded-md border text-xs font-mono">Cmd</kbd>
                      <span>+</span>
                      <kbd className="px-2 py-1 bg-gray-100 rounded-md border text-xs font-mono">/</kbd>
                      <span>to open quickly</span>
                    </div>
                  )}
                </div>
              )}

              {query && results.length === 0 && !isLoading && (
                <div className="px-4 sm:px-6 py-8 sm:py-12 text-center">
                  <div className="text-3xl sm:text-4xl mb-4">🔍</div>
                  <p className="text-gray-600 text-sm sm:text-base mb-2">No results found</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Try different keywords or check spelling</p>
                </div>
              )}

              {results.length > 0 && Object.entries(groupedResults).map(([category, items]) => (
                <div key={category} className="py-2">
                  <div className="sticky top-0 px-4 sm:px-6 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider bg-gray-50/80 backdrop-blur-sm border-b border-gray-100/50">
                    {category}
                  </div>
                  {items.map((item, idx) => {
                    const globalIndex = results.indexOf(item);
                    const IconComponent = item.icon;
                    
                    return (
                      <button
                        key={idx}
                        onClick={() => handleResultClick(item)}
                        className={`
                          w-full flex items-start px-4 sm:px-6 py-3 sm:py-4 hover:bg-gradient-to-r transition-all duration-200
                          border-l-4 border-transparent text-left group
                          ${item.type === "nav" 
                            ? 'hover:from-blue-50 hover:to-blue-100/50 hover:border-blue-400' 
                            : 'hover:from-emerald-50 hover:to-emerald-100/50 hover:border-emerald-400'
                          }
                          ${selectedIndex === globalIndex 
                            ? item.type === "nav" 
                              ? 'bg-gradient-to-r from-blue-50 to-blue-100/50 border-blue-400 shadow-sm' 
                              : 'bg-gradient-to-r from-emerald-50 to-emerald-100/50 border-emerald-400 shadow-sm'
                            : ''
                          }
                          hover:scale-[1.02] hover:shadow-md
                        `}
                        tabIndex={0}
                        type="button"
                        ref={el => resultsRef.current[globalIndex] = el}
                      >
                        <div className={`
                          p-2 rounded-lg mr-3 sm:mr-4 transition-all duration-200 flex-shrink-0
                          ${item.type === "nav" 
                            ? 'bg-blue-100 text-blue-600 group-hover:bg-blue-200' 
                            : 'bg-emerald-100 text-emerald-600 group-hover:bg-emerald-200'
                          }
                        `}>
                          <IconComponent size={14} />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="text-gray-800 text-xs sm:text-sm font-medium truncate">
                            {item.label}
                          </div>
                          {item.path && (
                            <div className="text-gray-500 text-xs mt-1 truncate">
                              {item.path}
                            </div>
                          )}
                          {item.heading && item.type === "content" && (
                            <div className="text-gray-600 text-xs mt-1 truncate">
                              in {item.heading}
                            </div>
                          )}
                        </div>
                        
                        <div className="flex items-center space-x-2 ml-2 sm:ml-4 flex-shrink-0">
                          {item.type === "content" && (
                            <div className="text-xs text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full font-medium">
                              Jump to
                            </div>
                          )}
                          <ChevronRight size={12} className="text-gray-300 group-hover:text-gray-500 transition-colors" />
                        </div>
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* Footer */}
            {results.length > 0 && (
              <div className="px-4 sm:px-6 py-3 sm:py-4 border-t border-gray-100/50 bg-gradient-to-r from-gray-50/50 to-white/50 rounded-b-3xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>
                      {results.length} result{results.length !== 1 ? 's' : ''} found
                    </span>
                  </div>
                  {!isMobile && (
                    <div className="flex items-center space-x-3 text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <ArrowUpDown size={12} />
                        <span>Navigate</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <CornerDownLeft size={12} />
                        <span>Select</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <kbd className="px-1.5 py-0.5 bg-white rounded border text-xs">Esc</kbd>
                        <span>Close</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Searchbar;