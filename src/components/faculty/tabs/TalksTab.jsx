
import React from 'react';
// Minimal UI components with Tailwind CSS, matching usage and effects

 export const Card = ({ className = "", children, ...props }) => (
   <div className={`bg-white rounded-xl border border-gray-200 border-solid shadow-sm${className}`} {...props}>
     {children}
   </div>
 );
 
 export const CardHeader = ({ className = "", children, ...props }) => (
   <div className={`px-6 pt-6 pb-2  `} {...props}>
     {children}
   </div>
 );
 
 export const CardTitle = ({ className = "", children, ...props }) => (
   <h2 className={`font-bold ${className}`} {...props}>
     {children}
   </h2>
 );
 
 export const CardContent = ({ className = "", children, ...props }) => (
   <div className={`px-6 py-4 ${className}`} {...props}>
     {children}
   </div>
 );

export const Badge = ({
  className = '',
  variant = 'solid',
  children,
  ...props
}) => {
  const base =
    'inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium transition-colors';
  const variants = {
    solid: 'bg-gray-100 text-gray-800',
    outline: 'border border-gray-300 text-gray-700 bg-white',
  };
  return (
    <span className={`${base} ${variants[variant] || ''} ${className}`} {...props}>
      {children}
    </span>
  );
};

export const Button = ({
  className = '',
  variant = 'outline',
  size = 'md',
  children,
  ...props
}) => {
  const base =
    'inline-flex items-center font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors';
  const variants = {
    outline:
      'border border-gray-300 bg-white text-gray-800 hover:bg-gray-50 active:bg-gray-100',
    solid:
      'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
  };
  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };
  return (
    <button
      type="button"
      className={`${base} ${variants[variant] || ''} ${sizes[size] || ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
import { Mic, Calendar, MapPin, Users, ExternalLink, Play } from 'lucide-react';

export const TalksTab = () => {
  const invitedTalks = [
    {
      title: "AI-Driven Cybersecurity: Challenges and Opportunities",
      event: "International Conference on Cybersecurity",
      date: "March 15, 2024",
      venue: "Convention Center, New Delhi",
      host: "IEEE Computer Society",
      role: "Keynote Speaker",
      audience: "500+ Researchers and Industry Professionals",
      type: "keynote",
      hasRecording: true,
      hasSlides: true,
      description: "Comprehensive overview of how artificial intelligence is transforming cybersecurity landscape, covering latest research trends and real-world applications."
    },
    {
      title: "Machine Learning for IoT Security: A Practical Approach",
      event: "National Workshop on IoT Security",
      date: "January 20, 2024",
      venue: "IIT Delhi",
      host: "Department of Computer Science, IIT Delhi",
      role: "Invited Speaker",
      audience: "200+ Faculty and Students",
      type: "invited",
      hasRecording: false,
      hasSlides: true,
      description: "Hands-on workshop covering practical implementation of ML algorithms for securing IoT devices and networks."
    },
    {
      title: "Federated Learning: Privacy-Preserving AI",
      event: "Tech Talk Series",
      date: "November 10, 2023",
      venue: "Microsoft India Development Center",
      host: "Microsoft Research India",
      role: "Guest Lecturer",
      audience: "100+ Researchers and Engineers",
      type: "guest-lecture",
      hasRecording: true,
      hasSlides: true,
      description: "Deep dive into federated learning techniques and their applications in maintaining privacy while training machine learning models."
    },
    {
      title: "Future of Recommendation Systems in Education",
      event: "EdTech Innovation Summit",
      date: "September 5, 2023",
      venue: "Bangalore International Exhibition Centre",
      host: "EdTech India Association",
      role: "Panel Discussion",
      audience: "300+ EdTech Professionals",
      type: "panel",
      hasRecording: true,
      hasSlides: false,
      description: "Panel discussion on emerging trends in educational technology and the role of AI in personalized learning."
    },
    {
      title: "Ethical AI and Algorithmic Fairness",
      event: "National Conference on AI Ethics",
      date: "July 18, 2023",
      venue: "IISC Bangalore",
      host: "Indian Institute of Science",
      role: "Invited Speaker",
      audience: "250+ Academicians and Policymakers",
      type: "invited",
      hasRecording: false,
      hasSlides: true,
      description: "Discussion on ethical considerations in AI development and the importance of algorithmic fairness in real-world applications."
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'keynote': return 'bg-purple-100 text-purple-800';
      case 'invited': return 'bg-blue-100 text-blue-800';
      case 'guest-lecture': return 'bg-green-100 text-green-800';
      case 'panel': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatType = (type) => {
    switch (type) {
      case 'keynote': return 'Keynote';
      case 'invited': return 'Invited Talk';
      case 'guest-lecture': return 'Guest Lecture';
      case 'panel': return 'Panel Discussion';
      default: return type;
    }
  };

  return (
    <div className="space-y-6 bg-gray-50">
      {/* Talks Overview */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        
         <CardHeader>
          <CardTitle className="text-2xl text-gray-900 flex items-center">
            <Mic className="w-6 h-6 mr-2 text-blue-600" />
            Invited Talks & Presentations
          </CardTitle>
        </CardHeader>
        
        <CardContent>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 text-center border border-blue-200">
              <div className="text-2xl font-bold text-blue-600">{invitedTalks.length}</div>
              <div className="text-sm text-blue-700">Total Talks</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 text-center border border-purple-200 border-solid">
              <div className="text-2xl font-bold text-purple-600">
                {invitedTalks.filter(talk => talk.type === 'keynote').length}
              </div>
              <div className="text-sm text-purple-700">Keynote Speeches</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 text-center border border-green-200 border-solid">
              <div className="text-2xl font-bold text-green-600">
                {invitedTalks.filter(talk => talk.hasRecording).length}
              </div>
              <div className="text-sm text-green-700">Recorded Talks</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 text-center border border-orange-200 border-solid">
              <div className="text-2xl font-bold text-orange-600">2024</div>
              <div className="text-sm text-orange-700">Latest Year</div>
            </div>
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            Dr. Kumar is a sought-after speaker in the fields of artificial intelligence, cybersecurity, 
            and machine learning. His presentations combine cutting-edge research insights with practical 
            applications, making complex topics accessible to diverse audiences.
          </p>
        </CardContent>
      </Card>

      {/* Talk Details */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">Speaking Engagements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {invitedTalks.map((talk, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-6 border border-gray-200 border-solid hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{talk.title}</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">{talk.description}</p>
                    
                    <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                      <div className="space-y-2">
                        <p className="font-medium text-blue-600">{talk.event}</p>
                        <p className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {talk.date}
                        </p>
                        <p className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {talk.venue}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <p><span className="font-medium">Host:</span> {talk.host}</p>
                        <p><span className="font-medium">Role:</span> {talk.role}</p>
                        <p className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {talk.audience}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 mb-4">
                      {talk.hasSlides && (
                        <Button variant="outline" size="sm">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          View Slides
                        </Button>
                      )}
                      {talk.hasRecording && (
                        <Button variant="outline" size="sm">
                          <Play className="w-4 h-4 mr-1" />
                          Watch Recording
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-start lg:items-end gap-2">
                    <Badge className={getTypeColor(talk.type)}>
                      {formatType(talk.type)}
                    </Badge>
                    {talk.hasRecording && (
                      <Badge variant="outline" className="text-xs">
                        <Play className="w-3 h-3 mr-1" />
                        Recorded
                      </Badge>
                    )}
                    {talk.hasSlides && (
                      <Badge variant="outline" className="text-xs">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Slides Available
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Speaking Topics */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">Speaking Expertise</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                topic: "Artificial Intelligence & Machine Learning",
                talks: 3,
                color: "blue"
              },
              {
                topic: "Cybersecurity & Privacy",
                talks: 2,
                color: "red"
              },
              {
                topic: "Educational Technology",
                talks: 1,
                color: "green"
              },
              {
                topic: "AI Ethics & Fairness",
                talks: 1,
                color: "purple"
              },
              {
                topic: "IoT Security",
                talks: 1,
                color: "orange"
              },
              {
                topic: "Research Methodology",
                talks: 1,
                color: "indigo"
              }
            ].map((expertise, index) => (
              <div key={index} className={`bg-gradient-to-br from-${expertise.color}-50 to-${expertise.color}-100 rounded-lg p-4 border border-${expertise.color}-200`}>
                <h3 className={`font-semibold text-${expertise.color}-900 mb-2`}>{expertise.topic}</h3>
                <p className={`text-sm text-${expertise.color}-700`}>
                  {expertise.talks} talk{expertise.talks > 1 ? 's' : ''}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
