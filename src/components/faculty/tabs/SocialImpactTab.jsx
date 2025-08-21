
import React from 'react';
// Card Component
const Card = ({ className = '', children }) => (
  <div className={`rounded-xl bg-white border border-gray-200 border-solid shadow-sm${className}`}>{children}</div>
);

const CardHeader = ({ children }) => (
  <div className="px-6 pt-6 pb-2 border-b border-gray-100 border-solid">{children}</div>
);

const CardTitle = ({ className = '', children }) => (
  <h2 className={`font-bold ${className}`}>{children}</h2>
);

const CardContent = ({ children }) => (
  <div className="px-6 py-4">{children}</div>
);

// Badge Component
const Badge = ({ className = '', children }) => (
  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide shadow-sm ${className}`}>
    {children}
  </span>
);

// Button Component
const Button = ({ variant = "solid", size = "md", className = '', children, ...props }) => {
  const base = "inline-flex items-center justify-center font-medium rounded-md transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    solid: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    outline: "border border-blue-600 text-blue-600 bg-white hover:bg-blue-50 focus:ring-blue-500"
  };
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base"
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
import { Heart, Users, Calendar, MapPin, TreePine, GraduationCap, Lightbulb, Camera } from 'lucide-react';

export const SocialImpactTab = () => {
  const socialActivities = [
    {
      title: "Digital Literacy Program for Rural Communities",
      organization: "NSS Unit, Gautam Buddha University",
      duration: "2023 - Present",
      type: "community-outreach",
      beneficiaries: "500+ villagers",
      location: "Villages around Greater Noida",
      description: "Leading digital literacy initiatives to bridge the digital divide by teaching basic computer skills, internet usage, and digital financial services to rural communities.",
      impact: [
        "Trained 500+ villagers in basic computer operations",
        "Helped 200+ families access government digital services",
        "Established 5 digital learning centers",
        "Created employment opportunities for 50+ youth"
      ],
      images: 3
    },
    {
      title: "Cybersecurity Awareness Campaign",
      organization: "Cyber Crime Cell, UP Police",
      duration: "2022 - Present",
      type: "awareness",
      beneficiaries: "10,000+ citizens",
      location: "Uttar Pradesh",
      description: "Conducting awareness sessions on cybersecurity, online fraud prevention, and safe internet practices for students, senior citizens, and small business owners.",
      impact: [
        "Conducted 50+ awareness sessions",
        "Reached 10,000+ participants across UP",
        "Developed multilingual awareness materials",
        "Prevented potential cyber fraud cases"
      ],
      images: 5
    },
    {
      title: "Tree Plantation & Environmental Conservation",
      organization: "Green Campus Initiative",
      duration: "2021 - Present",
      type: "environmental",
      beneficiaries: "University Community",
      location: "Gautam Buddha University Campus",
      description: "Leading environmental conservation efforts including tree plantation drives, waste management initiatives, and promoting sustainable practices on campus.",
      impact: [
        "Planted 1000+ trees on campus",
        "Implemented waste segregation system",
        "Reduced campus plastic usage by 60%",
        "Created awareness among 5000+ students"
      ],
      images: 4
    },
    {
      title: "Free Coding Bootcamp for Underprivileged Students",
      organization: "Education for All Initiative",
      duration: "2022 - 2023",
      type: "education",
      beneficiaries: "200+ students",
      location: "Delhi NCR",
      description: "Organizing free coding workshops and bootcamps for underprivileged students to provide them with technical skills and career opportunities in IT sector.",
      impact: [
        "Trained 200+ underprivileged students",
        "80% placement rate in IT companies",
        "Partnered with 10+ companies for placements",
        "Provided scholarships to 50 students"
      ],
      images: 6
    },
    {
      title: "COVID-19 Relief & Digital Health Solutions",
      organization: "University Health Committee",
      duration: "2020 - 2022",
      type: "healthcare",
      beneficiaries: "2000+ individuals",
      location: "Greater Noida & surrounding areas",
      description: "Developed digital solutions for health monitoring during COVID-19 and organized relief activities for affected families in the community.",
      impact: [
        "Developed contactless health monitoring app",
        "Distributed relief materials to 500+ families",
        "Organized virtual health consultations",
        "Created COVID-19 awareness content"
      ],
      images: 2
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'community-outreach': return 'bg-blue-100 text-blue-800';
      case 'awareness': return 'bg-orange-100 text-orange-800';
      case 'environmental': return 'bg-green-100 text-green-800';
      case 'education': return 'bg-purple-100 text-purple-800';
      case 'healthcare': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'community-outreach': return Users;
      case 'awareness': return Lightbulb;
      case 'environmental': return TreePine;
      case 'education': return GraduationCap;
      case 'healthcare': return Heart;
      default: return Heart;
    }
  };

  const formatType = (type) => {
    return type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <div className="space-y-6">
      {/* Social Impact Overview */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-900 flex items-center">
            <Heart className="w-6 h-6 mr-2 text-blue-600" />
            Social Impact & Community Service
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 text-center border border-blue-200">
              <div className="text-2xl font-bold text-blue-600">{socialActivities.length}</div>
              <div className="text-sm text-blue-700">Active Initiatives</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 text-center border border-green-200 border-solid">
              <div className="text-2xl font-bold text-green-600">13,000+</div>
              <div className="text-sm text-green-700">Lives Impacted</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 text-center border border-purple-200 border-solid">
              <div className="text-2xl font-bold text-purple-600">4+</div>
              <div className="text-sm text-purple-700">Years of Service</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 text-center border border-orange-200 border-solid">
              <div className="text-2xl font-bold text-orange-600">5</div>
              <div className="text-sm text-orange-700">Focus Areas</div>
            </div>
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            Dr. Kumar is deeply committed to creating positive social impact through technology and education. 
            His initiatives focus on bridging the digital divide, environmental conservation, and community 
            empowerment, demonstrating the transformative power of academic-community partnerships.
          </p>
        </CardContent>
      </Card>

      {/* Social Activities */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">Community Initiatives</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {socialActivities.map((activity, index) => {
              const IconComponent = getTypeIcon(activity.type);
              return (
                <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-6 border border-gray-200 border-solid hover:shadow-md transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="bg-blue-600 text-white p-2 rounded-lg">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{activity.title}</h3>
                          <p className="text-blue-600 font-medium mb-2">{activity.organization}</p>
                          <p className="text-gray-700 leading-relaxed mb-3">{activity.description}</p>
                        </div>
                      </div>
                      
                      <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                        <div className="space-y-1">
                          <p className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span className="font-medium">Duration:</span> {activity.duration}
                          </p>
                          <p className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span className="font-medium">Location:</span> {activity.location}
                          </p>
                        </div>
                        <div className="space-y-1">
                          <p className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            <span className="font-medium">Beneficiaries:</span> {activity.beneficiaries}
                          </p>
                          <p className="flex items-center">
                            <Camera className="w-4 h-4 mr-1" />
                            <span className="font-medium">Photos:</span> {activity.images} available
                          </p>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 mb-2">Key Impact:</h4>
                        <ul className="space-y-1">
                          {activity.impact.map((impact, idx) => (
                            <li key={idx} className="text-sm text-gray-700 flex items-start">
                              <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {impact}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Camera className="w-4 h-4 mr-1" />
                          View Photos
                        </Button>
                        <Button variant="outline" size="sm">
                          Learn More
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex-shrink-0">
                      <Badge className={getTypeColor(activity.type)}>
                        {formatType(activity.type)}
                      </Badge>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Impact Summary */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">Social Impact Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Community Outreach",
                description: "Digital literacy and skill development programs",
                metric: "500+ villagers trained",
                color: "blue"
              },
              {
                title: "Environmental Conservation",
                description: "Tree plantation and sustainability initiatives",
                metric: "1000+ trees planted",
                color: "green"
              },
              {
                title: "Education Access",
                description: "Free coding bootcamps for underprivileged students",
                metric: "200+ students trained",
                color: "purple"
              },
              {
                title: "Cybersecurity Awareness",
                description: "Public awareness campaigns on digital safety",
                metric: "10,000+ people reached",
                color: "orange"
              },
              {
                title: "Healthcare Support",
                description: "Digital health solutions during COVID-19",
                metric: "2000+ individuals helped",
                color: "red"
              },
              {
                title: "Technology for Good",
                description: "Developing solutions for social challenges",
                metric: "5 mobile applications",
                color: "indigo"
              }
            ].map((impact, index) => (
              <div key={index} className={`bg-gradient-to-br from-${impact.color}-50 to-${impact.color}-100 rounded-lg p-4 border border-${impact.color}-200`}>
                <h3 className={`font-semibold text-${impact.color}-900 mb-2`}>{impact.title}</h3>
                <p className={`text-sm text-${impact.color}-700 mb-3`}>{impact.description}</p>
                <div className={`text-lg font-bold text-${impact.color}-600`}>{impact.metric}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
