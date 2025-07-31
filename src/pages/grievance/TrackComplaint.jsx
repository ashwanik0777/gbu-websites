import Header from "../../components/Grievance/Header";
import ComplaintTimeline from "../../components/Grievance/ComplaintTimeline";

const TrackComplaint = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Track Your Complaint
            </h1>
            <p className="text-xl text-gray-600">
              Enter your ticket ID to view real-time status and progress timeline
            </p>
          </div>
          
          <ComplaintTimeline />
        </div>
      </div>
    </div>
  );
};

export default TrackComplaint;
