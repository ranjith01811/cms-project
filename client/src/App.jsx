import React from 'react';


function App() {
  return (
    <React.StrictMode>
      <AuthProvider>
        <StorageProvider>
          <AppContent /> {/* AppContent is the component that uses useAuth and manages routing */}
        </StorageProvider>
      </AuthProvider>
    </React.StrictMode>
  );
}

// This component holds the main application logic and uses the contexts.
// It is rendered inside the context providers.
function AppContent() {
  const { loading, error } = useAuth(); // Now useAuth is called within the context provider
  const [currentPage, setCurrentPage] = useState('home');

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg text-gray-700">Loading application...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-red-100 text-red-700 p-4 rounded-lg">
        <p className="text-lg">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <AppRoutes currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

// Export App as the default export for the Canvas environment to render.
export default App;