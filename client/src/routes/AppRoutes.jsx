import { Routes, Route } from 'react-router-dom';
import BasicLayout from '../layouts/BasicLayouts';
import DashboardLayout from '../layouts/DashBoardLayout';
import PrivateRoutes from './PrivatesRoutes';
<<<<<<< HEAD
import Home from '../pages/Home';
import ServicePage from '../pages/ServicePage';
import GalleryPage from '../pages/GalleryPage';
import TestimonialPage from '../pages/TestimonalPage';
import ContactPage from '../pages/ContactPage';
=======
import LandingPage from '../pages/LandingPage';
>>>>>>> 5dc93140126f30822e9c5e3f6fe4161783234c98
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import NotFound from '../pages/NotFound';
import UserProfile from '../pages/dashboard/Profile';
import Events from '../pages/dashboard/Events';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<BasicLayout />}>
<<<<<<< HEAD
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/testimonials" element={<TestimonialPage />} />
        <Route path="/contact" element={<ContactPage />} />
=======
        <Route path="/" element={<LandingPage />} />
>>>>>>> 5dc93140126f30822e9c5e3f6fe4161783234c98
        <Route path="/login" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
      </Route>

      <Route element={<PrivateRoutes><DashboardLayout /></PrivateRoutes>}>
        <Route path="/dashboard/Events" element={<Events />} />
        <Route path="/dashboard/profile" element={<UserProfile />} />
        <Route path="/dashboard/events" element={<Events />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;