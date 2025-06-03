import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
// imp
const About = () => {
  const navigate = useNavigate();
  const teamMembers = [
    { name: "RANJITHKUMAR", role: "Event Planner (Project Lead)", initial: "RK" },
    { name: "TAMILVELAN", role: "Registration & Guest Management", initial: "TV" },
    { name: "BALA", role: "Technical Coordinator", initial: "B" },
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
      <section className="relative bg-gradient-to-br from-red-500 to-yellow-500 text-cyan-100 py-10 text-center overflow-hidden">
        <h1 className="text-6xl font-extrabold mb-6 animate-fade-in-up">ABOUT OUR EVENT PROJECT</h1>
        <p className="text-xl max-w-3xl mx-auto animate-fade-in-up delay-200 bg-white/80 rounded-2xl shadow-lg px-8 py-6 border border-gray-200 backdrop-blur-md"
           style={{
             fontFamily: 'Playfair Display, serif',
             fontSize: '1.35rem',
             fontWeight: 600,
             letterSpacing: '0.01em',
             lineHeight: '2.1',
             color: '#2d3748',
             boxShadow: '0 8px 32px 0 rgba(0,0,0,0.10)',
             marginTop: '1.5rem',
             marginBottom: '1.5rem',
             textAlign: 'center',
             display:'flex',
             flexDirection: 'column',
             alignItems:'left',
             textShadow: '0 2px 8px rgba(255,255,255,0.15)'
           }}
        >
          <span role="img" aria-label="connect">🎊</span> <span style={{color:'#1f4037',fontWeight:700, fontFamily:'inherit'}}>Simplifying Event Management</span>
          <span role="img" aria-label="connect">🎊</span> <span style={{color:'#1f4037',fontWeight:700, fontFamily:'inherit'}}>Connecting Communities</span> 
          <span role="img" aria-label="connect">🎊</span> <span style={{color:'#1f4037',fontWeight:700, fontFamily:'inherit'}}>Empowering Creativity</span>
        </p>
        <h3 className="text-1.5xl font-extrabold mb-6 animate-fade-in-up">WE DON'T CREATE EVENTS, WE CREATE MEMORIES!!</h3>
      </section>

      {/* Stats */}
      <section className="py-24 bg-white text-center">
        <h2 className="text-4xl font-bold text-red-500 mb-16">OUR IMPACT📈</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {statCards.map((card, i) => (
            <div
              key={i}
              className="p-10 bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <div className="text-5xl font-extrabold text-teal-700 mb-2">{card.count}</div>
              <p className="text-lg font-medium text-gray-600">{card.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-gray-50">
        <h2 className="text-4xl font-bold text-center text-red-500 mb-16">MEET OUR TEAM👥</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-14 max-w-7xl mx-auto px-6">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl border shadow-lg text-center transition transform hover:scale-105"
            >
              <div className="w-28 h-28 mx-auto flex items-center justify-center rounded-full bg-indigo-100 text-cyan-800 text-3xl font-bold mb-6">
                {member.initial}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-cyan-800 font-medium mt-2">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white text-center">
        <h2 className="text-4xl font-bold text-red-500 mb-12">OUR CORE VALUES🎀</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-gray-700">
          {values.map((value, i) => (
            <div
              key={i}
              className="p-8 rounded-xl bg-gray-50 border border-gray-200 shadow transition hover:shadow-lg transform hover:-translate-y-1"
            >
              <h3 className="text-2xl font-semibold mb-3 text-teal-600">{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-gradient-to-br from-red-500 to-yellow-500 text-white text-center">
        <h2 className="text-5xl font-bold mb-6">Host or Join an Event Today!</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
          Discover events, connect with communities, and create memories that last.
        </p>
        <button className="px-8 py-3 rounded-full bg-blue-950 bg- hover:bg-emerald-700 text-gradient-to-r from-customRed to-customPurple font-semibold text-lg transition transform hover:scale-105"
          onClick={() => navigate("/contact")}
          >
          Get Started Now
        </button>
      </section>

    </div>
  );
};

export default About;