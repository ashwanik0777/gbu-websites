 import React, { useState } from 'react';
import { motion, AnimatePresence  } from 'framer-motion';

import {
  Camera,
  Filter,
  Eye,
  Download,
  Shield,
  CalendarDays,
  Video,
  Image,
} from 'lucide-react';
import StatsCard from '../StatsCard';
import SearchableWrapper from '../Searchbar/SearchableWrapper';

/* UI Components */

const Card = ({ children, className = '' }) => (
  <div className={`bg-white border border-gray-300 rounded-xl shadow ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className = '' }) => (
  <div className={`px-6 pt-6 pb-2 ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = '' }) => (
  <h3 className={`font-bold text-lg ${className}`}>{children}</h3>
);

const CardContent = ({ children, className = '' }) => (
  <div className={`px-6 pb-6 ${className}`}>{children}</div>
);

const Button = ({
  children,
  className = '',
  variant = 'default',
  size = 'md',
  ...props
}) => {
  const base =
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline:
      'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 shadow-sm',
  };
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
  };
  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Badge = ({ children, className = '', variant = 'default' }) => {
  const base =
    'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold';
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    outline: 'border border-gray-300 text-gray-700 bg-white',
  };
  return (
    <span className={`${base} ${variants[variant]} ${className}`}>{children}</span>
  );
};

/* Select Components */

const Select = ({ value, onValueChange, children }) => (
  <div className="relative inline-block">
    {React.Children.map(children, (child) =>
      React.cloneElement(child, { value, onValueChange })
    )}
  </div>
);

const SelectTrigger = ({ children, className = '', ...props }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        className="w-full flex items-center justify-between border border-gray-300 bg-white rounded-md px-3 py-2 text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => setOpen((o) => !o)}
        {...props}
      >
        {children}
        <svg
          className="ml-2 h-4 w-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open &&
        React.Children.map(props.children, (child) =>
          React.cloneElement(child, { open, setOpen })
        )}
    </div>
  );
};

const SelectValue = ({ placeholder }) => (
  <span className="truncate">{placeholder}</span>
);

const SelectContent = ({ children, open, setOpen, value, onValueChange }) =>
  open ? (
    <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { setOpen, value, onValueChange })
      )}
    </div>
  ) : null;

const SelectItem = ({ value: itemValue, children, setOpen, value, onValueChange }) => (
  <div
    className={`px-4 py-2 cursor-pointer hover:bg-blue-100 text-sm ${
      value === itemValue ? 'font-semibold text-blue-700' : 'text-gray-700'
    }`}
    onClick={() => {
      onValueChange(itemValue);
      setOpen(false);
    }}
  >
    {children}
  </div>
);

/* Dialog Components */

const Dialog = ({ children }) => {
  const [open, setOpen] = useState(false);
  return React.Children.map(children, (child) => {
    if (child.type === DialogTrigger) {
      return React.cloneElement(child, { setOpen });
    }
    if (child.type === DialogContent) {
      return open ? React.cloneElement(child, { setOpen }) : null;
    }
    return child;
  });
};

const DialogTrigger = ({ children, setOpen }) => (
  <div onClick={() => setOpen(true)}>{children}</div>
);

