
function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}

// Card Component Suite
export function Card({ className, ...props }) {
    return (
        <div
            className={cn(
                "bg-white rounded-xl shadow-md border border-gray-200",
                className
            )}
            {...props}
        />
    );
}

export function CardHeader({ className, ...props }) {
    return (
        <div className={cn("px-6 pt-6 pb-2 border-b border-gray-100", className)} {...props} />
    );
}

export function CardTitle({ className, ...props }) {
    return (
        <h3
            className={cn(
                "text-xl font-semibold text-gray-900 tracking-tight",
                className
            )}
            {...props}
        />
    );
}

export function CardDescription({ className, ...props }) {
    return (
        <p
            className={cn(
                "text-gray-500 text-base mt-1",
                className
            )}
            {...props}
        />
    );
}

export function CardContent({ className, ...props }) {
    return (
        <div className={cn("px-6 py-4", className)} {...props} />
    );
}

// Badge Component
export function Badge({ className, variant = "solid", ...props }) {
    let base =
        "inline-block rounded-full font-medium text-xs px-3 py-1 transition-colors";
    let variants = {
        solid: "bg-blue-600 text-white",
        outline: "border border-blue-600 text-blue-700 bg-white",
        success: "bg-green-100 text-green-800",
        danger: "bg-red-100 text-red-800",
        warning: "bg-yellow-100 text-yellow-800",
        info: "bg-blue-100 text-blue-800",
    };
    return (
        <span className={cn(base, variants[variant] || "", className)} {...props} />
    );
}
import { Clock, ArrowRight, AlertTriangle, CheckCircle } from "lucide-react";
import Header from "../../components/Grievance/Header";

