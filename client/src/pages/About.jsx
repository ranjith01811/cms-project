import React, { useEffect, useState } from "react";
// imp
const About = () => {
  const teamMembers = [
    { name: "RANJITH KUMAR", role: "Event Planner (Project Lead)", initial: "RK" },
    { name: "TAMILVELAN", role: "Technical Coordinator", initial: "TV" },
    { name: "BALA", role: "Registration & Guest Management", initial: "B" },
  ];

  const [eventCount, setEventCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 120;
    const timer = setInterval(() => {
      start += 5;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setEventCount(start);
    }, 30);
    return () => clearInterval(timer);
  }, []);

  const getYear = () => new Date().getFullYear();

  const statCards = [
    { count: `${eventCount}+`, label: "Events Hosted" },
    { count: "75+", label: "Communities Served" },
    { count: "20K+", label: "Attendees Engaged" }
  ];

  const values = [
    {
      title: "Inclusivity",
      description: "We nurture diversity and create spaces where every voice matters.",
    },
    {
      title: "Innovation",
      description: "We embrace new ideas to build a smarter, faster, inspiring event experience.",
    },
    {
      title: "Community-First",
      description: "We build for people. Every feature encourages connection and collaboration.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-indigo-800 to-purple-700 text-white py-36 text-center overflow-hidden">
        <h1 className="text-6xl font-extrabold mb-6 animate-fade-in-up">About Our Event Project</h1>
        <p className="text-xl max-w-3xl mx-auto animate-fade-in-up delay-200">
          Connecting communities, empowering creativity, and simplifying event management.
        </p>
      </section>

      {/* Stats */}
      <section className="py-24 bg-white text-center">
        <h2 className="text-4xl font-bold text-indigo-800 mb-16">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {statCards.map((card, i) => (
            <div
              key={i}
              className="p-10 bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <div className="text-5xl font-extrabold text-indigo-700 mb-2">{card.count}</div>
              <p className="text-lg font-medium text-gray-600">{card.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-gray-50">
        <h2 className="text-4xl font-bold text-center text-purple-700 mb-16">Meet Our Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-14 max-w-7xl mx-auto px-6">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl border shadow-lg text-center transition transform hover:scale-105"
            >
              <div className="w-28 h-28 mx-auto flex items-center justify-center rounded-full bg-indigo-100 text-indigo-700 text-3xl font-bold mb-6">
                {member.initial}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-indigo-600 font-medium mt-2">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white text-center">
        <h2 className="text-4xl font-bold text-indigo-800 mb-12">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-gray-700">
          {values.map((value, i) => (
            <div
              key={i}
              className="p-8 rounded-xl bg-gray-50 border border-gray-200 shadow transition hover:shadow-lg transform hover:-translate-y-1"
            >
              <h3 className="text-2xl font-semibold mb-3 text-purple-700">{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-gradient-to-br from-indigo-800 to-purple-700 text-white text-center">
        <h2 className="text-5xl font-bold mb-6">Host or Join an Event Today!</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
          Discover events, connect with communities, and create memories that last.
        </p>
        <button className="px-8 py-3 rounded-full bg-white text-indigo-700 font-semibold text-lg hover:bg-gray-100 transition transform hover:scale-105">
          Get Started Now
        </button>
      </section>

    </div>
  );
};

export default About;