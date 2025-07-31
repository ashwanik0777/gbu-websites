
import React from 'react';
// Card components
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl shadow-sm border border-gray-200 ${className}`}>{children}</div>
);

const CardHeader = ({ children, className = "" }) => (
  <div className={`px-6 pt-6 pb-2 border-b border-gray-100 ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = "" }) => (
  <h2 className={`text-lg font-semibold flex items-center ${className}`}>{children}</h2>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`px-6 py-4 ${className}`}>{children}</div>
);

// Button component
const Button = ({
  children,
  variant = "default",
  size = "md",
  className = "",
  asChild = false,
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    ghost: "bg-transparent text-blue-600 hover:bg-blue-50",
    outline: "border border-gray-300 bg-white text-orange-700 hover:bg-orange-100",
  };
  const sizes = {
    md: "px-4 py-2 text-sm",
    sm: "px-3 py-1.5 text-sm",
  };
  const classes = `${base} ${variants[variant] || ""} ${sizes[size] || ""} ${className}`;

  if (asChild && React.Children.only(children).type === "a") {
    return React.cloneElement(children, {
      className: `${children.props.className || ""} ${classes}`.trim(),
      ...props,
    });
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
import { Download, Phone, CreditCard, TrendingUp, ExternalLink, FileText, Mail, MapPin } from 'lucide-react';

const QuickLinks = () => {
  const quickLinks = [
    {
      title: 'Download Prospectus',
      description: 'Complete information about courses, fees, and admission process',
      icon: Download,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      href: '#',
      external: true
    },
    {
      title: 'Contact Admission Office',
      description: 'Get help from our admission counselors',
      icon: Phone,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      href: 'tel:+91-1234567890',
      external: false
    },
    {
      title: 'Fee Payment Gateway',
      description: 'Pay admission fees securely online',
      icon: CreditCard,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      href: '#',
      external: true
    },
    {
      title: 'Previous Year Cut-offs',
      description: 'Check last year admission cut-off marks',
      icon: TrendingUp,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      href: '#',
      external: false
    }
  ];

  const contactInfo = [
    {
      title: 'Admission Helpdesk',
      value: '+91-1234567890',
      icon: Phone,
      type: 'tel'
    },
    {
      title: 'Email Support',
      value: 'admissions@university.edu',
      icon: Mail,
      type: 'email'
    },
    {
      title: 'Office Address',
      value: '123 University Campus, Education City',
      icon: MapPin,
      type: 'text'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Quick Links */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <ExternalLink className="w-6 h-6 text-blue-600" />
            <span>Important Quick Links</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickLinks.map((link, index) => (
              <div
                key={index}
                className="group p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-300 hover:border-blue-300 cursor-pointer"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-full ${link.bgColor} group-hover:scale-110 transition-transform`}>
                    <link.icon className={`w-6 h-6 ${link.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {link.title}
                      </h3>
                      {link.external && (
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{link.description}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-2 p-0 h-auto text-blue-600 hover:text-blue-700"
                      asChild
                    >
                      <a href={link.href} target={link.external ? '_blank' : '_self'} rel={link.external ? 'noopener noreferrer' : ''}>
                        {link.title.includes('Contact') ? 'Call Now' : 
                         link.title.includes('Download') ? 'Download PDF' :
                         link.title.includes('Fee') ? 'Pay Now' : 'View Details'}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Phone className="w-6 h-6 text-green-600" />
            <span>Contact Information</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {contactInfo.map((contact, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="p-2 bg-white rounded-full">
                  <contact.icon className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">{contact.title}</p>
                  {contact.type === 'tel' ? (
                    <a href={`tel:${contact.value}`} className="text-blue-600 hover:text-blue-700 font-medium">
                      {contact.value}
                    </a>
                  ) : contact.type === 'email' ? (
                    <a href={`mailto:${contact.value}`} className="text-blue-600 hover:text-blue-700 font-medium">
                      {contact.value}
                    </a>
                  ) : (
                    <p className="text-gray-900 font-medium">{contact.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Emergency Notice */}
      <Card className="border-l-4 border-l-orange-500 bg-orange-50">
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <div className="p-2 bg-orange-100 rounded-full">
              <FileText className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <h3 className="font-semibold text-orange-900">Important Notice</h3>
              <p className="text-sm text-orange-700 mt-1">
                All candidates are advised to keep checking the official website regularly for updates on admission schedules and important announcements.
              </p>
              <Button variant="outline" size="sm" className="mt-2 border-orange-300 text-orange-700 hover:bg-orange-100">
                View All Notices
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuickLinks;
