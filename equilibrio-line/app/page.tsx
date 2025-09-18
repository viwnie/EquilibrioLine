import CarouselHome from './components/CarouselHome';
import ServicesCarousel from './components/ServicesCarousel';
import FloatingEquipment from './components/FloatingEquipment';
import BrandStory from './components/BrandStory';
import Tecnologia from './components/Tecnologia';
import Testimonials from './components/Testimonials';
import Contacto from './components/Contacto';

export default function Home() {
  return (
    <main className="min-h-screen">
      <CarouselHome />
      <ServicesCarousel />
      <FloatingEquipment />
      <BrandStory />
      <Tecnologia />
      <Testimonials />
      <Contacto />
    </main>
  );
}
