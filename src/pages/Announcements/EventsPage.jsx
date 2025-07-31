import React, { useState, useMemo, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Calendar, Search, Filter, Clock, MapPin, Users, Star, ChevronLeft, ChevronRight, X, SlidersHorizontal } from 'lucide-react';
import BannerSection from '../../components/HeroBanner';

// Complete Events Data
const eventsData = [
  {
    id: 1,
    title: "Annual Research Conference 2025",
    organizer: "Computer Science Department",
    date: "2025-08-15",
    time: "09:00",
    location: "Main Auditorium",
    type: "Conference",
    description: "Join us for the most comprehensive research conference featuring cutting-edge innovations in AI, ML, and Data Science.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
    attendees: 250,
    status: "upcoming",
    price: "Free",
    tags: ["Research", "AI", "Conference"],
    year: "2025"
  },
  {
    id: 2,
    title: "Web Development Workshop",
    organizer: "IT Department",
    date: "2025-07-25",
    time: "14:00",
    location: "Computer Lab 1",
    type: "Workshop",
    description: "Learn modern web development with React, Node.js, and MongoDB. Hands-on experience with real projects.",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=250&fit=crop",
    attendees: 50,
    status: "upcoming",
    price: "₹500",
    tags: ["Web Dev", "React", "Workshop"],
    year: "2025"
  },
  {
    id: 3,
    title: "AI & Machine Learning Symposium",
    organizer: "Research Center",
    date: "2025-09-10",
    time: "10:00",
    location: "Science Block",
    type: "Symposium",
    description: "Explore the latest advancements in artificial intelligence and machine learning with industry experts.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
    attendees: 200,
    status: "upcoming",
    price: "₹1000",
    tags: ["AI", "ML", "Symposium"],
    year: "2025"
  },
  {
    id: 4,
    title: "Student Innovation Fair",
    organizer: "Innovation Cell",
    date: "2025-08-05",
    time: "11:00",
    location: "Campus Ground",
    type: "Fair",
    description: "Showcase your innovative projects and connect with industry leaders and investors.",
    image: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=400&h=250&fit=crop",
    attendees: 300,
    status: "upcoming",
    price: "Free",
    tags: ["Innovation", "Projects", "Fair"],
    year: "2025"
  },
  {
    id: 5,
    title: "Cybersecurity Workshop",
    organizer: "Security Team",
    date: "2025-07-30",
    time: "13:00",
    location: "Tech Center",
    type: "Workshop",
    description: "Learn about cybersecurity best practices, ethical hacking, and network security fundamentals.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop",
    attendees: 75,
    status: "upcoming",
    price: "₹750",
    tags: ["Security", "Hacking", "Workshop"],
    year: "2025"
  },
  {
    id: 6,
    title: "Data Science Bootcamp",
    organizer: "Analytics Department",
    date: "2025-08-20",
    time: "09:30",
    location: "Data Lab",
    type: "Bootcamp",
    description: "Intensive 3-day bootcamp covering Python, R, data visualization, and statistical analysis.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    attendees: 40,
    status: "upcoming",
    price: "₹2000",
    tags: ["Data Science", "Python", "Bootcamp"],
    year: "2025"
  },
  {
    id: 7,
    title: "Blockchain Technology Seminar",
    organizer: "Fintech Club",
    date: "2025-09-15",
    time: "15:00",
    location: "Seminar Hall",
    type: "Seminar",
    description: "Understand blockchain technology, cryptocurrencies, and their real-world applications.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop",
    attendees: 120,
    status: "upcoming",
    price: "₹300",
    tags: ["Blockchain", "Crypto", "Seminar"],
    year: "2025"
  },
  {
    id: 8,
    title: "Mobile App Development Workshop",
    organizer: "Mobile Dev Team",
    date: "2025-08-12",
    time: "10:30",
    location: "Mobile Lab",
    type: "Workshop",
    description: "Build native mobile apps using React Native and Flutter. Perfect for beginners and intermediates.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
    attendees: 60,
    status: "upcoming",
    price: "₹800",
    tags: ["Mobile", "React Native", "Flutter"],
    year: "2025"
  },
  {
    id: 9,
    title: "Cloud Computing Conference",
    organizer: "Cloud Architecture Team",
    date: "2025-09-25",
    time: "09:00",
    location: "Convention Center",
    type: "Conference",
    description: "Explore AWS, Azure, and Google Cloud platforms with hands-on demonstrations and case studies.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
    attendees: 180,
    status: "upcoming",
    price: "₹1200",
    tags: ["Cloud", "AWS", "Azure"],
    year: "2025"
  },
  {
    id: 10,
    title: "UI/UX Design Masterclass",
    organizer: "Design Studio",
    date: "2025-07-28",
    time: "14:30",
    location: "Design Lab",
    type: "Masterclass",
    description: "Master the art of user interface and user experience design with industry-standard tools and techniques.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
    attendees: 35,
    status: "upcoming",
    price: "₹1500",
    tags: ["UI", "UX", "Design"],
    year: "2025"
  },
  {
    id: 11,
    title: "DevOps and Automation Summit",
    organizer: "Operations Team",
    date: "2025-08-18",
    time: "11:30",
    location: "Tech Hub",
    type: "Summit",
    description: "Learn about CI/CD, containerization, Kubernetes, and modern DevOps practices.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop",
    attendees: 90,
    status: "upcoming",
    price: "₹900",
    tags: ["DevOps", "CI/CD", "Kubernetes"],
    year: "2025"
  },
  {
    id: 12,
    title: "Digital Marketing Workshop",
    organizer: "Marketing Department",
    date: "2025-09-05",
    time: "16:00",
    location: "Media Center",
    type: "Workshop",
    description: "Master SEO, social media marketing, Google Ads, and content marketing strategies.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    attendees: 65,
    status: "upcoming",
    price: "₹600",
    tags: ["Marketing", "SEO", "Social Media"],
    year: "2025"
  },
  // Past Events
  {
    id: 13,
    title: "React Development Conference 2024",
    organizer: "Frontend Guild",
    date: "2024-12-15",
    time: "10:00",
    location: "Tech Auditorium",
    type: "Conference",
    description: "A comprehensive conference on React best practices, new features, and modern development patterns.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
    attendees: 300,
    status: "past",
    price: "₹800",
    tags: ["React", "Frontend", "Conference"],
    year: "2024"
  },
  {
    id: 14,
    title: "Python Programming Bootcamp",
    organizer: "Programming Club",
    date: "2025-01-20",
    time: "09:00",
    location: "Computer Center",
    type: "Bootcamp",
    description: "Intensive Python programming bootcamp covering basics to advanced concepts including Django and Flask.",
    image: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=400&h=250&fit=crop",
    attendees: 80,
    status: "past",
    price: "₹1200",
    tags: ["Python", "Django", "Programming"],
    year: "2025"
  },
  {
    id: 15,
    title: "Startup Pitch Competition",
    organizer: "Entrepreneurship Cell",
    date: "2025-02-28",
    time: "14:00",
    location: "Main Hall",
    type: "Competition",
    description: "Annual startup pitch competition where students present their innovative business ideas to industry experts.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=250&fit=crop",
    attendees: 150,
    status: "past",
    price: "Free",
    tags: ["Startup", "Pitch", "Competition"],
    year: "2025"
  },
  {
    id: 16,
    title: "Machine Learning Workshop",
    organizer: "AI Research Lab",
    date: "2025-03-10",
    time: "11:00",
    location: "Research Center",
    type: "Workshop",
    description: "Hands-on machine learning workshop covering supervised learning, neural networks, and practical applications.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
    attendees: 60,
    status: "past",
    price: "₹1000",
    tags: ["Machine Learning", "AI", "Neural Networks"],
    year: "2025"
  },
  {
    id: 17,
    title: "Database Design Seminar",
    organizer: "Database Team",
    date: "2025-04-15",
    time: "15:30",
    location: "Lecture Hall 3",
    type: "Seminar",
    description: "Learn advanced database design principles, normalization, and optimization techniques for modern applications.",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=250&fit=crop",
    attendees: 90,
    status: "past",
    price: "₹400",
    tags: ["Database", "SQL", "Design"],
    year: "2025"
  },
  {
    id: 18,
    title: "Agile Development Workshop",
    organizer: "Project Management Office",
    date: "2025-05-20",
    time: "09:30",
    location: "Training Room 2",
    type: "Workshop",
    description: "Learn agile methodologies, scrum framework, and project management best practices for software development.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
    attendees: 45,
    status: "past",
    price: "₹650",
    tags: ["Agile", "Scrum", "Project Management"],
    year: "2025"
  }
];

