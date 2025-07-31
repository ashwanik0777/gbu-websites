
import React, { useState, useEffect } from 'react';
import SearchableWrapper from '../Searchbar/SearchableWrapper';
// Dialog Components
const Dialog = ({ open, onOpenChange, children }) => {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={() => onOpenChange(false)}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative"
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

const DialogContent = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl shadow-2xl p-6 ${className} animate-fade-in`}>
    {children}
  </div>
);

const DialogHeader = ({ children }) => (
  <div className="mb-4">{children}</div>
);

const DialogTitle = ({ children, className = "" }) => (
  <h2 className={`text-lg font-bold ${className}`}>{children}</h2>
);

// Button Component
const Button = ({
  children,
  onClick,
  className = "",
  variant = "default",
  size = "md",
  disabled = false,
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 bg-white hover:bg-blue-50",
  };
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
  };
  return (
    <button
      type="button"
      className={`${base} ${variants[variant] || ""} ${sizes[size] || ""} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
import { Bell, X, Calendar, AlertCircle } from 'lucide-react';

/**
 * @typedef {Object} Notice
 * @property {number} id
 * @property {string} title
 * @property {string} content
 * @property {string} date
 * @property {'urgent' | 'important' | 'general'} type
 * @property {boolean} isNew
 */

const NoticeModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentNoticeIndex, setCurrentNoticeIndex] = useState(0);

  const notices = [
    {
      id: 1,
      title: 'Application Deadline Extension',
      content: 'The last date for submitting online applications has been extended to March 15, 2024. All candidates are advised to complete their applications before the deadline.',
      date: '2024-03-01',
      type: 'urgent',
      isNew: true
    },
    {
      id: 2,
      title: 'Document Verification Schedule',
      content: 'Document verification will be conducted from March 20-25, 2024. Candidates must bring original documents along with photocopies.',
      date: '2024-02-28',
      type: 'important',
      isNew: true
    },
    {
      id: 3,
      title: 'New Scholarship Program Launched',
      content: 'Merit-based scholarships are now available for undergraduate programs. Apply before March 10, 2024.',
      date: '2024-02-25',
      type: 'general',
      isNew: false
    }
  ];

  useEffect(() => {
    // Auto-show notice modal after 2 seconds
    const timer = setTimeout(() => {
      if (notices.some(notice => notice.isNew)) {
        setIsOpen(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const getNoticeTypeColor = (type) => {
    switch (type) {
      case 'urgent': return 'text-red-600 bg-red-50 border-red-200';
      case 'important': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'general': return 'text-blue-600 bg-blue-50 border-blue-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getNoticeIcon = (type) => {
    switch (type) {
      case 'urgent': return <AlertCircle className="w-5 h-5 text-red-600" />;
      case 'important': return <Bell className="w-5 h-5 text-orange-600" />;
      case 'general': return <Bell className="w-5 h-5 text-blue-600" />;
      default: return <Bell className="w-5 h-5 text-gray-600" />;
    }
  };

  const nextNotice = () => {
    setCurrentNoticeIndex((prev) => (prev + 1) % notices.length);
  };

  const prevNotice = () => {
    setCurrentNoticeIndex((prev) => (prev - 1 + notices.length) % notices.length);
  };

  const currentNotice = notices[currentNoticeIndex];

  return (
    <>
    <SearchableWrapper>
      {/* Notice Bell Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
      >
        <Bell className="w-6 h-6" />
        {notices.some(notice => notice.isNew) && (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
        )}
      </button>

      {/* Notice Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-md w-full mx-4">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {getNoticeIcon(currentNotice.type)}
                <span>Important Notice</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">
                  {currentNoticeIndex + 1} of {notices.length}
                </span>
              </div>
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className={`p-3 rounded-lg border ${getNoticeTypeColor(currentNotice.type)}`}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">{currentNotice.title}</h3>
                {currentNotice.isNew && (
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">NEW</span>
                )}
              </div>
              <p className="text-sm text-gray-700 mb-2">{currentNotice.content}</p>
              <div className="flex items-center space-x-1 text-xs text-gray-500">
                <Calendar className="w-3 h-3" />
                <span>{new Date(currentNotice.date).toLocaleDateString()}</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <Button
                variant="outline"
                size="sm"
                onClick={prevNotice}
                disabled={notices.length <= 1}
              >
                Previous
              </Button>
              
              <div className="flex space-x-1">
                {notices.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === currentNoticeIndex ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={nextNotice}
                disabled={notices.length <= 1}
              >
                Next
              </Button>
            </div>
            
            <Button 
              onClick={() => setIsOpen(false)} 
              className="w-full"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      </SearchableWrapper>
    </>
  );
};

export default NoticeModal;
