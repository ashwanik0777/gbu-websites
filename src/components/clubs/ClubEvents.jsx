
import React, { useState } from 'react';
import { Calendar, MapPin, ExternalLink, Clock, Filter } from 'lucide-react';
import SearchableWrapper from '../Searchbar/SearchableWrapper';
// Card component
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow border ${className}`}>{children}</div>
);

const CardHeader = ({ children, className = "" }) => (
  <div className={`p-4  ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`font-semibold text-xl ${className}`}>{children}</h3>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

// Button component
const Button = ({
  children,
  onClick,
  className = "",
  variant = "default",
  size = "md",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center rounded px-3 py-1.5 font-medium transition focus:outline-none";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 text-black bg-white hover:bg-blue-50",
    dark: "bg-gray-900 text-white hover:bg-gray-800"
  };
  const sizes = {
    sm: "text-sm px-2 py-1",
    md: "text-base",
  };
  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant] || ""} ${sizes[size] || ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Badge component
const Badge = ({ children, className = "" }) => (
  <span
    className={`inline-block rounded px-2 py-0.5 text-xs font-semibold ${className}`}
  >
    {children}
  </span>
);
import { clubsData } from './data/clubsData';



const ClubEvents = ({ club }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const eventTypes = ['all', 'workshop', 'competition', 'cultural', 'social'];

  const filteredEvents = selectedFilter === 'all'
    ? club.events
    : club.events.filter(event => event.type === selectedFilter);

  const getEventTypeColor = (type) => {
    switch (type) {
      case 'workshop': return 'bg-blue-100 text-blue-800';
      case 'competition': return 'bg-red-100 text-red-800';
      case 'cultural': return 'bg-purple-100 text-purple-800';
      case 'social': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const isUpcoming = (dateString) => {
    return new Date(dateString) > new Date();
  };

  return (
    <SearchableWrapper>
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Events & Activities</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 justify-center">
        {eventTypes.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedFilter(type)}
            className={`flex items-center px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 capitalize
        ${selectedFilter === type
                ? "bg-[#0F172A] text-white shadow-md"
                : "bg-white border border-gray-300 text-gray-800 hover:bg-gray-100"
              }`}
          >
            <Filter className="w-4 h-4 mr-2" />
            {type === 'all' ? 'All Events' : type}
          </button>
        ))}
      </div>


      {/* Events Grid */}
      {filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <Card key={event.id} className="border-gray-300 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3">
                  <Badge className={getEventTypeColor(event.type)}>
                    {event.type}
                  </Badge>
                </div>
                {isUpcoming(event.date) && (
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-green-500 text-white">
                      Upcoming
                    </Badge>
                  </div>
                )}
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-gray-900 line-clamp-2">
                  {event.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600 line-clamp-3">
                  {event.description}
                </p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span>Main Auditorium</span>
                  </div>
                </div>

                {event.registrationLink && isUpcoming(event.date) && (
                  <Button className="w-full gap-2" variant='outline' size="sm">
                    <ExternalLink className="w-4 h-4" />
                    Register Now
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="text-center py-12">
          <CardContent>
            <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No {selectedFilter === 'all' ? '' : selectedFilter} events found
            </h3>
            <p className="text-gray-600">
              {selectedFilter === 'all'
                ? 'No events are currently scheduled. Check back soon!'
                : `No ${selectedFilter} events are currently scheduled.`
              }
            </p>
          </CardContent>
        </Card>
      )}

      {/* Event Calendar Integration */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-0">
        <CardContent className="p-6">
          <div className="text-center">
            <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Never Miss an Event
            </h3>
            <p className="text-gray-600 mb-4">
              Subscribe to our event calendar and get automatic reminders for all club activities.
            </p>
            {/* <Button
  className="flex items-center gap-2 border border-white rounded-md bg-white text-sm text-black font-medium px-4 py-2 hover:bg-gray-300 transition"
>
  <ExternalLink className="w-4 h-4" />
  Subscribe to Calendar
</Button> */}
            <Button variant="outline" size="md" className="gap-2">
              <ExternalLink className="w-4 h-4" />
              Subscribe to Calendar
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
    </SearchableWrapper>
  );
};

export default ClubEvents;
