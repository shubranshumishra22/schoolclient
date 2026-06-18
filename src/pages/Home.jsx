import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import StatsBar from '../components/sections/StatsBar';
import AboutSnapshot from '../components/sections/AboutSnapshot';
import Features from '../components/sections/Features';
import AcademicsPreview from '../components/sections/AcademicsPreview';
import Testimonials from '../components/sections/Testimonials';
import GalleryPreview from '../components/sections/GalleryPreview';
import EventsPreview from '../components/sections/EventsPreview';
import CTABanner from '../components/sections/CTABanner';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <StatsBar />
      <AboutSnapshot />
      <Features />
      <AcademicsPreview />
      <Testimonials />
      <GalleryPreview />
      <EventsPreview />
      <CTABanner />
      <Footer />
    </div>
  );
}
