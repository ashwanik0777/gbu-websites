
const Card = ({ children }) => (
    <div className="bg-white shadow-lg rounded-xl border border-gray-200">{children}</div>
);

const CardContent = ({ children, className = "" }) => (
    <div className={`p-6 ${className}`}>{children}</div>
);

const Badge = ({ children, className = "", variant }) => {
    let base =
        "inline-block px-3 py-1 rounded-full text-xs font-semibold transition-colors";
    let color =
        variant === "outline"
            ? "border border-blue-500 text-blue-600 bg-white"
            : className || "bg-blue-500 text-white";
    return <span className={`${base} ${color}`}>{children}</span>;
};
import { ArrowRight } from "lucide-react";

const EscalationFlow = () => {
  const escalationSteps = [
    {
      level: "Level 1",
      role: "Assigned Staff",
      timeframe: "48 hours",
      description: "Initial complaint handling and resolution attempt",
      color: "bg-blue-500"
    },
    {
      level: "Level 2", 
      role: "Department Head",
      timeframe: "72 hours",
      description: "Departmental review and intervention",
      color: "bg-yellow-500"
    },
    {
      level: "Level 3",
      role: "Nodal Officer",
      timeframe: "96 hours", 
      description: "Cross-department coordination and resolution",
      color: "bg-orange-500"
    },
    {
      level: "Level 4",
      role: "Registrar/VC",
      timeframe: "120 hours",
      description: "Final authority intervention and decision",
      color: "bg-red-500"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <Card>
        <CardContent className="p-8">
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
            {escalationSteps.map((step, index) => (
              <div key={index} className="flex-1 w-full lg:w-auto">
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mb-4`}>
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <Badge className={step.color}>{step.level}</Badge>
                    <h3 className="text-lg font-semibold">{step.role}</h3>
                    <Badge variant="outline">{step.timeframe}</Badge>
                    <p className="text-gray-600 text-sm px-2">{step.description}</p>
                  </div>
                </div>
                
                {index < escalationSteps.length - 1 && (
                  <div className="flex justify-center mt-4 lg:mt-0">
                    <ArrowRight className="w-6 h-6 text-gray-400 rotate-90 lg:rotate-0" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Automatic Escalation Triggers:</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Complaint unassigned for more than 24 hours</li>
              <li>• Staff inactive on assigned complaint for 48+ hours</li>
              <li>• Student feedback rating below 3 stars after resolution</li>
              <li>• Manual escalation request by student or staff</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EscalationFlow;
