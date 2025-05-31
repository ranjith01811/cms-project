import { Outlet } from 'react-router-dom';
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const BasicLayouts = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </>
  );
};

export default BasicLayouts;