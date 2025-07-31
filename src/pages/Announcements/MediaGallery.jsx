import React, { useState, useMemo, cloneElement } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Search, 
  Filter, 
  Grid, 
  List,
  Calendar,
  Eye,
  MoreHorizontal,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BannerSection from '../../components/HeroBanner';

// === Professional Card Components ===
const Card = ({ children, className = '', onClick }) => (
  <div 
    className={`bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 ${className}`}
    onClick={onClick}
  >
    {children}
  </div>
);

// === Dialog Components ===
const Dialog = ({ open, children }) => (open ? <>{children}</> : null);

const DialogContent = ({ className = '', children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm ${className}`}
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="relative max-w-5xl max-h-[90vh] mx-4"
    >
      {children}
    </motion.div>
  </motion.div>
);

// === Enhanced Button Components ===
const Button = ({ children, onClick, variant = 'default', size = 'md', className = '', disabled = false, ...props }) => {
  const base = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2';
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm',
    outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50',
    ghost: 'bg-transparent text-gray-600 hover:bg-gray-100',
    glass: 'bg-white/20 backdrop-blur text-white hover:bg-white/30 border border-white/20',
  };
  const sizes = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-base',
    lg: 'h-12 px-6 text-lg',
    icon: 'h-10 w-10 p-0',
  };
  
  return (
    <button 
      type="button" 
      className={`${base} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`} 
      onClick={onClick} 
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

// === Badge Component ===
const Badge = ({ children, className = '' }) => (
  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${className}`}>
    {children}
  </span>
);

