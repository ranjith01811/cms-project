import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-800">
      {/* Header */}
      <header className="w-full py-6 border-b bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">
          <span className="text-2xl font-extrabold text-blue-700 tracking-tight">
            Event CMS
          </span>
          <nav className="space-x-4">
            <a
              href="#features"
              className="text-blue-600 font-medium hover:text-blue-800 transition-colors text-base"
            >
              Features
            </a>
            <a
              href="#signup"
              className="text-blue-600 font-medium hover:text-blue-800 transition-colors text-base"
            >
              Sign Up
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-4 bg-gradient-to-br from-blue-700 via-blue-500 to-blue-300 text-white shadow-lg">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg leading-tight">
          Event Coordination & Planning CMS
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 opacity-90 font-medium">
          The modern way to organize, manage, and streamline your events. Built for
          teams, organizers, and communities.
        </p>
        <a
          href="#signup"
          className="inline-block bg-white text-blue-700 font-bold px-10 py-4 rounded-full shadow-lg hover:bg-blue-100 hover:text-blue-900 transition text-xl border border-blue-200"
        >
          Get Started
        </a>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-700">
            Key Features
          </h2>
          <div className="grid gap-10 md:grid-cols-3 sm:grid-cols-1">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl shadow-xl p-10 flex flex-col items-center text-center border hover:scale-105 transition-transform">
              <span className="text-blue-600 text-5xl mb-5">📅</span>
              <h3 className="text-2xl font-semibold mb-3 text-blue-700">
                Easy Scheduling
              </h3>
              <p className="text-gray-700 text-lg">
                Create and manage events with a beautiful calendar interface.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl shadow-xl p-10 flex flex-col items-center text-center border hover:scale-105 transition-transform">
              <span className="text-blue-600 text-5xl mb-5">🤝</span>
              <h3 className="text-2xl font-semibold mb-3 text-blue-700">
                Team Collaboration
              </h3>
              <p className="text-gray-700 text-lg">
                Assign roles, share updates, and coordinate tasks with your team.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl shadow-xl p-10 flex flex-col items-center text-center border hover:scale-105 transition-transform">
              <span className="text-blue-600 text-5xl mb-5">📦</span>
              <h3 className="text-2xl font-semibold mb-3 text-blue-700">
                Resource Management
              </h3>
              <p className="text-gray-700 text-lg">
                Track venues, equipment, and resources for smooth events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        id="signup"
        className="py-16 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-center shadow-inner"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Plan Your Next Event?
        </h2>
        <p className="mb-8 text-xl md:text-2xl opacity-90">
          Sign up now and experience seamless event management!
        </p>
        <a
          href="#"
          className="inline-block bg-white text-blue-700 font-bold px-10 py-4 rounded-full shadow-lg hover:bg-blue-100 hover:text-blue-900 transition text-xl border border-blue-200"
        >
          Sign Up Free
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-400 text-base bg-white border-t mt-auto">
        &copy; {new Date().getFullYear()} Event Coordination & Planning CMS.
      </footer>
    </div>
  );
}
