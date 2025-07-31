import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
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
} from 'lucide-react';
import Header from '../../components/announcement/Header';
import SocialShare from '../../components/announcement/SocialShare';
import RelatedEvents from '../../components/announcement/RelatedEvents';

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
  <div className={`border-b px-8 py-6 bg-blue-50 rounded-t-2xl ${className}`} {...props}>
    {children}
  </div>
);
const CardTitle = ({ children, className = "", ...props }) => (
  <h2 className={`text-2xl font-extrabold text-blue-700 tracking-tight ${className}`} {...props}>
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
  <div className={`flex gap-2 bg-blue-100 rounded-xl p-2 mb-4 shadow-inner ${className}`}>
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


// --- MOCK DATA ---
const mockEvents = [
  {
    id: 1,
    title: "GBU Tech Symposium 2024",
    description:
      "A state-level symposium with talks and presentations on cutting-edge technologies by students and industry experts.",
    date: "2024-07-10T09:00:00Z",
    endDate: "2024-07-10T17:00:00Z",
    venue: "Main Auditorium, GBU Campus",
    organizer: "School of Engineering, GBU",
    type: "Seminar",
    mode: "Offline",
    isUpcoming: true,
    registrationUrl: "https://forms.gle/gbu-tech-symposium-2024",
    images: [
      "https://www.ux4g.gov.in/assets/img/awareness-workshop/gbu-19-11-24/900x18.webp"
    ],
  },
  {
    id: 2,
    title: "Annual Science & Innovation Fair",
    description:
      "Students present their innovative science projects and working models to guests and faculty.",
    date: "2023-12-15T10:00:00Z",
    endDate: "2023-12-15T16:00:00Z",
    venue: "Exhibition Hall, GBU Campus",
    organizer: "School of Science, GBU",
    type: "Fair",
    mode: "Offline",
    isUpcoming: false,
    registrationUrl: "",
    images: [
      "https://images.openai.com/thumbnails/url/NS93cXicu1mSUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw4KLjQzjIp3CzfKiM92zQnISzINLC8oqkpKMss0LI80zDcqMM_Mcs5w9IuwqAy19E6KSHYyD3JJSY0qcVQrBgAavCnC"
    ],
  },
  {
    id: 3,
    title: "Mathematics Research Workshop",
    description:
      "An intensive workshop on modern mathematics and its applications in research and industry.",
    date: "2024-08-05T09:30:00Z",
    endDate: "2024-08-05T15:30:00Z",
    venue: "Lecture Hall 3, Academic Block, GBU",
    organizer: "Department of Mathematics, GBU",
    type: "Workshop",
    mode: "Offline",
    isUpcoming: true,
    registrationUrl: "https://forms.gle/mathematics-research-workshop-gbu",
    images: [
      "https://www.ux4g.gov.in/assets/img/awareness-workshop/gbu-19-11-24/900x17.webp"
    ],
  },
  {
    id: 4,
    title: "Abhivyakti: Cultural Fest",
    description:
      "GBU’s flagship cultural festival showcasing dance, drama, music, and literary competitions.",
    date: "2023-11-20T17:00:00Z",
    endDate: "2023-11-20T22:00:00Z",
    venue: "Open Air Theatre, GBU",
    organizer: "Cultural Committee, GBU",
    type: "Festival",
    mode: "Offline",
    isUpcoming: false,
    registrationUrl: "",
    images: [
      "https://www.indianarrative.com/wp-content/uploads/2024/12/India-Nepal-Cultural-Festival-01-1024x683.jpeg"
    ],
  },
  {
    id: 5,
    title: "AI & Robotics Guest Lecture",
    description:
      "A guest lecture on Artificial Intelligence, Robotics, and future technology trends.",
    date: "2024-09-01T11:00:00Z",
    endDate: "2024-09-01T13:00:00Z",
    venue: "Seminar Hall B, GBU",
    organizer: "School of ICT, GBU",
    type: "Lecture",
    mode: "Hybrid",
    isUpcoming: true,
    registrationUrl: "https://forms.gle/ai-robotics-guest-lecture-gbu",
    images: [
      "https://gburif.org/images/intro-carousel/dsf8939-b-copy.jpg"
    ],
  },
  {
    id: 6,
    title: "GBU Annual Sports Meet",
    description:
      "Annual inter-departmental sports meet with athletics, football, cricket, and indoor games.",
    date: "2023-10-10T08:00:00Z",
    endDate: "2023-10-10T18:00:00Z",
    venue: "Sports Ground, GBU",
    organizer: "Sports Council, GBU",
    type: "Sports",
    mode: "Offline",
    isUpcoming: false,
    registrationUrl: "",
    images: [
      "https://www.gbu.ac.in/Content/img/sports/banner2.jpg"
    ],
  },
  {
    id: 7,
    title: "National Research Paper Presentation",
    description:
      "Students and scholars present research papers on various disciplines at national level.",
    date: "2024-07-25T14:00:00Z",
    endDate: "2024-07-25T17:00:00Z",
    venue: "Conference Room 1, GBU",
    organizer: "Research Cell, GBU",
    type: "Presentation",
    mode: "Offline",
    isUpcoming: true,
    registrationUrl: "https://forms.gle/national-research-presentation-gbu",
    images: [
      "https://www.ic3ecsbhi.com/Events/Picture1.jpg"
    ],
  },
  {
    id: 8,
    title: "GBU Alumni Meet 2023",
    description:
      "GBU alumni reconnect and share industry insights with current students.",
    date: "2023-09-05T18:00:00Z",
    endDate: "2023-09-05T21:00:00Z",
    venue: "Banquet Hall, GBU",
    organizer: "Alumni Association, GBU",
    type: "Meet",
    mode: "Offline",
    isUpcoming: false,
    registrationUrl: "",
    images: [
      "https://images.openai.com/thumbnails/url/iYaDH3icu1mSUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw42KHCJMDJ3DMnKCyuPzLdMCw9xKa_yiMgyKHNLssirqDAsTzQzzQhNdfJOTbLQ9c72cjfJSC2pSCwPKFcrBgAWxioa"
    ],
  },
  {
    id: 9,
    title: "NSS Blood Donation Camp",
    description:
      "Organized by NSS volunteers to collect blood for local hospitals and awareness drive.",
    date: "2024-07-05T09:00:00Z",
    endDate: "2024-07-05T15:00:00Z",
    venue: "Medical Centre, GBU",
    organizer: "NSS Unit, GBU",
    type: "Social Service",
    mode: "Offline",
    isUpcoming: true,
    registrationUrl: "https://forms.gle/nss-blood-donation-gbu",
    images: [
      "https://nss.gbu.ac.in/uploads/eventsfiles/photos/66ffb64b39157_WhatsApp%20Image%202024-04-19%20at%201.59.17%20PM.jpeg"
    ],
  },
  {
    id: 10,
    title: "International Yoga Day",
    description:
      "Mass yoga session for students and staff promoting healthy living and mindfulness.",
    date: "2023-06-21T06:00:00Z",
    endDate: "2023-06-21T08:00:00Z",
    venue: "Sports Complex Lawn, GBU",
    organizer: "Wellness Club, GBU",
    type: "Wellness",
    mode: "Offline",
    isUpcoming: false,
    registrationUrl: "",
    images: [
      "https://images.openai.com/thumbnails/url/-F4ohXicu1mSUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw6yNHIy1zUsTgtKys-qMC0v9g41dorK8M8qSM7KDixODy8NdfTNzi9OLK6IKvc0cjKuiM8pLjVwz_RMcVQrBgAhZyqH"
    ],
  },
  {
    id: 11,
    title: "Guest Lecture: Industry 5.0",
    description:
      "A talk by industry leaders on Industry 5.0, smart factories, and the future of work.",
    date: "2024-07-18T11:00:00Z",
    endDate: "2024-07-18T13:00:00Z",
    venue: "Seminar Hall A, GBU",
    organizer: "School of Management, GBU",
    type: "Lecture",
    mode: "Hybrid",
    isUpcoming: true,
    registrationUrl: "https://forms.gle/guest-lecture-industry5-gbu",
    images: [
      "https://www.ux4g.gov.in/assets/img/awareness-workshop/gbu-19-11-24/900x14.webp"
    ],
  },
  {
    id: 12,
    title: "Coding Club Hackathon",
    description:
      "24-hour coding marathon for students to build tech solutions and win exciting prizes.",
    date: "2023-10-30T09:00:00Z",
    endDate: "2023-10-30T09:00:00Z",
    venue: "Innovation Lab, GBU",
    organizer: "Coding Club, GBU",
    type: "Competition",
    mode: "Offline",
    isUpcoming: false,
    registrationUrl: "",
    images: [
      "https://raw.githubusercontent.com/K4R7IK/Glitch-Poster/master/poster/ctf.png"
    ],
  },
  {
    id: 13,
    title: "GBU Startup Pitch Day",
    description:
      "Students pitch their startup ideas to investors and mentors to get funding and incubation support.",
    date: "2024-08-20T10:00:00Z",
    endDate: "2024-08-20T16:00:00Z",
    venue: "Innovation Centre, GBU",
    organizer: "Incubation Cell, GBU",
    type: "Competition",
    mode: "Offline",
    isUpcoming: true,
    registrationUrl: "https://forms.gle/gbu-startup-pitch-day",
    images: [
      "https://www.gbu.ac.in/Content/gbudata/incubation/Incubation_Pic9.jpg"
    ],
  },
  {
    id: 14,
    title: "GBU Photography Exhibition",
    description:
      "Photography club exhibition displaying student works on campus life and nature.",
    date: "2023-09-25T10:00:00Z",
    endDate: "2023-09-25T17:00:00Z",
    venue: "Art Gallery, GBU",
    organizer: "Photography Club, GBU",
    type: "Exhibition",
    mode: "Offline",
    isUpcoming: false,
    registrationUrl: "",
    images: [
      "https://image-static.collegedunia.com/public/college_data/images/campusimage/1421489668197469_122196337857221_100002005655347_147553_4172796_n.jpg"
    ],
  },
  {
    id: 15,
    title: "Environmental Awareness Drive",
    description:
      "Tree plantation and cleanliness drive by students under the GBU Eco Club.",
    date: "2024-09-10T08:00:00Z",
    endDate: "2024-09-10T12:00:00Z",
    venue: "GBU Campus",
    organizer: "Eco Club, GBU",
    type: "Social Service",
    mode: "Offline",
    isUpcoming: true,
    registrationUrl: "https://forms.gle/environmental-awareness-drive-gbu",
    images: [
      "https://www.gniotgroup.edu.in/lifegniotimg/1633936837-244588932_4383100388473842_7973588752178033120_n.jpg"
    ],
  }
];



// --- UTILS ---
function format(date, formatStr) {
  const d = typeof date === "string" ? new Date(date) : date;
  const pad = n => n.toString().padStart(2, "0");
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
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
  const event = mockEvents.find(item => String(item.id) === String(id));

  if (!event) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-extrabold text-blue-700 mb-6">Event not found</h1>
          <Link to="/announcements/event-calendar">
            <Button>Back to Events</Button>
          </Link>
        </div>
      </div>
    );
  }

  const getTypeColor = () => 'bg-blue-600 text-white';
