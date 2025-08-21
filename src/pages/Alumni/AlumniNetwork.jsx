import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Briefcase, 
  Calendar, 
  ExternalLink, 
  Filter,
  Users,
  Building,
  Star,
  MessageCircle,
  ChevronDown,
  Globe,
  Award,
  TrendingUp,
  Mail,
  Phone,
  BookOpen,
  Target,
  Zap,
  User,
  X,
  Check
} from 'lucide-react';
import BannerSection from '../../components/HeroBanner';
import StatsCard from '../../components/StatsCard';

// Optimized Card Components
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-200 ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 pt-0 ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-xl font-bold text-gray-900 ${className}`}>{children}</h3>
);

// Badge Component
const Badge = ({ children, className = "", variant = "default" }) => {
  const styles = {
    outline: "border border-gray-300 text-gray-700 bg-white",
    secondary: "bg-gray-100 text-gray-700",
    default: "bg-blue-600 text-white",
    success: "bg-green-500 text-white",
    info: "bg-blue-500 text-white",
    warning: "bg-purple-500 text-white"
  };
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1 ${styles[variant]} ${className}`}>
      {children}
    </span>
  );
};

// Button Component
const Button = ({ children, size = "md", variant = "default", className = "", ...props }) => {
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
    secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300",
    success: "bg-green-500 text-white hover:bg-green-600",
    danger: "bg-red-500 text-white hover:bg-red-600"
  };
  return (
    <button 
      className={`rounded-lg font-medium transition-colors duration-150 ${sizes[size]} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

// Input Component
const Input = ({ className = "", ...props }) => (
  <input

    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-150 ${className}`}

    {...props}
  />
);

// Select Components
const Select = ({ children, value, onValueChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Find the selected option's display text
  const selectedText = React.Children.toArray(children).find(child => 
    child.props.children?.props?.value === value
  )?.props?.children?.props?.children || 'Select...';

  return (
    <div className="relative">
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        <div className="border border-gray-300 px-4 py-3 rounded-lg text-gray-700 bg-white hover:border-blue-500 transition-colors duration-150 flex items-center justify-between">
          <span>{selectedText}</span>
          <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-20 mt-1 max-h-60 overflow-y-auto">
          {React.Children.map(children, child => 
            React.cloneElement(child, { 
              onValueChange: (val) => {
                onValueChange(val);
                setIsOpen(false);
              }
            })
          )}
        </div>
      )}
    </div>
  );
};

const SelectContent = ({ children }) => <div>{children}</div>;

const SelectItem = ({ value, children, onValueChange }) => (
  <div
    onClick={() => onValueChange && onValueChange(value)}
    className="cursor-pointer px-4 py-2 hover:bg-blue-50 flex items-center gap-2 text-sm"
  >
    {children}
  </div>
);

// Data
const alumniPageData = {
  banner: {
    title: "Alumni Network",
    subtitle: "Connect with fellow alumni, explore opportunities, and grow your professional network",
    bgTheme: 1,
  },
  stats: [
    {
      icon: Users,
      number: 500,
      title: 'Alumni Members',
    },
    {
      icon: BookOpen,
      number: 100,
      title: 'Mentorship Sessions',
    },
    {
      icon: Target,
      numberText: '150+',
      title: 'Companies',
    },
    {
      icon: Building,
      numberText: '25+',
      title: 'Countries',
    },
    {
      icon: Award,
      numberText: '95%',
      title: 'Success Rate',
    },
  ],
};

const alumniData = [
  {
    id: 1,
    name: "Sarah Johnson",
    batch: "2018",
    branch: "Computer Science",
    company: "Google",
    location: "San Francisco, CA",
    jobTitle: "Senior Software Engineer",
    linkedin: "https://linkedin.com/in/sarahjohnson",
    email: "sarah.johnson@google.com",
    availableFor: ["Referrals", "Mentoring", "Resume Review"],
    status: "Active",
    experience: "5+ years",
    expertise: ["React", "Node.js", "Machine Learning"],
    rating: 4.9,
    connections: 156,
    responses: "Usually responds within 24 hours"
  },
  {
    id: 2,
    name: "Michael Chen",
    batch: "2019",
    branch: "Data Science",
    company: "Netflix",
    location: "Los Angeles, CA",
    jobTitle: "Data Scientist",
    linkedin: "https://linkedin.com/in/michaelchen",
    email: "michael.chen@netflix.com",
    availableFor: ["Mentoring", "Technical Interviews"],
    status: "Active",
    experience: "4+ years",
    expertise: ["Python", "TensorFlow", "Data Analysis"],
    rating: 4.8,
    connections: 234,
    responses: "Usually responds within 12 hours"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    batch: "2017",
    branch: "Business Administration",
    company: "McKinsey & Company",
    location: "New York, NY",
    jobTitle: "Senior Consultant",
    linkedin: "https://linkedin.com/in/emilyrodriguez",
    email: "emily.rodriguez@mckinsey.com",
    availableFor: ["Career Guidance", "Resume Review"],
    status: "Active",
    experience: "6+ years",
    expertise: ["Strategy", "Operations", "Leadership"],
    rating: 4.7,
    connections: 312,
    responses: "Usually responds within 48 hours"
  },
  {
    id: 4,
    name: "David Kim",
    batch: "2016",
    branch: "Mechanical Engineering",
    company: "Tesla",
    location: "Austin, TX",
    jobTitle: "Design Engineer",
    linkedin: "https://linkedin.com/in/davidkim",
    email: "david.kim@tesla.com",
    availableFor: ["Referrals", "Career Guidance"],
    status: "Active",
    experience: "7+ years",
    expertise: ["CAD", "Product Design", "Manufacturing"],
    rating: 4.6,
    connections: 189,
    responses: "Usually responds within 36 hours"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    batch: "2020",
    branch: "Electrical Engineering",
    company: "Apple",
    location: "Cupertino, CA",
    jobTitle: "Hardware Engineer",
    linkedin: "https://linkedin.com/in/lisathompson",
    email: "lisa.thompson@apple.com",
    availableFor: ["Technical Interviews", "Mentoring"],
    status: "Active",
    experience: "3+ years",
    expertise: ["Circuit Design", "IoT", "Embedded Systems"],
    rating: 4.8,
    connections: 127,
    responses: "Usually responds within 18 hours"
  }
];

