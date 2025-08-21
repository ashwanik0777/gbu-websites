
// Card Components
const Card = ({ children, className = "" }) => (
    <div className={`bg-white rounded-xl shadow-md border border-gray-200 ${className}`}>{children}</div>
);
const CardHeader = ({ children }) => (
    <div className="px-6 pt-6 pb-2 border-b border-gray-100">{children}</div>
);
const CardTitle = ({ children }) => (
    <h2 className="text-2xl font-semibold text-gray-900">{children}</h2>
);
const CardDescription = ({ children }) => (
    <p className="text-gray-500 mt-1">{children}</p>
);
const CardContent = ({ children }) => (
    <div className="px-6 py-4">{children}</div>
);

// Accordion Components
import React,{ useState } from "react";
const Accordion = ({ children, className = "" }) => (
  <div className={`divide-y divide-gray-200 rounded-lg border border-gray-100 bg-white ${className}`}>
    {children}
  </div>
);

const AccordionItem = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Inject `isOpen` and `setIsOpen` into children
  return (
    <div>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { isOpen, setIsOpen })
          : child
      )}
    </div>
  );
};

const AccordionTrigger = ({ children, isOpen, setIsOpen, className = "", ...props }) => (
  <button
    className={`w-full flex justify-between items-center py-4 px-4 font-medium text-lg text-gray-800 hover:bg-gray-50 transition rounded-t-lg focus:outline-none ${className}`}
    onClick={() => setIsOpen((prev) => !prev)}
    aria-expanded={isOpen}
    {...props}
  >
    <span>{children}</span>
    <svg
      className={`w-5 h-5 ml-2 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </button>
);

const AccordionContent = ({ children, isOpen, className = "" }) => {
  return isOpen ? (
    <div className={`px-4 pb-4 text-base text-gray-600 ${className}`}>{children}</div>
  ) : null;
};
import Header from "../../components/Grievance/Header";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I submit a grievance?",
      answer: "You can submit a grievance by logging into the student portal and clicking on 'Submit Complaint'. Fill out the form with all required details and submit. You will receive a ticket ID for tracking."
    },
    {
      question: "How long does it take to resolve a complaint?",
      answer: "The resolution time varies depending on the complexity of the issue. Simple matters are typically resolved within 48-72 hours, while complex issues may take up to a week. You can track progress using your ticket ID."
    },
    {
      question: "What happens if my complaint is not resolved on time?",
      answer: "If your complaint is not addressed within the specified timeframe, it will automatically be escalated to the next level in the hierarchy. You will receive email notifications about the escalation."
    },
    {
      question: "Can I escalate my complaint manually?",
      answer: "Yes, you can manually escalate your complaint if you feel it's not being addressed properly or if you're unsatisfied with the response. Use the 'Escalate' button in your student dashboard."
    },
    {
      question: "Who can see my complaint details?",
      answer: "Your complaint is only visible to authorized personnel including the assigned staff member, their department head, and system administrators. Student privacy is strictly maintained."
    },
    {
      question: "How do I provide feedback on the resolution?",
      answer: "Once your complaint is marked as resolved, you will receive an email with a feedback link. You can also provide feedback through the student portal's feedback section."
    },
    {
      question: "What if I forgot my ticket ID?",
      answer: "You can find your ticket ID in the confirmation email sent when you submitted the complaint. Alternatively, login to your student dashboard to view all your submitted complaints."
    },
    {
      question: "Can I attach documents to my complaint?",
      answer: "Yes, you can attach relevant documents during complaint submission. Supported formats include PDF, DOC, DOCX, JPG, JPEG, and PNG files up to 5MB each."
    },
    {
      question: "Is there a limit to how many complaints I can submit?",
      answer: "There is no limit to the number of genuine complaints you can submit. However, please ensure each complaint is legitimate and necessary."
    },
    {
      question: "How do I contact staff directly?",
      answer: "Once your complaint is assigned, you can view the staff contact details in your dashboard. However, we recommend using the portal for all communications to maintain proper records."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600">
              Find answers to common questions about the grievance redressal portal
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Common Questions</CardTitle>
              <CardDescription>
                Browse through frequently asked questions or contact support if you need additional help
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Still Need Help?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Contact Support</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    For technical issues with the portal
                  </p>
                  <p className="text-sm">
                    Email: support@gbu.ac.in<br />
                    Phone: +91-120-2344200
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Grievance Cell</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    For complaints and grievance related queries
                  </p>
                  <p className="text-sm">
                    Email: grievance@gbu.ac.in<br />
                    Phone: +91-120-2344201
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
