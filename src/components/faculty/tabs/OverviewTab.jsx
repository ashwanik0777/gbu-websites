import { useState } from "react";
import { ChevronDown, ChevronUp, Info } from "lucide-react";
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
 

// ✅ Local Button fallback if you don't have a Button component
const Button = ({ children, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center text-sm font-medium ${className}`}
  >
    {children}
  </button>
);
const OverviewTab = ({ activeTab, profile }) => {
  if (!profile) {
    return (
      <div className="text-center text-gray-600 py-12">
        Loading faculty details...
      </div>
    );
  }

  const [expanded, setExpanded] = useState(false);

  // ✅ Add default fallback
  const {
    name,
    shortBio,
    fullBio,
    researchAreas = [],
    quickLinks = [],
  } = profile;

  return (
    <div className="space-y-6 bg-gray-50">
      {/* Bio Section */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-900 flex items-center">
            <Info className="w-6 h-6 mr-2 text-blue-600" />
            About {name}
          </CardTitle>
        </CardHeader>
        
        <CardContent>
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed">
              {expanded ? fullBio : shortBio}
            </p>
            <Button
              variant="ghost"
              onClick={() => setExpanded(!expanded)}
              className="mt-4 p-0 h-auto text-blue-600 hover:text-blue-700"
            >
              {expanded ? (
                <>
                  <ChevronUp className="w-4 h-4 mr-1" />
                  Read Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 mr-1" />
                  Read More
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Research Areas */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">
            Research Areas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-100"
              >
                <h3 className="font-semibold text-blue-900 mb-2">
                  {area.title}
                </h3>
                <p className="text-sm text-blue-700">{area.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Links */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">Quick Links</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <Button
                key={index}
                variant="outline"
                className={`h-auto p-4 justify-start bg-gradient-to-br from-${link.color}-50 to-${link.color}-100 border-${link.color}-200 hover:from-${link.color}-100 hover:to-${link.color}-150 transition-all duration-200`}
              >
                <link.icon className="w-4 h-4 mr-2" />
                <span className="text-sm">{link.label}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OverviewTab;