const AlumniNetwork = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [batchFilter, setBatchFilter] = useState('all');
  const [branchFilter, setBranchFilter] = useState('all');
  const [companyFilter, setCompanyFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [serviceFilter, setServiceFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredAlumni = alumniData.filter(alumni => {
    const matchesSearch = alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alumni.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alumni.jobTitle.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesBatch = batchFilter === 'all' || alumni.batch === batchFilter;
    const matchesBranch = branchFilter === 'all' || alumni.branch === branchFilter;
    const matchesCompany = companyFilter === '' || alumni.company.toLowerCase().includes(companyFilter.toLowerCase());
    const matchesLocation = locationFilter === '' || alumni.location.toLowerCase().includes(locationFilter.toLowerCase());
    const matchesService = serviceFilter === 'all' || alumni.availableFor.includes(serviceFilter);
    
    return matchesSearch && matchesBatch && matchesBranch && matchesCompany && matchesLocation && matchesService;
  });

  const getAvailabilityColor = (service) => {
    switch (service) {
      case 'Referrals': return 'success';
      case 'Mentoring': return 'info';
      case 'Resume Review': return 'warning';
      case 'Career Guidance': return 'info';
      case 'Technical Interviews': return 'warning';
      default: return 'secondary';
    }
  };

  const getServiceIcon = (service) => {
    switch (service) {
      case 'Referrals': return <Users className="h-3 w-3" />;
      case 'Mentoring': return <BookOpen className="h-3 w-3" />;
      case 'Resume Review': return <Target className="h-3 w-3" />;
      case 'Career Guidance': return <TrendingUp className="h-3 w-3" />;
      case 'Technical Interviews': return <Zap className="h-3 w-3" />;
      default: return <Star className="h-3 w-3" />;
    }
  };

  const clearAllFilters = () => {
    setSearchTerm('');
    setBatchFilter('all');
    setBranchFilter('all');
    setCompanyFilter('');
    setLocationFilter('');
    setServiceFilter('all');
    setShowFilters(false);
  };

  const handleSearchClick = () => {
    // This function can be used to trigger search if needed
    // Currently search is happening in real-time
    console.log('Search clicked with term:', searchTerm);
  };

  const hasActiveFilters = searchTerm || batchFilter !== 'all' || branchFilter !== 'all' || companyFilter || locationFilter || serviceFilter !== 'all';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <BannerSection
        title={alumniPageData.banner.title}
        subtitle={alumniPageData.banner.subtitle}
        bgTheme={alumniPageData.banner.bgTheme}
      />

      {/* Stats Section */}
      <StatsCard stats={alumniPageData.stats} />

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="mb-8">
          <CardHeader className="pb-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="flex-1 max-w-2xl">
                <div className="relative flex gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      placeholder="Search alumni by name, company, or role..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-12"
                    />
                    {searchTerm && (
                      <button
                        onClick={() => setSearchTerm('')}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                  <Button 
                    onClick={handleSearchClick}
                    className="flex items-center gap-2 whitespace-nowrap"
                  >
                    <Search className="h-4 w-4" />
                    Search
                  </Button>
                </div>
              </div>
              
              <div className="flex gap-3">
                {hasActiveFilters && (
                  <Button 
                    variant="secondary" 
                    onClick={clearAllFilters}
                    className="flex items-center gap-2"
                  >
                    <X className="h-4 w-4" />
                    Clear
                  </Button>
                )}
                
                <Button 
                  variant="outline" 
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2"
                >
                  <Filter className="h-4 w-4" />
                  Filters
                  <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                </Button>
              </div>
            </div>

            {showFilters && (
              <div className="mt-6 p-6 bg-gray-50 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Batch Year</label>
                    <Select value={batchFilter} onValueChange={setBatchFilter}>
                      <SelectContent>
                        <SelectItem value="all">All Batches</SelectItem>
                        <SelectItem value="2015">2015</SelectItem>
                        <SelectItem value="2016">2016</SelectItem>
                        <SelectItem value="2017">2017</SelectItem>
                        <SelectItem value="2018">2018</SelectItem>
                        <SelectItem value="2019">2019</SelectItem>
                        <SelectItem value="2020">2020</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Branch</label>
                    <Select value={branchFilter} onValueChange={setBranchFilter}>
                      <SelectContent>
                        <SelectItem value="all">All Branches</SelectItem>
                        <SelectItem value="Computer Science">Computer Science</SelectItem>
                        <SelectItem value="Mechanical Engineering">Mechanical Engineering</SelectItem>
                        <SelectItem value="Electrical Engineering">Electrical Engineering</SelectItem>
                        <SelectItem value="Data Science">Data Science</SelectItem>
                        <SelectItem value="Business Administration">Business Administration</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service</label>
                    <Select value={serviceFilter} onValueChange={setServiceFilter}>
                      <SelectContent>
                        <SelectItem value="all">All Services</SelectItem>
                        <SelectItem value="Referrals">Referrals</SelectItem>
                        <SelectItem value="Mentoring">Mentoring</SelectItem>
                        <SelectItem value="Resume Review">Resume Review</SelectItem>
                        <SelectItem value="Career Guidance">Career Guidance</SelectItem>
                        <SelectItem value="Technical Interviews">Technical Interviews</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <Input
                      placeholder="Filter by company"
                      value={companyFilter}
                      onChange={(e) => setCompanyFilter(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <Input
                      placeholder="Filter by location"
                      value={locationFilter}
                      onChange={(e) => setLocationFilter(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}
          </CardHeader>
        </Card>

        {/* Results Summary - Only shown when there are filters applied or search term */}
        {hasActiveFilters && (
          <div className="mx-auto p-4 mb-6 rounded-lg border border-indigo-300 bg-indigo-50 text-indigo-800 text-sm flex items-center gap-4 shadow-sm">
            <div className="flex items-center justify-center w-10 h-5 text-indigo-700 font-bold text-lg">
              {filteredAlumni.length}
            </div>
            <div>
              <span className="font-medium">Alumni found</span>
              {searchTerm && (
                <span className="ml-1 text-indigo-600">for "<i>{searchTerm}</i>"</span>
              )}
            </div>
          </div>
        )}

        {/* Alumni Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredAlumni.map((alumni) => (
            <Card key={alumni.id} className="flex flex-col overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                      <User className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>

                  <div className="flex-1">
                    <CardTitle className="text-lg mb-1">{alumni.name}</CardTitle>
                    <p className="text-sm text-gray-600 flex items-center gap-1 mb-2">
                      <Calendar className="h-4 w-4" />
                      Class of {alumni.batch} • {alumni.branch}
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded">
                        <Star className="h-3 w-3 text-yellow-500 fill-current" />
                        <span className="text-xs font-medium">{alumni.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded">
                        <Users className="h-3 w-3 text-blue-600" />
                        <span className="text-xs font-medium">{alumni.connections}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0 flex flex-col flex-1 justify-between">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 p-2 bg-blue-50 rounded">
                      <Briefcase className="h-4 w-4 text-blue-600" />
                      <span className="font-medium text-sm">{alumni.jobTitle}</span>
                    </div>

                    <div className="flex items-center gap-2 p-2 bg-green-50 rounded">
                      <Building className="h-4 w-4 text-green-600" />
                      <span className="font-medium text-sm">{alumni.company}</span>
                      <Badge variant="secondary" className="text-xs ml-auto">
                        {alumni.experience}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-2 p-2 bg-purple-50 rounded">
                      <MapPin className="h-4 w-4 text-purple-600" />
                      <span className="text-sm">{alumni.location}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-800 flex items-center gap-1">
                      <Check className="h-4 w-4 text-green-500" />
                      Services:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {alumni.availableFor.map((service) => (
                        <Badge
                          key={service}
                          variant={getAvailabilityColor(service)}
                          className="text-xs flex items-center gap-1"
                        >
                          {getServiceIcon(service)}
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-800 flex items-center gap-1">
                      <Target className="h-4 w-4 text-blue-500" />
                      Expertise:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {alumni.expertise.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="text-xs text-gray-600 bg-blue-50 p-2 rounded">
                    <MessageCircle className="h-3 w-3 inline mr-1" />
                    {alumni.responses}
                  </div>
                </div>

                {/* Bottom-aligned buttons */}
                <div className="mt-4">
                  <div className="grid grid-cols-2 gap-2">
                    <Button size="sm" className="w-full flex items-center justify-center">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      Connect
                    </Button>
                    <div className="flex gap-1">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 flex items-center justify-center"
                        onClick={() => window.open(alumni.linkedin, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 flex items-center justify-center"
                        onClick={() => window.open(`mailto:${alumni.email}`, '_blank')}
                      >
                        <Mail className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredAlumni.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No alumni found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search criteria</p>
            <Button onClick={clearAllFilters}>
              <X className="h-4 w-4 mr-2" />
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AlumniNetwork;