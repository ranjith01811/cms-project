import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png"; // Adjust the path if needed

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const scrollToSection = (id) => {
    const isHome = location.pathname === "/";
    if (!isHome) {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Gallery", id: "gallery" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md px-4 sm:px-6 py-3 flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <img src={logo} alt="Logo" className="h-10 w-10 rounded-full object-cover shadow" />
          <h1 className="text-lg sm:text-xl font-bold text-red-500">
            BRT <span className="text-gray-800">Event Management</span>
          </h1>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="hover:text-orange-600 cursor-pointer transition-colors"
            >
              {item.label}
            </button>
          ))}

          {!user ? (
            <Link to="/login" className="text-orange-600 font-semibold cursor-pointer">
              Login
            </Link>
          ) : (
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-gray-700 cursor-pointer"
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 cursor-pointer"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[64px] left-0 w-full bg-white shadow-md z-40 py-4 px-6">
          <ul className="space-y-4 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-gray-700 hover:text-orange-600 cursor-pointer"
                >
                  {item.label}
                </button>
              </li>
            ))}
            {!user && (
              <li>
                <Link
                  to="/login"
                  className="block text-red-500 font-semibold cursor-pointer"
                >
                  Login
                </Link>
              </li>
            )}
            {user && (
              <li>
                <button
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="text-gray-700 cursor-pointer"
                >
                  {isSidebarOpen ? "Close Menu" : "Open Menu"}
                </button>
              </li>
            )}
          </ul>
        </div>
      )}

      {/* Sidebar Menu */}
      {user && isSidebarOpen && (
        <aside className="fixed top-[64px] right-0 w-64 h-full z-40 bg-gray-800 text-white p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-4">Dashboard</h3>
          <ul className="space-y-3">
            <li>
              <button
                onClick={() => {
                  navigate("/dashboard/Events");
                  setIsSidebarOpen(false);
                }}
                className="block w-full text-left px-3 py-2 rounded hover:bg-gray-700 cursor-pointer"
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
                className="block w-full text-left px-3 py-2 rounded hover:bg-gray-700 cursor-pointer"
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
                className="block w-full text-left px-3 py-2 rounded hover:bg-red-600 cursor-pointer"
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