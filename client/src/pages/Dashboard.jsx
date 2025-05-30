import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user, logout, loading } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.error("Logout failed:", err.message);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Dashboard</h1>

      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <h2 className="text-xl font-semibold text-indigo-600 mb-2">
          Welcome back, {user?.email || 'User'}!
        </h2>
        <p className="text-gray-600">Here's your personalized dashboard.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link to="/developers" className="block bg-indigo-100 p-4 rounded-lg shadow hover:bg-indigo-200 transition">
          <h3 className="text-lg font-semibold text-indigo-700">Developers</h3>
          <p className="text-sm text-gray-700">View and manage developer listings.</p>
        </Link>

        {/* Add more cards for other dashboard links or features */}
        <div className="bg-red-100 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-red-700">Coming Soon</h3>
          <p className="text-sm text-gray-700">More features will appear here.</p>
        </div>
      </div>

      <div className="mt-8">
        <button
          onClick={handleLogout}
          disabled={loading}
          className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition disabled:opacity-50"
        >
          {loading ? 'Logging out...' : 'Logout'}
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
