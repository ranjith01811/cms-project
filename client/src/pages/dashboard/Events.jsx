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
];

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        // Replace this with API call in real app
        setEvents(mockEvents);
    }, []);

    return (
        <div>
            <h2>Events</h2>
            {events.length === 0 ? (
                <p>No events found.</p>
            ) : (
                <ul>
                    {events.map((event) => (
                        <li key={event.id} style={{ marginBottom: "1rem" }}>
                            <h3>{event.title}</h3>
                            <p>
                                <strong>Date:</strong> {event.date}
                            </p>
                            <p>
                                <strong>Location:</strong> {event.location}
                            </p>
                            <p>{event.description}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Events;