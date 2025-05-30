import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/'); 
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md py-4 px-6 sm:px-10 flex justify-between items-center rounded-b-xl">
      <Link to="/" className="text-2xl font-bold text-indigo-700">
        EventPro
      </Link>

      <div className="hidden md:flex space-x-8 items-center">
        <Link to="/" className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300">Home</Link>
        <Link to="/about" className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300">About Us</Link>
        <Link to="/services" className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300">Services</Link>
        <Link to="/gallery" className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300">Gallery</Link>
        <Link to="/testimonials" className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300">Testimonials</Link>
        <Link to="/contact" className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300">Contact Us</Link>

        {currentUser ? (
          <>
            <Link to="/developers" className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300">Developers</Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md shadow-sm transition duration-300"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/signin"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md shadow-sm transition duration-300"
          >
            Sign In
          </Link>
        )}
      </div>

      <div className="md:hidden">
        <button className="text-gray-700 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
