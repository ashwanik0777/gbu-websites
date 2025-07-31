
import { useState } from 'react';
import Navbar from '../../components/home/Navbar';

export const Button = ({ children, className = '', variant, size, ...props }) => {
  let base =
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  let color =
    variant === 'outline'
      ? 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
      : 'bg-blue-600 text-white hover:bg-blue-700';
  let padding =
    size === 'sm'
      ? 'px-3 py-1.5 text-sm'
      : size === 'lg'
      ? 'px-6 py-3 text-lg'
      : 'px-4 py-2';
  return (
    <button className={`${base} ${color} ${padding} ${className}`} {...props}>
      {children}
    </button>
  );
};

export const Input = ({ className = '', ...props }) => (
  <input
    className={`block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${className}`}
    {...props}
  />
);

export const Label = ({ children, htmlFor, className = '', ...props }) => (
  <label
    htmlFor={htmlFor}
    className={`block text-sm font-medium text-gray-700 mb-1 ${className}`}
    {...props}
  >
    {children}
  </label>
);

export const Badge = ({ children, className = '', variant, ...props }) => {
  let base =
    'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold border';
  let color =
    variant === 'outline'
      ? 'bg-white text-gray-700 border-gray-300'
      : 'bg-blue-600 text-white border-transparent';
  return (
    <span className={`${base} ${color} ${className}`} {...props}>
      {children}
    </span>
  );
};

export const Card = ({ children, className = '', ...props }) => (
  <div
    className={`bg-white rounded-xl shadow-sm overflow-hidden ${className}`}
    {...props}
  >
    {children}
  </div>
);

