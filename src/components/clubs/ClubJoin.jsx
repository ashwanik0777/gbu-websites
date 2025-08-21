
import React, { useState } from 'react';
import { UserPlus, Mail, Phone, User, GraduationCap, Send, CheckCircle } from 'lucide-react';
import SearchableWrapper from '../Searchbar/SearchableWrapper';
// Minimal UI components for demonstration purposes

const Card = ({ children, className = "" }) => (
  <div className={`rounded-lg border bg-white shadow-sm ${className}`}>{children}</div>
);

const CardHeader = ({ children, className = "" }) => (
  <div className={`px-6 py-4 ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`font-semibold text-lg ${className}`}>{children}</h3>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`px-6 py-4 ${className}`}>{children}</div>
);

const Button = ({ children, className = "", ...props }) => (
  <button className={`inline-flex items-center justify-center px-4 py-2 rounded font-medium ${className}`} {...props}>
    {children}
  </button>
);

const Input = ({ className = "", ...props }) => (
  <input className={`block w-full border border-gray-300 rounded px-3 py-2 ${className}`} {...props} />
);

const Textarea = ({ className = "", ...props }) => (
  <textarea className={`block w-full border border-gray-300 rounded px-3 py-2 ${className}`} {...props} />
);

const Label = ({ children, className = "", ...props }) => (
  <label className={`block text-sm font-medium text-gray-900 ${className}`} {...props}>
    {children}
  </label>
);

// Simple Accordion implementation
const Accordion = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

 const AccordionItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="py-2">
      <button
        type="button"
        className="w-full text-left font-semibold py-2 text-gray-900 hover:text-blue-600"
        onClick={() => setOpen(!open)}
      >
        {question}
        <span className="float-right">{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <AccordionContent className="text-gray-600">
          {answer}
        </AccordionContent>
      )}
    </div>
  );
};


const AccordionTrigger = ({ children, className = "", ...props }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <button
      type="button"
      className={`w-full text-left font-semibold py-2 ${className}`}
      onClick={() => setOpen((o) => !o)}
      {...props}
    >
      {children}
      <span className="float-right">{open ? "▲" : "▼"}</span>
    </button>
  );
};

const AccordionContent = ({ children, className = "" }) => (
  <div className={`py-2 px-1 ${className}`}>{children}</div>
);
 

 
const ClubJoin = ({ club }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    branch: '',
    year: '',
    experience: '',
    motivation: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const faqData = [
    {
      question: "What are the selection criteria?",
      answer: "Selection is based on your passion for the field, commitment to participate actively, and willingness to contribute to club activities. No prior experience is mandatory for most positions."
    },
    {
      question: "How much time commitment is required?",
      answer: "We expect members to attend weekly meetings and participate in at least 70% of club events. Time commitment varies from 3-5 hours per week depending on your role and involvement level."
    },
    {
      question: "Are there any fees involved?",
      answer: "Basic membership is free. However, some specialized workshops or events may have nominal fees to cover materials and refreshments."
    },
    {
      question: "Can I join multiple clubs?",
      answer: "Yes, you can be a member of multiple clubs. However, we encourage you to be realistic about your time commitments and ensure quality participation."
    },
    {
      question: "When is the next recruitment drive?",
      answer: "We conduct recruitment at the beginning of each semester. Special recruitment drives are also organized for specific events or projects."
    }
  ];

  if (isSubmitted) {
    return (
      <Card className="bg-green-50 border-green-200">
        <CardContent className="p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-green-800 mb-2">
            Application Submitted Successfully!
          </h3>
          <p className="text-green-700 mb-4">
            Thank you for your interest in joining {club.name}. We'll review your application and get back to you within 3-5 business days.
          </p>
          <p className="text-sm text-green-600">
            Check your email for confirmation and next steps.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <SearchableWrapper>
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Community</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Ready to be part of something amazing? Fill out the form below and take the first step towards joining {club.name}.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Join Form */}
        <Card className="border-gray-300 hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl text-gray-900">
              <UserPlus className="w-6 h-6 text-blue-600" />
              Membership Application
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@gbu.ac.in"
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="branch" className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4" />
                    Branch/Department
                  </Label>
                  <Input
                    id="branch"
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    placeholder="Computer Science & Engineering"
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="year">Current Academic Year</Label>
                <Input
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  placeholder="2nd Year"
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="experience">Relevant Experience/Skills</Label>
                <Textarea
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="Share any relevant experience, projects, or skills..."
                  className="mt-1"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="motivation">Why do you want to join this club?</Label>
                <Textarea
                  id="motivation"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  placeholder="Tell us about your motivation and what you hope to achieve..."
                  required
                  className="mt-1"
                  rows={4}
                />
              </div>

              <Button type="submit" className="w-full gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Send className="w-4 h-4" />
                Submit Application
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <div className="space-y-6">
          <Card className='border-gray-300'>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              {/* <Accordion type="single" collapsible className="w-full">
                {faqData.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion> */}
              <Accordion className="w-full">
  {faqData.map((faq, index) => (
    <AccordionItem key={index} question={faq.question} answer={faq.answer} />
  ))}
</Accordion>

            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                Join Our Growing Community
              </h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">{club.memberCount}+</div>
                  <div className="text-sm text-gray-600">Active Members</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">{club.events.length}+</div>
                  <div className="text-sm text-gray-600">Events This Year</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    </SearchableWrapper>
  );
};

export default ClubJoin;
