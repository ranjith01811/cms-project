import { Routes, Route } from 'react-router-dom';
import BasicLayout from '../layouts/BasicLayouts';
import DashboardLayout from '../layouts/DashBoardLayout';
import PrivateRoutes from './PrivatesRoutes';
import LandingPage from '../pages/LandingPage';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<BasicLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
      </Route>

      <Route element={<PrivateRoutes><DashboardLayout /></PrivateRoutes>}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
  