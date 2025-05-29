function Navbar({ setCurrentPage }) {
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      setCurrentPage('home');
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md py-4 px-6 sm:px-10 flex justify-between items-center rounded-b-xl">
      <div className="text-2xl font-bold text-indigo-700 cursor-pointer" onClick={() => setCurrentPage('home')}>
        EventPro
      </div>
      <div className="hidden md:flex space-x-8 items-center">
        <button onClick={() => setCurrentPage('home')} className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300">Home</button>
        <button onClick={() => setCurrentPage('about')} className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300">About Us</button>
        <button onClick={() => setCurrentPage('services')} className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300">Services</button>
        <button onClick={() => setCurrentPage('gallery')} className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300">Gallery</button>
        <button onClick={() => setCurrentPage('testimonials')} className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300">Testimonials</button>
        <button onClick={() => setCurrentPage('contact')} className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300">Contact Us</button>

        {currentUser ? (
          <>
            <button onClick={() => setCurrentPage('developers')} className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300">Developers</button>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md shadow-sm transition duration-300"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={() => setCurrentPage('signin')}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md shadow-sm transition duration-300"
          >
            Sign In
          </button>
        )}
      </div>
      <div className="md:hidden">
        <button className="text-gray-700 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}