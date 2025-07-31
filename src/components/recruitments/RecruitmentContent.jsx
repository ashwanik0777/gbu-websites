import React, { useState, useEffect } from 'react';
import { Download, FileText, Newspaper, Calendar, File, Archive, Clock, CheckCircle, ArrowUpRight, Sparkles, Eye } from 'lucide-react';

function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}

function cva(base, config) {
  return ({ variant, size, className }) => {
    const variantClasses = {
      default: "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700",
      destructive: "bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600",
      outline: "border-2 border-indigo-200 bg-white/80 hover:bg-indigo-50 hover:border-indigo-300 text-indigo-700",
      secondary: "bg-gradient-to-r from-slate-200 to-slate-300 text-slate-800 hover:from-slate-300 hover:to-slate-400",
      ghost: "hover:bg-indigo-50 hover:text-indigo-700",
      link: "text-indigo-600 underline-offset-4 hover:underline",
      archived: "bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600",
    }[variant || config.defaultVariants.variant];

    const sizeClasses = {
      default: "h-11 px-6 py-3",
      sm: "h-9 rounded-xl px-4",
      lg: "h-12 rounded-xl px-8",
      icon: "h-10 w-10",
    }[size || config.defaultVariants.size];

    return cn(base, variantClasses, sizeClasses, className);
  };
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl",
  {
    variants: {
      variant: {
        default: "",
        destructive: "",
        outline: "",
        secondary: "",
        ghost: "",
        link: "",
        archived: "",
      },
      size: {
        default: "",
        sm: "",
        lg: "",
        icon: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? "span" : "button";
  return (
    <Comp
      className={buttonVariants({ variant, size, className })}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

const RecruitmentContent = ({ tabId }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredRow, setHoveredRow] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const baseData = {
    professors: { ref: 'GBU/Admn/2025/01', date: '15 May 2025', title: "Advertisement of Professor's", status: 'active' },
    retired: { ref: 'GBU/Admn/2025/02', date: '15 May 2025', title: "Advertisement of Professor's (Retired)", status: 'active' },
    associate: { ref: 'GBU/Admn/2025/03', date: '20 May 2025', title: "Advertisement of Associate Professor's", status: 'active' },
    assistant: { ref: 'GBU/Admn/2025/04', date: '22 May 2025', title: "Advertisement of Assistant Professor's", status: 'active' },
    assistants: { ref: 'GBU/Admn/2025/05', date: '15 May 2025', title: "Advertisement for Assistants", status: 'active' },
    interns: { ref: 'GBU/Admn/2025/06', date: '15 May 2025', title: "Advertisement for Interns", status: 'active' },
    workers: { ref: 'GBU/Admn/2025/07', date: '15 May 2025', title: "Advertisement of Workers", status: 'active' },
  };

  const archivedData = {
    archived2023: { ref: 'GBU/Admn/2023/01', date: '10 Jan 2023', title: "Archived Professor Recruitment 2023", status: 'archived' },
    archived2022: { ref: 'GBU/Admn/2022/05', date: '12 Aug 2022', title: "Archived Associate Recruitment 2022", status: 'archived' },
    archived2021: { ref: 'GBU/Admn/2021/12', date: '05 Dec 2021', title: "Archived Staff Recruitment 2021", status: 'archived' },
  };

  const isArchived = tabId.startsWith('archived');
  const tabData = isArchived ? archivedData[tabId] || archivedData.archived2023 : baseData[tabId] || baseData.professors;

  const documents = [
    {
      name: "Extension Notice",
      icon: <Calendar className="w-5 h-5" />,
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
      description: "Official extension notification"
    },
    {
      name: "Detailed Advertisement",
      icon: <FileText className="w-5 h-5" />,
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
      description: "Complete job advertisement"
    },
    {
      name: "Newspaper Publication",
      icon: <Newspaper className="w-5 h-5" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      description: "Published in newspapers"
    },
    {
      name: "Application Form (PDF)",
      icon: <File className="w-5 h-5" />,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      description: "Downloadable PDF format"
    },
    {
      name: "Application Form (Word)",
      icon: <Download className="w-5 h-5" />,
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-50",
      description: "Editable Word document"
    },
  ];
  return (
    <div className="flex flex-col min-h-[700px]">
      {/* Header Card */}
      <div
        className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
      >
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 border-solid shadow-xl">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full blur-3xl opacity-30 -translate-y-32 translate-x-32"></div>

          <div className="relative p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-1 rounded-2xl ${isArchived ? 'bg-amber-100' : 'bg-indigo-100'}`}>
                    {isArchived ? (
                      <Archive className="w-6 h-6 text-amber-600" />
                    ) : (
                      <Sparkles className="w-6 h-6 text-indigo-600" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-1">{tabData.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-slate-600">
                      <span className="flex items-center gap-1">
                        <File className="w-4 h-4" />
                        {tabData.ref}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {tabData.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${isArchived
                      ? 'bg-amber-100 text-amber-800 border border-amber-200 border-solid'
                      : 'bg-emerald-100 text-emerald-800 border border-emerald-200 border-solid'
                    }`}
                >
                  {isArchived ? (
                    <>
                      <Archive className="w-4 h-4" />
                      Archived
                    </>
                  ) : (
                    <>
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                      Active
                    </>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Block: Table + Footer aligned bottom */}
      <div className="flex flex-col flex-grow justify-end space-y-6 mt-6">
        {/* Documents Table */}
        <div
          className={`transform transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
        >
          <div className="overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl shadow-2xl border border-white/20 border-solid">
            {/* Table Header */}
            <div className="bg-gradient-to-r from-slate-100 to-slate-50 px-8 py-6 border-b border-slate-200 border-solid">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse"></div>
                  <h4 className="text-lg font-semibold text-slate-800">Available Documents</h4>
                </div>
                <div className="text-sm text-slate-600">{documents.length} documents available</div>
              </div>
            </div>

            {/* Table Body */}
            <div className="p-2">
              {documents.map((doc, index) => (
                <div
                  key={index}
                  className={cn(
                    "group mx-2 my-1 rounded-2xl border border-slate-200 border-solid transition-all duration-500 cursor-pointer overflow-hidden",
                    "hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-100/50",
                    hoveredRow === index ? "scale-[1.02] bg-white shadow-xl" : "bg-white/70"
                  )}
                  onMouseEnter={() => setHoveredRow(index)}
                  onMouseLeave={() => setHoveredRow(null)}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: isVisible ? `slideInUp 0.6s ease-out forwards` : 'none'
                  }}
                >
                  <div className="grid grid-cols-3 gap-6 p-2 items-center">
                    {/* Document Info */}
                    <div className="flex items-center gap-4 col-span-2 pl-2">
                      <div
                        className={cn(
                          "p-4 rounded-2xl transition-all duration-300 transform group-hover:scale-110",
                          doc.bgColor
                        )}
                      >
                        <div className={cn("bg-gradient-to-r bg-clip-text text-transparent", doc.color)}>
                          {doc.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-slate-800 text-base group-hover:text-indigo-700 transition-colors">
                          {doc.name}
                        </div>
                        <div className="text-sm text-slate-500 mt-1">{doc.description}</div>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                          <span className="text-xs text-emerald-600 font-medium">Ready for download</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="flex justify-center col-span-1">
                      <Button
                        variant={isArchived ? "archived" : "default"}
                        size="sm"
                        className="group/btn relative overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          {isArchived ? (
                            <>
                              <Archive className="w-4 h-4" />
                              View Archive
                            </>
                          ) : (
                            <>
                              <Eye className="w-4 h-4" />
                              View Details
                            </>
                          )}
                          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                        </span>

                        {/* Button hover effect */}
                        <div
                          className={cn(
                            "absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300",
                            isArchived
                              ? "bg-gradient-to-r from-amber-600 to-orange-600"
                              : "bg-gradient-to-r from-indigo-700 to-purple-700"
                          )}
                        ></div>
                      </Button>
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div
                    className={cn(
                      "h-1 bg-gradient-to-r transition-all duration-300",
                      hoveredRow === index ? "opacity-100" : "opacity-0",
                      isArchived ? "from-amber-500 to-orange-500" : "from-indigo-500 to-purple-500"
                    )}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`transform transition-all duration-700 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
        >
          <div className="flex items-center justify-center gap-4 p-6 bg-gradient-to-r from-slate-50 to-indigo-50 rounded-2xl border border-slate-200 border-solid">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Clock className="w-4 h-4" />
              <span>Last updated: {tabData.date}</span>
            </div>
            <div className="w-1 h-4 bg-slate-300 rounded-full"></div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>All documents verified</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
      @keyframes slideInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}</style>
    </div>
  );


};

export default RecruitmentContent;