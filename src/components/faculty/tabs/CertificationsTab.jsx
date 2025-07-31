import React from 'react';
// Minimal UI components with styles matching usage in this file
 export const Card = ({ className = "", children, ...props }) => (
   <div className={`bg-white rounded-xl border border-gray-200 border-solid shadow-sm${className}`} {...props}>
     {children}
   </div>
 );
 
 export const CardHeader = ({ className = "", children, ...props }) => (
   <div className={`px-6 pt-6 pb-2  border-solid${className}`} {...props}>
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

export const Badge = ({ className = '', variant = 'solid', children, ...props }) => {
  const base =
    'inline-flex items-center px-2 py-0.5 rounded-full font-medium border text-xs';
  const variants = {
    solid: 'bg-blue-600 text-white border-transparent',
    outline: 'bg-white text-blue-700 border-blue-200',
  };
  return (
    <span
      className={`${base} ${variants[variant] || ''} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export const Button = ({
  className = '',
  variant = 'outline',
  size = 'sm',
  children,
  ...props
}) => {
  const base =
    'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2';
  const variants = {
    outline:
      'border border-blue-200 bg-white text-blue-700 hover:bg-blue-50',
    solid:
      'bg-blue-600 text-white hover:bg-blue-700 border border-transparent',
  };
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
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
import { Award, Calendar, ExternalLink, CheckCircle } from 'lucide-react';

export const CertificationsTab = () => {
  const certifications = [
    {
      title: "Google Cloud Professional Machine Learning Engineer",
      platform: "Google Cloud",
      year: 2024,
      validUntil: "2026",
      credentialId: "GCP-PML-2024-789456",
      skills: ["Machine Learning", "TensorFlow", "Google Cloud Platform", "MLOps"],
      level: "Professional",
      verified: true
    },
    {
      title: "AWS Certified Solutions Architect - Associate",
      platform: "Amazon Web Services",
      year: 2023,
      validUntil: "2026",
      credentialId: "AWS-SAA-2023-123456",
      skills: ["Cloud Architecture", "AWS Services", "Security", "Scalability"],
      level: "Associate",
      verified: true
    },
    {
      title: "Certified Ethical Hacker (CEH)",
      platform: "EC-Council",
      year: 2023,
      validUntil: "2026",
      credentialId: "CEH-2023-654321",
      skills: ["Penetration Testing", "Vulnerability Assessment", "Network Security", "Ethical Hacking"],
      level: "Professional",
      verified: true
    },
    {
      title: "Deep Learning Specialization",
      platform: "Coursera (DeepLearning.AI)",
      year: 2022,
      validUntil: "Lifetime",
      credentialId: "DL-SPEC-2022-987654",
      skills: ["Neural Networks", "Deep Learning", "Computer Vision", "NLP"],
      level: "Specialization",
      verified: true
    },
    {
      title: "Cisco Certified Network Associate (CCNA)",
      platform: "Cisco",
      year: 2022,
      validUntil: "2025",
      credentialId: "CCNA-2022-456789",
      skills: ["Networking", "Routing", "Switching", "Network Security"],
      level: "Associate",
      verified: true
    },
    {
      title: "Certified Information Systems Security Professional (CISSP)",
      platform: "ISC²",
      year: 2021,
      validUntil: "2024",
      credentialId: "CISSP-2021-321654",
      skills: ["Information Security", "Risk Management", "Security Architecture", "Governance"],
      level: "Professional",
      verified: true
    }
  ];

  const professionalDevelopment = [
    {
      title: "Advanced Research Methodology Workshop",
      organizer: "University Grants Commission",
      year: 2024,
      duration: "5 days",
      type: "Workshop"
    },
    {
      title: "Faculty Development Program on AI & ML",
      organizer: "AICTE",
      year: 2023,
      duration: "2 weeks",
      type: "FDP"
    },
    {
      title: "International Conference on Machine Learning (ICML)",
      organizer: "ICML Foundation",
      year: 2023,
      duration: "4 days",
      type: "Conference"
    }
  ];

  const getLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case 'professional': return 'bg-purple-100 text-purple-800';
      case 'associate': return 'bg-blue-100 text-blue-800';
      case 'specialization': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type) => {
    switch (type.toLowerCase()) {
      case 'workshop': return 'bg-orange-100 text-orange-800';
      case 'fdp': return 'bg-blue-100 text-blue-800';
      case 'conference': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Certifications Overview */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-900 flex items-center">
            <Award className="w-6 h-6 mr-2 text-blue-600" />
            Professional Certifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 text-center border border-blue-200">
              <div className="text-2xl font-bold text-blue-600">{certifications.length}</div>
              <div className="text-sm text-blue-700">Total Certifications</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 text-center border border-green-200 border-solid">
              <div className="text-2xl font-bold text-green-600">
                {certifications.filter(c => c.verified).length}
              </div>
              <div className="text-sm text-green-700">Verified</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 text-center border border-purple-200 border-solid">
              <div className="text-2xl font-bold text-purple-600">
                {certifications.filter(c => c.level === 'Professional').length}
              </div>
              <div className="text-sm text-purple-700">Professional Level</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 text-center border border-orange-200 border-solid">
              <div className="text-2xl font-bold text-orange-600">
                {new Date().getFullYear() - Math.min(...certifications.map(c => c.year))}+
              </div>
              <div className="text-sm text-orange-700">Years of Learning</div>
            </div>
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            Dr. Kumar maintains current industry certifications in cloud computing, cybersecurity, 
            and machine learning, ensuring his knowledge stays aligned with the latest technological 
            advancements and industry best practices.
          </p>
        </CardContent>
      </Card>

      {/* Certification Details */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">Certification Portfolio</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-6 border border-gray-200 border-solid hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="bg-blue-600 text-white p-2 rounded-lg">
                        <Award className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{cert.title}</h3>
                        <p className="text-blue-600 font-medium">{cert.platform}</p>
                      </div>
                      {cert.verified && (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      )}
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                      <div>
                        <p className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span className="font-medium">Obtained:</span> {cert.year}
                        </p>
                        <p><span className="font-medium">Valid Until:</span> {cert.validUntil}</p>
                      </div>
                      <div>
                        <p><span className="font-medium">Credential ID:</span> {cert.credentialId}</p>
                        <p><span className="font-medium">Level:</span> {cert.level}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Skills Covered:</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        View Credential
                      </Button>
                      <Button variant="outline" size="sm">
                        <Award className="w-4 h-4 mr-1" />
                        Verify
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-start lg:items-end gap-2">
                    <Badge className={getLevelColor(cert.level)}>
                      {cert.level}
                    </Badge>
                    {cert.verified && (
                      <Badge className="bg-green-100 text-green-800">
                        Verified
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Professional Development */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">Professional Development</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {professionalDevelopment.map((activity, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{activity.title}</h3>
                    <p className="text-blue-600 text-sm mb-2">{activity.organizer}</p>
                    <p className="text-xs text-gray-600">Duration: {activity.duration}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={getTypeColor(activity.type)}>
                      {activity.type}
                    </Badge>
                    <span className="text-sm text-gray-600 flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {activity.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