const getModeColor = () => 'bg-blue-600 text-white';

  const addToGoogleCalendar = () => {
    const startDate = new Date(event.date);
    const endDate = event.endDate
      ? new Date(event.endDate)
      : new Date(startDate.getTime() + 2 * 60 * 60 * 1000);
    const formatDate = (date) =>
      date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      event.title,
    )}&dates=${formatDate(startDate)}/${formatDate(
      endDate,
    )}&details=${encodeURIComponent(
      event.description,
    )}&location=${encodeURIComponent(event.venue)}`;
    window.open(googleCalendarUrl, '_blank');
  };

  const agenda = [
    { time: '09:00 AM', activity: 'Registration & Welcome Coffee' },
    { time: '10:00 AM', activity: 'Opening Ceremony' },
    { time: '11:00 AM', activity: 'Keynote Address' },
    { time: '12:30 PM', activity: 'Panel Discussion' },
    { time: '01:30 PM', activity: 'Lunch Break' },
    { time: '02:30 PM', activity: 'Technical Sessions' },
    { time: '04:00 PM', activity: 'Networking & Closing' },
  ];
  const speakers = [
    { name: 'Dr. Rajesh Kumar', designation: 'Professor, IIT Delhi', topic: 'AI in Healthcare' },
    { name: 'Prof. Anita Sharma', designation: 'Director, AIIMS', topic: 'Medical Innovation' },
    { name: 'Mr. Vikram Singh', designation: 'CTO, TechCorp', topic: 'Industry Perspective' },
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
              {Array.isArray(event.images) && event.images[0] && (
                <div className="absolute inset-0">
                  <img
                    src={event.images[0]}
                    alt={event.title}
                    className="w-full h-full object-cover scale-105 brightness-80"
                  />
                  <div className="absolute inset-0 bg-transparent" />
                </div>
              )}
              <div className="relative p-10 md:p-16 text-white">
                <div className="flex flex-wrap gap-3 mb-6">
                  <Badge className={`${getTypeColor(event.type)} shadow-lg`}>{event.type}</Badge>
                  <Badge className={`${getModeColor(event.mode)} shadow-lg`}>{event.mode}</Badge>
                  {!event.isUpcoming && (
                    <Badge variant="outline" className="text-white border-white/70 border-solid border-[1.5px]">
                      Completed
                    </Badge>
                  )}
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">{event.title}</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-base">
                  <div className="flex items-center">
                    <Calendar size={20} className="mr-3" />
                    <div>
                      <div>{format(new Date(event.date), 'MMMM dd, yyyy')}</div>
                      {event.endDate && <div>to {format(new Date(event.endDate), 'MMM dd, yyyy')}</div>}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={20} className="mr-3" />
                    <div>{event.venue}</div>
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

              <TabsContent value="overview" className='h-full'>
                <Card>
                  <CardHeader>
                    <CardTitle>About This Event</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed mb-8 text-lg">{event.description}</p>
                    <div className="border-t pt-8">
                      <h3 className="text-xl font-bold mb-4 text-blue-700">Contact Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-center">
                          <Phone size={18} className="mr-3 text-blue-600" />
                          <span className="text-base font-medium">+91 120 234 5678</span>
                        </div>
                        <div className="flex items-center">
                          <Mail size={18} className="mr-3 text-blue-600" />
                          <span className="text-base font-medium">events@gbu.ac.in</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="agenda" className='h-auto'>
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
                            <p className="font-semibold text-lg">{item.activity}</p>
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
                        <div key={index} className="p-6 border rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 shadow">
                          <h4 className="font-bold text-xl mb-1">{speaker.name}</h4>
                          <p className="text-blue-600 text-base font-medium">{speaker.designation}</p>
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
                      <p className="text-gray-500">No images available for this event.</p>
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
                      <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
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

                  <SocialShare url={window.location.href} title={event.title} className="w-full" />

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
                      <p className="text-sm text-gray-600 mt-2">Scan to share</p>
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