// Your Existing Event Card Component - Keeping the same UI
const EventCard = ({ event }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleDateString('en-US', { month: 'short' }),
      year: date.getFullYear()
    };
  };

  const dateInfo = formatDate(event.date);

  return (
   <div className="group bg-white/90 backdrop-blur-sm rounded-2xl border border-white/50 overflow-hidden shadow-md transition-transform duration-300 ease-in-out hover:scale-[1.05] hover:shadow-lg">
  {/* Event Image */}
  <div className="relative overflow-hidden">
    <img
      src={event.image}
      alt={event.title}
      className="w-full h-48 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      loading="lazy"
    />
    <div className="absolute top-4 left-4 bg-white/95 rounded-lg px-3 py-2 text-center shadow-sm transition-all duration-300 ease-in-out">
      <div className="text-2xl font-bold text-gray-900">{dateInfo.day}</div>
      <div className="text-sm text-gray-600">{dateInfo.month}</div>
    </div>
    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
      {event.price}
    </div>
    <div className="absolute bottom-4 left-4">
      <span className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
        event.type === 'Workshop' ? 'bg-green-100 text-green-800' :
        event.type === 'Conference' ? 'bg-blue-100 text-blue-800' :
        event.type === 'Seminar' ? 'bg-purple-100 text-purple-800' :
        event.type === 'Bootcamp' ? 'bg-red-100 text-red-800' :
        event.type === 'Competition' ? 'bg-orange-100 text-orange-800' :
        event.type === 'Masterclass' ? 'bg-pink-100 text-pink-800' :
        'bg-gray-100 text-gray-800'
      }`}>
        {event.type}
      </span>
    </div>
  </div>

  {/* Event Content */}
  <div className="p-6 transition-colors duration-300 ease-in-out">
    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
      {event.title}
    </h3>

    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
      {event.description}
    </p>

    <div className="space-y-2 mb-4">
      <div className="flex items-center text-gray-600 text-sm">
        <Clock className="w-4 h-4 mr-2 text-blue-500" />
        {event.time} • {event.date}
      </div>
      <div className="flex items-center text-gray-600 text-sm">
        <MapPin className="w-4 h-4 mr-2 text-red-500" />
        {event.location}
      </div>
      <div className="flex items-center text-gray-600 text-sm">
        <Users className="w-4 h-4 mr-2 text-green-500" />
        {event.attendees} attendees
      </div>
    </div>

    <div className="flex items-center justify-between">
      <div className="text-sm text-gray-600">
        by <span className="font-medium text-gray-900">{event.organizer}</span>
      </div>
      <div className="flex items-center text-yellow-500">
        <Star className="w-4 h-4 fill-current" />
        <span className="text-sm text-gray-600 ml-1">4.8</span>
      </div>
    </div>

    {/* Tags */}
    <div className="flex flex-wrap gap-2 mt-4">
      {event.tags.map((tag, index) => (
        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full transition-colors duration-300">
          {tag}
        </span>
      ))}
    </div>

    {/* Action Button */}
    <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-colors duration-300 ease-in-out shadow hover:shadow-md">
      {event.status === 'past' ? 'View Details' : 'Register Now'}
    </button>
  </div>
</div>

  );
};

// Modern Search Filters Component
const ModernSearchFilters = ({
  onSearch,
  onDateRangeFilter,
  onTypeFilter,
  onYearFilter,
  types,
  years,
  activeFilters = [],
  onClearFilter,
  onClearAllFilters
}) => {
  const [search, setSearch] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedType, setSelectedType] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = (value) => {
    setSearch(value);
    onSearch(value);
  };

  const handleDateRange = (start, end) => {
    setStartDate(start);
    setEndDate(end);
    onDateRangeFilter(start, end);
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
    onTypeFilter(type);
  };

  const handleYearChange = (year) => {
    setSelectedYear(year);
    onYearFilter(year);
  };

  const quickDatePresets = [
    { label: 'Today', days: 0 },
    { label: 'This Week', days: 7 },
    { label: 'This Month', days: 30 },
    { label: 'Next 3 Months', days: 90 }
  ];

  const clearAllFilters = () => {
    setSearch('');
    setStartDate(null);
    setEndDate(null);
    setSelectedType('');
    setSelectedYear('');
    onClearAllFilters();
  };

  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl  overflow-hidden">
      {/* Modern Search Header */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <Search className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Search & Filter Events</h3>
              <p className="text-sm text-gray-600">Find your perfect event</p>
            </div>
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-white/80 hover:bg-white rounded-xl 
                     shadow-sm border border-gray-200 transition-all duration-200"
          >
            <SlidersHorizontal className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </span>
          </button>
        </div>

        {/* Modern Search Bar */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search events, organizers, locations, or topics..."
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white/90 border border-gray-100 rounded-2xl 
                     focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none
                     text-gray-900 placeholder-gray-500 text-lg font-medium
                     backdrop-blur-sm transition-all duration-300
                     shadow-lg hover:shadow-xl"
          />
        </div>
      </div>

      {/* Advanced Filters Panel */}
      {showFilters && (
        <div className="p-6 space-y-6">
          {/* Date Range Filter */}
          <div className=" rounded-2xl p-5 border border-blue-200/30">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-blue-600" />
              <h4 className="text-lg font-semibold text-gray-900">
                Date Range Filter
              </h4>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">From Date</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => handleDateRange(date, endDate)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 
                           focus:ring-2 focus:ring-blue-500/20 outline-none bg-white/90"
                  placeholderText="Select start date"
                  dateFormat="dd/MM/yyyy"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">To Date</label>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => handleDateRange(startDate, date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 
                           focus:ring-2 focus:ring-blue-500/20 outline-none bg-white/90"
                  placeholderText="Select end date"
                  dateFormat="dd/MM/yyyy"
                />
              </div>
            </div>

            {/* Quick Date Presets */}
            <div className="flex flex-wrap gap-2">
              {quickDatePresets.map((preset) => (
                <button
                  key={preset.label}
                  onClick={() => {
                    const today = new Date();
                    const futureDate = new Date(today.getTime() + (preset.days * 24 * 60 * 60 * 1000));
                    handleDateRange(today, futureDate);
                  }}
                  className="px-4 py-2 bg-white/80 hover:bg-blue-100 text-blue-700 text-sm font-medium 
                           rounded-full border border-blue-200 transition-all duration-200 
                           hover:shadow-md hover:scale-105"
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          {/* Category & Year Filters */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className=" rounded-xl p-4 border border-purple-200/30">
              <label className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <Filter className="w-4 h-4 text-purple-600" />
                Event Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => handleTypeChange(e.target.value)}
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 
                         focus:ring-2 focus:ring-purple-500/20 outline-none bg-white/90"
              >
                <option value="">All Types</option>
                {types.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div className=" rounded-xl p-4 border border-indigo-200/30">
              <label className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-indigo-600" />
                Year
              </label>
              <select
                value={selectedYear}
                onChange={(e) => handleYearChange(e.target.value)}
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 
                         focus:ring-2 focus:ring-indigo-500/20 outline-none bg-white/90"
              >
                <option value="">All Years</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Active Filters Display */}
      {activeFilters.length > 0 && (
        <div className="bg-gray-50/80 px-6 py-4 border-t border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Active Filters ({activeFilters.length})
            </span>
            <button
              onClick={clearAllFilters}
              className="text-red-600 hover:text-red-700 text-sm font-medium 
                       hover:bg-red-50 px-3 py-1 rounded-lg transition-all duration-200"
            >
              Clear All
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {activeFilters.map((filter) => (
              <span
                key={filter.key}
                className="inline-flex items-center px-3 py-2 bg-blue-100 text-blue-800 text-sm 
                         font-medium rounded-xl border border-blue-200 shadow-sm
                         hover:bg-blue-200 transition-all duration-200"
              >
                {filter.label}
                <button
                  onClick={() => onClearFilter(filter.key)}
                  className="ml-2 text-blue-600 hover:text-blue-800 hover:bg-blue-200 
                           rounded-full p-1 transition-all duration-200"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Enhanced Pagination Component
const EnhancedPagination = ({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange
}) => {
  const itemsPerPageOptions = [6, 12, 18, 24];

  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    if (totalPages <= 1) return [1];

    for (let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return [...new Set(rangeWithDots)];
  };

  const startItem = Math.min((currentPage - 1) * itemsPerPage + 1, totalItems);
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
      {/* Items Per Page Selection */}
      <div className="flex items-center gap-3">
        <span className="text-gray-600 font-medium whitespace-nowrap">Events per page:</span>
        <select
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
          className="px-4 py-2 bg-white border-2 border-gray-200 rounded-lg focus:border-blue-500 
                   focus:ring-2 focus:ring-blue-500/20 outline-none font-medium min-w-[80px]"
        >
          {itemsPerPageOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      {/* Page Info */}
      <div className="text-gray-600 font-medium text-center">
        Showing <span className="font-bold text-blue-600">{startItem}</span> to{' '}
        <span className="font-bold text-blue-600">{endItem}</span> of{' '}
        <span className="font-bold text-blue-600">{totalItems}</span> events
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center gap-2 flex-wrap justify-center">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-gray-200 rounded-lg 
                   hover:border-blue-300 hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed 
                   font-medium transition-all duration-200"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </button>

        <div className="flex items-center gap-1">
          {getVisiblePages().map((page, index) => (
            <button
              key={index}
              onClick={() => typeof page === 'number' && onPageChange(page)}
              disabled={page === '...'}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 min-w-[44px] ${page === currentPage
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                  : page === '...'
                    ? 'cursor-default text-gray-400'
                    : 'bg-white border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700'
                }`}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-gray-200 rounded-lg 
                   hover:border-blue-300 hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed 
                   font-medium transition-all duration-200"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

