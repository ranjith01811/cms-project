import { Outlet } from 'react-router-dom';
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const BasicLayouts = () => {
  return (
    <>
<<<<<<< HEAD
      <header className="bg-black text-white py-4 shadow-md flex flex-col sm:flex-row items-center justify-between px-6">
        <div className="text-2xl font-semibold flex items-center gap-2">
          <span role="img" aria-label='notes'>
            <Link to="/" className="hover:underline focus:outline-none focus:ring-2 focus:ring-white">
              🎉Events
            </Link>
          </span>
        </div>
        <div className="mt-3 sm:mt-0 flex gap-3">
          <Link to="/login" className="bg-black border-2 text-white px-4 py-2 rounded cursor-pointer hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white">
            Login
          </Link>
          <Link to="/register" className="bg-white text-black px-4 py-2 rounded cursor-pointer hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-black">
            Register
          </Link>
        </div>
      </header>
=======
      <Navbar />
>>>>>>> 5dc93140126f30822e9c5e3f6fe4161783234c98
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </>
  );
};

export default BasicLayouts;
