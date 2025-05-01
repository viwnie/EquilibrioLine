"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Image from "next/image"
import EquilibrioExemplo from "../../public/carousel/equilibrio-line-ejemplo.png"
import Autoplay from "embla-carousel-autoplay"
import { useEffect, useState, useCallback } from "react"
import type { CarouselApi } from "@/components/ui/carousel"

const images = [EquilibrioExemplo, EquilibrioExemplo, EquilibrioExemplo, EquilibrioExemplo,]

export default function CarouselHome() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
    api.on("select", onSelect);
    onSelect();
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 8000,
        }),
      ]}
      setApi={setApi}
      className="relative w-full overflow-hidden">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="w-full">
            <div className="p-0">
              <div className="relative w-full h-screen">
                <Image
                  src={image}
                  fill={true}
                  objectFit="cover"
                  alt="Imagem do carrossel"
                  className="object-cover"
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {images.length > 1 && (
        <div className="absolute left-1/2 bottom-8 z-10 flex -translate-x-1/2 gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              className={`h-3 w-3 rounded-full cursor-pointer border border-white transition-all ${selectedIndex === idx ? "bg-white" : "bg-white/50"}`}
              aria-label={`Ir para o slide ${idx + 1}`}
              aria-current={selectedIndex === idx}
            />
          ))}
        </div>
      )}
    </Carousel>
  )
}