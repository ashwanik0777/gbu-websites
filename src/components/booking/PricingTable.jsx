import * as React from "react";

// ✅ Simple cn helper
function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}

// ✅ Card components (soft shadow, subtle elevation)
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-2xl bg-white text-black shadow-lg transition overflow-hidden",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col gap-1.5 p-5 border-b border-gray-100", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-base font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-5 pt-4", className)} {...props} />
));
CardContent.displayName = "CardContent";

// ✅ PricingTable with modern look
const PricingTable = ({
  rentRate,
  capacity,
  timeSlots,
  userRole = "outsider",
  roomCount,
}) => {
  const getRoleBasedPrice = () => {
    switch (userRole) {
      case "employee":
        return rentRate.employee || rentRate.peak;
      case "student":
        return rentRate.student || rentRate.offPeak;
      default:
        return rentRate.outsider || rentRate.peak;
    }
  };

  return (
    <Card className="mt-6 shadow-2xl border-gray-300 border-2">
      <CardHeader>
        <CardTitle className="text-blue-700">Pricing & Details</CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <p className="text-gray-500 font-medium mb-1">Peak Season</p>
            <p className="text-lg font-bold text-blue-700">
              ₹{rentRate.peak.toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-gray-500 font-medium mb-1">Off-Peak</p>
            <p className="text-lg font-bold text-green-600">
              ₹{rentRate.offPeak.toLocaleString()}
            </p>
          </div>
        </div>

        {(rentRate.halfDay || rentRate.fullDay) && (
          <div className="grid grid-cols-2 gap-6 text-sm border-t border-gray-100 pt-4">
            {rentRate.halfDay && (
              <div>
                <p className="text-gray-500 font-medium mb-1">Half Day</p>
                <p className="text-lg font-bold text-purple-600">
                  ₹{rentRate.halfDay.toLocaleString()}
                </p>
              </div>
            )}
            {rentRate.fullDay && (
              <div>
                <p className="text-gray-500 font-medium mb-1">Full Day</p>
                <p className="text-lg font-bold text-indigo-600">
                  ₹{rentRate.fullDay.toLocaleString()}
                </p>
              </div>
            )}
          </div>
        )}

        <div className="space-y-4 border-t border-gray-100 pt-4">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500 font-medium">
              Rate ({userRole}):
            </span>
            <span className="text-xl font-bold text-red-600">
              ₹{getRoleBasedPrice().toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500 font-medium">Capacity:</span>
            <span className="font-semibold">
              {capacity} {capacity > 1 ? "seats" : "person"}
            </span>
          </div>

          {roomCount && (
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500 font-medium">Available Rooms:</span>
              <span className="font-semibold text-green-600">{roomCount}</span>
            </div>
          )}

          {timeSlots && timeSlots.length > 0 && (
            <div>
              <span className="text-gray-500 font-medium text-sm">
                Available Slots:
              </span>
              <div className="flex flex-wrap gap-2 mt-3">
                {timeSlots.map((slot, index) => (
                  <span
                    key={index}
                    className="text-sm bg-blue-100 text-blue-900 px-3 py-1 rounded-full"
                  >
                    {slot}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PricingTable;
