import React from 'react';

function GalleryPage() {
  return (
    <section id="gallery-page-content" className="py-20 px-6 sm:px-10 bg-white min-h-screen pt-24">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-indigo-700 mb-10">Our Event Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="overflow-hidden rounded-xl shadow-md">
            <img
              src="https://placehold.co/600x400/A78BFA/FFFFFF?text=Corporate+Gala"
              alt="Corporate Gala"
              className="w-full h-48 object-cover transform hover:scale-110 transition duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-md">
            <img
              src="https://placehold.co/600x400/818CF8/FFFFFF?text=Wedding+Reception"
              alt="Wedding Reception"
              className="w-full h-48 object-cover transform hover:scale-110 transition duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-md">
            <img
              src="https://placehold.co/600x400/6366F1/FFFFFF?text=Product+Launch"
              alt="Product Launch"
              className="w-full h-48 object-cover transform hover:scale-110 transition duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-md">
            <img
              src="https://placehold.co/600x400/4F46E5/FFFFFF?text=Music+Festival"
              alt="Music Festival"
              className="w-full h-48 object-cover transform hover:scale-110 transition duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-md">
            <img
              src="https://placehold.co/600x400/4338CA/FFFFFF?text=Birthday+Party"
              alt="Birthday Party"
              className="w-full h-48 object-cover transform hover:scale-110 transition duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-md">
            <img
              src="https://placehold.co/600x400/3730A3/FFFFFF?text=Seminar+Setup"
              alt="Seminar Setup"
              className="w-full h-48 object-cover transform hover:scale-110 transition duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-md">
            <img
              src="https://placehold.co/600x400/1E293B/FFFFFF?text=Award+Ceremony"
              alt="Award Ceremony"
              className="w-full h-48 object-cover transform hover:scale-110 transition duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-md">
            <img
              src="https://placehold.co/600x400/0F172A/FFFFFF?text=Exhibition+Booth"
              alt="Exhibition Booth"
              className="w-full h-48 object-cover transform hover:scale-110 transition duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}