const EscalationPolicy = () => {
  const escalationLevels = [
    {
      level: 1,
      title: "Assigned Staff",
      timeframe: "48 hours",
      description: "Initial complaint handling by the assigned department staff member",
      responsibilities: [
        "Acknowledge complaint within 4 hours",
        "Investigate the issue thoroughly",
        "Communicate with student if more information needed",
        "Attempt resolution within timeframe",
        "Update complaint status regularly"
      ],
      escalationTriggers: [
        "No response from staff within 48 hours",
        "Student requests escalation",
        "Complex issue requiring higher authority"
      ]
    },
    {
      level: 2,
      title: "Department Head",
      timeframe: "72 hours",
      description: "Department-level review and intervention",
      responsibilities: [
        "Review complaint details and previous actions",
        "Coordinate with relevant staff members",
        "Make departmental policy decisions",
        "Allocate additional resources if needed",
        "Ensure resolution or proper escalation"
      ],
      escalationTriggers: [
        "Department head inactive for 72 hours",
        "Issue requires cross-departmental coordination",
        "Student dissatisfied with department response"
      ]
    },
    {
      level: 3,
      title: "Nodal Officer",
      timeframe: "96 hours",
      description: "University-level coordination and policy intervention",
      responsibilities: [
        "Cross-departmental issue resolution",
        "Policy interpretation and application",
        "Resource allocation decisions",
        "Staff performance evaluation",
        "Student satisfaction assurance"
      ],
      escalationTriggers: [
        "No resolution after 96 hours",
        "Issue involves multiple departments",
        "Policy violations or systemic issues identified"
      ]
    },
    {
      level: 4,
      title: "Registrar/Vice Chancellor",
      timeframe: "120 hours",
      description: "Final authority decision and institutional policy change",
      responsibilities: [
        "Final decision on complex matters",
        "Institutional policy modifications",
        "Disciplinary actions if required",
        "System-wide process improvements",
        "Student welfare assurance"
      ],
      escalationTriggers: [
        "All previous levels exhausted",
        "Major policy implications",
        "Legal or regulatory compliance issues"
      ]
    }
  ];

  const autoEscalationRules = [
    {
      trigger: "Unassigned Complaint",
      timeframe: "24 hours",
      action: "Auto-assign to department head for staff allocation",
      icon: Clock
    },
    {
      trigger: "Staff Non-Response",
      timeframe: "48 hours",
      action: "Escalate to department head with alert notification",
      icon: AlertTriangle
    },
    {
      trigger: "Poor Feedback Rating",
      timeframe: "Immediately",
      action: "Escalate for review and quality assurance",
      icon: AlertTriangle
    },
    {
      trigger: "Student Escalation Request",
      timeframe: "Immediately",
      action: "Move to next level with priority status",
      icon: ArrowRight
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Escalation Policy
            </h1>
            <p className="text-xl text-gray-600">
              Understanding our structured approach to grievance resolution
            </p>
          </div>

          {/* Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Policy Overview</CardTitle>
              <CardDescription>
                Our escalation policy ensures timely and effective resolution of all grievances
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="p-3 bg-blue-100 rounded-full w-fit mx-auto mb-2">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold">Time-Based</h4>
                  <p className="text-sm text-gray-600">Automatic escalation based on predefined timeframes</p>
                </div>
                <div className="text-center">
                  <div className="p-3 bg-green-100 rounded-full w-fit mx-auto mb-2">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold">Quality-Driven</h4>
                  <p className="text-sm text-gray-600">Escalation triggered by feedback and satisfaction ratings</p>
                </div>
                <div className="text-center">
                  <div className="p-3 bg-orange-100 rounded-full w-fit mx-auto mb-2">
                    <ArrowRight className="w-6 h-6 text-orange-600" />
                  </div>
                  <h4 className="font-semibold">Student-Initiated</h4>
                  <p className="text-sm text-gray-600">Students can request escalation at any time</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Escalation Levels */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Escalation Levels</h2>
            <div className="space-y-6">
              {escalationLevels.map((level, index) => (
                <Card key={level.level}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-3">
                          <Badge className="bg-blue-100 text-blue-800">
                            Level {level.level}
                          </Badge>
                          {level.title}
                        </CardTitle>
                        <CardDescription>{level.description}</CardDescription>
                      </div>
                      <Badge variant="outline" className="text-lg px-3 py-1">
                        {level.timeframe}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-green-700">Key Responsibilities</h4>
                        <ul className="space-y-2">
                          {level.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-red-700">Escalation Triggers</h4>
                        <ul className="space-y-2">
                          {level.escalationTriggers.map((trigger, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-sm">
                              <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                              <span>{trigger}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Auto-Escalation Rules */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Automatic Escalation Rules</CardTitle>
              <CardDescription>
                System-automated escalation triggers to ensure no complaint is left unattended
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {autoEscalationRules.map((rule, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-red-100 rounded-full">
                        <rule.icon className="w-4 h-4 text-red-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{rule.trigger}</h4>
                        <p className="text-sm text-gray-600 mb-1">
                          Timeframe: {rule.timeframe}
                        </p>
                        <p className="text-sm">{rule.action}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Student Rights */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Student Rights & Responsibilities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-green-700">Your Rights</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Timely acknowledgment and response to your complaint</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Regular updates on complaint status and progress</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Request escalation at any point in the process</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Access to staff contact information for direct communication</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Provide feedback on resolution quality</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-blue-700">Your Responsibilities</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5" />
                      <span>Provide accurate and complete information</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5" />
                      <span>Respond promptly to requests for additional information</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5" />
                      <span>Maintain respectful communication with staff</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5" />
                      <span>Use the portal for all communications to maintain records</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5" />
                      <span>Provide honest feedback to help improve the system</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Need Help Understanding the Policy?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Grievance Cell</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    For policy clarifications and guidance
                  </p>
                  <p className="text-sm">
                    Email: grievance@gbu.ac.in<br />
                    Phone: +91-120-2344201
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Student Support</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    For assistance with using the portal
                  </p>
                  <p className="text-sm">
                    Email: support@gbu.ac.in<br />
                    Phone: +91-120-2344200
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

export default EscalationPolicy;
