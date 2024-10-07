import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const EventsSection = ({ events }) => {
  const [expandedEvent, setExpandedEvent] = useState(null);

  const toggleExpand = (eventId) => {
    setExpandedEvent(expandedEvent === eventId ? null : eventId);
  };

  return (
    <section className="events-section py-8 bg-gray-100">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 pl-4">Upcoming Events</h2>
      {events.map((event) => (
        <div key={event.id} className="event-card bg-white p-4 rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg border border-transparent hover:border-gray-300 relative flex flex-col md:flex-row items-start mb-6">
          <img src={event.image} alt={event.name} className="w-[100px] h-[100px] object-cover rounded-full mb-4 md:mb-0 md:mr-6" />
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-1">{event.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{event.date} - {event.venue}</p>
            <button className="text-blue-500 text-sm underline mb-4" onClick={() => toggleExpand(event.id)}>
              {expandedEvent === event.id ? "Show Less" : "More Details"}
            </button>
            {expandedEvent === event.id && <div className="text-sm text-gray-700 mb-4">{event.details}</div>}
            {event.ticketAvailable ? (
              <button className="bg-green-500 text-black px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300" onClick={() => window.location.href = event.ticketLink}>
                Buy Tickets
              </button>
            ) : (
              <button className="bg-gray-400 text-white px-4 py-2 rounded-lg cursor-not-allowed">Tickets Sold Out</button>
            )}
          </div>
          {expandedEvent === event.id && (
            <div className="absolute right-4 bottom-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" /> Add to Calendar
              </button>
            </div>
          )}
        </div>
      ))}
      <div className="text-center mt-8">
        <button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-300" onClick={() => window.location.href = '/events'}>
          View More Events
        </button>
      </div>
    </section>
  );
};

export default EventsSection;
