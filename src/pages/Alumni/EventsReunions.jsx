import React, { useState, useEffect } from 'react';
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  Camera,
  Plus,
  Heart,
  Star,
  Search,
  Filter,
  X,
  ChevronRight,
  Sparkles,
  Trophy,
  Share2,
  BookmarkPlus,
  Download,
  ExternalLink,
  Zap,
  TrendingUp,
  Award,
  Globe,
  ArrowRight,
  CheckCircle,
  CalendarPlus,
  Bell,
  Eye,
  Play,
  MessageSquare,
  ChevronLeft,
  PhoneCall,
  List,
  Edit3,
  FileText,
  Lightbulb,
  User,
  Briefcase,
  Mail,
  StickyNote,
  Loader2,
  Megaphone,
  CircleDashed,
  UserCheck,
  CalendarCheck,
  ShieldCheck,
  Type,
  AlignLeft,
  Map,
  Mic,
  Info
} from 'lucide-react';
import { toast } from '../../hooks/use-toast';
import BannerSection from '../../components/HeroBanner';
import { upcomingTalks, pastTalks } from './AlumniTalks';

// Enhanced Dialog Component (no animations)
const Dialog = ({ open, onOpenChange, children }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md">
      <div className="bg-white rounded-3xl shadow-2xl max-w-full max-h-[95vh] overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

const DialogContent = ({ children, className = "" }) => (
  <div className={`p-8 ${className}`}>{children}</div>
);

const DialogHeader = ({ children }) => (
  <div className="mb-8 border-b border-gray-100 pb-6">{children}</div>
);

const DialogTitle = ({ children }) => (
  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-3">
    {children}
  </h2>
);

// Modern Select Component with Glassmorphism
const Select = ({ value, onValueChange, children }) => {
  const [open, setOpen] = useState(false);
  const handleSelect = (val) => {
    onValueChange(val);
    setOpen(false);
  };

  let trigger = null;
  let content = null;
  React.Children.forEach(children, (child) => {
    if (child && child.type === SelectTrigger) {
      trigger = React.cloneElement(child, {
        onClick: () => setOpen((o) => !o),
        value,
        open,
      });
    } else if (child && child.type === SelectContent) {
      content = open
        ? React.cloneElement(child, { onSelect: handleSelect, value })
        : null;
    }
  });

  return (
    <div className="relative">
      {trigger}
      {content}
    </div>
  );
};

const SelectTrigger = ({ children, onClick, value, open }) => (
  <button
    type="button"
    onClick={onClick}
    className={`w-full border-2 border-gray-200 rounded-2xl px-6 py-4 text-sm bg-white/80 backdrop-blur-sm flex justify-between items-center hover:border-blue-300 hover:bg-white hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 ${open ? "ring-4 ring-blue-500/20 border-blue-500 shadow-lg" : ""
      }`}
  >
    {children}
    <span className={`ml-2 text-gray-400 transition-all duration-300 ${open ? "rotate-180" : ""}`}>
      <ChevronRight className="h-4 w-4 rotate-90" />
    </span>
  </button>
);

const SelectContent = ({ children, onSelect }) => (
  <div className="absolute z-20 mt-3 w-full bg-white/95 backdrop-blur-md border border-gray-200 rounded-2xl shadow-2xl">
    {React.Children.map(children, (child) =>
      child && child.type === SelectItem
        ? React.cloneElement(child, { onSelect })
        : child
    )}
  </div>
);

const SelectItem = ({ value, children, onSelect }) => (
  <div
    className="px-6 py-4 cursor-pointer hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 text-sm transition-all duration-200 first:rounded-t-2xl last:rounded-b-2xl"
    onClick={() => onSelect(value)}
  >
    {children}
  </div>
);

const SelectValue = ({ placeholder }) => (
  <span className="text-gray-700 font-medium">{placeholder}</span>
);

// Fixed Working Tabs Component
const Tabs = ({ defaultValue, children, className = "" }) => {
  const [value, setValue] = useState(defaultValue);

  return (
    <div className={`w-full ${className}`}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { value, setValue });
        }
        return child;
      })}
    </div>
  );
};

const TabsList = ({ children, value, setValue, className = "" }) => (
  <div className={`grid w-full grid-cols-3 max-w-5xl mx-auto mb-16 p-3 bg-white/95 backdrop-blur-lg border-2 border-gray-200 rounded-2xl shadow-lg ${className}`}>
    {React.Children.map(children, child => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { value, setValue });
      }
      return child;
    })}
  </div>
);

const TabsTrigger = ({ value: tabValue, setValue, value, children, className = "" }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <button
      type="button"
      className={`px-8 py-5 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-3 text-base relative overflow-hidden ${tabValue === value
        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl transform scale-105 z-10'
        : 'bg-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900 hover:shadow-md hover:scale-102'
        } ${isPressed ? 'scale-95' : ''} ${className}`}
      onClick={() => setValue(tabValue)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
    >
      <span className="relative z-10 flex items-center gap-3">
        {children}
      </span>
      {tabValue === value && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl" />
      )}
    </button>
  );
};

const TabsContent = ({ value, children, value: tabValue, className = "" }) => {
  if (tabValue !== value) return null;
  return (
    <div className={className}>{children}</div>
  );
};

// Enhanced Form Components
const Input = ({ id, className = "", ...props }) => (
  <input
    id={id}
    className={`w-full border-2 border-gray-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 hover:border-gray-300 hover:shadow-md bg-white/80 backdrop-blur-sm ${className}`}
    {...props}
  />
);

