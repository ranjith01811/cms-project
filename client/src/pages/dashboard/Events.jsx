import React, { useEffect, useState } from "react";

const mockEvents = [
  {
    id: 1,
    title: "Annual Meetup",
    date: "2025-06-10",
    location: "Conference Hall-A1",
    description: "A gathering of all members to discuss yearly progress🧑‍🤝‍🧑.",
  },
  {
    id: 2,
    title: "Tech Talk",
    date: "2025-06-12",
    location: "Auditorium",
    description: "A session on the latest trends in technology🖥️.",
  },
  {
    id: 3,
    title: "Kavin & Kala Wedding",
    date: "2025-06-15",
    location: "Coimbatore",
    description: "A grand wedding that unites not just two hearts but two families🤵👰.",
  },
  {
      id: 4,
      title: "Pradeep Kumar Live Music Concert",
      date: "2025-06-20",
      location: "Codissia Ground,Coimbatore",
      description: "Live & feel good music concert🎤.",
  },
  
];

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(mockEvents);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-indigo-100 to-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-red-500 mb-14">
          Upcoming Events🎉
        </h2>

        {events.length === 0 ? (
          <p className="text-center text-gray-500 text-lg font-medium">
            No events found.
          </p>
        ) : (
          <ul className="grid md:grid-cols-2 gap-10">
            {events.map((event) => (
              <li
                key={event.id}
                className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl p-8 shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-2xl"
              >
                <h3 className="text-2xl font-semibold text-purple-800 mb-3">
                  {event.title}
                </h3>
                <div className="text-sm text-gray-600 mb-4 space-y-1">
                  <div className="flex items-center gap-2">
                    📅 <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    📍 <span>{event.location}</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {event.description}
                </p>
                <div className="text-right">
                  <button className="px-5 py-2 bg-blue-950 text-white rounded-md shadow hover:bg-orange-500 transition">
                    View Details
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Events;