// Custom Hook for Event Filtering and Pagination
const useEventFiltering = ({ events, itemsPerPage }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedType, setSelectedType] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, startDate, endDate, selectedType, selectedYear, itemsPerPage]);

  const filteredEvents = useMemo(() => {
    let filtered = [...events];

    // Search filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(event =>
        event.title.toLowerCase().includes(searchLower) ||
        event.organizer.toLowerCase().includes(searchLower) ||
        event.location.toLowerCase().includes(searchLower) ||
        event.description.toLowerCase().includes(searchLower) ||
        event.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }

    // Date range filter
    if (startDate && endDate) {
      filtered = filtered.filter(event => {
        const eventDate = new Date(event.date);
        return eventDate >= startDate && eventDate <= endDate;
      });
    }

    // Type filter
    if (selectedType) {
      filtered = filtered.filter(event => event.type === selectedType);
    }

    // Year filter
    if (selectedYear) {
      filtered = filtered.filter(event => event.year === selectedYear);
    }

    return filtered;
  }, [events, searchTerm, startDate, endDate, selectedType, selectedYear]);

  // Pagination
  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentEvents = filteredEvents.slice(startIndex, startIndex + itemsPerPage);

  // Active filters for display
  const activeFilters = useMemo(() => {
    const filters = [];
    if (searchTerm) filters.push({ key: 'search', label: `Search: "${searchTerm}"` });
    if (startDate && endDate) {
      filters.push({
        key: 'dateRange',
        label: `Date: ${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`
      });
    }
    if (selectedType) filters.push({ key: 'type', label: `Type: ${selectedType}` });
    if (selectedYear) filters.push({ key: 'year', label: `Year: ${selectedYear}` });
    return filters;
  }, [searchTerm, startDate, endDate, selectedType, selectedYear]);

  // Filter handlers
  const handleSearch = (term) => setSearchTerm(term);
  const handleDateRangeFilter = (start, end) => {
    setStartDate(start);
    setEndDate(end);
  };
  const handleTypeFilter = (type) => setSelectedType(type);
  const handleYearFilter = (year) => setSelectedYear(year);

  const handleClearFilter = (filterKey) => {
    switch (filterKey) {
      case 'search':
        setSearchTerm('');
        break;
      case 'dateRange':
        setStartDate(null);
        setEndDate(null);
        break;
      case 'type':
        setSelectedType('');
        break;
      case 'year':
        setSelectedYear('');
        break;
    }
  };

  const handleClearAllFilters = () => {
    setSearchTerm('');
    setStartDate(null);
    setEndDate(null);
    setSelectedType('');
    setSelectedYear('');
  };

  return {
    filteredEvents,
    currentEvents,
    totalPages,
    currentPage,
    activeFilters,
    setCurrentPage,
    handleSearch,
    handleDateRangeFilter,
    handleTypeFilter,
    handleYearFilter,
    handleClearFilter,
    handleClearAllFilters
  };
};

