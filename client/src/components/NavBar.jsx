import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">My Website</h1>
      <div className="space-x-6 text-sm font-medium">
        {!user ? (
          <>
            {/* These anchor tags scroll to sections of your homepage */}
            <a href="#home" className="hover:text-blue-500">Home</a>
            <a href="#about" className="hover:text-blue-500">About</a>
            <a href="#services" className="hover:text-blue-500">Services</a>
            <a href="#gallery" className="hover:text-blue-500">Gallery</a>
            <a href="#testimonials" className="hover:text-blue-500">Testimonials</a>
            <a href="#contact" className="hover:text-blue-500">Contact</a>
            <Link to="/login" className="text-blue-600">Login</Link>
          </>
        ) : (
          <>
            <Link to="/dashboard" className="text-blue-600">Dashboard</Link>
            <button onClick={handleLogout} className="text-red-600">Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
