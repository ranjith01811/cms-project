import { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { Menu, X } from "lucide-react"; 

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();


  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-purple-100">
      <Navbar />

      <div className="h-6 sm:h-10" />

      <div className="sm:hidden flex justify-end p-4 bg-white shadow">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="sm:hidden fixed inset-0 z-40 bg-black bg-opacity-40">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-white shadow-lg p-6">
            {/* Example sidebar content */}
            <button
              onClick={() => setIsOpen(false)}
              className="mb-6 text-gray-700"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
            <nav className="flex flex-col gap-4">
              <button onClick={() => { setIsOpen(false); navigate("/profile"); }} className="text-lg font-medium hover:text-purple-600 transition">Profile</button>
              <button onClick={() => { setIsOpen(false); navigate("/settings"); }} className="text-lg font-medium hover:text-purple-600 transition">Settings</button>
            </nav>
          </div>
        </div>
      )}

      <main className="flex-1 p-4 sm:p-10 transition-all duration-300">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-10">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DashboardLayout;