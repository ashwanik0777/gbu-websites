import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, 
  FileText, 
  Calendar, 
  Clock, 
  Filter, 
  Search, 
  X, 
  ChevronDown,
  Grid,
  List,
  Eye,
  Share2,
  BookOpen,
  AlertCircle,
  TrendingUp,
  Star,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal
} from 'lucide-react';
import BannerSection from '../../components/HeroBanner';

// Enhanced Card components with modern styling
const Card = ({ children, className = '', hover = true }) => (
  <div className={`bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 ${hover ? 'hover:scale-[1.02] hover:border-blue-300/50' : ''} ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className = '' }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = '' }) => (
  <h2 className={`text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent ${className}`}>
    {children}
  </h2>
);

const CardDescription = ({ children, className = '' }) => (
  <p className={`text-gray-600 leading-relaxed ${className}`}>{children}</p>
);

// Enhanced Badge component
const Badge = ({ children, className = '', variant = 'default' }) => {
  const variants = {
    default: 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 border border-gray-300',
    exam: 'bg-gradient-to-r from-red-50 to-red-100 text-red-700 border border-red-200',
    fee: 'bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border border-blue-200',
    event: 'bg-gradient-to-r from-green-50 to-green-100 text-green-700 border border-green-200',
    academic: 'bg-gradient-to-r from-purple-50 to-purple-100 text-purple-700 border border-purple-200',
    general: 'bg-gradient-to-r from-amber-50 to-amber-100 text-amber-700 border border-amber-200'
  };
  
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${variants[variant] || variants.default} ${className}`}>
      {children}
    </span>
  );
};

