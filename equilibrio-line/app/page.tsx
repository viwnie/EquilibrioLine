import  CarouselHome  from './components/CarouselHome';
import CarouselSection from './components/CarouselSection';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <CarouselHome />
      <CarouselSection />
    </div>
  );
}
