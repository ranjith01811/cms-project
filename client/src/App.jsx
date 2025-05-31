import { useAuth } from './context/AuthContext'; 
import AppRouter from './routes/AppRoutes'; 
import './index.css';

function App() {
  
  const { loading, error } = useAuth(); 

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg text-gray-700">Loading authentication...</p> 
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-red-100 text-red-700 p-4 rounded-lg">
        <p className="text-lg">Authentication Error: {error.message || 'An unknown error occurred.'}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      
      <AppRouter />
    </div>
  );
}


export default App;