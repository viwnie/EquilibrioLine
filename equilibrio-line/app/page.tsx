import { 
  CarouselHome, 
  ServicesCarousel, 
  BrandStory, 
  Tecnologia, 
  TestimonialsClient as Testimonials, 
  Contacto 
} from './components/';

export default function Home() {
  return (
    <main className="min-h-screen">
      <CarouselHome />
      <ServicesCarousel />
      <BrandStory />
      <Tecnologia />
      <Testimonials />
      <Contacto />
    </main>
  );
}
