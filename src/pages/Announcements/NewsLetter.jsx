import { useState } from 'react';
import { Download, FileText, Calendar, Eye, Share2 } from 'lucide-react';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import Pagination from '../../components/announcement/Pagination';
import { useToast } from '../../hooks/use-toast';
import BannerSection from '../../components/HeroBanner';
import StatsCard from '../../components/StatsCard';

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

// === Mock Newsletters Data ===
const mockNewsletters = [
  {
    id: 1,
    title: "GBU Spring Fest 2025",
    issueNumber: "Vol. 15, Issue 1",
    date: "2025-03-15",
    coverImage: "https://cdn.thedecorjournalindia.com/wp-content/uploads/2022/11/9_Modern-day-marvel-Gautam-Buddha-University-by-CP-Kukreja-architects-transpires-fresh-vibe-and-ancient-wisdom.jpg?lossy=1&resize=1920%2C1357&ssl=1&strip=all",
    excerpt: "Highlights of GBU's Spring Fest — cultural nights, competitions, and student showcases.",
    pdfLink: "/newsletters/spring-fest-2025.pdf",
    views: 1245,
    category: "Events"
  },
  {
    id: 2,
    title: "Annual Convocation 2024",
    issueNumber: "Vol. 14, Issue 4",
    date: "2024-12-10",
    coverImage: "https://www.ic3ecsbhi.com/Events/IMG-20231224-WA0082.jpg",
    excerpt: "GBU's 14th Convocation ceremony highlights and graduate stories.",
    pdfLink: "/newsletters/convocation-2024.pdf",
    views: 892,
    category: "Academic"
  },
  {
    id: 3,
    title: "Research & Innovation Summit",
    issueNumber: "Vol. 14, Issue 3",
    date: "2024-09-20",
    coverImage: "https://gburif.org/images/intro-carousel/gautam-buddha-university-3.jpg",
    excerpt: "Breakthrough research, industry tie-ups, and student-led innovations at GBU.",
    pdfLink: "/newsletters/research-summit-2024.pdf",
    views: 1567,
    category: "Research"
  },
  {
    id: 4,
    title: "Sports Meet Highlights",
    issueNumber: "Vol. 14, Issue 2",
    date: "2024-06-15",
    coverImage: "https://www.gbu.ac.in/Content/img/sports/banner1.jpg",
    excerpt: "National Sports Meet 2024 hosted by GBU: winners, records, and sportsmanship.",
    pdfLink: "/newsletters/sports-meet-2024.pdf",
    views: 743,
    category: "Sports"
  },
  {
    id: 5,
    title: "Student Entrepreneurship Week",
    issueNumber: "Vol. 14, Issue 1",
    date: "2024-04-10",
    coverImage: "https://www.ux4g.gov.in/assets/img/awareness-workshop/gbu-19-11-24/900x1.webp",
    excerpt: "GBU students transform ideas into startups during Entrepreneurship Week.",
    pdfLink: "/newsletters/entrepreneurship-week-2024.pdf",
    views: 1123,
    category: "Business"
  },
  {
    id: 6,
    title: "Tech Symposium & Hackathon",
    issueNumber: "Vol. 13, Issue 4",
    date: "2024-02-25",
    coverImage: "https://tennews.in/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-22-at-8.24.01-PM-e1669129715871.jpeg",
    excerpt: "GBU's biggest hackathon yet — innovation, collaboration, and solutions.",
    pdfLink: "/newsletters/tech-symposium-2024.pdf",
    views: 2156,
    category: "Technology"
  },
  {
    id: 7,
    title: "Cultural Night Highlights",
    issueNumber: "Vol. 13, Issue 3",
    date: "2023-11-10",
    coverImage: "https://images.unsplash.com/photo-1599491126263-3db86d7c3626?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt: "Vibrant cultural diversity with music, dance, and art performances.",
    pdfLink: "/newsletters/cultural-night-2023.pdf",
    views: 891,
    category: "Culture"
  },
  {
    id: 8,
    title: "Green Campus Initiative",
    issueNumber: "Vol. 13, Issue 2",
    date: "2023-09-05",
    coverImage: "https://images.unsplash.com/photo-1581090700224-81b1b0b59f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt: "GBU's sustainability drive: plantation, waste management, and green tech.",
    pdfLink: "/newsletters/green-campus-2023.pdf",
    views: 654,
    category: "Environment"
  },
  {
    id: 9,
    title: "Alumni Meet 2023",
    issueNumber: "Vol. 13, Issue 1",
    date: "2023-07-20",
    coverImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt: "GBU alumni reconnect, share stories, and inspire students at the meet.",
    pdfLink: "/newsletters/alumni-meet-2023.pdf",
    views: 1432,
    category: "Alumni"
  },
  {
    id: 10,
    title: "Placement Drive Report",
    issueNumber: "Vol. 12, Issue 4",
    date: "2023-05-10",
    coverImage: "https://images.unsplash.com/photo-1584697964192-8d161b891f74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt: "Record-breaking placements with top companies and success stories.",
    pdfLink: "/newsletters/placement-drive-2023.pdf",
    views: 1876,
    category: "Career"
  },
  {
    id: 11,
    title: "Art & Photography Fest",
    issueNumber: "Vol. 12, Issue 3",
    date: "2023-03-18",
    coverImage: "https://images.unsplash.com/photo-1583321573717-7c1b746f0cb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt: "Students showcase creativity through art and photography exhibitions.",
    pdfLink: "/newsletters/art-photography-2023.pdf",
    views: 567,
    category: "Arts"
  },
  {
    id: 12,
    title: "Student Clubs Orientation",
    issueNumber: "Vol. 12, Issue 2",
    date: "2023-01-25",
    coverImage: "https://images.unsplash.com/photo-1588195533091-c89fa1b4e3b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt: "New students explore GBU's clubs and societies to join and grow.",
    pdfLink: "/newsletters/clubs-orientation-2023.pdf",
    views: 923,
    category: "Student Life"
  },
];

// === Main Component ===
const NewsLetter = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState('');
  const { toast } = useToast();
  const itemsPerPage = 6;

  const totalPages = Math.ceil(mockNewsletters.length / itemsPerPage);
  const currentNewsletters = mockNewsletters.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const latestId = mockNewsletters[0].id;

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
            { number: 12, title: "Categories", icon: Calendar, iconColor: "#10B981" },
            { numberText: "15K+", title: "Total Views", icon: Eye, iconColor: "#465797" },
            { number: 2025, title: "Latest Year", icon: Calendar, iconColor: "#EF4444" }
          ]}
        />

        {/* Results Summary */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Newsletter Archive</h2>

          </div>
        </div>

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

                  {/* Meta Information */}
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{format(new Date(newsletter.date), 'MMM dd, yyyy')}</span>
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
                      onClick={() => window.open(newsletter.pdfLink, "_blank")}
                      className="flex-1"
                    >
                      <FileText size={14} className="mr-1.5" />
                      Read
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(newsletter.pdfLink, "_blank")}
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
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default NewsLetter;
