import React from 'react';
import EventCard from './EventCard';
import SearchableWrapper from '../Searchbar/SearchableWrapper';

const Tabs = ({ value, onValueChange, children, className }) => (
  <div className={className}>{children}</div>
);

const TabsList = ({ children, className }) => (
  <div className={`flex justify-center gap-4 mb-8 ${className}`}>{children}</div>
);

const TabsTrigger = ({ value, active, onClick, children }) => (
  <button
    type="button"
    onClick={() => onClick(value)}
    className={`px-6 py-2 rounded-full font-semibold transition-all duration-200
      ${active
        ? 'bg-blue-600 text-white shadow-lg scale-105'
        : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700'}
      focus:outline-none focus:ring-2 focus:ring-blue-400`}
    aria-selected={active}
  >
    {children}
  </button>
);

const TabsContent = ({ value, active, children }) => (
  active ? (
    <div className="animate-fade-in">{children}</div>
  ) : null
);

const EventTabs = ({
  activeTab,
  onTabChange,
  upcomingEvents,
  pastEvents,
  currentEvents
}) => {
  const showEmptyMessage = currentEvents.length === 0;

  return (
    <SearchableWrapper>
    <div className="w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-gray-100 border-solid">
      <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
        <TabsList>
          <TabsTrigger
            value="upcoming"
            active={activeTab === 'upcoming'}
            onClick={onTabChange}
          >
            Upcoming Events <span className="ml-2 bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs">{upcomingEvents.length}</span>
          </TabsTrigger>
          <TabsTrigger
            value="past"
            active={activeTab === 'past'}
            onClick={onTabChange}
          >
            Past Events <span className="ml-2 bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full text-xs">{pastEvents.length}</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} active>
          {showEmptyMessage ? (
            <div className="text-center text-gray-500 py-12 text-lg">
              No {activeTab} events.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentEvents.map(event => (
                <EventCard
                  key={event.id}
                  event={event}
                  isPastEvent={activeTab === 'past'}
                />
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.5s;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(16px);}
          to { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </div>
    </SearchableWrapper>
  );
};

export default EventTabs;
