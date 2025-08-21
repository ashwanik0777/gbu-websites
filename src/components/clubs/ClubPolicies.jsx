 
import React, { useState, useEffect, Children, cloneElement } from 'react';
import { FileText, Download, ChevronDown, ChevronUp, Calendar } from 'lucide-react';
import SearchableWrapper from '../Searchbar/SearchableWrapper';

// Card Components
const Card = ({ children, className = "" }) => (
  <div className={`rounded-xl bg-white shadow  ${className}`}>{children}</div>
);

const CardHeader = ({ children, className = "" }) => (
  <div className={`px-6 py-4  ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`font-semibold text-lg ${className}`}>{children}</h3>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`px-6 py-4 ${className}`}>{children}</div>
);

const Button = ({ children, className = "", variant = "default", size = "md", ...props }) => {
  const base = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 text-gray-900 bg-white hover:bg-gray-100",
    dark: "bg-gray-900 text-white hover:bg-gray-800"
  };
  const sizes = {
    md: "px-4 py-2 text-sm",
    sm: "px-3 py-1.5 text-xs",
    lg: "px-6 py-3 text-base"
  };
  return (
    <button
      className={`${base} ${variants[variant] || ""} ${sizes[size] || ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const LocalCollapsible = ({ open, onOpenChange, children }) => {
  const [internalOpen, setInternalOpen] = useState(open);
  useEffect(() => setInternalOpen(open), [open]);
  return Children.map(children, child =>
    cloneElement(child, {
      open: internalOpen,
      onOpenChange: () => {
        setInternalOpen(!internalOpen);
        if (onOpenChange) onOpenChange();
      },
    })
  );
};

const LocalCollapsibleTrigger = ({ children, onOpenChange, open }) => (
  <button onClick={onOpenChange} aria-expanded={open} style={{ width: '100%', background: 'none', border: 'none', padding: 0, textAlign: 'inherit' }}>
    {children}
  </button>
);

const LocalCollapsibleContent = ({ children, open }) => open ? <div>{children}</div> : null;

const ClubPolicies = ({ club }) => {
  const [openSections, setOpenSections] = useState({
    conduct: false,
    eligibility: false,
    responsibilities: false
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const policyData = [
    { id: 'conduct', title: 'Code of Conduct', icon: '🤝', items: club.policies?.codeOfConduct || [], color: 'blue' },
    { id: 'eligibility', title: 'Eligibility Criteria', icon: '✅', items: club.policies?.eligibility || [], color: 'green' },
    { id: 'responsibilities', title: 'Roles & Responsibilities', icon: '👥', items: club.policies?.responsibilities || [], color: 'purple' }
  ];

  const colorMap = {
    blue: 'text-blue-700 bg-blue-600',
    green: 'text-green-700 bg-green-600',
    purple: 'text-purple-700 bg-purple-600'
  };

  return (
    <SearchableWrapper>
    <div className="space-y-6 bg-gray-50 p-6 md:p-10 rounded-xl">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Club Policies & Guidelines</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {policyData.map((policy) => (
          <Card key={policy.id}  className=" border border-gray-200 hover:shadow-lg transition-all duration-300">
            <LocalCollapsible open={openSections[policy.id]} onOpenChange={() => toggleSection(policy.id)}>
              <LocalCollapsibleTrigger>
                <div className="cursor-pointer transition-colors" role="button" tabIndex={0} aria-expanded={openSections[policy.id]}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{policy.icon}</span>
                        <CardTitle className={`text-lg  text-gray-900 font-bold ${colorMap[policy.color].split(' ')[0]}`}>{policy.title}</CardTitle>
                      </div>
                      {openSections[policy.id] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                    </div>
                  </CardHeader>
                </div>
              </LocalCollapsibleTrigger>
              <LocalCollapsibleContent open={openSections[policy.id]}>
                <CardContent className="pt-0 rounded-b-xl">
                  <ul className="space-y-3 ">
                    {(Array.isArray(policy.items) ? policy.items : []).map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className={`mt-2 w-2 h-2 rounded-full flex-shrink-0 ${colorMap[policy.color].split(' ')[1]}`} />
                        <span className="  text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </LocalCollapsibleContent>
            </LocalCollapsible>
          </Card>
        ))}

        {/* Meeting Schedule */}
        <Card className="md:col-span-2 bg-gradient-to-r from-indigo-100 to-purple-100 border-0">
          <CardHeader className="rounded-t-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-purple-600" />
                <CardTitle className="text-lg font-bold text-purple-800">Meeting Schedule</CardTitle>
              </div>
              <Button variant="outline" size="sm" className="gap-2">
                <FileText className="w-4 h-4" /> Add to Calendar
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-800 font-medium">{club.policies?.meetingFrequency}</p>
          </CardContent>
        </Card>

        {/* Download Full Policy */}
        <Card className="md:col-span-2 bg-white border-2 border-dashed border-gray-200 hover:border-blue-400 transition-colors">
          <CardContent className="p-6 text-center">
            <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Complete Policy Document</h3>
            <p className="text-gray-600 mb-4">Download the comprehensive club policy document for detailed guidelines and procedures.</p>
            <Button variant="dark" size="md" className="gap-2">
              <Download className="w-4 h-4" /> Download PDF
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
    </SearchableWrapper>
  );
};

export default ClubPolicies;