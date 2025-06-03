import Home from './Home';
import About from './About';
import ServicePage from './ServicePage';
import GalleryPage from './GalleryPage';
import TestimonialsPage from './TestimonalPage';
import ContactPage from './ContactPage';

const LandingPage = () => {
  return (
    <>
      <section id="home" className="scroll-mt-24"><Home /></section>
      <section id="about" className="scroll-mt-24"><About /></section>
      <section id="services" className="scroll-mt-24"><ServicePage /></section>
      <section id="gallery" className="scroll-mt-24"><GalleryPage /></section>
      <section id="testimonials" className="scroll-mt-24"><TestimonialsPage /></section>
      <section id="contact" className="scroll-mt-24"><ContactPage /></section>
    </>
  );
};

export default LandingPage;
