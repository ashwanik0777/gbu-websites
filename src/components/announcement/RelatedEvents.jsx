import { Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import SearchableWrapper from '../Searchbar/SearchableWrapper';

// Card component
const Card = ({ children, className = '', ...props }) => (
  <div
    className={`bg-white rounded-xl border border-gray-100 border-solid shadow-md hover:shadow-xl transition-all duration-200 overflow-hidden${className}`}
    {...props}
  >
    {children}
  </div>
);

const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`p-4 border-b border-gray-100 border-solid bg-gradient-to-r from-blue-50/60 to-white${className}`} {...props}>
    {children}
  </div>
);

const CardTitle = ({ children, className = '', ...props }) => (
  <h4 className={`font-semibold text-gray-900 text-base ${className}`} {...props}>
    {children}
  </h4>
);

const CardContent = ({ children, className = '', ...props }) => (
  <div className={`p-4 ${className}`} {...props}>
    {children}
  </div>
);

// Badge component
const Badge = ({ children, className = '', ...props }) => (
  <span
    className={`inline-block px-3 py-1 rounded-full font-semibold text-xs shadow-sm ${className}`}
    {...props}
  >
    {children}
  </span>
);

// Button component
const Button = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  ...props
}) => {
  const base =
    'inline-flex items-center justify-center rounded-md font-medium focus:outline-none transition-colors duration-150 gap-1';
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline:
      'border border-blue-600 text-blue-700 bg-white hover:bg-blue-50',
    ghost: 'bg-transparent text-blue-700 hover:bg-blue-50',
  };
  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
  };
  return (
    <button
      className={`${base} ${variants[variant] || variants.default} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Mock events data
const mockEvents = [
  {
    id: '1',
    title: 'International Symposium on AI',
    type: 'Symposium',
    date: '2024-07-15',
    venue: 'Auditorium A',
    isUpcoming: true,
  },
  {
    id: '2',
    title: 'Web Development Workshop',
    type: 'Workshop',
    date: '2024-07-20',
    venue: 'Lab 3',
    isUpcoming: true,
  },
  {
    id: '3',
    title: 'Quantum Computing Seminar',
    type: 'Seminar',
    date: '2024-08-05',
    venue: 'Room 101',
    isUpcoming: true,
  },
  {
    id: '4',
    title: 'Annual Cultural Fest',
    type: 'Cultural',
    date: '2024-09-10',
    venue: 'Open Grounds',
    isUpcoming: true,
  },
  {
    id: '5',
    title: 'Tech Conference 2024',
    type: 'Conference',
    date: '2024-10-01',
    venue: 'Main Hall',
    isUpcoming: false,
  },
  {
    id: '6',
    title: 'Cloud Computing Webinar',
    type: 'Webinar',
    date: '2024-07-25',
    venue: 'Online',
    isUpcoming: true,
  },
];

const typeIcons = {
  Symposium: <span className="mr-1.5 text-blue-500"><Calendar size={14} /></span>,
  Workshop: <span className="mr-1.5 text-green-500"><Calendar size={14} /></span>,
  Seminar: <span className="mr-1.5 text-purple-500"><Calendar size={14} /></span>,
  Cultural: <span className="mr-1.5 text-orange-500"><Calendar size={14} /></span>,
  Conference: <span className="mr-1.5 text-red-500"><Calendar size={14} /></span>,
  Webinar: <span className="mr-1.5 text-cyan-500"><Calendar size={14} /></span>,
};

const RelatedEvents = ({ currentEventId, maxEvents = 4 }) => {
  const relatedEvents = mockEvents
    .filter(event => event.id !== currentEventId && event.isUpcoming)
    .slice(0, maxEvents);

  const getTypeColor = (type) => {
    const colors = {
      'Symposium': 'bg-blue-100 text-blue-800',
      'Workshop': 'bg-green-100 text-green-800',
      'Seminar': 'bg-purple-100 text-purple-800',
      'Cultural': 'bg-orange-100 text-orange-800',
      'Conference': 'bg-red-100 text-red-800',
      'Webinar': 'bg-cyan-100 text-cyan-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  if (relatedEvents.length === 0) return null;

  return (
    <SearchableWrapper>
    <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 rounded-2xl shadow-xl p-8 border border-blue-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-blue-900 flex items-center gap-2">
          <Calendar size={22} className="text-blue-500" />
          Upcoming Events
        </h3>
        <Link to="/events">
          <Button variant="ghost" size="sm" className="font-semibold">
            View All <ArrowRight size={16} />
          </Button>
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {relatedEvents.map((event) => (
          <Card key={event.id} className="group hover:scale-[1.02]">
            <CardHeader className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                {typeIcons[event.type] || null}
                <Badge className={`${getTypeColor(event.type)} text-xs`}>
                  {event.type}
                </Badge>
              </div>
              <CardTitle className="text-base font-semibold line-clamp-2 group-hover:text-blue-700 transition-colors">
                {event.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="flex flex-col gap-2 text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar size={15} className="text-blue-400" />
                  <span className="font-medium">{format(new Date(event.date), 'MMM dd, yyyy')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={15} className="text-pink-400" />
                  <span className="truncate">{event.venue}</span>
                </div>
              </div>
              <Link to={`/events/${event.id}`}>
                <Button
                  size="sm"
                  variant="default"
                  className="w-full text-xs font-semibold shadow hover:shadow-md"
                >
                  View Details <ArrowRight size={14} />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
    </SearchableWrapper>
  );
};

export default RelatedEvents;
RelatedEvents.propTypes = {
  currentEventId: PropTypes.string.isRequired,
  maxEvents: PropTypes.number,
};
