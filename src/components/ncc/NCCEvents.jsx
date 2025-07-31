import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
} from "lucide-react";
import SearchableWrapper from "../Searchbar/SearchableWrapper";

// Reusable UI components
const Card = ({ children, className = "", ...props }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className={`bg-white rounded-lg shadow  ${className}`}
    {...props}
  >
    {children}
  </motion.div>
);

const CardHeader = ({ children, className = "", ...props }) => (
  <div className={`px-6 py-4 border border-gray-300 ${className}`} {...props}>
    {children}
  </div>
);

const CardTitle = ({ children, className = "", ...props }) => (
  <h3 className={`font-bold text-lg ${className}`} {...props}>
    {children}
  </h3>
);

const CardContent = ({ children, className = "", ...props }) => (
  <div className={`px-6 py-4 ${className}`} {...props}>
    {children}
  </div>
);

const Button = ({
  children,
  className = "",
  variant = "default",
  size = "md",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "bg-white text-blue-700 border border-blue-600 hover:bg-blue-50",
  };
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      type="button"
      className={`${base} ${variants[variant] || variants.default} ${
        sizes[size] || sizes.md
      } ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

const Badge = ({ children, className = "", ...props }) => (
  <span
    className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${className}`}
    {...props}
  >
    {children}
  </span>
);

const Select = ({ value, onValueChange, children }) => {
  const [open, setOpen] = useState(false);

  // Find the label for the selected value
  let selectedLabel = null;
  React.Children.forEach(children, (child) => {
    if (child.type === SelectTrigger) return;
    if (child.type === SelectContent) {
      React.Children.forEach(child.props.children, (item) => {
        if (item.props.value === value) {
          selectedLabel = item.props.children;
        }
      });
    }
  });

  // Clone children and inject open/setOpen/value/onValueChange as needed
  return (
    <div className="relative">
      {React.Children.map(children, (child) => {
        if (child.type === SelectTrigger) {
          return React.cloneElement(child, {
            onClick: () => setOpen((o) => !o),
            children: (
              <>
                <SelectValue
                  value={selectedLabel}
                  placeholder={child.props.children.props.placeholder}
                />
                <svg
                  className="ml-2 h-4 w-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </>
            ),
          });
        }
        if (child.type === SelectContent && open) {
          return React.cloneElement(child, {
            children: React.Children.map(child.props.children, (item) =>
              React.cloneElement(item, {
                onValueChange: (val) => {
                  onValueChange(val);
                  setOpen(false);
                },
                selected: value === item.props.value,
              })
            ),
          });
        }
        return null;
      })}
    </div>
  );
};

