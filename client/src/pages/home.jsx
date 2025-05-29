import React from "react";

function HeroSection({ setCurrentPage}){
  return(
    <section id="home" className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('https://placehold.co/1920x1080/4F46E5/FFFFFF?text=BRT+Events')" }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 animate-fade-in-up leading-tight">
          Your Vision, Our Expertise.
        </h1>
        <p className="text-lg sm:text-xl mb-8 max-w-2xl max-auto animate-fade-in-up delay-200">
          Crafting unforgettable moments and seamless events, from concept to execution.
        </p>
        <button
          onClick={() => setCurrentPage('contact')} className="bg-indigo-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105 animate-fade-in-up delay-400">
            Plan Your Event
        </button>
      </div>
    </section>
 );
}

function Home({ setCurrentPage }) {
  return (
    <>
      <HeroSection setCurrentPage={setCurrentPage} />

      <section className="py-16 px-6 sm:px-10 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-6">Explore Our Services & Work</h2>
          <p className="text-lg text-gray-700 mb-8">
            Discover how EventPro can transform your vision into a spectacular reality. From meticulous planning to flawless execution, we handle every detail.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setCurrentPage('services')}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75"
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