const DialogContent = ({ children, setOpen, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.3 }}
    className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 px-2 ${className}`}
    onClick={() => setOpen(false)}
  >
    <div
      className="bg-white rounded-lg shadow-lg max-w-full w-full md:w-auto relative"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        onClick={() => setOpen(false)}
        aria-label="Close"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div className="p-4">{children}</div>
    </div>
  </motion.div>
);

/* Main NCCGallery Component */

const NCCGallery = () => {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const galleryItems = [
    {
      id: 1,
      title: 'Republic Day Camp 2024',
      category: 'Camps',
      year: '2024',
      date: '2024-01-26',
      images: [
        { url: 'https://static.mygov.in/indiancc/2021/05/mygov-9999999991614076475-1024x576.jpg', caption: 'RDC participants marching' },
        { url: '/placeholder.svg', caption: 'Cultural program at RDC' },
        { url: '/placeholder.svg', caption: 'Award ceremony' },
        { url: '/placeholder.svg', caption: 'Meeting with dignitaries' },
      ],
    },
    {
      id: 2,
      title: 'Annual Training Camp',
      category: 'Training',
      year: '2024',
      date: '2024-03-15',
      images: [
        { url: '/placeholder.svg', caption: 'Drill training session' },
        { url: '/placeholder.svg', caption: 'Weapon training practice' },
        { url: '/placeholder.svg', caption: 'Field craft exercises' },
        { url: '/placeholder.svg', caption: 'Camp closing ceremony' },
      ],
    },
    // Add more items as you like
  ];
const galleryStatsData = [
  {
    icon: Image,
    numberText: "800+",
    title: "Total Photos",
   iconColor: '#3b82f6',
  },
  {
    icon: CalendarDays,
    numberText: "75+",
    title: "Events Documented",
      iconColor: '#f97316'
  },
  {
    icon: Video,
    numberText: "30+",
    title: "Training Videos",
     iconColor: '#10b981',
  },
  {
    icon: Eye,
    numberText: "15K+",
    title: "Total Views",
   iconColor: '#8b5cf6'
  },
];
  const filteredItems = galleryItems.filter((item) => {
    const yearMatch = selectedYear === 'all' || item.year === selectedYear;
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
    return yearMatch && categoryMatch;
  });

  const getCategoryColor = (category) => {
    const colors = {
      Training: 'bg-blue-100 text-blue-800',
      Camps: 'bg-green-100 text-green-800',
      Adventure: 'bg-orange-100 text-orange-800',
      Competitions: 'bg-red-100 text-red-800',
      Drill: 'bg-purple-100 text-purple-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };
const [dialogImage, setDialogImage] = useState(null);
  return (
<SearchableWrapper>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="space-y-8 px-4 sm:px-6 lg:px-20 mx-auto max-w-7xl"
    >
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">NCC Gallery</h2>
        <p className="text-lg text-gray-600">
          Capturing moments of discipline, training, and camaraderie
        </p>
      </motion.div>
<StatsCard stats={galleryStatsData}/>
      {/* FILTERS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-3 items-center justify-center sm:justify-start">
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">Filter by:</span>
              </div>
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Years</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-36">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Training">Training</SelectItem>
                  <SelectItem value="Camps">Camps</SelectItem>
                  <SelectItem value="Adventure">Adventure</SelectItem>
                  <SelectItem value="Competitions">Competitions</SelectItem>
                  <SelectItem value="Drill">Drill</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      
{/* GALLERY GRID */}
      <motion.div
        className="space-y-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {filteredItems.map((item) => (
          <motion.div
            key={item.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="bg-white rounded-lg shadow overflow-hidden"
          >
            <div className="p-4 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                <div>
                  <h3 className="font-semibold text-xl text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 mt-1">
                    {new Date(item.date).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <span
                    className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${getCategoryColor(
                      item.category
                    )}`}
                  >
                    {item.category}
                  </span>
                  <span className="inline-block px-2 py-0.5 rounded text-xs font-semibold border border-gray-300 text-gray-700 bg-white">
                    {item.year}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {item.images.map((image, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="relative group cursor-pointer"
                    onClick={() => setDialogImage(image)}
                  >
                    <img
                      src={image.url}
                      alt={image.caption}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center"
                    >
                      <Eye className="h-6 w-6 text-white" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
                <span className="text-sm text-gray-600">{item.images.length} photos</span>
                
              </div>
            </div>

          </motion.div>
        ))}
      </motion.div>

      {/* DIALOG */}
      <AnimatePresence>
        {dialogImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-start justify-center bg-white/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setDialogImage(null)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-xl shadow-2xl p-4 md:p-6 w-[90vw] max-w-xl relative mt-32"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 focus:outline-none"
                onClick={() => setDialogImage(null)}
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="space-y-3">
                <div className="flex items-center justify-center">
                  <img
                    src={dialogImage.url}
                    alt={dialogImage.caption}
                    className="rounded-md object-contain max-h-[60vh]"
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                  <p className="text-gray-700 text-center sm:text-left">{dialogImage.caption}</p>
                  
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* VIDEO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Camera className="h-6 w-6 text-purple-600" />
              <span>Training Videos</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { title: 'Drill Training Highlights', duration: '5:30', views: '2.1K' },
                { title: 'Adventure Camp Documentary', duration: '12:45', views: '3.5K' },
                { title: 'RDC Parade Performance', duration: '8:20', views: '4.2K' },
              ].map((video, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="space-y-4"
                >
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                    <Camera className="h-12 w-12 text-gray-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{video.title}</h4>
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>{video.duration}</span>
                      <span>{video.views} views</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
    </SearchableWrapper>
  );
};

export default NCCGallery;
