import React from "react";
import HeroSectionComponent from "../components/HeroSectionComponent";

function Home({ setCurrentPage }) {
  return (
    <>
      <HeroSectionComponent setCurrentPage={setCurrentPage} />

      <section className="py-16 px-6 sm:px-10 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-style font-bold text-red-500 mb-6">EXPLORE OUR SERVICES AND WORKS👇</h2>
          <p className="text-lg text-gray-700 mb-8">
            Discover how ``BRT Event Management can transform your vision into a spectacular reality✨. From meticulous planning to flawless execution, we handle every detail‼️
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setCurrentPage('services')}
              className="bg-blue-950 bg- hover:bg-amber-400 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75"
            >
              View Our Services
            </button>
            <button
              onClick={() => setCurrentPage('gallery')}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
            >
              Browse Our Gallery
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

