// src/components/EventsPage.js

import React from 'react';

const EventsPage = () => {
  const events = [
    { date: "2024-10-01", location: "City A", ticketsLink: "#", id: 1 },
    { date: "2024-10-15", location: "City B", ticketsLink: "#", id: 2 },
  ];

  return (
    <div className="events-page p-4">
      <h1 className="text-2xl font-bold">Upcoming Events</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id} className="flex justify-between items-center border-b p-2">
            <div>
              <h2 className="text-xl">{event.date}</h2>
              <p>{event.location}</p>
            </div>
            <a href={event.ticketsLink} className="bg-blue-500 text-white py-2 px-4 rounded">Buy Tickets</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventsPage;
