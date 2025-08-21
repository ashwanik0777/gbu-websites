import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import BookingCalendar from "../../components/booking/BookingCalendar";
import BookingForm from "../../components/booking/BookingForm";
import { facilities } from "../../components/bookingData/facilities";
import { useToast } from "../../hooks/use-toast";

const FacilityBooking = () => {
  const { facilityId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  const facility = facilities.find(f => f.id === facilityId);
  const [selectedDate, setSelectedDate] = React.useState(undefined);

  const bookedDates = ['2024-12-30', '2024-12-31', '2025-01-15'];
  const pendingDates = ['2025-01-02', '2025-01-10'];

  if (!facility) {
    return (
      <div className="container mx-auto py-12 text-center">
        <p className="text-xl">Facility not found.</p>
        <button
          onClick={() => navigate('/booking')}
          className="mt-4 px-4 py-2 bg-gbu-blue text-white rounded"
        >
          Back to Facilities
        </button>
      </div>
    );
  }

  const handleSubmit = (formData) => {
    console.log("Booking submitted:", formData);
    toast({
      title: "Booking Request Submitted",
      description: "Your booking request has been submitted successfully.",
    });
    setSelectedDate(undefined);
    navigate("/booking"); // ✅ After booking, go back to listing
  };

  return (
    <div className="container mx-auto py-12">
      <button
        onClick={() => navigate('/booking')}
        className="mb-4 bg-gray-300 border-2 border-gray-600 rounded-md px-4 py-2 text-gbu-blue hover:text-gbu-darkBlue"
      >
        ← Back to Facilities
      </button>

      <h2 className="text-3xl font-bold mb-6 text-gbu-blue">
        Book: {facility.name}
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <BookingCalendar
          selectedDate={selectedDate}
          onDateSelect={setSelectedDate}
          bookedDates={bookedDates}
          pendingDates={pendingDates}
        />

        {selectedDate && (
          <BookingForm
            facility={facility}
            selectedDate={selectedDate}
            onSubmit={handleSubmit}
            onCancel={() => setSelectedDate(undefined)}
          />
        )}
      </div>
    </div>
  );
};

export default FacilityBooking;
