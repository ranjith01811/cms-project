
import React from 'react';
import { useAuth } from '../context/AuthContext';
import PrivateRoutes from './PrivateRoutes';
import BasicLayout from '../layouts/BasicLayout';
import DashboardLayout from '../layouts/DashBoardLayout';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ServicesPage from '../pages/ServicesPage';
import GalleryPage from '../pages/GalleryPage';
import TestimonialsPage from '../pages/TestimonialsPage';
import ContactPage from '../pages/ContactPage';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import DevelopersPage from '../pages/DevelopersPage';

function AppRoutes({ currentPage, setCurrentPage }) {
  const { currentUser } = useAuth();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'testimonials':
        return <TestimonialsPage />;
      case 'contact':
        return <ContactPage />;
      case 'signin':
        return <SignInPage setCurrentPage={setCurrentPage} />;
      case 'signup':
        return <SignUpPage setCurrentPage={setCurrentPage} />;
      case 'developers':
        return (
          <PrivateRoutes currentUser={currentUser} setCurrentPage={setCurrentPage}>
            <DashboardLayout setCurrentPage={setCurrentPage}>
              <DevelopersPage />
            </DashboardLayout>
          </PrivateRoutes>
        );
      case 'dashboard-home':
        return (
          <PrivateRoutes currentUser={currentUser} setCurrentPage={setCurrentPage}>
            <DashboardLayout setCurrentPage={setCurrentPage}>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Welcome to your Dashboard!</h2>
              <p className="text-gray-700">Manage your events and profile here.</p>
            </DashboardLayout>
          </PrivateRoutes>
        );
      default:
        return (
          <section className="py-20 px-6 sm:px-10 bg-gray-100 min-h-screen flex items-center justify-center pt-24">
            <div className="max-w-md mx-auto text-center bg-white p-8 rounded-xl shadow-lg">
              <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Page Not Found</h1>
              <p className="text-lg text-gray-700">The page you are looking for does not exist.</p>
              <button
                onClick={() => setCurrentPage('home')}
                className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300"
              >
                Go to Home
              </button>
            </div>
          </section>
        );
    }
  };

  const isDashboardPage = ['developers', 'dashboard-home'].includes(currentPage);

  if (isDashboardPage) {
    return renderPage();
  } else {
    return (
      <BasicLayout setCurrentPage={setCurrentPage}>
        {renderPage()}
      </BasicLayout>
    );
  }
}