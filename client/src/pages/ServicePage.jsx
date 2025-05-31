const ServicePage = () => {
  return (
    <section
      id="services-page-content"
      className="py-20 px-6 sm:px-10 bg-gray-100 min-h-screen pt-24"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-red-500 mb-10">
          OUR COMPREHENSIVE SERVICES📋
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6 transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="text-indigo-500 text-5xl mb-4">🎉</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Corporate Events
            </h3>
            <p className="text-gray-700">
              Conferences, seminars, product launches, annual meetings, and
              team-building events. We handle everything from venue selection to
              post-event analysis.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="text-indigo-500 text-5xl mb-4">💖</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Weddings & Social Gatherings
            </h3>
            <p className="text-gray-700">
              Dream weddings, anniversaries, birthdays, and family reunions. Our
              team ensures every celebration is unique and memorable.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="text-indigo-500 text-5xl mb-4">🎤</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Concerts & Festivals
            </h3>
            <p className="text-gray-700">
              Large-scale public events, music concerts, and cultural festivals.
              We manage logistics, security, and crowd control for successful
              events.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="text-indigo-500 text-5xl mb-4">🎓</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Educational Events
            </h3>
            <p className="text-gray-700">
              Workshops, academic conferences, and educational seminars. We
              provide seamless technical support and comfortable environments.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="text-indigo-500 text-5xl mb-4">🌟</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Event Logistics
            </h3>
            <p className="text-gray-700">
              Venue selection, vendor management, permits, and on-site
              coordination. We handle the complexities so you don't have to.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="text-indigo-500 text-5xl mb-4">💡</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Creative Design
            </h3>
            <p className="text-gray-700">
              Theme development, decor, lighting, and stage design. Our creative
              team ensures your event looks stunning and unique.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServicePage;
