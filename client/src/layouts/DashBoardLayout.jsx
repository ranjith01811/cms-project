import { useNavigate, Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const DashboardLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <aside className="w-64 bg-gray-800 text-white p-4 hidden md:block rounded-tr-xl">
          <h3 className="text-xl font-bold mb-4">Dashboard Menu</h3>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => navigate("/dashboard")}
                className="block w-full text-left py-2 px-3 rounded-md hover:bg-gray-700 transition duration-200"
              >
                Dashboard Home
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/dashboard/Events")}
                className="block w-full text-left py-2 px-3 rounded-md hover:bg-gray-700 transition duration-200"
              >
                Manage Events
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/dashboard/Profile")}
                className="block w-full text-left py-2 px-3 rounded-md hover:bg-gray-700 transition duration-200"
              >
                User Profile
              </button>
            </li>
          </ul>
        </aside>
        <main className="flex-1 p-6 sm:p-10 bg-gray-100 rounded-tl-xl">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;