import { Routes, Route } from "react-router-dom";
import BasicLayouts from "../layouts/BasicLayouts";
import DashboardLayout from "../layouts/DashBoardLayout";
import PrivateRoutes from "./PrivatesRoutes";
import LandingPage from "../pages/LandingPage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import NotFound from "../pages/NotFound";
import UserProfile from "../pages/dashboard/Profile";
import Events from "../pages/dashboard/Events";
import GalleryPage from "../pages/GalleryPage";
import ContactPage from "../pages/ContactPage";
import ServicePage from "../pages/ServicePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<BasicLayouts />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/service" element={<ServicePage />} />
      </Route>

      <Route
        element={
          <PrivateRoutes>
            <DashboardLayout />
          </PrivateRoutes>
        }
      >
        <Route path="/dashboard/Events" element={<Events />} />
        <Route path="/dashboard/profile" element={<UserProfile />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
