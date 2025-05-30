import React, { useEffect, useState } from "react";

const mockEvents = [
    {
        id: 1,
        title: "Annual Meetup",
        date: "2024-07-15",
        location: "Conference Hall A",
        description: "A gathering of all members to discuss yearly progress.",
    },
    {
        id: 2,
        title: "Tech Talk",
        date: "2024-08-10",
        location: "Auditorium",
        description: "A session on the latest trends in technology.",
    },
    {
        id: 3,
        title: "Annual Meetup",
        date: "2024-07-15",
        location: "Conference Hall A",
        description: "A gathering of all members to discuss yearly progress.",
    },
    {
        id: 4,
        title: "Tech Talk",
        date: "2024-08-10",
        location: "Auditorium",
        description: "A session on the latest trends in technology.",
    },
];

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        setEvents(mockEvents);
    }, []);

    return (
        <div className="max-w-3xl mx-auto mt-10 p-4 bg-transparent">
            <h2 className="text-center text-4xl font-bold text-indigo-800 mb-10 tracking-wide">
                Events
            </h2>
            {events.length === 0 ? (
                <p className="text-center text-slate-500 text-lg">No events found.</p>
            ) : (
                <ul className="space-y-6">
                    {events.map((event) => (
                        <li
                            key={event.id}
                            className="bg-white rounded-xl shadow-lg border-l-8 border-indigo-400 p-7 hover:scale-[1.02] hover:shadow-2xl transition-all duration-200"
                        >
                            <h3 className="text-indigo-800 text-2xl font-semibold mb-2">
                                {event.title}
                            </h3>
                            <div className="flex flex-wrap items-center gap-4 mb-3 text-indigo-600 font-medium">
                                <span className="flex items-center gap-1">
                                    <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 7V3M16 7V3M4 11h16M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    {event.date}
                                </span>
                                <span className="flex items-center gap-1">
                                    <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 12.414a4 4 0 10-1.414 1.414l4.243 4.243a1 1 0 001.414-1.414z"></path><path d="M15 11a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                                    {event.location}
                                </span>
                            </div>
                            <p className="text-slate-700">{event.description}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Events;
