
import React, { useState } from 'react';
// Card Components
const Card = ({ className = '', children }) => (
  <div className={`rounded-xl border p-0 ${className}`}>{children}</div>
);

const CardHeader = ({ children }) => (
  <div className="px-6 pt-6 pb-2 border-b border-orange-200">{children}</div>
);

const CardTitle = ({ className = '', children }) => (
  <h2 className={`font-bold text-lg ${className}`}>{children}</h2>
);

const CardContent = ({ className = '', children }) => (
  <div className={`px-6 pb-6 pt-4 ${className}`}>{children}</div>
);

// Button Component
const Button = ({ variant = 'outline', className = '', children, ...props }) => (
  <button
    className={`
      rounded-lg border
      ${variant === 'outline' ? 'border-orange-300 text-orange-800 bg-white/80 hover:bg-orange-50' : ''}
      transition-colors duration-150 font-medium focus:outline-none focus:ring-2 focus:ring-orange-300
      ${className}
    `}
    {...props}
  >
    {children}
  </button>
);

// Collapsible Components
const Collapsible = ({ open, onOpenChange, children }) => {
  // Provide open state and handler via context
  const [isOpen, setIsOpen] = React.useState(open);
  React.useEffect(() => setIsOpen(open), [open]);
  const handleChange = (val) => {
    setIsOpen(val);
    onOpenChange?.(val);
  };
  return (
    <CollapsibleContext.Provider value={{ isOpen, setIsOpen: handleChange }}>
      {children}
    </CollapsibleContext.Provider>
  );
};

const CollapsibleContext = React.createContext();

const CollapsibleTrigger = ({ asChild, children }) => {
  const { isOpen, setIsOpen } = React.useContext(CollapsibleContext);
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      onClick: () => setIsOpen(!isOpen),
      'aria-expanded': isOpen,
    });
  }
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      aria-expanded={isOpen}
      className="w-full"
    >
      {children}
    </button>
  );
};

const CollapsibleContent = ({ className = '', children }) => {
  const { isOpen } = React.useContext(CollapsibleContext);
  return (
    <div
      className={`
        transition-all duration-300 ease-in-out overflow-hidden
        ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}
        ${className}
      `}
      style={{ willChange: 'max-height, opacity' }}
      aria-hidden={!isOpen}
    >
      {isOpen && children}
    </div>
  );
};
import { AlertTriangle, ChevronDown, ChevronUp } from 'lucide-react';

const ImportantNotesCard = () => {
  const [isHindiOpen, setIsHindiOpen] = useState(false);

  return (
    <Card className="shadow-lg bg-gradient-to-r from-orange-50 to-yellow-50 border-orange-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl text-orange-800">
          <AlertTriangle className="w-5 h-5" />
          Important Notes / महत्वपूर्ण लेख
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* English Section */}
        <div className="space-y-4">
          <h3 className="font-semibold text-orange-900">English:</h3>
          <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <div className="flex items-start gap-2">
              <span className="text-orange-600 font-bold">•</span>
              <p>If you have any issue regarding payment then contact on Help-desk No.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-orange-600 font-bold">•</span>
              <p>Do not raise unnecessary charge-backs or your admission will be cancelled.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-orange-600 font-bold">•</span>
              <p>If the amount is deducted but not confirmed, wait for 48 hours before retrying.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-orange-600 font-bold">•</span>
              <p>Keep your transaction receipts safe for future reference.</p>
            </div>
          </div>
        </div>

        {/* Hindi Section - Collapsible */}
        <Collapsible open={isHindiOpen} onOpenChange={setIsHindiOpen}>
          <CollapsibleTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center justify-between w-full p-3 bg-white/50 hover:bg-white/70 border-orange-200"
            >
              <span className="font-medium text-orange-900">हिंदी में पढ़ें / Read in Hindi</span>
              {isHindiOpen ? (
                <ChevronUp className="w-4 h-4 text-orange-600" />
              ) : (
                <ChevronDown className="w-4 h-4 text-orange-600" />
              )}
            </Button>
          </CollapsibleTrigger>
          
          <CollapsibleContent className="mt-4">
            <div className="space-y-4 p-4 bg-white/30 rounded-lg border border-orange-200">
              <h3 className="font-semibold text-orange-900">हिंदी:</h3>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <div className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <p>ऑनलाइन भुगतान के मामले में यदि भुगतान सफल नहीं होता है, तो 48 घंटे प्रतीक्षा करें।</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <p>अनावश्यक चार्ज-बैक न उठाएं, अन्यथा आपका प्रवेश रद्द कर दिया जाएगा।</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <p>भुगतान संबंधी किसी भी समस्या के लिए हेल्प-डेस्क नंबर पर संपर्क करें।</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <p>भविष्य के संदर्भ के लिए अपनी लेनदेन रसीदों को सुरक्षित रखें।</p>
                </div>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Contact Information */}
        <div className="mt-6 p-4 bg-white/50 rounded-lg border border-orange-200">
          <h4 className="font-semibold text-orange-900 mb-2">Contact Information:</h4>
          <div className="text-sm text-gray-700 space-y-1">
            <p><strong>Help Desk:</strong> +91-XXXX-XXXXXX</p>
            <p><strong>Email:</strong> support@university.edu</p>
            <p><strong>Office Hours:</strong> 9:00 AM - 5:00 PM (Mon-Fri)</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImportantNotesCard;
