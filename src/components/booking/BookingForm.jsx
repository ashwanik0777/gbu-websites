import * as React from "react";
import { format } from "date-fns";

// Utility
function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}

// Slot helper for asChild usage
const Slot = React.forwardRef(({ children, ...props }, ref) =>
  React.cloneElement(children, { ref, ...props })
);
Slot.displayName = "Slot";

// cva helper for button styling
function cva(base, config) {
  return ({ variant, size, className } = {}) => {
    const variantClass = variant ? config.variants.variant[variant] : "";
    const sizeClass = size ? config.variants.size[size] : "";
    return cn(base, variantClass, sizeClass);
  };
}

// Card components
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col h-full",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight text-blue-700",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 flex-1", className)} {...props} />
));
CardContent.displayName = "CardContent";

// Button component
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-200 ease-in-out ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-sm hover:shadow-md",
  {
    variants: {
      variant: {
        default: "bg-blue-600 text-white hover:bg-blue-700",
        outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
      },
      size: {
        default: "h-12 px-5",
        sm: "h-10 px-4 text-sm",
        lg: "h-14 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// Input
const Input = React.forwardRef(({ className, type, ...props }, ref) => (
  <input
    type={type}
    className={cn(
      "flex h-12 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base shadow-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    ref={ref}
    {...props}
  />
));
Input.displayName = "Input";

// Label
const Label = React.forwardRef(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      "block text-sm font-medium leading-none text-gray-700 mb-2",
      className
    )}
    {...props}
  />
));
Label.displayName = "Label";

// Textarea
const Textarea = React.forwardRef(({ className, ...props }, ref) => (
  <textarea
    className={cn(
      "flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base shadow-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    ref={ref}
    {...props}
  />
));
Textarea.displayName = "Textarea";

// Select components
const Select = ({ children }) => <div className="relative">{children}</div>;

const SelectTrigger = ({ children, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="flex h-12 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
  >
    {children}
  </button>
);

const SelectContent = ({ children }) => (
  <div className="absolute z-10 mt-1 w-full rounded-md border border-gray-200 bg-white shadow-md">
    {children}
  </div>
);

const SelectItem = ({ children, value, onValueChange }) => (
  <div
    onClick={() => onValueChange(value)}
    className="cursor-pointer px-4 py-2 hover:bg-blue-50"
  >
    {children}
  </div>
);

const SelectValue = ({ placeholder, value }) => (
  <span className={cn(!value && "text-gray-400")}>
    {value || placeholder}
  </span>
);

const BookingForm = ({ facility, selectedDate, onSubmit, onCancel }) => {
  const [formData, setFormData] = React.useState({
    facilityId: facility.id,
    date: format(selectedDate, "yyyy-MM-dd"),
    startTime: "",
    endTime: "",
    purpose: "",
    organizingDept: "",
    contactEmail: "",
    contactMobile: "",
  });

  const [totalCost, setTotalCost] = React.useState(0);
  const [startOpen, setStartOpen] = React.useState(false);
  const [endOpen, setEndOpen] = React.useState(false);

  const timeSlots = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ];

  const calculateCost = (start, end) => {
    if (!start || !end) return 0;
    const startHour = parseInt(start.split(":")[0]);
    const endHour = parseInt(end.split(":")[0]);
    const duration = endHour - startHour;
    if (duration <= 0) return 0;
    const hourlyRate = facility.rentRate.offPeak / 8;
    return hourlyRate * duration + 500 + 2000;
  };

  const handleInputChange = (field, value) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    if (field === "startTime" || field === "endTime") {
      setTotalCost(
        calculateCost(
          field === "startTime" ? value : formData.startTime,
          field === "endTime" ? value : formData.endTime
        )
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Book {facility.name}</CardTitle>
        <p className="text-md mt-2 text-gray-500">
          Date: {format(selectedDate, "PPPP")}
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label>Start Time</Label>
              <Select>
                <SelectTrigger onClick={() => setStartOpen(!startOpen)}>
                  <SelectValue
                    placeholder="Select start time"
                    value={formData.startTime}
                  />
                </SelectTrigger>
                {startOpen && (
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem
                        key={time}
                        value={time}
                        onValueChange={(v) => {
                          handleInputChange("startTime", v);
                          setStartOpen(false);
                        }}
                      >
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                )}
              </Select>
            </div>
            <div>
              <Label>End Time</Label>
              <Select>
                <SelectTrigger onClick={() => setEndOpen(!endOpen)}>
                  <SelectValue
                    placeholder="Select end time"
                    value={formData.endTime}
                  />
                </SelectTrigger>
                {endOpen && (
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem
                        key={time}
                        value={time}
                        onValueChange={(v) => {
                          handleInputChange("endTime", v);
                          setEndOpen(false);
                        }}
                      >
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                )}
              </Select>
            </div>
          </div>

          <div>
            <Label>Purpose of Event</Label>
            <Textarea
              placeholder="Describe the purpose of your event..."
              value={formData.purpose}
              onChange={(e) => handleInputChange("purpose", e.target.value)}
            />
          </div>

          <div>
            <Label>Organizing Department/Person</Label>
            <Input
              placeholder="Department or person organizing the event"
              value={formData.organizingDept}
              onChange={(e) => handleInputChange("organizingDept", e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label>Contact Email</Label>
              <Input
                type="email"
                placeholder="contact@example.com"
                value={formData.contactEmail}
                onChange={(e) => handleInputChange("contactEmail", e.target.value)}
              />
            </div>
            <div>
              <Label>Contact Mobile</Label>
              <Input
                type="tel"
                placeholder="+91 12345 67890"
                value={formData.contactMobile}
                onChange={(e) => handleInputChange("contactMobile", e.target.value)}
              />
            </div>
          </div>

          {totalCost > 0 && (
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <h4 className="font-semibold mb-2 text-blue-700">Cost Breakdown</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Facility Rent:</span>
                  <span>₹{(totalCost - 2500).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Cleaning Charge:</span>
                  <span>₹500</span>
                </div>
                <div className="flex justify-between">
                  <span>Security Deposit:</span>
                  <span>₹2,000</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between font-semibold">
                  <span>Total Amount:</span>
                  <span>₹{totalCost.toLocaleString()}</span>
                </div>
              </div>
            </div>
          )}
          <div className="flex flex-col md:flex-row gap-4">
            <Button
              type="submit"
              size="lg" // ✅ Bigger button
              className="flex-1"
              disabled={
                !formData.startTime ||
                !formData.endTime ||
                !formData.purpose
              }
            >
              Submit Booking
            </Button>
            <Button
              type="button"
              variant="outline"
              size="lg" // ✅ Bigger button
              onClick={handleCancel}
              className="flex-1"
            >
              Cancel
            </Button>
          </div>

        </form>
      </CardContent>
    </Card>
  );
};

export default BookingForm;
