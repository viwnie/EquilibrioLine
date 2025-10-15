"use client";
import { useRef } from 'react';
import { 
  Hero, 
  ServicesCarousel, 
  BrandStory, 
  Technology, 
  TestimonialsClient as Testimonials, 
  Contact 
} from './components/';
import WhatsAppFloat from './components/ui/WhatsAppFloat';
import { ContactRef } from './components/sections/contact';

export default function Home() {
  const contactRef = useRef<ContactRef>(null);

  const handleWhatsAppClick = () => {
    if (contactRef.current) {
      contactRef.current.activateWhatsAppMode();
    }
  };

  return (
    <main className="min-h-screen">
      <Hero />
      <ServicesCarousel />
      <BrandStory />
      <Technology />
      <Testimonials />
      <Contact ref={contactRef} />
      <WhatsAppFloat onContactClick={handleWhatsAppClick} />
    </main>
  );
}
