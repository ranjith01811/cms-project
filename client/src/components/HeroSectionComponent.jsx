function HeroSection({ setCurrentPage }) {
  return (
    <section id="home-hero" className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('https://placehold.co/1920x1080/4F46E5/FFFFFF?text=Stunning+Events')" }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-up">
          Your Vision, Our Expertise.
        </h1>
        <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200">
          Crafting unforgettable moments and seamless events, from concept to execution.
        </p>
        <button onClick={() => setCurrentPage('contact')} className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 animate-fade-in-up delay-400">
          Plan Your Event
        </button>
      </div>
    </section>
  );
}