import React from 'react';

const EventCalendar = () => {
    const events = [
      { date: '2024-10-01', city: 'City A' },
      { date: '2024-10-15', city: 'City B' },
    ];
  
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
        <ul className="space-y-4">
          {events.map((event, index) => (
            <li key={index} className="flex items-center">
              <div className="bg-blue-500 text-white p-2 rounded-lg mr-4">
                <p className="text-lg font-bold">{event.date}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold">{event.city}</h3>
                <p className="text-gray-600">Event happening in {event.city} on {event.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default EventCalendar;
  