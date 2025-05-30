import { Routes, Route } from 'react-router-dom';
import BasicLayout from '../layouts/BasicLayouts';
import DashboardLayout from '../layouts/DashBoardLayout';
import PrivateRoutes from './PrivatesRoutes';
import HomePage from '../pages/Home';
import ServicePage from '../pages/ServicePage';
import GalleryPage from '../pages/GalleryPage';
import TestimonialPage from '../pages/TestimonalPage';
import ContactPage from '../pages/ContactPage';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import NotFound from "../pages/NotFound";
import Dashboard from '../pages/Dashboard';
import About from "../pages/About";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<BasicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/testimonials" element={<TestimonialPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
      </Route>

      <Route element={<PrivateRoutes><DashboardLayout /></PrivateRoutes>}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>


      <Route path="*" elements={<NotFound />}/>
    </Routes>
  );
};

export default AppRoutes;
