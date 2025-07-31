import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import BookingCalendar from "../../components/booking/BookingCalendar";
import BookingForm from "../../components/booking/BookingForm";
import { facilities } from "../../components/bookingData/facilities";
import { useToast } from "../../hooks/use-toast";

const FacilityBookingPage = () => {
  const { facilityId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  const facility = facilities.find(f => f.id === facilityId);

  const [selectedDate, setSelectedDate] = React.useState(undefined);
  const [showBookingForm, setShowBookingForm] = React.useState(false);

  const bookedDates = ["2024-12-30", "2024-12-31", "2025-01-15"];
  const pendingDates = ["2025-01-02", "2025-01-10"];

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    if (date) {
      setShowBookingForm(true);
    }
  };

  const handleBookingSubmit = (booking) => {
    console.log("Booking submitted:", booking);
    toast({
      title: "Booking Request Submitted",
      description: "Your booking request has been submitted successfully.",
    });
    setSelectedDate(undefined);
    setShowBookingForm(false);
    navigate("/booking"); // ✅ After submit, back to main
  };

  const handleBookingCancel = () => {
    setShowBookingForm(false);
    setSelectedDate(undefined);
  };

  if (!facility) {
    return (
      <div className="container mx-auto py-12 text-center">
        <p className="text-xl">Facility not found.</p>
        <button
          onClick={() => navigate("/booking")}
          className="mt-4 px-4 py-2 bg-gbu-blue text-white rounded"
        >
          Back to Facilities
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-12">
      <button
        onClick={() => navigate("/booking")}
        className="text-gbu-blue hover:text-gbu-darkBlue mb-4"
      >
        ← Back to Facilities
      </button>

      <h2 className="text-3xl font-bold mb-6 text-gbu-blue">
        Book: {facility.name}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <BookingCalendar
          selectedDate={selectedDate}
          onDateSelect={handleDateSelect}
          bookedDates={bookedDates}
          pendingDates={pendingDates}
        />

        {showBookingForm && selectedDate && (
          <BookingForm
            facility={facility}
            selectedDate={selectedDate}
            onSubmit={handleBookingSubmit}
            onCancel={handleBookingCancel}
          />
        )}
      </div>
    </div>
  );
};

export default FacilityBookingPage;