const Textarea = ({ id, className = "", ...props }) => (
  <textarea
    id={id}
    className={`w-full border-2 border-gray-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 hover:border-gray-300 hover:shadow-md resize-none bg-white/80 backdrop-blur-sm ${className}`}
    {...props}
  />
);

const Button = ({ children, className = '', variant = 'primary', size = 'md', ...props }) => {
  const baseClasses = "font-semibold flex items-center gap-3 justify-center relative group";

  const sizeClasses = {
    sm: "rounded-xl px-4 py-2 text-sm",
    md: "rounded-2xl px-8 py-4 text-sm",
    lg: "rounded-2xl px-10 py-5 text-base"
  };

  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-purple-600 text-white",
    secondary: "bg-white/90 backdrop-blur-sm border-2 border-gray-200 text-gray-700",
    outline: "border-2 border-blue-200 text-blue-600 bg-white/80 backdrop-blur-sm",
    success: "bg-gradient-to-r from-green-600 to-emerald-600 text-white",
    danger: "bg-gradient-to-r from-red-600 to-pink-600 text-white"
  };

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="flex items-center gap-2 justify-center">{children}</span>
    </button>
  );
};

const Label = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor} className="block text-sm font-bold text-gray-800 mb-3">
    {children}
  </label>
);

const Badge = ({ children, className = '', variant = 'default' }) => {
  const variants = {
    default: "bg-gray-100 text-gray-800 border border-gray-200",
    primary: "bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border border-blue-200",
    success: "bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border border-green-200",
    warning: "bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 border border-orange-200",
    outline: "border-2 border-blue-200 text-blue-600 bg-white/80 backdrop-blur-sm",
    trending: "bg-gradient-to-r from-pink-100 to-purple-100 text-pink-800 border border-pink-200"
  };

  return (
    <span className={`inline-flex items-center rounded-full px-4 py-2 text-xs font-bold shadow-sm ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

const Card = ({ children, className = '' }) => (
  <div className={`rounded-3xl bg-white/90 backdrop-blur-sm shadow-lg border border-gray-100 p-8 ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children }) => <div className="mb-6">{children}</div>;
const CardTitle = ({ children }) => <h3 className="text-2xl font-bold text-gray-900">{children}</h3>;
const CardContent = ({ children }) => <div className="space-y-6">{children}</div>;

const CardDescription = ({ children, className = '' }) => (
  <p className={`text-gray-500 text-base mb-2 ${className}`}>{children}</p>
);

// Stats Component for Better Visual Appeal
const StatsCard = ({ icon: Icon, title, value, trend, color = "blue" }) => (
  <Card className="text-center group hover:scale-105 transition-transform duration-300">
    <div className={`mx-auto w-16 h-16 bg-gradient-to-br from-${color}-500 to-${color}-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
      <Icon className="h-8 w-8 text-white" />
    </div>
    <h3 className="text-3xl font-bold text-gray-900 mb-2">{value}</h3>
    <p className="text-gray-600 font-medium">{title}</p>
    {trend && (
      <div className="flex items-center justify-center gap-1 mt-2">
        <TrendingUp className="h-4 w-4 text-green-500" />
        <span className="text-sm text-green-600 font-semibold">{trend}</span>
      </div>
    )}
  </Card>
);

// Main Component with Enhanced UI
const EventsReunions = () => {
  const [rsvpData, setRsvpData] = useState({
    name: '',
    email: '',
    graduationYear: '',
    phone: '',
    dietaryRestrictions: ''
  });
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [newEventData, setNewEventData] = useState({
    title: '',
    description: '',
    preferredDate: '',
    location: '',
    eventType: '',
    expectedAttendees: '',
    contactEmail: '',
    additionalNotes: ''
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  const [upcomingTab, setUpcomingTab] = useState('events'); // 'events' | 'talks'
  const [pastTab, setPastTab] = useState('events'); // 'events' | 'talks'
  const [pastEventIndex, setPastEventIndex] = useState(0);
  const [pastTalkIndex, setPastTalkIndex] = useState(0);

  // Carousel logic for past events
  useEffect(() => {
    if (pastTab === 'events' && pastEvents.length > 1) {
      const timer = setInterval(() => {
        setPastEventIndex((i) => (i + 1) % pastEvents.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [pastTab]);
  // Carousel logic for past talks
  useEffect(() => {
    if (pastTab === 'talks' && pastTalks.length > 1) {
      const timer = setInterval(() => {
        setPastTalkIndex((i) => (i + 1) % pastTalks.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [pastTab]);

  const handleRSVP = (event) => {
    setSelectedEvent(event);
  };

  const submitRSVP = async () => {
    if (!rsvpData.name || !rsvpData.email || !rsvpData.graduationYear) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "🎉 RSVP Confirmed!",
        description: `You're registered for "${selectedEvent.title}". Details will be sent to your email.`,
      });

      setSelectedEvent(null);
      setRsvpData({ name: '', email: '', graduationYear: '', phone: '', dietaryRestrictions: '' });
      setIsLoading(false);
    }, 1500);
  };

  const submitEventProposal = async () => {
    if (!newEventData.title || !newEventData.description || !newEventData.contactEmail) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "✨ Event proposal submitted!",
        description: "Your event proposal has been sent to the alumni team for review. You'll hear back within 3-5 business days.",
      });

      setNewEventData({
        title: '',
        description: '',
        preferredDate: '',
        location: '',
        eventType: '',
        expectedAttendees: '',
        contactEmail: '',
        additionalNotes: ''
      });
      setIsLoading(false);
    }, 1500);
  };

  const filteredEvents = upcomingEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || event.tags.some(tag =>
      tag.toLowerCase().includes(selectedFilter.toLowerCase())
    );
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <BannerSection
        title="Alumni Events & Reunions"
        subtitle="Reconnect, Celebrate, and Create Lasting Memories"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <StatsCard
            icon={Calendar}
            title="Upcoming Events"
            value="24"
            trend="+12% this month"
            color="blue"
          />
          <StatsCard
            icon={Users}
            title="Total Attendees"
            value="1,247"
            trend="+28% this year"
            color="green"
          />
          <StatsCard
            icon={Star}
            title="Success Rate"
            value="98%"
            trend="+5% improvement"
            color="yellow"
          />
          <StatsCard
            icon={Trophy}
            title="Awards Given"
            value="156"
            trend="+42 this year"
            color="purple"
          />
        </div>

        {/* Enhanced Search and Filter Section */}
        <Card className="mb-12 bg-gradient-to-r from-white to-gray-50 border-2 border-gray-100">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-2xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search events by title, description, or organizer..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 text-base"
              />
            </div>
            <div className="flex gap-4">
              <Select value={selectedFilter} onValueChange={setSelectedFilter}>
                <SelectTrigger className="w-56">
                  <Filter className="h-5 w-5 mr-2 text-blue-500" />
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="reunion">Reunions</SelectItem>
                  <SelectItem value="networking">Networking</SelectItem>
                  <SelectItem value="sports">Sports</SelectItem>
                  <SelectItem value="tech">Technology</SelectItem>
                  <SelectItem value="career">Career</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="md">
                <Bell className="h-4 w-4" />
                Get Notified
              </Button>
              {/* <button className="flex items-center gap-2 px-4 py-2 bg-blue-400 text-white cursor-pointer  rounded-xl text-sm font-medium">
  <Bell className="h-5 w-5 text-white" />
  Get Notified
</button> */}
            </div>
          </div>
        </Card>

        {/* Upcoming Section Tabs */}
        <div className="mb-12">
          <div className="flex gap-2 mb-6">
            <Button variant={upcomingTab === 'events' ? 'primary' : 'outline'} onClick={() => setUpcomingTab('events')}>Upcoming Events</Button>
            <Button variant={upcomingTab === 'talks' ? 'primary' : 'outline'} onClick={() => setUpcomingTab('talks')}>Upcoming Talks</Button>
          </div>
          {upcomingTab === 'events' && (
            <>
              {/* Hero Section for Upcoming Events */}
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                  Upcoming Events
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Join us for these exciting upcoming alumni gatherings designed to inspire, connect, and celebrate our incredible community
                </p>
              </div>
              {/* Featured Event */}
              {filteredEvents.length > 0 && (
                <Card className="mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
                  <div className="absolute top-4 right-4">
                    <Badge variant="warning" className="bg-yellow-400 text-yellow-900">
                      ⭐ Featured Event
                    </Badge>
                  </div>
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-3xl font-bold mb-4">{filteredEvents[0].title}</h3>
                      <p className="text-blue-100 mb-6 text-lg">{filteredEvents[0].description}</p>
                      <div className="flex flex-wrap gap-4 mb-6">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-5 w-5" />
                          <span>{new Date(filteredEvents[0].date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-5 w-5" />
                          <span>{filteredEvents[0].location}</span>
                        </div>
                      </div>
                      <Button
                        variant="secondary"
                        size="lg"
                        onClick={() => handleRSVP(filteredEvents[0])}
                      >
                        <Zap className="h-5 w-5" />
                        RSVP Now
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="relative">
                      <img
                        src={filteredEvents[0].image}
                        alt={filteredEvents[0].title}
                        className="w-full h-64 object-cover rounded-2xl shadow-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
                    </div>
                  </div>
                </Card>
              )}
              {/* Event Cards Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredEvents.slice(1).map((event) => (
                  <Card key={event.id} className="group overflow-hidden border-2 border-gray-100 hover:border-blue-200">
                    <div className="relative overflow-hidden rounded-2xl mb-6">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-56 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <Badge variant="success" className="shadow-lg bg-white/90 backdrop-blur-sm">
                          {event.attendees}/{event.maxCapacity}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <Badge className="bg-white/90 text-gray-800 shadow-lg backdrop-blur-sm">
                          {event.price}
                        </Badge>
                      </div>
                      <div className="absolute top-4 left-4">
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4 text-white" />
                          <span className="text-white text-sm font-medium">
                            {Math.floor(Math.random() * 100) + 50} views
                          </span>
                        </div>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {event.title}
                      </CardTitle>
                      <p className="text-sm text-gray-600 flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        Organized by {event.organizer}
                      </p>
                    </CardHeader>
                    <CardContent >
                      <p className="text-gray-700 text-sm mb-4 line-clamp-3">{event.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {event.tags.map((tag, index) => (
                          <Badge key={tag} variant={index === 0 ? "primary" : "outline"} className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="space-y-4 text-sm mb-6">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="h-4 w-4 mr-3 text-blue-500" />
                          <span className="font-medium">
                            {new Date(event.date).toLocaleDateString('en-US', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="h-4 w-4 mr-3 text-blue-500" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-4 w-4 mr-3 text-green-500" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Users className="h-4 w-4 mr-3 text-purple-500" />
                          <span>{event.attendees} attending</span>
                        </div>
                      </div>
                      <div className="flex gap-2 sm:gap-3 items-center">
                        <Button
                          onClick={() => handleRSVP(event)}
                          size="md"
                          className="flex items-center justify-center gap-2 flex-1 px-4 py-2 text-sm sm:text-base font-medium"
                        >
                          <Calendar className="h-5 w-5" />
                          <span className="whitespace-nowrap">RSVP Now</span>
                        </Button>
                        <Button
                          variant="outline"
                          size="md"
                          className="flex items-center justify-center p-2 sm:p-3"
                          title="Share Event"
                        >
                          <Share2 className="h-5 w-5 text-muted-foreground" />
                        </Button>
                        <Button
                          variant="outline"
                          size="md"
                          className="flex items-center justify-center p-2 sm:p-3"
                          title="Save Event"
                        >
                          <BookmarkPlus className="h-5 w-5 text-muted-foreground" />
                        </Button>
                      </div>
                      {event.attendees >= event.maxCapacity * 0.9 && (
                        <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-4 mt-6">
                          <p className="text-red-800 text-sm font-bold text-center flex items-center justify-center gap-2">
                            Almost Full! Register Soon
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
              {filteredEvents.length === 0 && (
                <div className="text-center py-16">
                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-full w-32 h-32 mx-auto mb-8 flex items-center justify-center">
                    <Calendar className="h-16 w-16 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-600 mb-4">No Events Found</h3>
                  <p className="text-gray-500 text-lg">Try adjusting your search or filter criteria</p>
                  <Button variant="outline" className="mt-6">
                    <Filter className="h-4 w-4" />
                    Clear Filters
                  </Button>
                </div>
              )}
            </>
          )}
          {upcomingTab === 'talks' && (
            <>
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold text-blue-600 mb-6">
                  Upcoming Talks
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Join us for these engaging talks led by industry experts and thought leaders.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {upcomingTalks.map((talk) => (
                  <Card key={talk.id} className="border border-gray-200">
                    <CardHeader>
                      <div className="flex items-start space-x-4">
                        <img
                          src={talk.speakerImage}
                          alt={talk.speaker}
                          className="w-16 h-16 rounded-full object-cover border-2 border-blue-100"
                        />
                        <div className="flex-1">
                          <CardTitle className="text-lg font-semibold text-gray-900 mb-2">
                            {talk.title}
                          </CardTitle>
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">{talk.speaker}</span>
                            <br />
                            {talk.speakerTitle}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p className="text-gray-700">{talk.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {talk.topics.map((topic) => (
                            <Badge key={topic} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center text-gray-600">
                            <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                            {new Date(talk.date).toLocaleDateString('en-US', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Clock className="h-4 w-4 mr-2 text-blue-500" />
                            {talk.time} ({talk.duration})
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Users className="h-4 w-4 mr-2 text-green-500" />
                            {talk.registrations}/{talk.maxCapacity} registered
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Camera className="h-4 w-4 mr-2 text-purple-500" />
                            Live on Zoom
                          </div>
                        </div>
                        <div className="flex space-x-2 pt-4">
                          <Button
                            className="flex-1 bg-blue-600 hover:bg-blue-700"
                            onClick={() => handleRSVP(talk)}
                          >
                            RSVP Now
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => window.open(talk.zoomLink, '_blank')}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                        {talk.registrations >= talk.maxCapacity * 0.8 && (
                          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                            <p className="text-yellow-800 text-sm font-medium">
                              🔥 Almost full! Only {talk.maxCapacity - talk.registrations} spots remaining
                            </p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
        {/* Past Section Tabs */}
        <div className="mb-12">
          <div className="flex gap-2 mb-6">
            <Button variant={pastTab === 'events' ? 'primary' : 'outline'} onClick={() => setPastTab('events')}>Past Events</Button>
            <Button variant={pastTab === 'talks' ? 'primary' : 'outline'} onClick={() => setPastTab('talks')}>Past Talks</Button>
          </div>
          {pastTab === 'events' && pastEvents.length > 0 && (
            <Card className="overflow-hidden border-2 border-gray-100 relative">
              <div className="absolute top-1/2 left-0 -translate-y-1/2 z-10">
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full shadow-md bg-white/80 border-blue-200"
                  onClick={() => setPastEventIndex((i) => (i - 1 + pastEvents.length) % pastEvents.length)}
                  title="Previous Event"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
              </div>
              <div className="absolute top-1/2 right-0 -translate-y-1/2 z-10">
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full shadow-md bg-white/80 border-blue-200"
                  onClick={() => setPastEventIndex((i) => (i + 1) % pastEvents.length)}
                  title="Next Event"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
              {/* Render pastEvents[pastEventIndex] in a slider style */}
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
                  <div className="flex-1">
                    <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
                      {pastEvents[pastEventIndex].title}
                    </CardTitle>
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                      <span className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-blue-500" />
                        {new Date(pastEvents[pastEventIndex].date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-green-500" />
                        {pastEvents[pastEventIndex].location}
                      </span>
                      <span className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-purple-500" />
                        {pastEvents[pastEventIndex].attendees} attendees
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Badge variant="success" className="shadow-lg text-sm px-4 py-2">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Completed
                    </Badge>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download Photos
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Event Highlights */}
                  <div>
                    <h4 className="font-bold text-gray-900 mb-6 flex items-center text-xl">
                      <Star className="h-6 w-6 mr-3 text-yellow-500" />
                      Event Highlights
                    </h4>
                    <div className="space-y-4">
                      {pastEvents[pastEventIndex].highlights.map((highlight, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
                          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-2 flex-shrink-0">
                            <Heart className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-gray-700 text-sm font-medium leading-relaxed">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Enhanced Photo Gallery */}
                  <div>
                    <h4 className="font-bold text-gray-900 mb-6 flex items-center text-xl">
                      <Camera className="h-6 w-6 mr-3 text-blue-500" />
                      Photo Gallery
                    </h4>
                    <div className="grid grid-cols-3 gap-4">
                      {pastEvents[pastEventIndex].images.map((image, index) => (
                        <div
                          key={index}
                          className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-square"
                        >
                          <img
                            src={image}
                            alt={`${pastEvents[pastEventIndex].title} - Photo ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 flex items-center justify-center">
                            <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                              <ExternalLink className="h-5 w-5 text-gray-800" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-4 text-center">
                      Click on photos to view in full size • {pastEvents[pastEventIndex].images.length} photos available
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
          {pastTab === 'talks' && pastTalks.length > 0 && (
            <Card className="border border-gray-200 relative">
              <div className="absolute top-1/2 left-0 -translate-y-1/2 z-10">
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full shadow-md bg-white/80 border-blue-200"
                  onClick={() => setPastTalkIndex((i) => (i - 1 + pastTalks.length) % pastTalks.length)}
                  title="Previous Talk"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
              </div>
              <div className="absolute top-1/2 right-0 -translate-y-1/2 z-10">
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full shadow-md bg-white/80 border-blue-200"
                  onClick={() => setPastTalkIndex((i) => (i + 1) % pastTalks.length)}
                  title="Next Talk"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
              {/* Render pastTalks[pastTalkIndex] in a slider style */}
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <img
                    src={pastTalks[pastTalkIndex].speakerImage}
                    alt={pastTalks[pastTalkIndex].speaker}
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-100"
                  />
                  <div className="flex-1">
                    <CardTitle className="text-lg font-semibold text-gray-900 mb-2">
                      {pastTalks[pastTalkIndex].title}
                    </CardTitle>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">{pastTalks[pastTalkIndex].speaker}</span>
                      <br />
                      {pastTalks[pastTalkIndex].speakerTitle}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">{pastTalks[pastTalkIndex].description}</p>
                  <div className="flex flex-wrap gap-2">
                    {pastTalks[pastTalkIndex].topics.map((topic) => (
                      <Badge key={topic} variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                      {new Date(pastTalks[pastTalkIndex].date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2 text-blue-500" />
                      {pastTalks[pastTalkIndex].duration}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Play className="h-4 w-4 mr-2 text-red-500" />
                      {pastTalks[pastTalkIndex].views.toLocaleString()} views
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Star className="h-4 w-4 mr-2 text-yellow-500" />
                      {pastTalks[pastTalkIndex].rating}/5.0 rating
                    </div>
                  </div>
                  {pastTalks[pastTalkIndex].testimonials && (
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        Student Feedback:
                      </p>
                      <div className="space-y-2">
                        {pastTalks[pastTalkIndex].testimonials.slice(0, 1).map((testimonial, index) => (
                          <div key={index} className="text-sm">
                            <p className="text-gray-600 italic">"{testimonial.text}"</p>
                            <p className="text-gray-500 text-xs mt-1">- {testimonial.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="flex space-x-2 pt-4">
                    <Button
                      className="flex-1 bg-red-600 hover:bg-red-700"
                      onClick={() => window.open(pastTalks[pastTalkIndex].youtubeLink, '_blank')}
                    >
                      <Play className="h-4 w-4 mr-2" />
                      Watch on YouTube
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>


        {/* Propose a New Entry Section */}
        <Tabs defaultValue="propose" className="w-full">
          <TabsContent value="propose" className="mt-16 space-y-12">
            {/* Header */}
            <div className="text-center mb-10">
              <h2 className="text-5xl font-extrabold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent flex justify-center items-center gap-3">
                <Sparkles className="h-8 w-8 text-green-500" />
                Propose a New Entry
                <Sparkles className="h-8 w-8 text-blue-500" />
              </h2>
              <p className="text-gray-600 mt-2 text-lg max-w-2xl mx-auto">
                Share your idea for an alumni event or talk. Let’s build it together.
              </p>
            </div>

            {/* Card */}
            <Card className="max-w-4xl mx-auto shadow-2xl border border-blue-100 bg-white rounded-3xl px-10 py-12">
              <CardHeader className="mb-6">
                <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                  <CalendarPlus className="h-7 w-7 text-blue-600" />
                  New Entry Proposal Form
                </CardTitle>
                <CardDescription className="text-gray-500">
                  Please complete the details below. Required fields are marked with <span className="text-red-500">*</span>.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form className="space-y-10">
                  {/* Entry Type & Title */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Entry Type */}
                    <div>
                      <Label htmlFor="entryType" className="font-semibold text-gray-700 flex items-center gap-2">
                        <List className="h-5 w-5 text-purple-500" />
                        Entry Type <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        value={newEventData.entryType}
                        onValueChange={(value) => setNewEventData(prev => ({ ...prev, entryType: value }))}
                      >
                        <SelectTrigger className="mt-2 w-full border-2 border-blue-200 rounded-xl px-4 py-3 bg-white focus:ring-2 focus:ring-blue-400 text-base">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="event">Event</SelectItem>
                          <SelectItem value="talk">Talk</SelectItem>
                        </SelectContent>
                      </Select>
                      <HelperText icon={<Info />} text="Choose the type of entry you are proposing." />
                    </div>

                    {/* Title */}
                    <div>
                      <Label htmlFor="title" className="font-semibold text-gray-700 flex items-center gap-2">
                        <Edit3 className="h-5 w-5 text-green-500" />
                        Title <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="title"
                        value={newEventData.title}
                        onChange={(e) => setNewEventData(prev => ({ ...prev, title: e.target.value }))}
                        placeholder="e.g., AI in Healthcare or Alumni Sports Day"
                        className="mt-2"
                      />
                      <HelperText icon={<Type />} text="Give your entry a clear, descriptive title." />
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <Label htmlFor="description" className="font-semibold text-gray-700 flex items-center gap-2">
                      <FileText className="h-5 w-5 text-blue-400" />
                      Description <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="description"
                      value={newEventData.description}
                      onChange={(e) => setNewEventData(prev => ({ ...prev, description: e.target.value }))}
                      placeholder="Describe your idea, purpose, format, and any key highlights..."
                      rows={5}
                      className="mt-2"
                    />
                    <HelperText icon={<AlignLeft />} text="Include goals, target audience, and format." />
                  </div>

                  {/* Conditional Fields */}
                  {newEventData.entryType === 'event' && (
                    <EventFields newEventData={newEventData} setNewEventData={setNewEventData} />
                  )}
                  {newEventData.entryType === 'talk' && (
                    <TalkFields newEventData={newEventData} setNewEventData={setNewEventData} />
                  )}

                  {/* Shared Fields */}
                  <SharedFields newEventData={newEventData} setNewEventData={setNewEventData} />

                  {/* Stepper */}
                  <Stepper />

                  {/* Info Note */}
                  <InfoBox />

                  {/* What Happens Next */}
                  <ProcessSteps />

                  {/* Submit Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-end pt-6">
                    <Button variant="outline" size="lg" className="border-blue-300 text-blue-700 font-semibold flex items-center gap-2">
                      <BookmarkPlus className="h-5 w-5" />
                      Save as Draft
                    </Button>
                    <Button
                      type="button"
                      onClick={submitEventProposal}
                      variant="default"
                      size="lg"
                      className="bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700 transition flex items-center gap-2 font-semibold"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <span className="flex items-center gap-2">
                          <Loader2 className="animate-spin h-5 w-5" />
                          Submitting...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Plus className="h-5 w-5" />
                          Submit Proposal
                        </span>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

      </div>

      {/* Enhanced RSVP Dialog */}
      <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              <Calendar className="h-8 w-8 text-blue-600" />
              RSVP for "{selectedEvent?.title}"
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-8">
            {/* Event Preview Card */}
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
              <div className="flex items-center space-x-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-2xl">
                  <Calendar className="h-10 w-10 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-xl mb-2">{selectedEvent?.title}</h3>
                  <p className="text-gray-600 mb-2">
                    {selectedEvent && new Date(selectedEvent.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })} at {selectedEvent?.time}
                  </p>
                  <p className="text-blue-600 flex items-center gap-2 font-medium">
                    <MapPin className="h-4 w-4" />
                    {selectedEvent?.location}
                  </p>
                </div>
              </div>
            </Card>

            {/* RSVP Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="rsvpName">Full Name *</Label>
                <Input
                  id="rsvpName"
                  value={rsvpData.name}
                  onChange={(e) => setRsvpData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Your full name"
                />
              </div>
              <div>
                <Label htmlFor="rsvpEmail">Email Address *</Label>
                <Input
                  id="rsvpEmail"
                  type="email"
                  value={rsvpData.email}
                  onChange={(e) => setRsvpData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="graduationYear">Graduation Year *</Label>
                <Input
                  id="graduationYear"
                  value={rsvpData.graduationYear}
                  onChange={(e) => setRsvpData(prev => ({ ...prev, graduationYear: e.target.value }))}
                  placeholder="e.g., 2019"
                />
              </div>
              <div>
                <Label htmlFor="rsvpPhone">Phone Number</Label>
                <Input
                  id="rsvpPhone"
                  value={rsvpData.phone}
                  onChange={(e) => setRsvpData(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="dietaryRestrictions">Dietary Restrictions/Preferences</Label>
              <Textarea
                id="dietaryRestrictions"
                value={rsvpData.dietaryRestrictions}
                onChange={(e) => setRsvpData(prev => ({ ...prev, dietaryRestrictions: e.target.value }))}
                placeholder="Please mention any dietary restrictions, allergies, or special preferences..."
                rows={3}
              />
            </div>

            {/* Confirmation Note */}
            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200">
              <p className="text-green-800 flex items-center gap-3 font-medium">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Event details and updates will be sent to your email. Please mark your calendar!
              </p>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-end gap-4">
              <Button
                variant="outline"
                onClick={() => setSelectedEvent(null)}
                size="lg"
                className="sm:w-auto"
              >
                <X className="h-5 w-5" />
                Cancel
              </Button>
              <Button
                onClick={submitRSVP}
                size="lg"
                className="sm:w-auto"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Confirming...
                  </>
                ) : (
                  <>
                    <CheckCircle className="h-5 w-5" />
                    Confirm RSVP
                  </>
                )}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EventsReunions;

// Enhanced sample data
const upcomingEvents = [
  {
    id: 1,
    title: "Class of 2019 - 5 Year Reunion",
    date: "2024-07-15",
    time: "18:00",
    location: "Grand Ballroom, Smart Campus",
    description: "Join your classmates for an evening of networking, memories, and celebration. Featuring gourmet dinner, live entertainment, and awards ceremony.",
    organizer: "Alumni Relations Team",
    attendees: 45,
    maxCapacity: 100,
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=200&fit=crop",
    tags: ["Reunion", "Networking", "Dinner"],
    price: "Free for alumni"
  },
  {
    id: 2,
    title: "Tech Alumni Networking Meetup",
    date: "2024-06-30",
    time: "19:00",
    location: "Tech Hub, Downtown",
    description: "Connect with fellow tech alumni working in the industry. Features presentations on latest tech trends, startup showcase, and networking sessions.",
    organizer: "Sarah Johnson (CS '18)",
    attendees: 28,
    maxCapacity: 50,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop",
    tags: ["Networking", "Tech", "Career"],
    price: "$15 (includes refreshments)"
  },
  {
    id: 3,
    title: "Alumni Golf Tournament",
    date: "2024-08-10",
    time: "09:00",
    location: "Riverside Golf Club",
    description: "Annual alumni golf tournament followed by lunch and prizes. All skill levels welcome with professional instruction available.",
    organizer: "Michael Chen (ME '19)",
    attendees: 32,
    maxCapacity: 64,
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=400&h=200&fit=crop",
    tags: ["Sports", "Tournament", "Lunch"],
    price: "$50 (includes green fees & lunch)"
  },
  {
    id: 4,
    title: "Annual Alumni Gala 2024",
    date: "2024-09-20",
    time: "19:30",
    location: "Luxury Hotel Ballroom",
    description: "Our most prestigious annual event featuring awards ceremony, networking, and entertainment. Black-tie optional.",
    organizer: "Alumni Relations Team",
    attendees: 78,
    maxCapacity: 150,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=200&fit=crop",
    tags: ["Gala", "Awards", "Networking"],
    price: "$75 (includes dinner & entertainment)"
  },
  {
    id: 5,
    title: "Young Alumni Mixer",
    date: "2024-08-25",
    time: "18:30",
    location: "Rooftop Lounge, Downtown",
    description: "Casual networking event for recent graduates (last 5 years). Perfect for making connections and sharing experiences.",
    organizer: "Young Alumni Committee",
    attendees: 42,
    maxCapacity: 80,
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=200&fit=crop",
    tags: ["Networking", "Young Alumni", "Casual"],
    price: "$20 (includes appetizers & drinks)"
  }
];

const pastEvents = [
  {
    id: 6,
    title: "Annual Alumni Gala 2024",
    date: "2024-03-20",
    location: "Smart Campus Auditorium",
    attendees: 150,
    images: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=300&h=200&fit=crop"
    ],
    highlights: [
      "Outstanding Alumni Awards ceremony recognizing achievements across 5 industries",
      "Interactive networking sessions with industry leaders and entrepreneurs",
      "Successful fundraising campaign raising $50,000 for student scholarships",
      "Live entertainment featuring alumni musicians and performers",
      "Special recognition for 25-year and 50-year reunion classes"
    ]
  },
  {
    id: 7,
    title: "Tech Innovation Summit 2024",
    date: "2024-02-15",
    location: "Innovation Center, Tech District",
    attendees: 85,
    images: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=300&h=200&fit=crop"
    ],
    highlights: [
      "Keynote presentations by successful tech entrepreneur alumni",
      "Startup pitch competition with $10,000 in prizes",
      "Panel discussions on AI, blockchain, and emerging technologies",
      "Mentorship matching program connecting senior and junior alumni"
    ]
  }
];

const HelperText = ({ icon, text, className = '' }) => (
  <div className={`text-xs text-gray-500 mt-2 flex items-center gap-1 ${className}`}>{icon}{text}</div>
);

const SharedFields = ({ newEventData, setNewEventData }) => (
  <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <Label htmlFor="expectedAttendees" className="font-semibold text-gray-700 flex items-center gap-2">
          <Users className="h-5 w-5 text-green-500" /> Expected Attendees
        </Label>
        <Input
          id="expectedAttendees"
          value={newEventData.expectedAttendees}
          onChange={(e) => setNewEventData(prev => ({ ...prev, expectedAttendees: e.target.value }))}
          placeholder="e.g., 50-75 people"
          className="mt-2"
        />
        <HelperText icon={<Users className="h-4 w-4 text-green-400" />} text="Estimate the number of attendees (optional)." />
      </div>
      <div>
        <Label htmlFor="contactEmail" className="font-semibold text-gray-700 flex items-center gap-2">
          <Mail className="h-5 w-5 text-blue-500" /> Your Email <span className="text-red-500">*</span>
        </Label>
        <Input
          id="contactEmail"
          type="email"
          value={newEventData.contactEmail}
          onChange={(e) => setNewEventData(prev => ({ ...prev, contactEmail: e.target.value }))}
          placeholder="your.email@example.com"
          className="mt-2"
        />
        <HelperText icon={<Mail className="h-4 w-4 text-blue-400" />} text="We'll send you a confirmation and updates." />
      </div>
    </div>
    <div>
      <Label htmlFor="additionalNotes" className="font-semibold text-gray-700 flex items-center gap-2">
        <StickyNote className="h-5 w-5 text-yellow-500" /> Additional Notes
      </Label>
      <Textarea
        id="additionalNotes"
        value={newEventData.additionalNotes}
        onChange={(e) => setNewEventData(prev => ({ ...prev, additionalNotes: e.target.value }))}
        placeholder="Any other ideas or requests?"
        rows={4}
        className="mt-2"
      />
      <HelperText icon={<Info className="h-4 w-4 text-blue-400" />} text="Share any special requirements, requests, or context." />
    </div>
  </>
);

// Stepper component
const Stepper = () => (
  <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
    <div className="flex items-center gap-3">
      <CircleDashed className="h-6 w-6 text-blue-400" />
      <span className="font-semibold text-blue-700">Step 1: Fill the Form</span>
    </div>
    <ChevronRight className="h-5 w-5 text-gray-400 hidden md:inline-block" />
    <div className="flex items-center gap-3">
      <UserCheck className="h-6 w-6 text-green-500" />
      <span className="font-semibold text-green-700">Step 2: Review by Alumni Team</span>
    </div>
    <ChevronRight className="h-5 w-5 text-gray-400 hidden md:inline-block" />
    <div className="flex items-center gap-3">
      <CalendarCheck className="h-6 w-6 text-purple-500" />
      <span className="font-semibold text-purple-700">Step 3: Get Notified & Collaborate</span>
    </div>
  </div>
);

// InfoBox component
const InfoBox = () => (
  <div className="max-w-3xl mx-auto mb-8">
    <div className="flex items-center gap-3 bg-blue-50 border border-blue-200 rounded-xl px-6 py-4 text-blue-800 text-sm">
      <ShieldCheck className="h-5 w-5 text-blue-500" />
      <span>Your information is kept confidential and used only for alumni engagement purposes. You will receive a confirmation email after submission.</span>
    </div>
  </div>
);

// ProcessSteps component
const ProcessSteps = () => (
  <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-6 mt-4">
    <h4 className="font-semibold text-blue-800 text-lg mb-4 flex items-center gap-2">
      <ChevronRight className="h-5 w-5 text-blue-600" /> What happens next?
    </h4>
    <div className="flex flex-col md:flex-row gap-4 text-blue-700 items-center justify-between">
      <div className="flex items-center gap-2">
        <Clock className="h-5 w-5 text-blue-500" />
        <span>Reviewed in <span className="font-bold">3–5 business days</span></span>
      </div>
      <div className="flex items-center gap-2">
        <PhoneCall className="h-5 w-5 text-green-500" />
        <span>Planning call with the alumni team</span>
      </div>
      <div className="flex items-center gap-2">
        <Megaphone className="h-5 w-5 text-purple-500" />
        <span>Promotion & design help</span>
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle className="h-5 w-5 text-blue-500" />
        <span>End-to-end support</span>
      </div>
    </div>
  </Card>
);

// EventFields component
const EventFields = ({ newEventData, setNewEventData }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <Label htmlFor="preferredDate" className="font-semibold text-gray-700 flex items-center gap-2">
        <Calendar className="h-5 w-5 text-blue-500" /> Preferred Date
      </Label>
      <Input
        id="preferredDate"
        type="date"
        value={newEventData.preferredDate}
        onChange={(e) => setNewEventData(prev => ({ ...prev, preferredDate: e.target.value }))}
        className="mt-2"
      />
      <HelperText icon={<Clock className="h-4 w-4 text-blue-400" />} text="Suggest a date for your event (optional)." />
    </div>
    <div>
      <Label htmlFor="location" className="font-semibold text-gray-700 flex items-center gap-2">
        <MapPin className="h-5 w-5 text-green-500" /> Preferred Location
      </Label>
      <Input
        id="location"
        value={newEventData.location}
        onChange={(e) => setNewEventData(prev => ({ ...prev, location: e.target.value }))}
        placeholder="e.g., Smart Campus, Downtown Hotel"
        className="mt-2"
      />
      <HelperText icon={<Map className="h-4 w-4 text-green-400" />} text="Suggest a location for your event (optional)." />
    </div>
  </div>
);

// TalkFields component
const TalkFields = ({ newEventData, setNewEventData }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <Label htmlFor="speaker" className="font-semibold text-gray-700 flex items-center gap-2">
        <User className="h-5 w-5 text-purple-500" /> Speaker Name
      </Label>
      <Input
        id="speaker"
        value={newEventData.speaker || ''}
        onChange={(e) => setNewEventData(prev => ({ ...prev, speaker: e.target.value }))}
        placeholder="e.g., Dr. Michael Chen"
        className="mt-2"
      />
      <HelperText icon={<UserCheck className="h-4 w-4 text-purple-400" />} text="Name of the main speaker or guest." />
    </div>
    <div>
      <Label htmlFor="speakerTitle" className="font-semibold text-gray-700 flex items-center gap-2">
        <Briefcase className="h-5 w-5 text-blue-500" /> Speaker Title/Role
      </Label>
      <Input
        id="speakerTitle"
        value={newEventData.speakerTitle || ''}
        onChange={(e) => setNewEventData(prev => ({ ...prev, speakerTitle: e.target.value }))}
        placeholder="e.g., Data Science Lead at Johnson & Johnson"
        className="mt-2"
      />
      <HelperText icon={<Info className="h-4 w-4 text-blue-400" />} text="Speaker's professional title or role." />
    </div>
  </div>
);
