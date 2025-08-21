
import React, { useState } from 'react';
import StudentProfileCard from './StudentProfileCard';
import FeeSummaryCard from './FeeSummaryCard';
import FeeDetailsSection from './FeeDetailsSection';
import PaymentSection from './PaymentSection';
import ImportantNotesCard from './ImportantNotesCard';
// Custom Button component with modern UI and effects
const Button = ({
  onClick,
  variant = "outline",
  className = "",
  children,
  ...props
}) => {
  const base =
    "inline-flex items-center px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    outline:
      "border border-gray-300 bg-white text-gray-800 hover:bg-gray-100 active:bg-gray-200 shadow-sm",
    solid:
      "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 shadow-md",
  };
  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant] || ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
import { ArrowLeft } from 'lucide-react';

import PropTypes from 'prop-types';

const FeeDashboard = ({ onBackToLanding }) => {
  const [showPayment, setShowPayment] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(0);

  const handleMakePayment = (amount) => {
    setSelectedAmount(amount);
    setShowPayment(true);
  };

  const handlePaymentComplete = () => {
    setShowPayment(false);
    setSelectedAmount(0);
  };

  if (showPayment) {
    return (
      <PaymentSection
        amount={selectedAmount}
        onBack={() => setShowPayment(false)}
        onComplete={handlePaymentComplete}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Button
            onClick={onBackToLanding}
            variant="outline"
            className="mb-4 flex items-center gap-2 hover:bg-gray-100"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Login
          </Button>
          <h1 className="text-3xl font-bold text-gray-900">Fee Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your fee payments and view details</p>
        </div>

        {/* Top Grid - Profile and Summary */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <StudentProfileCard />
          <FeeSummaryCard onMakePayment={handleMakePayment} />
        </div>

        {/* Fee Details Section */}
        <div className="mb-8">
          <FeeDetailsSection />
        </div>

        {/* Important Notes */}
        <ImportantNotesCard />
      </div>
    </div>
  );
};

export default FeeDashboard;
FeeDashboard.propTypes = {
  onBackToLanding: PropTypes.func.isRequired,
};