// === Professional Pagination Component ===
const ProfessionalPagination = ({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const validCurrentPage = Math.max(1, Math.min(currentPage || 1, totalPages || 1));
  const validTotalPages = Math.max(1, totalPages || 1);
  
  const getVisiblePages = () => {
    const pages = [];
    const maxVisible = 5;

    if (validTotalPages <= maxVisible) {
      for (let i = 1; i <= validTotalPages; i++) {
        pages.push(i);
      }
    } else {
      if (validCurrentPage <= 3) {
        for (let i = 1; i <= Math.min(4, validTotalPages); i++) {
          pages.push(i);
        }
        if (validTotalPages > 4) {
          pages.push("...");
          pages.push(validTotalPages);
        }
      } else if (validCurrentPage >= validTotalPages - 2) {
        pages.push(1);
        if (validTotalPages > 4) {
          pages.push("...");
        }
        for (let i = Math.max(validTotalPages - 3, 2); i <= validTotalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = validCurrentPage - 1; i <= validCurrentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(validTotalPages);
      }
    }
    return pages;
  };

  const startItem = (validCurrentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(validCurrentPage * itemsPerPage, totalItems);

  const handlePrevious = (e) => {
    e.preventDefault();
    if (validCurrentPage > 1 && onPageChange) {
      onPageChange(validCurrentPage - 1);
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (validCurrentPage < validTotalPages && onPageChange) {
      onPageChange(validCurrentPage + 1);
    }
  };

  const handlePageClick = (page, e) => {
    e.preventDefault();
    if (typeof page === 'number' && page !== validCurrentPage && onPageChange) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      {/* Items Info */}
      <div className="text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
        Showing <span className="font-semibold text-gray-900">{startItem}-{endItem}</span> of{" "}
        <span className="font-semibold text-gray-900">{totalItems}</span> results
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center gap-2">
        {/* Previous Button */}
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={validCurrentPage <= 1}
          className="flex items-center gap-1"
        >
          <ChevronLeft size={16} />
          <span className="hidden sm:inline">Previous</span>
        </Button>

        {/* Page Numbers */}
        <div className="flex items-center gap-1">
          {getVisiblePages().map((page, index) => (
            <div key={`page-${index}-${page}`}>
              {page === "..." ? (
                <div className="px-2 py-2 flex items-center justify-center">
                  <MoreHorizontal size={16} className="text-gray-400" />
                </div>
              ) : (
                <Button
                  variant={validCurrentPage === page ? "default" : "outline"}
                  onClick={(e) => handlePageClick(page, e)}
                  className="min-w-[36px] h-9"
                >
                  {page}
                </Button>
              )}
            </div>
          ))}
        </div>

        {/* Next Button */}
        <Button
          variant="outline"
          onClick={handleNext}
          disabled={validCurrentPage >= validTotalPages}
          className="flex items-center gap-1"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight size={16} />
        </Button>
      </div>

      {/* Items per page selector */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">Show:</span>
        <div className="relative">
          <button
            type="button"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center justify-between w-20 px-3 py-1.5 text-sm border border-gray-300 rounded-lg bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <span>{itemsPerPage}</span>
            <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
          </button>
          
          {dropdownOpen && (
            <>
              <div 
                className="fixed inset-0 z-10" 
                onClick={() => setDropdownOpen(false)}
              ></div>
              <div className="absolute right-0 mt-1 w-20 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                {[8, 12, 16, 20].map((value) => (
                  <button
                    key={value}
                    type="button"
                    className="w-full px-3 py-2 text-sm text-left hover:bg-blue-50 hover:text-blue-600 first:rounded-t-lg last:rounded-b-lg"
                    onClick={() => {
                      if (onItemsPerPageChange) {
                        onItemsPerPageChange(value);
                      }
                      setDropdownOpen(false);
                    }}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// === Enhanced Search and Filter Component ===
const ProfessionalSearchFilter = ({ 
  onSearch, 
  onTypeFilter, 
  onYearFilter, 
  types, 
  years, 
  selectedType = 'all',
  selectedYear = 'all',
  viewMode = 'grid',
  onViewModeChange 
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-8">
      {/* Main Search and View Toggle Row */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-4">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search media gallery..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              onSearch(e.target.value);
            }}
          />
          {searchTerm && (
            <button
              type="button"
              onClick={() => {
                setSearchTerm('');
                onSearch('');
              }}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>
          )}
        </div>

        {/* Filter and View Controls */}
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2"
          >
            <Filter size={16} />
            Filters
            <ChevronDown className={`transform transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} size={14} />
          </Button>

          {/* View Mode Toggle */}
          <div className="flex items-center border border-gray-300 rounded-lg p-1">
            <button
              type="button"
              onClick={() => onViewModeChange && onViewModeChange('grid')}
              className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <Grid size={16} />
            </button>
            <button
              type="button"
              onClick={() => onViewModeChange && onViewModeChange('list')}
              className={`p-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <List size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Panel */}
      <AnimatePresence>
  {isFilterOpen && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{
        opacity: { duration: 0.2, ease: 'easeOut' },
        height: { duration: 0.3, ease: 'easeOut' },
      }}
      className="border-t border-gray-200 pt-4 overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
          <select
            value={selectedType}
            onChange={(e) => onTypeFilter(e.target.value)}
            className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Categories</option>
            {types.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Year Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
          <select
            value={selectedYear}
            onChange={(e) => onYearFilter(e.target.value)}
            className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Years</option>
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>

        {/* Reset Filters */}
        <div className="flex items-end">
          <Button
            variant="ghost"
            onClick={() => {
              onTypeFilter('all');
              onYearFilter('all');
              setSearchTerm('');
              onSearch('');
            }}
            className="w-full"
          >
            Reset Filters
          </Button>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
};

// === Format date function ===
function format(date, formatStr) {
  const d = typeof date === 'string' ? new Date(date) : date;
  const pad = (n) => (n < 10 ? '0' + n : n);
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return formatStr.replace('MMMM', monthNames[d.getMonth()]).replace('dd', pad(d.getDate())).replace('yyyy', d.getFullYear());
}

// === Mock Data ===
const mockMedia = [
  {
    id: 1,
    title: '15th Annual Convocation Ceremony',
    category: 'Convocation',
    year: '2025',
    date: '2025-05-12',
    images: [
      'https://www.ic3ecsbhi.com/Gallery/20231224_134240.jpg',
      'https://www.ic3ecsbhi.com/Events/IMG-20231224-WA0082.jpg',
      'https://hostels.gbu.ac.in/uploads/eventsfiles/photos/65a98a5384fb0_GBU-Convocation.jpeg',
    ],
  },
  {
    id: 2,
    title: 'National Sports Meet 2025',
    category: 'Sports',
    year: '2025',
    date: '2025-02-18',
    images: [
      'https://www.gbu.ac.in/Content/img/sports/banner2.jpg',
      'https://www.gbu.ac.in/Content/img/sports/banner1.jpg',
    ],
  },
  {
    id: 3,
    title: 'Annual Cultural Fest - Rhythms 2025',
    category: 'Cultural',
    year: '2025',
    date: '2025-03-10',
    images: [
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80',
      'https://www.gbu.ac.in/Content/img/cc/Artboard%201abhivyanjana7.jpg',
    ],
  },
  {
    id: 4,
    title: 'International Research Symposium',
    category: 'Academic',
    year: '2025',
    date: '2025-04-08',
    images: [
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 5,
    title: 'Campus Life - Spring Moments',
    category: 'Campus Life',
    year: '2025',
    date: '2025-03-25',
    images: [
      'https://cdn.thedecorjournalindia.com/wp-content/uploads/2022/11/9_Modern-day-marvel-Gautam-Buddha-University-by-CP-Kukreja-architects-transpires-fresh-vibe-and-ancient-wisdom.jpg?lossy=1&resize=1920%2C1357&ssl=1&strip=all',
      'https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/11/03131617/1-inside-image-816-x-576-horizontal.jpeg',
      'https://hawmagazine.com/wp-content/uploads/2023/11/DSF8939-croped-1.jpg',
    ],
  },
  {
    id: 6,
    title: 'Tech Symposium 2025',
    category: 'Events',
    year: '2025',
    date: '2025-01-22',
    images: [
      'https://www.gbu.ac.in/Content/gbudata/incubation/Incubation_Pic9.jpg',
      'https://www.ic3ecsbhi.com/dsf8951%20copy.jpeg',
    ],
  },
  {
    id: 7,
    title: 'Robotics Workshop & Expo',
    category: 'Academic',
    year: '2024',
    date: '2024-08-10',
    images: [
      'https://www.ux4g.gov.in/assets/img/awareness-workshop/gbu-19-11-24/900x1.webp',
      'https://static.toiimg.com/thumb/msid-104795413%2Cwidth-1280%2Cheight-720%2Cresizemode-72/104795413.jpg',
    ],
  },
  {
    id: 8,
    title: 'Faculty Development Program 2024',
    category: 'Academic',
    year: '2024',
    date: '2024-12-12',
    images: [
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 9,
    title: 'Science & Innovation Fair',
    category: 'Academic',
    year: '2024',
    date: '2024-10-18',
    images: [
      'https://gburif.org/images/intro-carousel/gautam-buddha-university-3.jpg',
      'https://www.hindustantimes.com/ht-img/img/2024/09/05/1600x900/The-12-hour-Hackathon-was-held-at-the-Central-Comp_1725563537794.jpg',
    ],
  },
  {
    id: 10,
    title: 'Inter-College Football League',
    category: 'Sports',
    year: '2024',
    date: '2024-09-20',
    images: [
      'https://www.gbu.ac.in/Content/img/sports/banner1.jpg',
    ],
  },
  {
    id: 11,
    title: 'Winter Cultural Gala',
    category: 'Cultural',
    year: '2024',
    date: '2024-12-22',
    images: [
      'https://i.ytimg.com/vi/Aicd7XpY9eI/sd2.jpg?rs=AOn4CLCprID9Bk-ruT1eZpLbeLjahWmBSg&sqp=-oaymwEoCIAFEOAD8quKqQMcGADwAQH4AYwCgALgA4oCDAgAEAEYVCAgKH8wDw%3D%3D',
    ],
  },
  {
    id: 12,
    title: 'Open Stage Night',
    category: 'Cultural',
    year: '2024',
    date: '2024-11-15',
    images: [
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 13,
    title: 'Yoga & Wellness Retreat',
    category: 'Campus Life',
    year: '2024',
    date: '2024-07-05',
    images: [
      'https://www.gbu.ac.in/Content/gbudata/meditation/img/buddha28.jpg',
      'https://www.gbu.ac.in/Content/gbudata/meditation/img/buddha31.jpg',
    ],
  },
  {
    id: 14,
    title: 'GBU Literary Festival',
    category: 'Cultural',
    year: '2024',
    date: '2024-09-15',
    images: [
      'https://sameer.mygbu.in/home/uploads/4.jpg',
    ],
  },
  {
    id: 15,
    title: 'GBU Half Marathon 2025',
    category: 'Sports',
    year: '2025',
    date: '2025-01-28',
    images: [
      'https://www.gbu.ac.in/Content/img/sports/banner1.jpg',
    ],
  },
  {
    id: 16,
    title: 'Inter-University Debate Championship',
    category: 'Academic',
    year: '2025',
    date: '2025-02-20',
    images: [
      'https://d8it4huxumps7.cloudfront.net/lambda-pdfs/opportunity-bannerImages/1743929131.png',
    ],
  },
  {
    id: 17,
    title: 'Startup Expo & Innovation Fair',
    category: 'Events',
    year: '2025',
    date: '2025-03-18',
    images: [
      'https://images.unsplash.com/photo-1564866657310-2630c1f1df9f?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 18,
    title: 'Women Empowerment Seminar',
    category: 'Academic',
    year: '2025',
    date: '2025-03-25',
    images: [
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 19,
    title: 'Spring Tree Plantation Drive',
    category: 'Campus Life',
    year: '2025',
    date: '2025-04-05',
    images: [
      'https://images.unsplash.com/photo-1559634684-e3eab5be0985?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 20,
    title: 'GBU Alumni Meet & Reunion',
    category: 'Events',
    year: '2025',
    date: '2025-04-20',
    images: [
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 21,
    title: 'Environmental Awareness Drive',
    category: 'Campus Life',
    year: '2025',
    date: '2025-05-02',
    images: [
      'https://images.unsplash.com/photo-1575202335306-5c8c54b6db1c?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 22,
    title: 'Inter-College Hackathon',
    category: 'Academic',
    year: '2025',
    date: '2025-05-15',
    images: [
      'https://images.unsplash.com/photo-1537432376769-00aabc1ca45c?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 23,
    title: 'Cultural Evening - Folk Fusion',
    category: 'Cultural',
    year: '2025',
    date: '2025-06-10',
    images: [
      'https://images.unsplash.com/photo-1587049352849-35263f2e96f5?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 24,
    title: 'Photography Exhibition',
    category: 'Cultural',
    year: '2025',
    date: '2025-06-20',
    images: [
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 25,
    title: 'Summer Internship Orientation',
    category: 'Academic',
    year: '2025',
    date: '2025-07-01',
    images: [
      'https://biotechworldindia.in/wp-content/uploads/2023/11/IMG-20200620-WA0002-1024x705.jpg',
    ],
  },
];

// === Main Component ===
const MediaGallery = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [selectedMediaItem, setSelectedMediaItem] = useState(null);
  const [viewMode, setViewMode] = useState('grid');

  const allCategories = Array.from(new Set(mockMedia.map(item => item.category)));
  const allYears = Array.from(new Set(mockMedia.map(item => item.year)));

  const filteredMedia = useMemo(() => {
    return mockMedia.filter(item => {
      const matchesSearch = !searchQuery || item.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesYear = selectedYear === 'all' || item.year === selectedYear;
      return matchesSearch && matchesCategory && matchesYear;
    });
  }, [searchQuery, selectedCategory, selectedYear]);

  const totalPages = Math.ceil(filteredMedia.length / itemsPerPage);
  const currentMedia = filteredMedia.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const openImageModal = (item) => {
    setSelectedMediaItem(item);
    setSelectedImageIndex(0);
  };

  const navigateImage = (dir) => {
    const total = selectedMediaItem.images.length;
    setSelectedImageIndex((prev) => (dir === 'next' ? (prev + 1) % total : (prev - 1 + total) % total));
  };

  const getCategoryColor = (cat) => ({
    Convocation: 'bg-purple-100 text-purple-800 border-purple-200',
    Sports: 'bg-green-100 text-green-800 border-green-200',
    Cultural: 'bg-orange-100 text-orange-800 border-orange-200',
    Academic: 'bg-blue-100 text-blue-800 border-blue-200',
    'Campus Life': 'bg-teal-100 text-teal-800 border-teal-200',
    Events: 'bg-indigo-100 text-indigo-800 border-indigo-200',
  }[cat] || 'bg-gray-100 text-gray-800 border-gray-200');

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleItemsPerPageChange = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HeroBanner*/}
      <BannerSection
        title="Media Gallery"
        subtitle="Explore moments from university events and campus activities"
        bgTheme={7}
        size="small"
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search and Filter */}
        <ProfessionalSearchFilter 
          onSearch={setSearchQuery}
          onTypeFilter={setSelectedCategory}
          onYearFilter={setSelectedYear}
          types={allCategories}
          years={allYears}
          selectedType={selectedCategory}
          selectedYear={selectedYear}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />

        {/* Results Summary */}
        {(selectedCategory !== 'all' || selectedYear !== 'all' || searchQuery) && (
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {filteredMedia.length} Media Found
              </h2>
              <p className="text-sm text-gray-500">
                Showing {((currentPage - 1) * itemsPerPage) + 1}-{Math.min(currentPage * itemsPerPage, filteredMedia.length)} of {filteredMedia.length} results
              </p>
            </div>
            
            <Button
              variant="outline"
              onClick={() => {
                setSelectedCategory('all');
                setSelectedYear('all');
                setSearchQuery('');
                setCurrentPage(1);
              }}
              className="flex items-center gap-2"
            >
              <X size={16} />
              Clear All Filters
            </Button>
          </div>
        )}

        {/* Media Grid */}
        <motion.div 
          layout 
          className={`${
            viewMode === 'grid' 
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' 
              : 'space-y-4'
          }`}
        >
          <AnimatePresence>
            {currentMedia.map(item => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                layout
              >
                <Card 
                  className={`group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                  onClick={() => openImageModal(item)}
                >
                  <div className={`${
                    viewMode === 'list' 
                      ? 'w-48 h-32 flex-shrink-0' 
                      : 'h-48'
                  } overflow-hidden`}>
                    <img
                      src={item.images[0]}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=600&q=80';
                      }}
                    />
                    {item.images.length > 1 && (
                      <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                        +{item.images.length - 1}
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4 flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getCategoryColor(item.category)}>
                        {item.category}
                      </Badge>
                      <span className="text-sm font-medium text-gray-500">{item.year}</span>
                    </div>
                    
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar size={14} />
                      <span>{format(item.date, 'MMMM dd, yyyy')}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredMedia.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye size={32} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">No Media Found</h3>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              We couldn't find any media matching your search criteria. Try adjusting your filters or search terms.
            </p>
          </motion.div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12">
            <ProfessionalPagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalItems={filteredMedia.length}
              itemsPerPage={itemsPerPage}
              onPageChange={handlePageChange}
              onItemsPerPageChange={handleItemsPerPageChange}
            />
          </div>
        )}

        {/* Image Modal */}
        {selectedMediaItem && selectedImageIndex !== null && (
          <AnimatePresence>
            <Dialog open>
              <DialogContent className="p-0 bg-transparent">
                <div className="relative bg-white rounded-xl overflow-hidden max-w-4xl mx-auto">
                  <div className="relative">
                    <img 
                      src={selectedMediaItem.images[selectedImageIndex]} 
                      alt="" 
                      className="w-full max-h-[70vh] object-contain"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=600&q=80';
                      }}
                    />
                    
                    {/* Close Button */}
                    <Button 
                      variant="glass" 
                      size="icon" 
                      className="absolute top-4 right-4" 
                      onClick={() => setSelectedImageIndex(null)}
                    >
                      <X size={24} />
                    </Button>
                    
                    {/* Navigation Buttons */}
                    {selectedMediaItem.images.length > 1 && (
                      <>
                        <Button 
                          variant="glass" 
                          size="icon" 
                          className="absolute left-4 top-1/2 transform -translate-y-1/2" 
                          onClick={() => navigateImage('prev')}
                        >
                          <ChevronLeft size={24} />
                        </Button>
                        <Button 
                          variant="glass" 
                          size="icon" 
                          className="absolute right-4 top-1/2 transform -translate-y-1/2" 
                          onClick={() => navigateImage('next')}
                        >
                          <ChevronRight size={24} />
                        </Button>
                      </>
                    )}
                    
                    {/* Image Counter */}
                    {selectedMediaItem.images.length > 1 && (
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                        {selectedImageIndex + 1} / {selectedMediaItem.images.length}
                      </div>
                    )}
                  </div>
                  
                  {/* Image Details */}
                  <div className="p-6 bg-white">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {selectedMediaItem.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{format(selectedMediaItem.date, 'MMMM dd, yyyy')}</span>
                          </div>
                          <Badge className={getCategoryColor(selectedMediaItem.category)}>
                            {selectedMediaItem.category}
                          </Badge>
                        </div>
                      </div>
                      <span className="text-lg font-semibold text-blue-600">
                        {selectedMediaItem.year}
                      </span>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default MediaGallery;
