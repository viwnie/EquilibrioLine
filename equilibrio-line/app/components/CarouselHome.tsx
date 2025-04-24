"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import EquilibrioExemplo from "../../public/carousel/equilibrio-line-ejemplo.png"
import Autoplay from "embla-carousel-autoplay"
const images = [EquilibrioExemplo, EquilibrioExemplo, EquilibrioExemplo, EquilibrioExemplo,]

export default function CarouselHome() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 8000,
        }),
      ]}
      className="relative w-full max-w-[100vw] overflow-hidden">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <div className="relative w-full h-[calc(100vh-8rem)]">
                <Image
                  src={image}
                  fill={true}
                  objectFit="cover"
                  alt="Picture of the author"
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {images.length > 1 && (
        <>
          <CarouselPrevious className="left-4 z-10 cursor-pointer" />
          <CarouselNext className="right-4 z-10 cursor-pointer" />
        </>
      )}
    </Carousel>
  )
}