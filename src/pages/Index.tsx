import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Carousel from '@/components/Carousel';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import AboutUs from '@/components/AboutUs';
import LegalNotice from '@/components/LegalNotice';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import LegalPopup from '@/components/LegalPopup';

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Carousel />
        <Services />
        <HowItWorks />
        <Testimonials />
        <AboutUs />
        <LegalNotice />
      </main>
      <Footer />
      <WhatsAppFloat />
      <LegalPopup />
    </>
  );
};

export default Index;
