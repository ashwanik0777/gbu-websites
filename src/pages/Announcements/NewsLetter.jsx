import { useState, useEffect } from "react";
import { Download, FileText, Calendar, Eye, Share2 } from 'lucide-react';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import Pagination from '../../components/announcement/Pagination';
import BannerSection from '../../components/HeroBanner';
import StatsCard from '../../components/StatsCard';
import { getSchoolAnnouncements } from '../../utils/schoolAnnouncements';

// === Modern Card Components ===
const Card = ({ children, className = "" }) => (
  <motion.div
    whileHover={{ y: -8 }}
    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    className={`bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 ${className}`}
  >
    {children}
  </motion.div>
);

const CardHeader = ({ children, className = "" }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-lg font-bold text-gray-900 leading-tight mb-2 ${className}`}>{children}</h3>
);

const CardDescription = ({ children, className = "" }) => (
  <p className={`text-sm text-gray-600 line-clamp-2 ${className}`}>{children}</p>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-4 pt-0 ${className}`}>{children}</div>
);

// === Modern Button Component ===
const Button = ({ children, type = "button", variant = "primary", size = "md", className = "", ...props }) => {
  const base = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow-md",
    secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200",
    outline: "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400",
    ghost: "bg-transparent text-gray-600 hover:bg-gray-100 hover:text-gray-900",
  };
  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  };
  return (
    <button
      type={type}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// === Modern Badge Component ===
const Badge = ({ children, variant = "default", className = "" }) => {
  const variants = {
    default: "bg-blue-50 text-blue-700 border border-blue-200",
    new: "bg-green-500 text-white shadow-lg animate-pulse",
    outline: "bg-white text-blue-600 border border-blue-300",
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};


const NewsLetter = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [mockNewsletters, setMockNewsletters] = useState(() => getSchoolAnnouncements().newsletters);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 6;

  useEffect(() => {
    const loadNewsletters = () => {
      setMockNewsletters(getSchoolAnnouncements().newsletters);
      setLoading(false);
    };

    loadNewsletters();
    window.addEventListener("storage", loadNewsletters);
    window.addEventListener("focus", loadNewsletters);

    return () => {
      window.removeEventListener("storage", loadNewsletters);
      window.removeEventListener("focus", loadNewsletters);
    };
  }, []);

  // Safe calculations (prevents crashes when array is empty)
  const totalPages = Math.ceil(mockNewsletters.length / itemsPerPage) || 1;
  const currentNewsletters = mockNewsletters.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const latestId = mockNewsletters.length > 0 ? mockNewsletters[0].id : null;

  // Dynamic values for StatsCard
  const uniqueCategoriesCount = new Set(mockNewsletters.map(n => n.category)).size || 0;
  const latestYear = mockNewsletters.length > 0 ? new Date(mockNewsletters[0].date).getFullYear() : new Date().getFullYear();
  const totalViews = mockNewsletters.reduce((sum, n) => sum + Number(n.views || 0), 0);

  const getCategoryColor = (category) => {
    const colors = {
      Events: 'bg-purple-50 text-purple-700 border-purple-200',
      Academic: 'bg-blue-50 text-blue-700 border-blue-200',
      Research: 'bg-green-50 text-green-700 border-green-200',
      Sports: 'bg-orange-50 text-orange-700 border-orange-200',
      Business: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      Technology: 'bg-cyan-50 text-cyan-700 border-cyan-200',
      Culture: 'bg-pink-50 text-pink-700 border-pink-200',
      Environment: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      Alumni: 'bg-teal-50 text-teal-700 border-teal-200',
      Career: 'bg-violet-50 text-violet-700 border-violet-200',
      Arts: 'bg-rose-50 text-rose-700 border-rose-200',
      'Student Life': 'bg-amber-50 text-amber-700 border-amber-200'
    };
    return colors[category] || 'bg-gray-50 text-gray-700 border-gray-200';
  };

  return (
    <div className="min-h-screen bg-white">
      <BannerSection
        title="Newsletter"
        subtitle="Stay updated with the latest campus highlights"
        bgTheme={3}
      />

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <StatsCard
          stats={[
            { number: mockNewsletters.length, title: "Total Issues", icon: FileText, iconColor: "#4F46E5" },
            { number: uniqueCategoriesCount, title: "Categories", icon: Calendar, iconColor: "#10B981" },
            { number: totalViews, title: "Total Views", icon: Eye, iconColor: "#465797" },
            { number: latestYear, title: "Latest Year", icon: Calendar, iconColor: "#EF4444" }
          ]}
        />

        {/* Results Summary */}
        <div className="mb-6 rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 to-white px-4 py-3 shadow-sm">
          <p className="text-sm font-medium text-slate-600">School-driven newsletter data. Updates are synced from School Dashboard.</p>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Newsletter Archive</h2>
          </div>
        </div>

        {/* Loading State or Newsletter Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : mockNewsletters.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <FileText size={48} className="mx-auto mb-4 opacity-50" />
            <p className="text-lg">No newsletters found.</p>
          </div>
        ) : (
          <>
            {/* Newsletter Grid */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
            >
              {currentNewsletters.map((newsletter) => (
                <motion.div
                  key={newsletter.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Card className="h-full flex flex-col relative group">
                    {/* New Badge */}
                    {newsletter.id === latestId && (
                      <Badge variant="new" className="absolute top-3 right-3 z-10">
                        NEW
                      </Badge>
                    )}

                    {/* Cover Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={newsletter.coverImage}
                        alt={newsletter.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=600&q=80';
                        }}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </div>

                    {/* Card Header */}
                    <CardHeader>
                      <div className="flex items-center justify-between mb-3">
                        <Badge className={getCategoryColor(newsletter.category)}>
                          {newsletter.category}
                        </Badge>
                        <span className="text-xs text-gray-500 font-medium">
                          {newsletter.issueNumber}
                        </span>
                      </div>

                      <CardTitle className="group-hover:text-blue-600 transition-colors">
                        {newsletter.title}
                      </CardTitle>

                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-indigo-600">
                        {newsletter.schoolName}
                      </p>

                      {/* Meta Information */}
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar size={12} />
                          <span>{newsletter.date ? format(new Date(newsletter.date), 'MMM dd, yyyy') : 'Unknown'}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye size={12} />
                          <span>{newsletter.views}</span>
                        </div>
                      </div>

                      <CardDescription>
                        {newsletter.excerpt}
                      </CardDescription>
                    </CardHeader>

                    {/* Card Content - Actions */}
                    <CardContent className="mt-auto">
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          onClick={() => newsletter.pdfLink && window.open(newsletter.pdfLink, "_blank")}
                          disabled={!newsletter.pdfLink}
                          className="flex-1"
                        >
                          <FileText size={14} className="mr-1.5" />
                          {newsletter.pdfLink ? "Read" : "No Link"}
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => newsletter.pdfLink && window.open(newsletter.pdfLink, "_blank")}
                          disabled={!newsletter.pdfLink}
                        >
                          <Download size={14} className="mr-1.5" />
                          PDF
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="px-3"
                        >
                          <Share2 size={14} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default NewsLetter;