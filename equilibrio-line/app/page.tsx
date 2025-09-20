import { 
  Hero, 
  ServicesCarousel, 
  BrandStory, 
  Technology, 
  TestimonialsClient as Testimonials, 
  Contact 
} from './components/';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ServicesCarousel />
      <BrandStory />
      <Technology />
      <Testimonials />
      <Contact />
    </main>
  );
}