// Enhanced Button component
const Button = ({ children, size = 'md', variant = 'default', className = '', icon, disabled = false, ...props }) => {
  const sizeClasses = {
    sm: 'px-2 py-2 text-sm',
    md: 'px-3 py-3 text-base',
    lg: 'px-4 py-4 text-lg'
  };
  const variantClasses = {
    default: 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-blue-600 text-blue-600 bg-white/80 hover:bg-blue-50 backdrop-blur-sm',
    ghost: 'text-gray-600 hover:bg-gray-100 hover:text-gray-900',
    danger: 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700'
  };
  
  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      className={`inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 ${sizeClasses[size]} ${variantClasses[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </motion.button>
  );
};

// Built-in Pagination Component
const PaginationComponent = ({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  // Ensure valid values
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
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(validTotalPages);
      } else if (validCurrentPage >= validTotalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = validTotalPages - 3; i <= validTotalPages; i++) {
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

  const handlePreviousPage = () => {
    if (validCurrentPage > 1) {
      onPageChange(validCurrentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (validCurrentPage < validTotalPages) {
      onPageChange(validCurrentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    if (page >= 1 && page <= validTotalPages && page !== validCurrentPage) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-10 bg-gradient-to-r from-white via-blue-50 to-white p-6 rounded-2xl shadow-lg border border-blue-100">
      {/* Items Info */}
      <div className="text-sm text-gray-700 font-medium bg-blue-50 px-4 py-2 rounded-lg shadow-inner">
        Showing <span className="font-bold text-blue-600">{startItem}-{endItem}</span> of{" "}
        <span className="font-bold text-blue-600">{totalItems}</span> results
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center gap-2">
        {/* Previous Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={handlePreviousPage}
          disabled={validCurrentPage <= 1 || validTotalPages <= 1}
          className="!rounded-full"
        >
          <ChevronLeft size={18} className="mr-1" />
          <span className="hidden sm:inline">Previous</span>
        </Button>

        <div className="flex items-center gap-1">
          {getVisiblePages().map((page, index) => (
            <div key={`page-${index}`}>
              {page === "..." ? (
                <div className="px-2 py-2 flex items-center justify-center">
                  <MoreHorizontal size={18} className="text-gray-400" />
                </div>
              ) : (
                <Button
                  variant={validCurrentPage === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => handlePageClick(Number(page))}
                  className={`min-w-[40px] ${validCurrentPage === page ? "shadow-lg scale-105" : ""}`}
                >
                  {page}
                </Button>
              )}
            </div>
          ))}
        </div>

        {/* Next Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={handleNextPage}
          disabled={validCurrentPage >= validTotalPages || validTotalPages <= 1}
          className="!rounded-full"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight size={18} className="ml-1" />
        </Button>
      </div>

      {/* Items per page selector */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600 font-medium">Show:</span>
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="border border-gray-300 rounded-lg px-3 py-1.5 bg-white cursor-pointer flex items-center justify-between shadow-sm transition-all hover:border-blue-400 w-24"
          >
            <span className="font-medium text-gray-700">{itemsPerPage}</span>
            <ChevronDown size={16} className={`ml-2 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
          </button>
          
          {dropdownOpen && (
            <div className="absolute left-0 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-xl z-20">
              {[9, 18, 27].map((value) => (
                <button
                  key={value}
                  className="w-full px-4 py-2 hover:bg-blue-100 cursor-pointer text-gray-700 font-medium transition-colors rounded text-left"
                  onClick={() => {
                    onItemsPerPageChange(value);
                    setDropdownOpen(false);
                  }}
                >
                  {value} / page
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Enhanced Search and Filter Component
const EnhancedSearchFilter = ({ 
  onSearch, 
  onDateFilter, 
  onTypeFilter, 
  onYearFilter, 
  types, 
  years, 
  selectedType, 
  selectedYear,
  viewMode,
  onViewModeChange 
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="container bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl mx-auto mt-5 relative z-10 p-4 border border-gray-200/50">
      <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-2xl">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search notices, announcements, circulars..."
            className="w-full pl-12 pr-4 py-2 bg-gray-50/80 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-400 transition-all duration-300"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              onSearch(e.target.value);
            }}
          />
          {searchTerm && (
            <button
              onClick={() => {
                setSearchTerm('');
                onSearch('');
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>
          )}
        </div>

        {/* Filter Controls */}
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 px-6 py-2 bg-indigo-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Filter size={18} />
            Filters
            <ChevronDown className={`transform transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''}`} size={16} />
          </motion.button>

          {/* View Mode Toggle */}
          <div className="flex items-center bg-gray-100 rounded-xl p-1">
            <button
              onClick={() => onViewModeChange('grid')}
              className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'grid' ? 'bg-white shadow-md text-blue-600' : 'text-gray-500'}`}
            >
              <Grid size={18} />
            </button>
            <button
              onClick={() => onViewModeChange('list')}
              className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'list' ? 'bg-white shadow-md text-blue-600' : 'text-gray-500'}`}
            >
              <List size={18} />
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
            className="mt-6 pt-6 border-t border-gray-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Type Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Category</label>
                <select
                  value={selectedType}
                  onChange={(e) => onTypeFilter(e.target.value)}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-400"
                >
                  <option value="all">All Categories</option>
                  {types.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Year Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Year</label>
                <select
                  value={selectedYear}
                  onChange={(e) => onYearFilter(e.target.value)}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-400"
                >
                  <option value="all">All Years</option>
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>

              {/* Date Range Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Date Range</label>
                <input
                  type="date"
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-400"
                  onChange={(e) => onDateFilter(new Date(e.target.value), null)}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Complete Mock Data (15 items)
const mockNotices = [
  {
    id: 1,
    title: "End Semester Examination Schedule - June 2025",
    content: "The final schedule for End Semester Examinations (June 2025) is now available. Students are advised to download the PDF and prepare accordingly. This includes all undergraduate and postgraduate programs across all schools.",
    date: "2025-05-25",
    type: "Exam",
    priority: "high",
    views: 1245,
    isNew: true,
    pdfUrl: "https://gbu.ac.in/notices/exam-schedule-june-2025.pdf"
  },
  {
    id: 2,
    title: "Extension of Fee Payment Deadline - Summer Semester",
    content: "The last date for fee payment for the Summer Semester has been extended to 5th June 2025. Late fee will be applicable after this date. Students can pay online or visit the finance office during working hours.",
    date: "2025-05-20",
    type: "Fee",
    priority: "medium",
    views: 892,
    isNew: false,
    pdfUrl: "https://gbu.ac.in/notices/fee-extension-summer-2025.pdf"
  },
  {
    id: 3,
    title: "Annual Convocation 2025 Notification",
    content: "The Annual Convocation for the graduating batch of 2025 will be held on 30th July. Graduates are required to register online through the university portal. Dress code and venue details are attached.",
    date: "2025-05-15",
    type: "Event",
    priority: "high",
    views: 2156,
    isNew: true,
    pdfUrl: "https://gbu.ac.in/notices/convocation-2025-guidelines.pdf"
  },
  {
    id: 4,
    title: "Academic Calendar 2025-26 Released",
    content: "The detailed Academic Calendar for the session 2025-26 has been published. Download for semester-wise schedules, holidays, and important academic dates. All departments should follow this calendar strictly.",
    date: "2025-05-10",
    type: "Academic",
    priority: "medium",
    views: 1678,
    isNew: false,
    pdfUrl: "https://gbu.ac.in/notices/academic-calendar-2025-26.pdf"
  },
  {
    id: 5,
    title: "Notice Regarding Monsoon Break",
    content: "All students are informed that the Monsoon Break will be observed from 20th July to 5th August 2025. During this period, all academic activities will remain suspended except for essential administrative work.",
    date: "2025-05-12",
    type: "General",
    priority: "low",
    views: 743,
    isNew: false,
    pdfUrl: ""
  },
  {
    id: 6,
    title: "Mid-Term Examination Guidelines - July 2025",
    content: "Please refer to the attached guidelines for the upcoming Mid-Term Examinations for all undergraduate and postgraduate programs. Seating arrangements and exam rules are specified in detail.",
    date: "2025-06-01",
    type: "Exam",
    priority: "high",
    views: 1834,
    isNew: true,
    pdfUrl: "https://gbu.ac.in/notices/midterm-guidelines-july-2025.pdf"
  },
  {
    id: 7,
    title: "Scholarship Renewal Notice - 2025",
    content: "Students availing scholarships are advised to submit renewal applications before 10th August 2025 to the Scholarship Cell. Required documents list and application form are available on the website.",
    date: "2025-06-05",
    type: "General",
    priority: "medium",
    views: 567,
    isNew: false,
    pdfUrl: "https://gbu.ac.in/notices/scholarship-renewal-2025.pdf"
  },
  {
    id: 8,
    title: "Workshop on Cybersecurity and Data Privacy",
    content: "A National Workshop on Cybersecurity and Data Privacy will be organized by the School of ICT on 22nd August. Limited seats available. Registration is mandatory for all participants.",
    date: "2025-06-10",
    type: "Event",
    priority: "medium",
    views: 1289,
    isNew: true,
    pdfUrl: "https://gbu.ac.in/notices/cybersecurity-workshop-2025.pdf"
  },
  {
    id: 9,
    title: "Notice for Hostel Allotment - New Session",
    content: "Online applications for hostel allotment for the academic session 2025-26 are now open. Download the notice for detailed procedure, eligibility criteria, and required documents.",
    date: "2025-06-15",
    type: "General",
    priority: "high",
    views: 2341,
    isNew: true,
    pdfUrl: "https://gbu.ac.in/notices/hostel-allotment-2025.pdf"
  },
  {
    id: 10,
    title: "Holiday Notice: Raksha Bandhan",
    content: "The university will remain closed on 18th August 2025 on account of Raksha Bandhan. All administrative offices and academic activities will resume on 19th August 2025.",
    date: "2025-06-18",
    type: "General",
    priority: "low",
    views: 456,
    isNew: false,
    pdfUrl: ""
  },
  {
    id: 11,
    title: "Research Paper Submission Guidelines - 2025",
    content: "Updated guidelines for research paper submissions are now available. All research scholars must follow the new format and submission process as outlined in the attached document.",
    date: "2025-06-20",
    type: "Academic",
    priority: "medium",
    views: 789,
    isNew: true,
    pdfUrl: "https://gbu.ac.in/notices/research-guidelines-2025.pdf"
  },
  {
    id: 12,
    title: "Sports Complex Maintenance Notice",
    content: "The Sports Complex will undergo maintenance from 25th July to 30th July 2025. All sports activities will be suspended during this period. Alternative arrangements will be made for urgent requirements.",
    date: "2025-06-22",
    type: "General",
    priority: "low",
    views: 234,
    isNew: false,
    pdfUrl: ""
  },
  {
    id: 13,
    title: "Library Extended Hours During Exams",
    content: "The Central Library will remain open 24/7 during the examination period from 1st July to 31st July 2025. Special study spaces and additional resources will be made available for students.",
    date: "2025-06-25",
    type: "Academic",
    priority: "medium",
    views: 1567,
    isNew: true,
    pdfUrl: "https://gbu.ac.in/notices/library-extended-hours.pdf"
  },
  {
    id: 14,
    title: "Career Fair 2025 - Industry Partnership",
    content: "The Annual Career Fair 2025 will be held from 15th to 17th September. Over 50 companies will participate. Students are advised to register early and prepare their resumes according to industry standards.",
    date: "2025-06-28",
    type: "Event",
    priority: "high",
    views: 3456,
    isNew: true,
    pdfUrl: "https://gbu.ac.in/notices/career-fair-2025.pdf"
  },
  {
    id: 15,
    title: "New Course Offerings - Winter Semester 2025",
    content: "Several new elective courses are being offered in the Winter Semester 2025. Course details, prerequisites, and registration information are provided in the attached document.",
    date: "2025-06-30",
    type: "Academic",
    priority: "medium",
    views: 987,
    isNew: true,
    pdfUrl: "https://gbu.ac.in/notices/new-courses-winter-2025.pdf"
  }
];

// Simple date formatting function
function format(date, formatStr) {
  const d = new Date(date);
  const pad = (n) => n.toString().padStart(2, '0');
  const map = {
    'MMMM': d.toLocaleString('default', { month: 'long' }),
    'MMM': d.toLocaleString('default', { month: 'short' }),
    'MM': pad(d.getMonth() + 1),
    'dd': pad(d.getDate()),
    'yyyy': d.getFullYear(),
    'yy': d.getFullYear().toString().slice(-2)
  };
  return formatStr.replace(/MMMM|MMM|MM|dd|yyyy|yy/g, (match) => map[match]);
}

const Notice = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedType, setSelectedType] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [viewMode, setViewMode] = useState('grid');

  const allTypes = Array.from(new Set(mockNotices.map(notice => notice.type)));
  const allYears = Array.from(new Set(mockNotices.map(notice => new Date(notice.date).getFullYear().toString())));

  // Filtered and sorted data
  const filteredAndSortedNews = useMemo(() => {
    return mockNotices.filter(notice => {
      const matchesSearch = !searchQuery ||
        notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        notice.content.toLowerCase().includes(searchQuery.toLowerCase());

      const noticeDate = new Date(notice.date);
      const matchesDateRange = (!startDate || noticeDate >= startDate) &&
        (!endDate || noticeDate <= endDate);

      const matchesType = selectedType === 'all' || notice.type === selectedType;
      const matchesYear = selectedYear === 'all' || new Date(notice.date).getFullYear().toString() === selectedYear;

      return matchesSearch && matchesDateRange && matchesType && matchesYear;
    }).sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [searchQuery, startDate, endDate, selectedType, selectedYear]);

  const totalPages = Math.ceil(filteredAndSortedNews.length / itemsPerPage);
  const currentNotices = filteredAndSortedNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handler functions for pagination
  const handlePageChange = (page) => {
    setCurrentPage(page);
    document.querySelector('.notices-container')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start' 
    });
  };

  const handleItemsPerPageChange = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  const getTypeColor = (type) => {
    const colors = {
      'Exam': 'exam',
      'Fee': 'fee',
      'Event': 'event',
      'Academic': 'academic',
      'General': 'general'
    };
    return colors[type] || 'default';
  };

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const NoticeCard = ({ notice, index }) => (
    <motion.div 
      key={`notice-${notice.id}`}
      variants={item} 
      custom={index}
      layout
      className={viewMode === 'list' ? 'w-full' : ''}
    >
      <Card className="h-full group overflow-hidden relative">
        {/* Priority & New Badge */}
        <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
          {notice.isNew && (
            <Badge variant="event" className="animate-pulse">
              <Star size={10} className="mr-1" />
              NEW
            </Badge>
          )}
          {notice.priority === 'high' && (
            <Badge variant="exam">
              <AlertCircle size={10} className="mr-1" />
              HIGH
            </Badge>
          )}
        </div>

        <CardHeader className={`${viewMode === 'list' ? 'flex flex-row items-center gap-6' : ''}`}>
          <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
            <div className="flex items-center gap-3 mb-3">
              <Badge variant={getTypeColor(notice.type)}>
                {notice.type}
              </Badge>
              <div className="flex items-center text-sm text-gray-500 gap-2">
                <Calendar size={14} />
                {format(new Date(notice.date), 'MMMM dd, yyyy')}
              </div>
              <div className="flex items-center text-sm text-gray-500 gap-2">
                <Eye size={14} />
                {notice.views}
              </div>
            </div>
            
            <CardTitle className="text-lg font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300">
              {notice.title}
            </CardTitle>
            
            <CardDescription className="text-gray-600 leading-relaxed mb-4">
              {viewMode === 'list' 
                ? notice.content.substring(0, 200) + '...'
                : notice.content.substring(0, 120) + '...'
              }
            </CardDescription>
          </div>

          <div className={`flex gap-3 ${viewMode === 'list' ? 'flex-col shrink-0' : 'flex-wrap'}`}>
            {notice.pdfUrl && (
              <Button 
                size="sm" 
                variant="outline"
                icon={<Download size={14} />}
                onClick={() => window.open(notice.pdfUrl, '_blank')}
              >
                Download
              </Button>
            )}

            <Link to={`/announcements/notices/${notice.id}`}>
              <Button 
                size="sm"
                icon={<FileText size={14} />}
              >
                Read More
              </Button>
            </Link>

            <Button 
              size="sm" 
              variant="ghost"
              icon={<Share2 size={14} />}
              className="hover:bg-blue-50 hover:text-blue-600"
            >
              Share
            </Button>
          </div>
        </CardHeader>
      </Card>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Elements */}
     
      {/* Hero Section */}
      <BannerSection
        title="Notices & Circulars"
        subtitle="Stay updated with the latest notices, announcements, and circulars from GBU."
        bgTheme={5}
/>
      {/* Enhanced Search Filter */}
      <EnhancedSearchFilter 
        onSearch={setSearchQuery}
        onDateFilter={(start, end) => {
          setStartDate(start);
          setEndDate(end);
          setCurrentPage(1);
        }}
        onTypeFilter={(type) => {
          setSelectedType(type);
          setCurrentPage(1);
        }}
        onYearFilter={(year) => {
          setSelectedYear(year);
          setCurrentPage(1);
        }}
        types={allTypes}
        years={allYears}
        selectedType={selectedType}
        selectedYear={selectedYear}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />

      {/* Results Summary */}
      {(selectedType !== 'all' || selectedYear !== 'all' || searchQuery || startDate || endDate) && (
        <div className="container mx-auto px-4 mt-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold text-gray-800">
                {filteredAndSortedNews.length} Notice{filteredAndSortedNews.length !== 1 ? 's' : ''} Found
              </h2>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => {
                  setSelectedType('all');
                  setSelectedYear('all');
                  setSearchQuery('');
                  setStartDate(null);
                  setEndDate(null);
                  setCurrentPage(1);
                }}
                icon={<X size={16} />}
              >
                Clear Filters
              </Button>
            </div>
            
            <div className="text-sm text-gray-500">
              Showing {((currentPage - 1) * itemsPerPage) + 1}-{Math.min(currentPage * itemsPerPage, filteredAndSortedNews.length)} of {filteredAndSortedNews.length}
            </div>
          </div>
        </div>
      )}

      {/* Notices Grid/List */}
      <div className="container mx-auto mt-16 px-4 pb-16 notices-container">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className={`${
            viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
              : 'space-y-6'
          }`}
        >
          {/* FIXED: Removed AnimatePresence with mode="wait" to prevent the error */}
          {currentNotices.map((notice, index) => (
            <NoticeCard key={`notice-${notice.id}`} notice={notice} index={index} />
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredAndSortedNews.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen size={32} className="text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">No Notices Found</h3>
            <p className="text-gray-500 text-lg mb-8 max-w-md mx-auto">
              We couldn't find any notices matching your search criteria. Try adjusting your filters or search terms.
            </p>
            <Button 
              onClick={() => {
                setSelectedType('all');
                setSelectedYear('all');
                setSearchQuery('');
                setStartDate(null);
                setEndDate(null);
                setCurrentPage(1);
              }}
              icon={<TrendingUp size={16} />}
            >
              View All Notices
            </Button>
          </motion.div>
        )}

        {/* Built-in Pagination Component */}
        {totalPages > 1 && (
          <PaginationComponent
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={filteredAndSortedNews.length}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
            onItemsPerPageChange={handleItemsPerPageChange}
          />
        )}
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Notice;
