import Home from './Home';
import About from './About';
import ServicePage from './ServicePage';
import GalleryPage from './GalleryPage';
import TestimonialsPage from './TestimonalPage';
import ContactPage from './ContactPage';

const LandingPage = () => {
  return (
    <>
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="services"><ServicePage /></section>
      <section id="gallery"><GalleryPage /></section>
      <section id="testimonials"><TestimonialsPage /></section>
      <section id="contact"><ContactPage /></section>
    </>
  );
};

export default LandingPage;
