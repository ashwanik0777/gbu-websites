
import { Link } from 'react-router-dom';
import Navbar from '../../components/home/Navbar';
// Button component
const Button = ({ children, className = '', variant = 'default', size = 'md', ...props }) => {
  const base =
    'inline-flex items-center justify-center rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200';
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
  };
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  return (
    <button
      className={`${base} ${variants[variant] || ''} ${sizes[size] || ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Card components
const Card = ({ children, className = '', ...props }) => (
  <div
    className={`bg-white rounded-2xl shadow-sm ${className}`}
    {...props}
  >
    {children}
  </div>
);

const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`p-6 pb-0 ${className}`} {...props}>
    {children}
  </div>
);

const CardTitle = ({ children, className = '', ...props }) => (
  <h3 className={`text-xl font-bold ${className}`} {...props}>
    {children}
  </h3>
);

const CardContent = ({ children, className = '', ...props }) => (
  <div className={`p-6 ${className}`} {...props}>
    {children}
  </div>
);

// Badge component
const Badge = ({ children, className = '', variant = 'default', ...props }) => {
  const base = 'inline-block rounded-full px-3 py-1 font-semibold text-xs transition-colors duration-200';
  const variants = {
    default: 'bg-blue-100 text-blue-700',
    secondary: 'bg-gray-200 text-gray-700',
    outline: 'border border-gray-300 text-gray-700 bg-white',
  };
  return (
    <span className={`${base} ${variants[variant] || ''} ${className}`} {...props}>
      {children}
    </span>
  );
};
import { Users, FileText, Calendar, UserCheck, Star, ArrowRight, Briefcase, MessageSquare, Trophy, GraduationCap, MapPin, Building, Phone, Mail, Play, Camera } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">Smart Campus</h1>
          <p className="text-xl md:text-3xl mb-12 max-w-4xl mx-auto">
            Connecting Students, Alumni, and Future Leaders Through Innovation and Excellence
          </p>
          <div className="flex justify-center space-x-6">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-6 py-3 text-lg">
              2000+ Alumni
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-6 py-3 text-lg">
              50+ Companies
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-6 py-3 text-lg">
              Global Network
            </Badge>
          </div>
        </div>
      </div>

      {/* Alumni Portal Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Alumni Portal</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with our thriving community of graduates. Get mentorship, career guidance, and build lasting professional relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow duration-300 border border-gray-200 group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Alumni Network</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Browse and connect with alumni across industries. Find mentors, get career advice, and expand your professional network.
                </p>
                <Link to="/alumni-network">
                  <Button className="bg-blue-600 hover:bg-blue-700 group">
                    Explore Network
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border border-gray-200 group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <FileText className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Registration</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Join our verified alumni directory. Register to help current students and connect with fellow graduates.
                </p>
                <Link to="/alumni-registration">
                  <Button className="bg-green-600 hover:bg-green-700 group">
                    Join Directory
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border border-gray-200 group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <Calendar className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Alumni Talks</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Attend exclusive talks by successful alumni. Learn from industry experts and get career insights.
                </p>
                <Link to="/alumni-talks">
                  <Button className="bg-purple-600 hover:bg-purple-700 group">
                    View Talks
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border border-gray-200 group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                  <UserCheck className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Events & Reunions</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Join alumni gatherings, reunions, and networking events. Reconnect with classmates and make new connections.
                </p>
                <Link to="/events-reunions">
                  <Button className="bg-yellow-600 hover:bg-yellow-700 group">
                    See Events
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Features Preview Section */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">What You Can Do</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 text-blue-600 mr-3" />
                  <h4 className="font-semibold text-gray-900">Find Alumni</h4>
                </div>
                <p className="text-gray-600 text-sm mb-4">Search by company, location, batch, or skills to find the right connections.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">Google</Badge>
                  <Badge variant="secondary" className="text-xs">2019 Batch</Badge>
                  <Badge variant="secondary" className="text-xs">Mumbai</Badge>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <Briefcase className="h-6 w-6 text-green-600 mr-3" />
                  <h4 className="font-semibold text-gray-900">Get Referrals</h4>
                </div>
                <p className="text-gray-600 text-sm mb-4">Request referrals from alumni working at your dream companies.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">Available</Badge>
                  <Badge variant="secondary" className="text-xs">Quick Response</Badge>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <FileText className="h-6 w-6 text-purple-600 mr-3" />
                  <h4 className="font-semibold text-gray-900">Resume Review</h4>
                </div>
                <p className="text-gray-600 text-sm mb-4">Get your resume reviewed by industry professionals.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">Expert Review</Badge>
                  <Badge variant="secondary" className="text-xs">Free Service</Badge>
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <MessageSquare className="h-6 w-6 text-yellow-600 mr-3" />
                  <h4 className="font-semibold text-gray-900">Mentorship</h4>
                </div>
                <p className="text-gray-600 text-sm mb-4">Connect with experienced mentors for career guidance.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">1-on-1 Sessions</Badge>
                  <Badge variant="secondary" className="text-xs">Career Guidance</Badge>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <Play className="h-6 w-6 text-red-600 mr-3" />
                  <h4 className="font-semibold text-gray-900">Exclusive Talks</h4>
                </div>
                <p className="text-gray-600 text-sm mb-4">Attend talks by successful alumni sharing their journey.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">Live Sessions</Badge>
                  <Badge variant="secondary" className="text-xs">Recordings</Badge>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-indigo-600 mr-3" />
                  <h4 className="font-semibold text-gray-900">Networking Events</h4>
                </div>
                <p className="text-gray-600 text-sm mb-4">Join reunions, meetups, and professional networking events.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">Monthly Events</Badge>
                  <Badge variant="secondary" className="text-xs">Global Network</Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Photo Gallery Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Community in Action</h3>
              <p className="text-xl text-gray-600">Moments from our events, talks, and networking sessions</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop&crop=faces" 
                  alt="Alumni networking event"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h4 className="font-semibold mb-1">Annual Reunion 2023</h4>
                    <p className="text-sm opacity-90">500+ Alumni Attended</p>
                  </div>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop&crop=faces" 
                  alt="Tech talk session"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h4 className="font-semibold mb-1">Tech Talk Series</h4>
                    <p className="text-sm opacity-90">Industry Expert Sessions</p>
                  </div>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&crop=faces" 
                  alt="Mentorship program"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h4 className="font-semibold mb-1">Mentorship Program</h4>
                    <p className="text-sm opacity-90">1-on-1 Career Guidance</p>
                  </div>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop&crop=faces" 
                  alt="Virtual networking"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h4 className="font-semibold mb-1">Virtual Meetups</h4>
                    <p className="text-sm opacity-90">Global Connections</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link to="/events-reunions">
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                  <Camera className="mr-2 h-4 w-4" />
                  View More Photos
                </Button>
              </Link>
            </div>
          </div>

          {/* Success Stories Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Success Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Sarah Chen</h4>
                      <p className="text-sm text-gray-600">Class of 2018, Software Engineer at Google</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    "The alumni network helped me land my dream job at Google. The referral from a senior alumnus made all the difference!"
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <GraduationCap className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Raj Patel</h4>
                      <p className="text-sm text-gray-600">Class of 2020, Product Manager at Microsoft</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    "The mentorship I received through this platform was invaluable. It helped me transition from engineering to product management."
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <Star className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Priya Sharma</h4>
                      <p className="text-sm text-gray-600">Class of 2019, Startup Founder</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    "I found my co-founder through the alumni network! We're now running a successful EdTech startup together."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Alumni Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-3xl font-bold text-blue-600">95%</h4>
                <p className="text-gray-600">Employment Rate</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-3xl font-bold text-green-600">500+</h4>
                <p className="text-gray-600">Mentorship Sessions</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-3xl font-bold text-purple-600">4.9/5</h4>
                <p className="text-gray-600">Average Rating</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-3xl font-bold text-yellow-600">200+</h4>
                <p className="text-gray-600">Success Stories</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Connect?</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're a current student seeking guidance or an alumni wanting to give back, our portal is your gateway to meaningful connections.
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/alumni-directory">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg">
                  Browse Alumni Directory
                </Button>
              </Link>
              <Link to="/alumni-registration">
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                  Register as Alumni
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Smart Campus</h3>
              <p className="text-gray-400">
                Building bridges between students, alumni, and the future of education.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Alumni Portal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/alumni-network" className="hover:text-white transition-colors">Alumni Network</Link></li>
                <li><Link to="/alumni-directory" className="hover:text-white transition-colors">Directory</Link></li>
                <li><Link to="/alumni-talks" className="hover:text-white transition-colors">Talks & Events</Link></li>
                <li><Link to="/alumni-registration" className="hover:text-white transition-colors">Registration</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Smart Campus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
