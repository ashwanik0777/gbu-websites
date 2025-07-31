import { useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import SocialShare from '../../components/announcement/SocialShare';
import EnhancedPagination from '../../components/announcement/EnhancedPagination';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import BannerSection from '../../components/HeroBanner';

// Enhanced Card Components with Professional Design
const Card = ({ children, className = '', featured = false, ...props }) => (
  <article
    className={`
      bg-white rounded-2xl shadow-sm border border-gray-100 
      hover:shadow-md transition-shadow duration-200
      ${featured ? 'border-blue-200 bg-gradient-to-br from-blue-50/30 to-white' : ''}
      ${className}
    `}
    {...props}
  >
    {children}
  </article>
);

const CardHeader = ({ children, className = '', ...props }) => (
  <header className={`p-6 ${className}`} {...props}>
    {children}
  </header>
);

const CardTitle = ({ children, className = '', ...props }) => (
  <h3 className={`font-semibold text-xl text-gray-900 leading-tight hover:text-blue-700 transition-colors ${className}`} {...props}>
    {children}
  </h3>
);

const CardDescription = ({ children, className = '', ...props }) => (
  <div className={`text-gray-600 text-sm ${className}`} {...props}>
    {children}
  </div>
);

const CardContent = ({ children, className = '', ...props }) => (
  <div className={`px-6 pb-6 ${className}`}>{children}</div>
);

// Professional Badge System
const Badge = ({ children, variant = 'default', size = 'md', className = '', ...props }) => {
  const variants = {
    default: 'bg-gray-100 text-gray-700 border-gray-200',
    primary: 'bg-blue-100 text-blue-700 border-blue-200',
    success: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    warning: 'bg-amber-100 text-amber-700 border-amber-200',
    danger: 'bg-red-100 text-red-700 border-red-200',
    purple: 'bg-purple-100 text-purple-700 border-purple-200',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  };

  return (
    <span 
      className={`
        inline-flex items-center rounded-full border font-medium
        ${variants[variant]} ${sizes[size]} ${className}
      `} 
      {...props}
    >
      {children}
    </span>
  );
};

// Professional Button Component
const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm',
    secondary: 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 shadow-sm',
    ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100',
    danger: 'bg-red-600 hover:bg-red-700 text-white shadow-sm',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  return (
    <button
      className={`
        inline-flex items-center justify-center rounded-lg font-medium
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        transition-colors duration-200
        ${variants[variant]} ${sizes[size]} ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

// Enhanced Mock News Data with More Comprehensive Information
export const mockNews = [
  {
    id: 1,
    title: 'GBU Inaugurates Centre for Artificial Intelligence and Machine Learning',
    excerpt: 'Gautam Buddha University launched a state-of-the-art Centre for AI and ML research to boost interdisciplinary innovation and develop smart technologies for societal impact.',
    content: 'The new centre will focus on cutting-edge research in machine learning, natural language processing, computer vision, and robotics. It aims to foster collaboration between academia and industry.',
    date: '2024-06-20',
    author: 'Dr. Rajesh Kumar',
    department: 'Research Cell',
    tags: ['AI', 'Research', 'Innovation', 'Technology'],
    category: 'Research',
    priority: 'high',
    views: 2847,
    likes: 156,
    image: 'https://gburif.org/images/intro-carousel/gautam-buddha-university-3.jpg',
    featured: true,
    status: 'published'
  },
  {
    id: 2,
    title: 'Annual Convocation Ceremony 2024: Excellence Recognized',
    excerpt: 'Over 3,000 degrees were awarded to graduating students across multiple disciplines in the presence of distinguished guests, faculty, and proud families.',
    content: 'The ceremony celebrated academic achievements and honored students for their dedication. Special awards were given for outstanding research and community service.',
    date: '2024-05-30',
    author: 'Prof. Meera Sharma',
    department: 'Academic Affairs',
    tags: ['Convocation', 'Graduation', 'Awards', 'Achievement'],
    category: 'Academic',
    priority: 'high',
    views: 1923,
    likes: 89,
    image: 'https://tennews.in/wp-content/uploads/2016/04/14-3.jpg',
    featured: true,
    status: 'published'
  },
  {
    id: 3,
    title: 'GBU Students Excel at National Innovation Hackathon 2024',
    excerpt: 'A multidisciplinary team of engineering and design students developed a smart traffic management system using IoT and AI, winning the grand prize.',
    content: 'The winning solution demonstrates real-time traffic optimization and emergency vehicle prioritization, showcasing practical application of academic knowledge.',
    date: '2024-05-15',
    author: 'Dr. Amit Singh',
    department: 'Innovation Cell',
    tags: ['Hackathon', 'Technology', 'Innovation', 'Students', 'Awards'],
    category: 'Student Achievement',
    priority: 'medium',
    views: 1567,
    likes: 134,
    image: 'https://tennews.in/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-22-at-8.24.01-PM-e1669129715871.jpeg',
    featured: false,
    status: 'published'
  },
  {
    id: 4,
    title: 'Digital Library Transformation: 50,000+ Resources Now Available',
    excerpt: 'The university library has been upgraded with extensive digital resources including e-books, research journals, and multimedia archives accessible 24/7.',
    content: 'Students and faculty now have access to global databases, interactive learning materials, and collaborative study spaces with advanced technology integration.',
    date: '2024-04-28',
    author: 'Ms. Priya Gupta',
    department: 'Library Services',
    tags: ['Library', 'Digital Resources', 'Technology', 'Education'],
    category: 'Infrastructure',
    priority: 'medium',
    views: 987,
    likes: 67,
    image: 'https://makesaral.com/wp-content/uploads/2025/06/Screenshot_2025-06-03-11-45-15-673_com.google.android.apps_.maps-edit.jpg',
    featured: false,
    status: 'published'
  },
  {
    id: 5,
    title: 'Inter-University Sports Championship: GBU Dominates with 15 Gold Medals',
    excerpt: 'University athletes showcased exceptional performance across multiple sports disciplines, securing top positions in athletics, swimming, and team sports.',
    content: 'The sports meet featured over 2,000 participants from 50+ universities. GBU athletes set new records in several events and demonstrated outstanding sportsmanship.',
    date: '2024-04-10',
    author: 'Coach Vikram Singh',
    department: 'Sports Department',
    tags: ['Sports', 'Athletics', 'Championship', 'Achievement'],
    category: 'Sports',
    priority: 'medium',
    views: 1432,
    likes: 98,
    image: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    featured: false,
    status: 'published'
  },
  {
    id: 6,
    title: 'Green Campus Initiative: 1000+ Trees Planted in Sustainability Drive',
    excerpt: 'Environmental awareness week concluded with a massive plantation drive involving students, faculty, and local community members promoting ecological responsibility.',
    content: 'The initiative is part of GBUs commitment to carbon neutrality by 2030. Native species were selected to enhance local biodiversity and create a sustainable ecosystem.',
    date: '2024-04-05',
    author: 'Dr. Sunita Verma',
    department: 'Environmental Sciences',
    tags: ['Environment', 'Sustainability', 'Green Campus', 'Community'],
    category: 'Environment',
    priority: 'low',
    views: 756,
    likes: 145,
    image: 'https://scalemag.online/wp-content/uploads/2019/03/Gautam_Buddha_University.jpg',
    featured: false,
    status: 'published'
  },
  {
    id: 7,
    title: 'Abhivyakti 2024: Cultural Extravaganza Celebrates Diversity and Talent',
    excerpt: 'Three days of vibrant cultural performances, art exhibitions, literary competitions, and celebrity guest appearances brought the campus to life.',
    content: 'The festival featured over 200 events across music, dance, drama, literature, and visual arts, providing a platform for student creativity and cultural exchange.',
    date: '2024-03-20',
    author: 'Prof. Kavita Mishra',
    department: 'Cultural Affairs',
    tags: ['Cultural', 'Festival', 'Arts', 'Music', 'Dance'],
    category: 'Cultural',
    priority: 'medium',
    views: 2156,
    likes: 203,
    image: 'https://images.openai.com/thumbnails/url/VUAonnicu1mUUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw4pdXePdE1PTTRzDypwLPYzijAtjjAIzSpJLfbzKgur8o3y1E3XTdWNqNBNzwyvisoxzcgLcHNLSYtXKwYAxKYpTA',
    featured: false,
    status: 'published'
  },
  {
    id: 8,
    title: 'Blood Donation Drive: Community Service Saves 300+ Lives',
    excerpt: 'NSS volunteers organized a mega blood donation camp in collaboration with local hospitals, collecting over 300 units of blood for emergency medical needs.',
    content: 'The drive involved health checkups, awareness sessions about blood donation, and recognition for regular donors. Medical professionals ensured safe donation procedures.',
    date: '2024-03-15',
    author: 'Dr. Ravi Kumar',
    department: 'NSS Unit',
    tags: ['Social Service', 'Health', 'Community', 'Blood Donation'],
    category: 'Social Service',
    priority: 'medium',
    views: 1089,
    likes: 87,
    image: 'https://nss.gbu.ac.in/uploads/imagesfiles/666c5a020f5b4_WhatsApp%20Image%202024-03-09%20at%204.29.32%20PM.jpeg',
    featured: false,
    status: 'published'
  },
  {
    id: 9,
    title: 'CodeMasters 2024: Programming Competition Showcases Technical Excellence',
    excerpt: 'Over 500 participants competed in algorithmic challenges, web development, and mobile app creation, with winners receiving internship opportunities at leading tech companies.',
    content: 'The competition featured multiple tracks including competitive programming, hackathon challenges, and innovation presentations judged by industry experts.',
    date: '2024-02-25',
    author: 'Prof. Ankit Sharma',
    department: 'Computer Science',
    tags: ['Programming', 'Competition', 'Technology', 'Internships'],
    category: 'Technology',
    priority: 'medium',
    views: 1678,
    likes: 156,
    image: 'https://www.ic3ecsbhi.com/Events/20231006_133039.jpg',
    featured: false,
    status: 'published'
  },
  {
    id: 10,
    title: 'International Collaboration: MoU Signed with University of Munich',
    excerpt: 'Strategic partnership established for student exchange programs, joint research initiatives, and collaborative degree programs in engineering and management.',
    content: 'The agreement facilitates semester exchanges, dual degree options, and joint research projects in renewable energy, artificial intelligence, and sustainable development.',
    date: '2024-02-10',
    author: 'Dr. Neha Agarwal',
    department: 'International Relations',
    tags: ['International', 'Partnership', 'Exchange Program', 'Research'],
    category: 'International',
    priority: 'high',
    views: 934,
    likes: 76,
    image: 'https://ik.imagekit.io/edtechdigit/usaii/content/images/usaii-and-gautam-buddha-university-sign-mou-to-elevate-ai-education-in-india.png',
    featured: false,
    status: 'published'
  },
  {
    id: 11,
    title: 'Wellness Week: Promoting Mental Health and Physical Fitness',
    excerpt: 'Comprehensive wellness program included yoga sessions, mental health workshops, fitness challenges, and nutritional guidance for holistic student development.',
    content: 'Professional counselors, fitness trainers, and nutrition experts conducted interactive sessions. Over 1,500 students participated in various wellness activities.',
    date: '2024-01-25',
    author: 'Dr. Seema Yadav',
    department: 'Student Welfare',
    tags: ['Wellness', 'Mental Health', 'Fitness', 'Yoga'],
    category: 'Wellness',
    priority: 'low',
    views: 1234,
    likes: 112,
    image: 'https://images.openai.com/thumbnails/url/-F4ohXicu1mSUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw6yNHIy1zUsTgtKys-qMC0v9g41dorK8M8qSM7KDixODy8NdfTNzi9OLK6IKvc0cjKuiM8pLjVwz_RMcVQrBgAhZyqH',
    featured: false,
    status: 'published'
  },
  {
    id: 12,
    title: 'Industry Expert Series: Future of Work and Emerging Technologies',
    excerpt: 'Distinguished industry leaders shared insights on career development, emerging technology trends, and skills required for future job markets.',
    content: 'Sessions covered artificial intelligence, blockchain, sustainable technologies, and entrepreneurship opportunities with interactive Q&A and networking sessions.',
    date: '2024-01-15',
    author: 'Ms. Ritika Jain',
    department: 'Career Development',
    tags: ['Career', 'Industry', 'Technology', 'Professional Development'],
    category: 'Career',
    priority: 'medium',
    views: 1456,
    likes: 89,
    image: 'https://www.ux4g.gov.in/assets/img/awareness-workshop/gbu-19-11-24/900x16.webp',
    featured: false,
    status: 'published'
  },
  {
    id: 13,
    title: 'Placement Success: Record-Breaking Offers for Class of 2024',
    excerpt: 'Outstanding placement results with 95% placement rate, highest package of ₹45 LPA, and recruitment by 150+ leading companies across diverse sectors.',
    content: 'Companies from IT, finance, consulting, manufacturing, and startups participated. Students received offers in roles spanning software engineering, data science, consulting, and management.',
    date: '2023-12-30',
    author: 'Dr. Manish Gupta',
    department: 'Placement Cell',
    tags: ['Placements', 'Career', 'Jobs', 'Industry'],
    category: 'Placements',
    priority: 'high',
    views: 3421,
    likes: 267,
    image: 'https://images.openai.com/thumbnails/url/vLSln3icu1mUUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw5MDgsycfcx94zMcrQ0dXS1SHP1Kg70twj0CneKL0gucS7MjChwjfcwCdaNLAv2LA9IMrMszA8yS65QKwYAl74oRw',
    featured: true,
    status: 'published'
  },
  {
    id: 14,
    title: 'Creative Arts Workshop: Photography and Digital Art Masterclass',
    excerpt: 'Professional artists and photographers conducted intensive workshops on digital photography, photo editing, painting techniques, and creative expression.',
    content: 'Participants learned advanced techniques in portrait photography, landscape composition, digital art creation, and exhibition planning with hands-on practice sessions.',
    date: '2023-12-15',
    author: 'Mr. Rohit Verma',
    department: 'Fine Arts',
    tags: ['Arts', 'Photography', 'Workshop', 'Creative'],
    category: 'Arts',
    priority: 'low',
    views: 678,
    likes: 54,
    image: 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    featured: false,
    status: 'published'
  },
  {
    id: 15,
    title: 'Educational Tour: Political Science Students Experience Democracy',
    excerpt: 'Students observed live parliamentary sessions, interacted with lawmakers, and gained practical insights into democratic processes and governance structures.',
    content: 'The educational tour included visits to Parliament House, Supreme Court, and meetings with political leaders, providing real-world understanding of political systems.',
    date: '2023-12-05',
    author: 'Prof. Manoj Tiwari',
    department: 'Political Science',
    tags: ['Education', 'Politics', 'Democracy', 'Learning'],
    category: 'Education',
    priority: 'low',
    views: 543,
    likes: 42,
    image: 'https://niu.edu.in/wp-content/uploads/2025/06/image5-1.webp',
    featured: false,
    status: 'published'
  }
];

// Advanced Filter Component
const AdvancedFilterSystem = ({ 
  onSearch, 
  onDateFilter, 
  onTagFilter, 
  onCategoryFilter, 
  onPriorityFilter,
  onSortChange,
  onViewModeChange,
  tags, 
  categories, 
  priorities,
  selectedTags, 
  selectedCategories,
  selectedPriorities,
  currentSort,
  viewMode,
  totalResults
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value);
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    onSearch('');
    selectedTags.forEach(tag => onTagFilter(tag));
    selectedCategories.forEach(category => onCategoryFilter(category));
    selectedPriorities.forEach(priority => onPriorityFilter(priority));
    onDateFilter(null, null);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
      {/* Search Bar */}
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search news, announcements, events..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
        />
        {searchQuery && (
          <button
            onClick={() => {
              setSearchQuery('');
              onSearch('');
            }}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Filter Toggle and Results Count */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <Button
            variant="secondary"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
            </svg>
            Filters
            {(selectedTags.length + selectedCategories.length + selectedPriorities.length) > 0 && (
              <Badge variant="primary" size="sm">
                {selectedTags.length + selectedCategories.length + selectedPriorities.length}
              </Badge>
            )}
          </Button>
          
          <div className="text-sm text-gray-600">
            {totalResults} results found
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* View Mode Toggle */}
          <div className="flex rounded-lg border border-gray-300 p-1">
            <button
              onClick={() => onViewModeChange('grid')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button
              onClick={() => onViewModeChange('list')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Sort Dropdown */}
          <select
            value={currentSort}
            onChange={(e) => onSortChange(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="alphabetical">A-Z</option>
            <option value="popularity">Most Popular</option>
            <option value="priority">Priority</option>
          </select>
        </div>
      </div>

      {/* Advanced Filters Panel */}
      {isFilterOpen && (
        <div className="border-t border-gray-200 pt-6 space-y-6">
          {/* Categories Filter */}
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-3">Categories</h4>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => onCategoryFilter(category)}
                  className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${
                    selectedCategories.includes(category)
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Tags Filter */}
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-3">Tags</h4>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => onTagFilter(tag)}
                  className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${
                    selectedTags.includes(tag)
                      ? 'bg-green-600 text-white border-green-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-green-300'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Priority Filter */}
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-3">Priority</h4>
            <div className="flex gap-2">
              {priorities.map((priority) => (
                <button
                  key={priority}
                  onClick={() => onPriorityFilter(priority)}
                  className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${
                    selectedPriorities.includes(priority)
                      ? 'bg-red-600 text-white border-red-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-red-300'
                  }`}
                >
                  {priority.charAt(0).toUpperCase() + priority.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Clear Filters Button */}
          {(selectedTags.length > 0 || selectedCategories.length > 0 || selectedPriorities.length > 0) && (
            <div className="flex justify-end">
              <Button variant="ghost" onClick={clearAllFilters}>
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// News Card Components for Different Views
const NewsGridCard = ({ news }) => {
  const getBadgeVariant = (category) => {
    switch (category.toLowerCase()) {
      case 'research': return 'primary';
      case 'academic': return 'success';
      case 'sports': return 'warning';
      case 'cultural': return 'purple';
      default: return 'default';
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'high':
        return <div className="w-2 h-2 bg-red-500 rounded-full"></div>;
      case 'medium':
        return <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>;
      case 'low':
        return <div className="w-2 h-2 bg-green-500 rounded-full"></div>;
      default:
        return null;
    }
  };

  return (
    <Card featured={news.featured} className="h-full flex flex-col group">
      {news.image && (
        <div className="relative aspect-video overflow-hidden rounded-t-2xl">
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <Badge variant={getBadgeVariant(news.category)} size="sm">
              {news.category}
            </Badge>
            {news.featured && (
              <Badge variant="danger" size="sm">
                Featured
              </Badge>
            )}
          </div>
          <div className="absolute top-4 right-4 flex items-center gap-1">
            {getPriorityIcon(news.priority)}
          </div>
        </div>
      )}

      <CardHeader className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <div className="flex flex-wrap gap-1">
            {news.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="default" size="sm">
                {tag}
              </Badge>
            ))}
            {news.tags.length > 3 && (
              <Badge variant="default" size="sm">
                +{news.tags.length - 3}
              </Badge>
            )}
          </div>
        </div>

        <CardTitle className="mb-3 line-clamp-2">
          {news.title}
        </CardTitle>

        <CardDescription className="space-y-2">
          <div className="flex items-center text-xs text-gray-500">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            {format(new Date(news.date), 'MMM dd, yyyy')}
          </div>
          <div className="flex items-center text-xs text-gray-500">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            {news.author} • {news.department}
          </div>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              {news.views}
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
              </svg>
              {news.likes}
            </div>
          </div>
        </CardDescription>
      </CardHeader>

      <CardContent>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {news.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <Link to={`/announcements/news-notifications/${news.id}`}>
            <Button size="sm" className="flex items-center gap-2">
              Read More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </Link>

          <SocialShare
            url={`${window.location.origin}/news/${news.id}`}
            title={news.title}
          />
        </div>
      </CardContent>
    </Card>
  );
};

const NewsListCard = ({ news }) => {
  const getBadgeVariant = (category) => {
    switch (category.toLowerCase()) {
      case 'research': return 'primary';
      case 'academic': return 'success';
      case 'sports': return 'warning';
      case 'cultural': return 'purple';
      default: return 'default';
    }
  };

  return (
    <Card className="group">
      <div className="p-6">
        <div className="flex gap-6">
          {news.image && (
            <div className="flex-shrink-0">
              <img
                src={news.image}
                alt={news.title}
                className="w-32 h-24 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant={getBadgeVariant(news.category)} size="sm">
                  {news.category}
                </Badge>
                {news.featured && (
                  <Badge variant="danger" size="sm">
                    Featured
                  </Badge>
                )}
                <div className={`w-2 h-2 rounded-full ${
                  news.priority === 'high' ? 'bg-red-500' :
                  news.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                }`}></div>
              </div>
              <div className="text-xs text-gray-500">
                {format(new Date(news.date), 'MMM dd, yyyy')}
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors line-clamp-1">
              {news.title}
            </h3>

            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
              {news.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  {news.author}
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {news.views}
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                  {news.likes}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Link to={`/announcements/news-notifications/${news.id}`}>
                  <Button size="sm">Read More</Button>
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap gap-1 mt-3">
              {news.tags.slice(0, 4).map((tag) => (
                <Badge key={tag} variant="default" size="sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

// Main Component
const NewsNotifications = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedYear, setSelectedYear] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [sortOrder, setSortOrder] = useState('newest');
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPriorities, setSelectedPriorities] = useState([]);
  const [viewMode, setViewMode] = useState('grid');

  // Extract unique values
  const allTags = Array.from(new Set(mockNews.flatMap(news => news.tags)));
  const allCategories = Array.from(new Set(mockNews.map(news => news.category)));
  const allPriorities = Array.from(new Set(mockNews.map(news => news.priority)));
  const allYears = Array.from(new Set(mockNews.map(news => new Date(news.date).getFullYear().toString())));

  // Advanced filtering and sorting logic
  const filteredAndSortedNews = useMemo(() => {
    let filtered = mockNews.filter(news => {
      const matchesSearch = !searchQuery ||
        news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        news.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        news.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        news.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        news.department.toLowerCase().includes(searchQuery.toLowerCase());

      const newsDate = new Date(news.date);
      const matchesDateRange = (!startDate || newsDate >= startDate) &&
        (!endDate || newsDate <= endDate);

      const matchesYear = selectedYear === 'all' || new Date(news.date).getFullYear().toString() === selectedYear;
      const matchesSelectedTags = selectedTags.length === 0 || selectedTags.some(tag => news.tags.includes(tag));
      const matchesSelectedCategories = selectedCategories.length === 0 || selectedCategories.includes(news.category);
      const matchesSelectedPriorities = selectedPriorities.length === 0 || selectedPriorities.includes(news.priority);

      return matchesSearch && matchesDateRange && matchesYear && matchesSelectedTags && 
             matchesSelectedCategories && matchesSelectedPriorities;
    });

    // Sorting logic
    filtered.sort((a, b) => {
      switch (sortOrder) {
        case 'oldest':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'alphabetical':
          return a.title.localeCompare(b.title);
        case 'popularity':
          return (b.views + b.likes) - (a.views + a.likes);
        case 'priority':
          const priorityOrder = { high: 3, medium: 2, low: 1 };
          return priorityOrder[b.priority] - priorityOrder[a.priority];
        case 'newest':
        default:
          return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });

    return filtered;
  }, [searchQuery, startDate, endDate, selectedYear, selectedTags, selectedCategories, selectedPriorities, sortOrder]);

  const currentNews = filteredAndSortedNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredAndSortedNews.length / itemsPerPage);

  // Event handlers
  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  }, []);

  const handleDateFilter = useCallback((start, end) => {
    setStartDate(start);
    setEndDate(end);
    setCurrentPage(1);
  }, []);

  const handleTagFilter = useCallback((tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
    setCurrentPage(1);
  }, [selectedTags]);

  const handleCategoryFilter = useCallback((category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
    setCurrentPage(1);
  }, [selectedCategories]);

  const handlePriorityFilter = useCallback((priority) => {
    if (selectedPriorities.includes(priority)) {
      setSelectedPriorities(selectedPriorities.filter(p => p !== priority));
    } else {
      setSelectedPriorities([...selectedPriorities, priority]);
    }
    setCurrentPage(1);
  }, [selectedPriorities]);

  const handleSortChange = useCallback((sort) => {
    setSortOrder(sort);
    setCurrentPage(1);
  }, []);

  const handleViewModeChange = useCallback((mode) => {
    setViewMode(mode);
  }, []);

  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleItemsPerPageChange = useCallback((newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Professional Header Section */}
      <BannerSection
        title="News and Notifications"
        subtitle="Stay updated with the latest news, announcements, and events from our institution."
        bgTheme={7}
        />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Advanced Filter System */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <AdvancedFilterSystem
            onSearch={handleSearch}
            onDateFilter={handleDateFilter}
            onTagFilter={handleTagFilter}
            onCategoryFilter={handleCategoryFilter}
            onPriorityFilter={handlePriorityFilter}
            onSortChange={handleSortChange}
            onViewModeChange={handleViewModeChange}
            tags={allTags}
            categories={allCategories}
            priorities={allPriorities}
            selectedTags={selectedTags}
            selectedCategories={selectedCategories}
            selectedPriorities={selectedPriorities}
            currentSort={sortOrder}
            viewMode={viewMode}
            totalResults={filteredAndSortedNews.length}
          />
        </motion.div>

        {/* Featured News Section */}
        {currentPage === 1 && filteredAndSortedNews.some(news => news.featured) && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <svg className="w-6 h-6 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Featured Stories
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {filteredAndSortedNews.filter(news => news.featured).slice(0, 2).map((news) => (
                <NewsGridCard key={news.id} news={news} />
              ))}
            </div>
          </motion.section>
        )}

        {/* News Grid/List */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentNews.map((news) => (
                <NewsGridCard key={news.id} news={news} />
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {currentNews.map((news) => (
                <NewsListCard key={news.id} news={news} />
              ))}
            </div>
          )}
        </motion.section>

        {/* Empty State */}
        {filteredAndSortedNews.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-16"
          >
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12 max-w-md mx-auto">
              <svg className="mx-auto mb-6 text-gray-400" width="64" height="64" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">No Results Found</h3>
              <p className="text-gray-600 mb-6">
                We couldn't find any articles matching your current filters. Try adjusting your search criteria.
              </p>
              <Button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedTags([]);
                  setSelectedCategories([]);
                  setSelectedPriorities([]);
                  setStartDate(null);
                  setEndDate(null);
                }}
              >
                Clear All Filters
              </Button>
            </div>
          </motion.div>
        )}

        {/* Professional Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12"
          >
            
              <EnhancedPagination
                currentPage={currentPage}
                totalPages={totalPages}
                totalItems={filteredAndSortedNews.length}
                itemsPerPage={itemsPerPage}
                onPageChange={handlePageChange}
                onItemsPerPageChange={handleItemsPerPageChange}
              />
           
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default NewsNotifications;
