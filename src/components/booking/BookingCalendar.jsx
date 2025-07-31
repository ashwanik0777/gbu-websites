import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { format, isAfter, isBefore, startOfDay } from "date-fns";
// import "react-day-picker/dist/style.css";

// Utility to join class names
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Basic button style helper
function buttonVariants({ variant = "outline" } = {}) {
  const base =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2";
  const variants = {
    outline: "border border-gray-300 bg-white hover:bg-blue-50 text-gray-800",
    ghost: "hover:bg-blue-50 text-gray-800",
  };
  return cn(base, variants[variant]);
}

// ✅ Internal DatePicker component
const DatePicker = ({
  selectedDate,
  onSelect,
  isDateDisabled,
  modifiers,
  modifiersStyles,
}) => (
  <DayPicker
    mode="single"
    selected={selectedDate}
    onSelect={(date) => {
      console.log("👉 You clicked:", date);
      if (date && !isDateDisabled(date)) {
        console.log("✅ Valid date, calling onSelect");
        onSelect(date);
      } else {
        console.log("❌ Disabled date clicked, form won’t open.");
      }
    }}
    showOutsideDays
    disabled={isDateDisabled}
    modifiers={modifiers}
    modifiersStyles={modifiersStyles}
    className="rounded-md border"
    classNames={{
      months:
        "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
      month: "space-y-4",
      caption: "flex justify-center pt-1 relative items-center",
      caption_label: "text-sm font-medium",
      nav: "space-x-1 flex items-center",
      nav_button: cn(
        buttonVariants({ variant: "outline" }),
        "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
      ),
      nav_button_previous: "absolute left-1",
      nav_button_next: "absolute right-1",
      table: "w-full border-collapse space-y-1",
      head_row: "", // ✅ Removed flex for alignment
      head_cell:
        "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
      row: "", // ✅ Removed flex for alignment
      cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
      day: cn(
        buttonVariants({ variant: "ghost" }),
        "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
      ),
      day_range_end: "day-range-end",
      day_selected:
        "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
      day_today: "bg-accent text-accent-foreground",
      day_outside:
        "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
      day_disabled: "text-muted-foreground opacity-50",
      day_range_middle:
        "aria-selected:bg-accent aria-selected:text-accent-foreground",
      day_hidden: "invisible",
    }}
    components={{
      IconLeft: () => <ChevronLeft className="h-4 w-4" />,
      IconRight: () => <ChevronRight className="h-4 w-4" />,
    }}
  />
);

// ✅ BookingCalendar component uses internal DatePicker
const BookingCalendar = ({
  selectedDate,
  onDateSelect,
  bookedDates = [],
  pendingDates = [],
}) => {
  const today = startOfDay(new Date());

  const isDateBooked = (date) =>
    bookedDates.includes(format(date, "yyyy-MM-dd"));
  const isDatePending = (date) =>
    pendingDates.includes(format(date, "yyyy-MM-dd"));

  const isDateDisabled = (date) => {
    const result = isBefore(startOfDay(date), today) || isDateBooked(date);
    console.log(
      `Check disabled for ${format(date, "yyyy-MM-dd")}:`,
      result ? "DISABLED" : "ENABLED"
    );
    return result;
  };

  const modifiers = {
    booked: (date) => isDateBooked(date),
    pending: (date) => isDatePending(date),
    available: (date) =>
      !isDateBooked(date) && !isDatePending(date) && isAfter(date, today),
  };

  const modifiersStyles = {
    booked: { backgroundColor: "#ef4444", color: "white" },
    pending: { backgroundColor: "#eab308", color: "white" },
    available: { backgroundColor: "#10b981", color: "white" },
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-md">
      <div className="flex flex-col gap-2 p-6">
        <h3 className="text-2xl font-semibold leading-none tracking-tight text-blue-700">
          Select Date
        </h3>
        <div className="flex flex-wrap gap-3 mt-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-700">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            <span className="text-sm text-gray-700">Booked</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
            <span className="text-sm text-gray-700">Pending</span>
          </div>
        </div>
      </div>
      <div className="p-6 pt-0">
        <DatePicker
          selectedDate={selectedDate}
          onSelect={onDateSelect}
          isDateDisabled={isDateDisabled}
          modifiers={modifiers}
          modifiersStyles={modifiersStyles}
        />

        {selectedDate && (
          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm font-medium text-blue-700">
              Selected Date: {format(selectedDate, "PPPP")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingCalendar;
