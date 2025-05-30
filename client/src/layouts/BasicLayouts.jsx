import { Link } from "react-router-dom";
import { Outlet } from 'react-router-dom';

const BasicLayouts = () => {
  return (
    <>
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
      <main>
        <Outlet />
      </main>
      <footer className="bg-gray-100 text-gray-600 py-4 text-center mt-8 border-t">
        &copy; {new Date().getFullYear()} Event Coordination & Planning CMS. All rights reserved.
      </footer>
    </>
  );
}
export default BasicLayouts;