const SelectTrigger = ({ children, className = "", ...props }) => (
  <button
    type="button"
    className={`flex items-center justify-between border-gray-300 rounded px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    {...props}
  >
    {children}
  </button>
);
const SelectValue = ({ placeholder, value } = {}) => (
  <span className="truncate">{value || placeholder}</span>
);

const SelectContent = ({ children }) => (
  <div className="absolute z-10 mt-1 w-full bg-white border-gray-300 rounded shadow-lg max-h-60 overflow-auto">
    {children}
  </div>
);

const SelectItem = ({ value, children, onValueChange, selected }) => (
  <div
    className={`px-4 py-2 cursor-pointer hover:bg-blue-100 text-gray-700 ${
      selected ? "bg-blue-100 font-bold" : ""
    }`}
    onClick={() => onValueChange && onValueChange(value)}
    tabIndex={0}
    role="option"
    aria-selected={selected ? "true" : "false"}
  >
    {children}
  </div>
);

const NCCEvents = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [filterCategory, setFilterCategory] = useState("all");

  const events = [
    {
      id: 1,
      title: "Weekly Drill Practice",
      date: new Date(2024, 1, 3),
      time: "06:00 - 08:00",
      venue: "University Parade Ground",
      category: "Training",
      description: "Regular drill and parade practice for all cadets",
    },
    {
      id: 2,
      title: "CATC Registration Deadline",
      date: new Date(2024, 1, 15),
      time: "17:00",
      venue: "NCC Office",
      category: "Deadline",
      description: "Last date for CATC camp registration submission",
    },
    {
      id: 3,
      title: "Adventure Training Camp",
      date: new Date(2024, 1, 20),
      time: "05:00",
      venue: "Adventure Training Institute",
      category: "Camp",
      description:
        "7-day adventure training camp with trekking and survival skills",
    },
    {
      id: 4,
      title: "Shooting Competition",
      date: new Date(2024, 2, 5),
      time: "09:00 - 15:00",
      venue: "Shooting Range",
      category: "Competition",
      description: "Inter-platoon shooting competition with .22 rifles",
    },
    {
      id: 5,
      title: "NCC Day Celebration",
      date: new Date(2024, 2, 15),
      time: "10:00 - 16:00",
      venue: "University Auditorium",
      category: "Celebration",
      description:
        "Annual NCC Day celebration with cultural programs and parade",
    },
  ];

  const upcomingDeadlines = [
    {
      title: "CATC Application",
      date: "15 Feb 2024",
      days: 5,
      priority: "high",
    },
    {
      title: "Medical Fitness Certificate",
      date: "20 Feb 2024",
      days: 10,
      priority: "medium",
    },
    {
      title: "Annual Training Camp Fee",
      date: "28 Feb 2024",
      days: 18,
      priority: "medium",
    },
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const navigateMonth = (direction) => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  const getDaysInMonth = (date) =>
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const getFirstDayOfMonth = (date) =>
    new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const getEventsForDate = (day) =>
    events.filter(
      (e) =>
        e.date.getDate() === day &&
        e.date.getMonth() === currentDate.getMonth() &&
        e.date.getFullYear() === currentDate.getFullYear()
    );

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div key={`empty-${i}`} className="h-24 border border-gray-200"></div>
      );
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dayEvents = getEventsForDate(day);
      const isToday =
        new Date().getDate() === day &&
        new Date().getMonth() === currentDate.getMonth() &&
        new Date().getFullYear() === currentDate.getFullYear();
      days.push(
        <motion.div
          whileHover={{ scale: 1.03 }}
          key={day}
          className={`h-24 border border-gray-200 p-1 overflow-hidden ${
            isToday ? "bg-blue-50 border-blue-300" : "hover:bg-gray-50"
          }`}
        >
          <div
            className={`font-semibold text-sm ${
              isToday ? "text-blue-600" : "text-gray-900"
            }`}
          >
            {day}
          </div>
          <div className="space-y-1 mt-1">
            {dayEvents.slice(0, 2).map((event) => (
              <div
                key={event.id}
                className={`text-xs px-1 py-0.5 rounded text-center truncate ${
                  event.category === "Training"
                    ? "bg-blue-500 text-white"
                    : event.category === "Camp"
                    ? "bg-green-500 text-white"
                    : event.category === "Competition"
                    ? "bg-orange-500 text-white"
                    : event.category === "Deadline"
                    ? "bg-red-500 text-white"
                    : "bg-purple-500 text-white"
                }`}
                title={event.title}
              >
                {event.title}
              </div>
            ))}
            {dayEvents.length > 2 && (
              <div className="text-xs text-gray-500 text-center">
                +{dayEvents.length - 2} more
              </div>
            )}
          </div>
        </motion.div>
      );
    }

    return days;
  };

  return (
    <SearchableWrapper>
      <div className="space-y-8 px-4 sm:px-6 lg:px-20 mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Events & Schedule
          </h2>
          <p className="text-lg text-gray-600">
            Stay updated with NCC training schedules, camps, and important
            deadlines
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <CardTitle className="text-2xl">
                    {currentDate.toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })}
                  </CardTitle>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigateMonth(-1)}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentDate(new Date())}
                    >
                      Today
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigateMonth(1)}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-0 mb-4 text-[10px] sm:text-xs">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                    (day) => (
                      <div
                        key={day}
                        className="h-8 flex items-center justify-center font-semibold text-gray-700 bg-gray-100"
                      >
                        {day}
                      </div>
                    )
                  )}
                </div>
                <div className="grid grid-cols-7 gap-0 border border-gray-200">
                  {renderCalendar()}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-red-600">
                  Upcoming Deadlines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingDeadlines.map((deadline, index) => (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    key={index}
                    className={`border rounded-lg p-3 ${getPriorityColor(
                      deadline.priority
                    )}`}
                  >
                    <h4 className="font-semibold mb-1">{deadline.title}</h4>
                    <div className="flex items-center space-x-2 text-sm">
                      <Calendar className="h-3 w-3" />
                      <span>{deadline.date}</span>
                    </div>
                    <div className="text-sm font-medium mt-1">
                      {deadline.days} days remaining
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <button className="w-full h-10 bg-blue-800 text-white rounded-md font-semibold">
                  Apply for Camp
                </button>
                <button className="w-full h-10 border border-blue-600 text-blue-600 rounded-md font-semibold">
                  View Training Schedule
                </button>
                <button className="w-full h-10 border border-blue-600 text-blue-600 rounded-md font-semibold">
                  Download Calendar
                </button>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
              <CardTitle>Upcoming Events</CardTitle>
              <Select
                value={filterCategory}
                onValueChange={setFilterCategory}
                placeholder="Filter by category"
              >
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Training">Training</SelectItem>
                  <SelectItem value="Camp">Camps</SelectItem>
                  <SelectItem value="Competition">Competitions</SelectItem>
                  <SelectItem value="Deadline">Deadlines</SelectItem>
                  <SelectItem value="Celebration">Celebrations</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {events
              .filter(
                (event) =>
                  filterCategory === "all" || event.category === filterCategory
              )
              .sort((a, b) => a.date.getTime() - b.date.getTime())
              .map((event) => (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  key={event.id}
                  className="border border-gray-300 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">
                      {event.title}
                    </h3>
                    <Badge
                      className={
                        event.category === "Training"
                          ? "bg-blue-100 text-blue-800"
                          : event.category === "Camp"
                          ? "bg-green-100 text-green-800"
                          : event.category === "Competition"
                          ? "bg-orange-100 text-orange-800"
                          : event.category === "Deadline"
                          ? "bg-red-100 text-red-800"
                          : "bg-purple-100 text-purple-800"
                      }
                    >
                      {event.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    {event.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex flex-wrap gap-2 items-center">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date.toLocaleDateString("en-IN")}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{event.venue}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </motion.div>
              ))}
          </CardContent>
        </Card>
      </div>
    </SearchableWrapper>
  );
};

export default NCCEvents;
