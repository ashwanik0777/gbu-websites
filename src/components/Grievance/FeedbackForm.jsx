
import { useState } from "react";
// Button Component
const Button = ({ children, className = "", variant = "default", ...props }) => {
  const variantStyles = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
  };
  return (
    <button
      className={`inline-flex items-center px-4 py-2 rounded-md font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 ${variantStyles[variant] || variantStyles.default} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Textarea Component
const Textarea = ({ className = "", ...props }) => (
  <textarea
    className={`w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${className}`}
    {...props}
  />
);

// Badge Component
const Badge = ({ children, variant = "solid", className = "" }) => {
  const variantClasses = {
    solid: "bg-gray-100 text-gray-800",
    outline: "border border-gray-300 text-gray-800 bg-white",
    secondary: "bg-yellow-100 text-yellow-800",
  };
  return (
    <span
      className={`inline-flex items-center text-sm font-medium px-2.5 py-1 rounded-full ${variantClasses[variant] || variantClasses.solid} ${className}`}
    >
      {children}
    </span>
  );
};

// Card Components
const Card = ({ children, className = "" }) => (
  <div className={`bg-white shadow-md border rounded-lg ${className}`}>{children}</div>
);
const CardHeader = ({ children }) => <div className="border-b px-6 py-4">{children}</div>;
const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-xl font-semibold ${className}`}>{children}</h3>
);
const CardDescription = ({ children }) => (
  <p className="text-sm text-gray-500 mt-1">{children}</p>
);
const CardContent = ({ children, className = "" }) => (
  <div className={`px-6 py-4 ${className}`}>{children}</div>
);

import { useToast } from "../../hooks/use-toast";
import { Star, CheckCircle, ThumbsUp } from "lucide-react";

const FeedbackForm = () => {
  const { toast } = useToast();
  const [selectedComplaint, setSelectedComplaint] = useState(null);

  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [hoveredStar, setHoveredStar] = useState(0);

  // Mock resolved complaints
  const resolvedComplaints = [
    {
      id: "GRV-2024-002",
      subject: "Hostel Wi-Fi connectivity issue",
      resolvedDate: "2024-01-14",
      assignedTo: "IT Support Team",
      hasFeedback: false
    },
    {
      id: "GRV-2024-005",
      subject: "Library book renewal problem",
      resolvedDate: "2024-01-12", 
      assignedTo: "Library Staff",
      hasFeedback: true,
      previousRating: 4,
      previousFeedback: "Issue was resolved quickly and efficiently."
    }
  ];

  const handleComplaintSelect = (complaintId) => {
  setSelectedComplaint(complaintId);
  setRating(0);
  setFeedback("");
};

const handleStarClick = (starIndex) => {
  setRating(starIndex);
};

const handleSubmitFeedback = () => {
  if (!selectedComplaint) {
    toast({
      title: "Error",
      description: "Please select a complaint to provide feedback for",
      variant: "destructive",
    });
    return;
  }

  if (rating === 0) {
    toast({
      title: "Error",
      description: "Please provide a rating",
      variant: "destructive",
    });
    return;
  }

  toast({
    title: "Feedback Submitted",
    description: "Thank you for your feedback. It helps us improve our services.",
  });

  // Reset form
  setSelectedComplaint(null);
  setRating(0);
  setFeedback("");
};

const getRatingText = (rating) => {
  switch (rating) {
    case 1:
      return "Very Dissatisfied";
    case 2:
      return "Dissatisfied";
    case 3:
      return "Neutral";
    case 4:
      return "Satisfied";
    case 5:
      return "Very Satisfied";
    default:
      return "";
  }
};
  const selectedComplaintData = resolvedComplaints.find(c => c.id === selectedComplaint);

  return (
    <div className="space-y-6">
      {/* Complaint Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Select Resolved Complaint</CardTitle>
          <CardDescription>
            Choose a resolved complaint to provide feedback
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {resolvedComplaints.map((complaint) => (
              <div
                key={complaint.id}
                className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                  selectedComplaint === complaint.id 
                    ? "border-blue-500 bg-blue-50" 
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => handleComplaintSelect(complaint.id)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <Badge variant="outline">{complaint.id}</Badge>
                      {complaint.hasFeedback ? (
                        <Badge className="bg-green-100 text-green-800">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Feedback Given
                        </Badge>
                      ) : (
                        <Badge variant="secondary">Pending Feedback</Badge>
                      )}
                    </div>
                    <h4 className="font-medium">{complaint.subject}</h4>
                    <p className="text-sm text-gray-600">
                      Resolved on {complaint.resolvedDate} by {complaint.assignedTo}
                    </p>
                  </div>
                  
                  {complaint.hasFeedback && (
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${
                            star <= (complaint.previousRating || 0)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">
                        ({complaint.previousRating}/5)
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {resolvedComplaints.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                <CheckCircle className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>No resolved complaints available for feedback</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Feedback Form */}
      {selectedComplaint && selectedComplaintData && (
        <Card>
          <CardHeader>
            <CardTitle>Provide Feedback</CardTitle>
            <CardDescription>
              Rate the resolution quality for complaint {selectedComplaint}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Show previous feedback if exists */}
            {selectedComplaintData.hasFeedback && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-medium text-green-800 mb-2">Previous Feedback</h4>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= (selectedComplaintData.previousRating || 0)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-green-700">
                    {getRatingText(selectedComplaintData.previousRating || 0)}
                  </span>
                </div>
                <p className="text-sm text-green-700">{selectedComplaintData.previousFeedback}</p>
                <p className="text-xs text-green-600 mt-2">
                  You can update your feedback below if needed.
                </p>
              </div>
            )}

            {/* Rating */}
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Overall Satisfaction Rating *
              </label>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleStarClick(star)}
                    onMouseEnter={() => setHoveredStar(star)}
                    onMouseLeave={() => setHoveredStar(0)}
                    className="focus:outline-none"
                  >
                    <Star
                      className={`w-8 h-8 transition-colors ${
                        star <= (hoveredStar || rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  </button>
                ))}
              </div>
              {rating > 0 && (
                <p className="text-sm text-gray-600">
                  Rating: {rating}/5 - {getRatingText(rating)}
                </p>
              )}
            </div>

            {/* Comments */}
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Additional Comments (Optional)
              </label>
              <Textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Please share your experience with the resolution process, staff responsiveness, and overall satisfaction..."
                rows={4}
              />
            </div>

            {/* Feedback Categories */}
            <div className="space-y-3">
              <label className="text-sm font-medium">What went well? (Check all that apply)</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Quick response time",
                  "Professional staff behavior", 
                  "Clear communication",
                  "Complete resolution",
                  "Follow-up provided",
                  "Easy process"
                ].map((item) => (
                  <label key={item} className="flex items-center space-x-2 text-sm">
                    <input type="checkbox" className="rounded" />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex space-x-4">
              <Button onClick={handleSubmitFeedback} className="bg-blue-600 hover:bg-blue-700">
                <ThumbsUp className="w-4 h-4 mr-2" />
                Submit Feedback
              </Button>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSelectedComplaint(null);
                  setRating(0);
                  setFeedback("");
                }}
              >
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Feedback Guidelines */}
      <Card>
        <CardHeader>
          <CardTitle>Feedback Guidelines</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <p>Your feedback helps us improve our grievance resolution process</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <p>Ratings below 3 stars may trigger a review of the resolution</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <p>Feedback is confidential and used only for service improvement</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <p>You can update your feedback within 30 days of resolution</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeedbackForm;
