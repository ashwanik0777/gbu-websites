
import React from "react";

// Card Component
export const Card = ({ children, className = "" }) => (
    <div className={`bg-white rounded-xl shadow-md border border-gray-200 ${className}`}>
        {children}
    </div>
);

export const CardHeader = ({ children, className = "" }) => (
    <div className={`px-6 pt-6 pb-2 border-b border-gray-100 ${className}`}>
        {children}
    </div>
);

export const CardTitle = ({ children, className = "" }) => (
    <h2 className={`text-xl font-semibold text-gray-900 ${className}`}>{children}</h2>
);

export const CardDescription = ({ children, className = "" }) => (
    <p className={`text-gray-500 text-sm mt-1 ${className}`}>{children}</p>
);

export const CardContent = ({ children, className = "" }) => (
    <div className={`px-6 py-4 ${className}`}>{children}</div>
);

// Button Component
export const Button = ({ children, className = "", ...props }) => (
    <button
        className={`inline-flex items-center justify-center px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none text-white bg-blue-600 hover:bg-blue-700 ${className}`}
        {...props}
    >
        {children}
    </button>
);

// Input Component
export const Input = React.forwardRef(({ className = "", ...props }, ref) => (
    <input
        ref={ref}
        className={`block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none text-gray-900 placeholder-gray-400 transition ${className}`}
        {...props}
    />
));
Input.displayName = "Input";

// Textarea Component
export const Textarea = React.forwardRef(({ className = "", ...props }, ref) => (
    <textarea
        ref={ref}
        className={`block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none text-gray-900 placeholder-gray-400 transition ${className}`}
        {...props}
    />
));
Textarea.displayName = "Textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Header from "../../components/Grievance/Header";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600">
              Get in touch with our grievance redressal team
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Full Name</label>
                      <Input placeholder="Enter your full name" aria-label="Full Name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Student/Staff ID</label>
                      <Input placeholder="Enter your ID" aria-label="Student/Staff ID" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Email Address</label>
                    <Input type="email" placeholder="Enter your email" aria-label="Email Address" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Phone Number</label>
                    <Input type="tel" placeholder="Enter your phone number" aria-label="Phone Number" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Subject</label>
                    <Input placeholder="What is this regarding?" aria-label="Subject" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Message</label>
                    <Textarea 
                      placeholder="Please describe your query or concern..."
                      rows={6}
                    />
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                  <CardDescription>
                    Multiple ways to reach our grievance redressal team
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-blue-100 rounded-full">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email Support</h4>
                      <p className="text-sm text-gray-600 mb-1">For general inquiries and support</p>
                      <p className="text-sm font-medium">grievance@gbu.ac.in</p>
                      <p className="text-sm">support@gbu.ac.in</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-green-100 rounded-full">
                      <Phone className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone Support</h4>
                      <p className="text-sm text-gray-600 mb-1">Speak directly with our team</p>
                      <p className="text-sm font-medium">+91-120-2344200</p>
                      <p className="text-sm">+91-120-2344201 (Grievance Cell)</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-orange-100 rounded-full">
                      <MapPin className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Visit Us</h4>
                      <p className="text-sm text-gray-600 mb-1">Physical location</p>
                      <p className="text-sm">
                        Gautam Buddha University<br />
                        Greater Noida, Uttar Pradesh<br />
                        India - 201312
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-purple-100 rounded-full">
                      <Clock className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Office Hours</h4>
                      <p className="text-sm text-gray-600 mb-1">When we're available</p>
                      <p className="text-sm">
                        Monday - Friday: 9:00 AM - 5:00 PM<br />
                        Saturday: 9:00 AM - 1:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Emergency Contact</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">Urgent Grievances</h4>
                    <p className="text-sm text-red-700 mb-2">
                      For urgent matters that require immediate attention
                    </p>
                    <p className="text-sm font-medium text-red-800">
                      Emergency Hotline: +91-120-2344911<br />
                      Available 24/7
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Department Contacts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Academic Affairs</span>
                      <span>academics@gbu.ac.in</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Hostel Management</span>
                      <span>hostel@gbu.ac.in</span>
                    </div>
                    <div className="flex justify-between">
                      <span>IT Services</span>
                      <span>it@gbu.ac.in</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Library</span>
                      <span>library@gbu.ac.in</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Transportation</span>
                      <span>transport@gbu.ac.in</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
