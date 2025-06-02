import { useNavigate } from "react-router";

const HeroSection = ({ setCurrentPage }) => {
  const navigate = useNavigate();
  return (
    <section
      id="home-hero"
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('https://placehold.co/1920x1080/4F46E5/FFFFFF?text=Stunning+Events')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-center px-4 sm:px-10 md:px-16">
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-up">
          YOUR VISION, OUR EXPERTISE!!
        </h1>
        <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200">
          Crafting unforgettable moments and seamless events, from concept to execution.
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="bg-blue-600 hover:cursor-pointer hover:bg-amber-400 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-150 ease-in-out animate-fade-in-up delay-100"
        >
          🎉Plan Your Event
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