// Main Events Page Component - Updated with only 2 tabs
const EventsPage = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [itemsPerPage, setItemsPerPage] = useState(6); // Default 6 events per page

  // Get current events based on active tab (only upcoming and past)
  const getCurrentEvents = () => {
    const currentDate = new Date('2025-07-19'); // Current date from context

    switch (activeTab) {
      case 'upcoming':
        return eventsData.filter(event => {
          const eventDate = new Date(event.date);
          return eventDate >= currentDate;
        });
      case 'past':
        return eventsData.filter(event => {
          const eventDate = new Date(event.date);
          return eventDate < currentDate;
        });
      default:
        return eventsData;
    }
  };

  const currentEvents = getCurrentEvents();

  // Get unique types and years for filters
  const allTypes = [...new Set(eventsData.map(event => event.type))];
  const allYears = [...new Set(eventsData.map(event => event.year))];

  // Use custom hook for filtering and pagination
  const {
    filteredEvents,
    currentEvents: paginatedEvents,
    totalPages,
    currentPage,
    activeFilters,
    setCurrentPage,
    handleSearch,
    handleDateRangeFilter,
    handleTypeFilter,
    handleYearFilter,
    handleClearFilter,
    handleClearAllFilters
  } = useEventFiltering({ events: currentEvents, itemsPerPage });

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Smooth scroll to top of events section
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleItemsPerPageChange = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Reset to first page
  };

  // Only two tabs: Upcoming and Past
  const tabs = [
    {
      id: 'upcoming',
      label: 'Upcoming Events',
      count: eventsData.filter(e => new Date(e.date) >= new Date('2025-07-19')).length,
      icon: Calendar
    },
    {
      id: 'past',
      label: 'Past Events',
      count: eventsData.filter(e => new Date(e.date) < new Date('2025-07-19')).length,
      icon: Clock
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      <BannerSection
        title="Events & Workshops"
        subtitle="Explore our upcoming and past events, workshops, and seminars"
        bgTheme={2}
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Navigation Tabs - Only 2 tabs */}
        <div className="mb-12">
          <div className="rounded-2xl shadow-lg p mb-6">
            <div className="flex gap-2">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${activeTab === tab.id
                        ? 'bg-gray-100 text-blue-600 shadow-lg transform scale-105'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-white/80'
                      }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    {tab.label}
                    <span className={`px-3 py-1 rounded-full text-sm ${activeTab === tab.id
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-600'
                      }`}>
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modern Search Filters */}
        <div className="mb-12">
          <ModernSearchFilters
            onSearch={handleSearch}
            onDateRangeFilter={handleDateRangeFilter}
            onTypeFilter={handleTypeFilter}
            onYearFilter={handleYearFilter}
            types={allTypes}
            years={allYears}
            activeFilters={activeFilters}
            onClearFilter={handleClearFilter}
            onClearAllFilters={handleClearAllFilters}
          />
        </div>

        {/* Results Summary */}
        {activeFilters.length > 0 && filteredEvents.length > 0 && (
          <div className="mb-8 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/60 shadow-lg">
            <div className="flex items-center justify-between">
              <p className="text-gray-700 font-medium text-lg">
                Found <span className="text-blue-600 font-bold text-xl">{filteredEvents.length}</span> events
                <span className="text-gray-500"> matching your filters</span>
              </p>
              <div className="text-sm text-gray-500">
                Showing {activeTab} events
              </div>
            </div>
          </div>
        )}

        {/* Events Grid */}
        {paginatedEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {paginatedEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No Events Found</h3>
              <p className="text-gray-600 mb-6">
                We couldn't find any {activeTab} events matching your criteria. Try adjusting your filters or search terms.
              </p>
              <button
                onClick={handleClearAllFilters}
                className="px-8 py-4 bg-gradient-to-r  text-white rounded-xl font-medium 
                          transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        )}

        {/* Enhanced Pagination */}
        {totalPages > 1 && paginatedEvents.length > 0 && (
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 p-6">
            <EnhancedPagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalItems={filteredEvents.length}
              itemsPerPage={itemsPerPage}
              onPageChange={handlePageChange}
              onItemsPerPageChange={handleItemsPerPageChange}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsPage;
