import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Users,
  ExternalLink,
  CalendarPlus,
  Download,
  Phone,
  Mail,
  QrCode,
} from "lucide-react";
import Header from "../../components/announcement/Header";
import SocialShare from "../../components/announcement/SocialShare";
import RelatedEvents from "../../components/announcement/RelatedEvents";
import apiClient from "../../services/apiClient";

// --- Solid Color Button ---
const Button = ({
  children,
  variant = "default",
  size = "md",
  asChild,
  className = "",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center rounded-lg font-semibold shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 bg-white hover:bg-blue-50",
  };
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-7 py-2.5 text-lg",
  };
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  if (asChild) {
    const child = React.Children.only(children);
    return React.cloneElement(child, {
      className: `${child.props.className || ""} ${classes}`.trim(),
      ...props,
    });
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

// --- Solid Badge ---
const Badge = ({ children, className = "", variant = "solid", ...props }) => {
  const base =
    "inline-block px-3 py-1 rounded-full text-xs font-bold shadow-sm tracking-wide";
  const variants = {
    solid: "bg-blue-600 text-white",
    outline: "border border-current text-inherit bg-transparent",
  };
  return (
    <span className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </span>
  );
};

// --- Solid Card ---
const Card = ({ children, className = "", ...props }) => (
  <div
    className={`bg-white rounded-2xl shadow-xl border border-gray-200 border-solid hover:shadow-2xl transition-shadow duration-300${className}`}
    {...props}
  >
    {children}
  </div>
);
const CardHeader = ({ children, className = "", ...props }) => (
  <div
    className={`border-b px-8 py-6 bg-blue-50 rounded-t-2xl ${className}`}
    {...props}
  >
    {children}
  </div>
);
const CardTitle = ({ children, className = "", ...props }) => (
  <h2
    className={`text-2xl font-extrabold text-blue-700 tracking-tight ${className}`}
    {...props}
  >
    {children}
  </h2>
);
const CardContent = ({ children, className = "", ...props }) => (
  <div className={`px-8 py-6 ${className}`} {...props}>
    {children}
  </div>
);

// --- Tabs ---
const TabsContext = React.createContext();
const Tabs = ({ defaultValue, children, className = "" }) => {
  const [value, setValue] = React.useState(defaultValue);
  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
};
const TabsList = ({ children, className = "" }) => (
  <div
    className={`flex gap-2 bg-blue-100 rounded-xl p-2 mb-4 shadow-inner ${className}`}
  >
    {children}
  </div>
);
const TabsTrigger = ({ value, children, className = "" }) => {
  const { value: active, setValue } = React.useContext(TabsContext);
  const isActive = active === value;
  return (
    <button
      className={`flex-1 px-8 py-3 rounded-lg font-bold uppercase tracking-wide text-lg transition-all duration-200 ${
        isActive
          ? "bg-blue-600 text-white shadow"
          : "text-blue-700 hover:bg-blue-200"
      } ${className}`}
      onClick={() => setValue(value)}
      type="button"
    >
      {children}
    </button>
  );
};
const TabsContent = ({ value, children, className = "" }) => {
  const { value: active } = React.useContext(TabsContext);
  if (active !== value) return null;
  return <div className={className}>{children}</div>;
};


function format(date, formatStr) {
  const d = typeof date === "string" ? new Date(date) : date;
  const pad = (n) => n.toString().padStart(2, "0");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  if (formatStr === "MMMM dd, yyyy") {
    return `${months[d.getMonth()]} ${pad(d.getDate())}, ${d.getFullYear()}`;
  }
  if (formatStr === "MMM dd, yyyy") {
    return `${months[d.getMonth()].slice(0, 3)} ${pad(d.getDate())}, ${d.getFullYear()}`;
  }
  return d.toLocaleDateString();
}

const EventDetail = () => {
  const { id } = useParams();
  const [showQR, setShowQR] = useState(false);
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiClient
      .get(`/eventss/${id}`)
      .then((response) => {
        setEvent(response?.data?.data || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (!event) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-extrabold text-blue-700 mb-6">
            Event not found
          </h1>
          <Link to="/announcements/event-calendar">
            <Button>Back to Events</Button>
          </Link>
        </div>
      </div>
    );
  }

  const getTypeColor = () => "bg-blue-600 text-white";
  const getModeColor = () => "bg-blue-600 text-white";

  const addToGoogleCalendar = () => {
    const startDate = new Date(event.date);
    const endDate = event.endDate
      ? new Date(event.endDate)
      : new Date(startDate.getTime() + 2 * 60 * 60 * 1000);
    const formatDate = (date) =>
      date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      event.title,
    )}&dates=${formatDate(startDate)}/${formatDate(
      endDate,
    )}&details=${encodeURIComponent(
      event.description,
    )}&location=${encodeURIComponent(event.venue)}`;
    window.open(googleCalendarUrl, "_blank");
  };

  const agenda = [
    { time: "09:00 AM", activity: "Registration & Welcome Coffee" },
    { time: "10:00 AM", activity: "Opening Ceremony" },
    { time: "11:00 AM", activity: "Keynote Address" },
    { time: "12:30 PM", activity: "Panel Discussion" },
    { time: "01:30 PM", activity: "Lunch Break" },
    { time: "02:30 PM", activity: "Technical Sessions" },
    { time: "04:00 PM", activity: "Networking & Closing" },
  ];
  const speakers = [
    {
      name: "Dr. Rajesh Kumar",
      designation: "Professor, IIT Delhi",
      topic: "AI in Healthcare",
    },
    {
      name: "Prof. Anita Sharma",
      designation: "Director, AIIMS",
      topic: "Medical Innovation",
    },
    {
      name: "Mr. Vikram Singh",
      designation: "CTO, TechCorp",
      topic: "Industry Perspective",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-2 md:px-8 pt-2 pb-10">
        <div className="mb-4">
          <Link to="/announcements/event-calendar">
            <Button variant="outline" size="sm">
              <ArrowLeft size={16} className="mr-2" />
              Back to Events
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="relative rounded-3xl h-[22rem] overflow-hidden mb-10 shadow-2xl border border-blue-100">
              {/* {Array.isArray(event.coverImageUrl) && event.images[0] && ( */}
              {event.coverImageUrl && (
                <div className="absolute inset-0">
                  <img
                    src={event.coverImageUrl}
                    alt={event.title}
                    className="w-full h-full object-cover scale-105 brightness-80"
                  />
                  <div className="absolute inset-0 bg-transparent" />
                </div>
              )}
              <div className="relative p-10 md:p-16 text-white">
                <div className="flex flex-wrap gap-3 mb-6">
                  <Badge className={`${getTypeColor(event.type)} shadow-lg`}>
                    {event.type}
                  </Badge>
                  <Badge className={`${getModeColor(event.mode)} shadow-lg`}>
                    {event.mode}
                  </Badge>
                  {!event.isUpcoming && (
                    <Badge
                      variant="outline"
                      className="text-white border-white/70 border-solid border-[1.5px]"
                    >
                      Completed
                    </Badge>
                  )}
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
                  {event.title}
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-base">
                  <div className="flex items-center">
                    <Calendar size={20} className="mr-3" />
                    <div>
                      <div>
                        {format(new Date(event.startsAt), "MMMM dd, yyyy")}
                      </div>
                      {event.endDate && (
                        <div>
                          to {format(new Date(event.endsAt), "MMM dd, yyyy")}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={20} className="mr-3" />
                    <div>{event.location}</div>
                  </div>
                  <div className="flex items-center">
                    <Users size={20} className="mr-3" />
                    <div>{event.organizer}</div>
                  </div>
                </div>
              </div>
            </div>

            <Tabs defaultValue="overview" className="space-y-8 ">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="agenda">Agenda</TabsTrigger>
                <TabsTrigger value="speakers">Speakers</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="h-full">
                <Card>
                  <CardHeader>
                    <CardTitle>About This Event</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                      {event.description}
                    </p>
                    <div className="border-t pt-8">
                      <h3 className="text-xl font-bold mb-4 text-blue-700">
                        Contact Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-center">
                          <Phone size={18} className="mr-3 text-blue-600" />
                          <span className="text-base font-medium">
                            +91 120 234 5678
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Mail size={18} className="mr-3 text-blue-600" />
                          <span className="text-base font-medium">
                            events@gbu.ac.in
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="agenda" className="h-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Event Schedule</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-5 ">
                      {agenda.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-5 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-sm"
                        >
                          <div className="bg-blue-600 text-white px-4 py-2 rounded-lg text-base font-bold min-w-[90px] text-center shadow">
                            {item.time}
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-lg">
                              {item.activity}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="speakers">
                <Card>
                  <CardHeader>
                    <CardTitle>Speakers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
                      {speakers.map((speaker, index) => (
                        <div
                          key={index}
                          className="p-6 border rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 shadow"
                        >
                          <h4 className="font-bold text-xl mb-1">
                            {speaker.name}
                          </h4>
                          <p className="text-blue-600 text-base font-medium">
                            {speaker.designation}
                          </p>
                          <p className="text-gray-700 mt-3">{speaker.topic}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="gallery">
                <Card>
                  <CardHeader>
                    <CardTitle>Event Gallery</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {Array.isArray(event.images) && event.images.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {event.images.map((image, index) => (
                          <div
                            key={index}
                            className="aspect-video  h-[300px] overflow-hidden rounded-xl shadow-lg group relative"
                          >
                            <img
                              src={image}
                              alt={`${event.title} - Image ${index + 1}`}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500">
                        No images available for this event.
                      </p>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-8">
            <div className="sticky top-24">
              <Card className="flex flex-col min-h-140  overflow-y-auto">
                <CardHeader>
                  <CardTitle className="text-xl">Actions</CardTitle>
                </CardHeader>

                <CardContent className="flex flex-col gap-4 flex-grow">
                  {event.isUpcoming && event.registrationUrl && (
                    <Button size="lg" className="w-full animate-pulse" asChild>
                      <a
                        href={event.registrationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={22} className="mr-2" />
                        Register Now
                      </a>
                    </Button>
                  )}

                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full"
                    onClick={addToGoogleCalendar}
                  >
                    <CalendarPlus size={22} className="mr-2" />
                    Add to Calendar
                  </Button>

                  <Button size="lg" variant="outline" className="w-full">
                    <Download size={22} className="mr-2" />
                    Download Brochure
                  </Button>

                  <SocialShare
                    url={window.location.href}
                    title={event.title}
                    className="w-full"
                  />

                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full"
                    onClick={() => setShowQR(!showQR)}
                  >
                    <QrCode size={22} className="mr-2" />
                    QR Code
                  </Button>

                  {showQR && (
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl text-center shadow">
                      <div className="w-32 h-32 bg-gray-200 mx-auto rounded-xl flex items-center justify-center">
                        <span className="text-gray-500 text-sm">QR Code</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        Scan to share
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