export const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`p-5 border-b border-gray-100 ${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle = ({ children, className = '', ...props }) => (
  <h3 className={`text-lg font-semibold ${className}`} {...props}>
    {children}
  </h3>
);

export const CardContent = ({ children, className = '', ...props }) => (
  <div className={`p-5 ${className}`} {...props}>
    {children}
  </div>
);

// Tabs
export const Tabs = ({ children, defaultValue, className = '' }) => {
  const [value, setValue] = useState(defaultValue);
  // Clone children and inject value/setValue
  return (
    <div className={className}>
      {React.Children.map(children, (child) =>
        child.type.displayName === 'TabsList'
          ? React.cloneElement(child, { value, setValue })
          : React.cloneElement(child, { value })
      )}
    </div>
  );
};
export const TabsList = ({ children, value, setValue, className = '' }) => (
  <div className={className}>
    {React.Children.map(children, (child) =>
      React.cloneElement(child, { value, setValue })
    )}
  </div>
);
TabsList.displayName = 'TabsList';

export const TabsTrigger = ({
  children,
  value: currentValue,
  setValue,
  value,
  className = '',
  ...props
}) => (
  <button
    className={`px-4 py-2 rounded-t-md font-medium transition-colors ${
      currentValue === value
        ? 'bg-white text-blue-600 shadow'
        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
    } ${className}`}
    onClick={() => setValue(value)}
    {...props}
    type="button"
  >
    {children}
  </button>
);
TabsTrigger.displayName = 'TabsTrigger';

export const TabsContent = ({ children, value: currentValue, value, className = '', ...props }) =>
  currentValue === value ? (
    <div className={className} {...props}>
      {children}
    </div>
  ) : null;

// Dialog
import { Fragment, useRef, useEffect } from 'react';
export const Dialog = ({ open, onOpenChange, children }) => {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => (document.body.style.overflow = '');
  }, [open]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { onOpenChange })
      )}
    </div>
  );
};

export const DialogContent = ({ children, className = '', onOpenChange }) => {
  const ref = useRef();
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onOpenChange(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [onOpenChange]);
  return (
    <div
      ref={ref}
      className={`bg-white rounded-lg shadow-xl p-6 w-full max-w-lg ${className}`}
    >
      {children}
    </div>
  );
};

export const DialogHeader = ({ children, className = '', ...props }) => (
  <div className={`mb-4 ${className}`} {...props}>
    {children}
  </div>
);

export const DialogTitle = ({ children, className = '', ...props }) => (
  <h2 className={`text-xl font-bold text-gray-900 ${className}`} {...props}>
    {children}
  </h2>
);

export const DialogTrigger = ({ children, ...props }) => (
  <Fragment>{children}</Fragment>
);
import { Calendar, Clock, Users, Video, ExternalLink, Play, Star, MessageSquare } from 'lucide-react';

// Sample talks data
export const upcomingTalks = [
  {
    id: 1,
    title: "Breaking into Tech: A Product Manager's Journey",
    speaker: "Sarah Johnson",
    speakerImage: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
    speakerTitle: "Senior PM at Google",
    date: "2024-06-25",
    time: "18:00",
    duration: "60 minutes",
    description: "Learn about transitioning from engineering to product management, essential skills, and career growth strategies in tech.",
    zoomLink: "https://zoom.us/j/123456789",
    registrations: 45,
    maxCapacity: 100,
    topics: ["Product Management", "Career Transition", "Tech Industry"]
  },
  {
    id: 2,
    title: "Data Science in Healthcare: Real-world Applications",
    speaker: "Dr. Michael Chen",
    speakerImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    speakerTitle: "Data Science Lead at Johnson & Johnson",
    date: "2024-07-02",
    time: "19:00",
    duration: "75 minutes",
    description: "Explore how data science is revolutionizing healthcare, from drug discovery to personalized treatment plans.",
    zoomLink: "https://zoom.us/j/987654321",
    registrations: 38,
    maxCapacity: 80,
    topics: ["Data Science", "Healthcare", "Machine Learning"]
  }
];

export const pastTalks = [
  {
    id: 3,
    title: "Entrepreneurship 101: From Idea to IPO",
    speaker: "Priya Sharma",
    speakerImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    speakerTitle: "Founder & CEO at TechStart",
    date: "2024-05-15",
    duration: "90 minutes",
    youtubeLink: "https://youtube.com/watch?v=example1",
    views: 1250,
    rating: 4.8,
    description: "A comprehensive guide to starting your own tech company, from initial concept to going public.",
    topics: ["Entrepreneurship", "Startups", "Funding"],
    testimonials: [
      { name: "Alex Kumar", text: "Incredible insights! Changed my perspective on entrepreneurship completely." },
      { name: "Maria Garcia", text: "Practical advice that I'm already implementing in my startup idea." }
    ]
  },
  {
    id: 4,
    title: "AI and Machine Learning: The Future is Now",
    speaker: "David Rodriguez",
    speakerImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    speakerTitle: "ML Engineer at OpenAI",
    date: "2024-04-20",
    duration: "85 minutes",
    youtubeLink: "https://youtube.com/watch?v=example2",
    views: 2100,
    rating: 4.9,
    description: "Deep dive into current AI trends, practical applications, and career opportunities in machine learning.",
    topics: ["Artificial Intelligence", "Machine Learning", "Career Growth"],
    testimonials: [
      { name: "Lisa Wang", text: "Best technical talk I've attended. Great balance of theory and practice." },
      { name: "John Smith", text: "Inspired me to pursue ML specialization in my final year." }
    ]
  }
];

const AlumniTalks = () => {
  const [rsvpData, setRsvpData] = useState({
    name: '',
    email: '',
    studentId: '',
    year: ''
  });
  const [selectedTalk, setSelectedTalk] = useState<any>(null);

  const handleRSVP = (talk) => {
    setSelectedTalk(talk);
  };

  const submitRSVP = () => {
    if (!rsvpData.name || !rsvpData.email) {
      toast({
        title: "Missing information",
        description: "Please fill in your name and email.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "RSVP Confirmed!",
      description: `You're registered for "${selectedTalk.title}". Zoom link will be sent to your email.`,
    });

    setSelectedTalk(null);
    setRsvpData({ name: '', email: '', studentId: '', year: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Alumni Talks</h1>
          <p className="text-xl md:text-2xl mb-8">
            Learn from industry experts and successful alumni. Get insights into career paths, industry trends, and professional growth.
          </p>
          <div className="flex justify-center space-x-4">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-lg">
              Monthly Sessions
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-lg">
              Interactive Q&A
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-lg">
              Recorded Sessions
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
            <TabsTrigger value="upcoming" className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              Upcoming Talks
            </TabsTrigger>
            <TabsTrigger value="past" className="flex items-center">
              <Video className="h-4 w-4 mr-2" />
              Past Recordings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Upcoming Sessions</h2>
              <p className="text-gray-600">Register now to secure your spot in these exclusive sessions</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {upcomingTalks.map((talk) => (
                <Card key={talk.id} className="hover:shadow-lg transition-shadow duration-300 border border-gray-200">
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
                          <Video className="h-4 w-4 mr-2 text-purple-500" />
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
          </TabsContent>

          <TabsContent value="past" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Past Talk Recordings</h2>
              <p className="text-gray-600">Watch recorded sessions and learn from industry experts</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {pastTalks.map((talk) => (
                <Card key={talk.id} className="hover:shadow-lg transition-shadow duration-300 border border-gray-200">
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
                          <Badge key={topic} variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                            {topic}
                          </Badge>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                          {new Date(talk.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="h-4 w-4 mr-2 text-blue-500" />
                          {talk.duration}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Play className="h-4 w-4 mr-2 text-red-500" />
                          {talk.views.toLocaleString()} views
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Star className="h-4 w-4 mr-2 text-yellow-500" />
                          {talk.rating}/5.0 rating
                        </div>
                      </div>

                      {talk.testimonials && (
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            Student Feedback:
                          </p>
                          <div className="space-y-2">
                            {talk.testimonials.slice(0, 1).map((testimonial, index) => (
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
                          onClick={() => window.open(talk.youtubeLink, '_blank')}
                        >
                          <Play className="h-4 w-4 mr-2" />
                          Watch on YouTube
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* RSVP Dialog */}
      <Dialog open={!!selectedTalk} onOpenChange={() => setSelectedTalk(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              RSVP for "{selectedTalk?.title}"
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
              <img
                src={selectedTalk?.speakerImage}
                alt={selectedTalk?.speaker}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-gray-900">{selectedTalk?.speaker}</p>
                <p className="text-sm text-gray-600">{selectedTalk?.speakerTitle}</p>
                <p className="text-xs text-blue-600">
                  {selectedTalk && new Date(selectedTalk.date).toLocaleDateString()} at {selectedTalk?.time}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={rsvpData.name}
                  onChange={(e) => setRsvpData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Your full name"
                />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={rsvpData.email}
                  onChange={(e) => setRsvpData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="studentId">Student ID</Label>
                <Input
                  id="studentId"
                  value={rsvpData.studentId}
                  onChange={(e) => setRsvpData(prev => ({ ...prev, studentId: e.target.value }))}
                  placeholder="SC2024001"
                />
              </div>
              <div>
                <Label htmlFor="year">Academic Year</Label>
                <Input
                  id="year"
                  value={rsvpData.year}
                  onChange={(e) => setRsvpData(prev => ({ ...prev, year: e.target.value }))}
                  placeholder="e.g., Final Year"
                />
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="text-green-800 text-sm">
                📧 Zoom meeting link and session materials will be sent to your email 1 hour before the session.
              </p>
            </div>

            <div className="flex justify-end space-x-2">
              <Button 
                variant="outline" 
                onClick={() => setSelectedTalk(null)}
              >
                Cancel
              </Button>
              <Button 
                onClick={submitRSVP}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Confirm RSVP
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AlumniTalks;
