import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // install with `npm i lucide-react`

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Scroll to section on homepage
  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      navigate('/', { replace: false });
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">My Website</h1>

        <div className="flex items-center space-x-6 text-sm font-medium">
          {/* Always show navigation buttons */}
          <button onClick={() => scrollToSection('home')} className="hover:text-blue-500 cursor-pointer">Home</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-blue-500 cursor-pointer">About</button>
          <button onClick={() => scrollToSection('services')} className="hover:text-blue-500 cursor-pointer">Services</button>
          <button onClick={() => scrollToSection('gallery')} className="hover:text-blue-500 cursor-pointer">Gallery</button>
          <button onClick={() => scrollToSection('testimonials')} className="hover:text-blue-500 cursor-pointer">Testimonials</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-blue-500 cursor-pointer">Contact</button>
          {/* Show Login button only if not logged in */}
          {!user && (
            <Link to="/login" className="text-blue-600 cursor-pointer">Login</Link>
          )}
          {/* Show hamburger menu only if logged in */}
          {user && (
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </nav>
      {user && isSidebarOpen && (
        <aside className="fixed top-16 right-0 w-64 h-full z-40 bg-gray-800 text-white p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-4">Menu</h3>
          <ul className="space-y-3">
            <li>
              <button
                onClick={() => {
                  navigate("/dashboard/Events");
                  setIsSidebarOpen(false);
                }}
                className="block w-full text-left px-3 py-2 rounded hover:bg-gray-700"
              >
                Manage Events
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  navigate("/dashboard/Profile");
                  setIsSidebarOpen(false);
                }}
                className="block w-full text-left px-3 py-2 rounded hover:bg-gray-700"
              >
                User Profile
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleLogout();
                  setIsSidebarOpen(false);
                }}
                className="block w-full text-left px-3 py-2 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </li>
          </ul>
        </aside>
      )}
    </>
  );
};

export default Navbar;