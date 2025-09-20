"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";

import AdelgazamientoImg from "@/app/assets/treatments/corporal/Adelgazamiento_localizado.png";
import ReduccionCelulitisImg from "@/app/assets/treatments/corporal/Reduccion_de_celulitis.png";
import ReduccionEstriasImg from "@/app/assets/treatments/corporal/Reduccion_de_estrias.png";
import RemodelacionCorportalImg from "@/app/assets/treatments/corporal/Remodelacion_Corporal.png";
import TonificacionMuscularImg from "@/app/assets/treatments/corporal/Tonificacion_muscular.png";
import ReduccionMedidasImg from "@/app/assets/treatments/corporal/Reduccion_de_medidas.png";
import TratamientoFlacidezImg from "@/app/assets/treatments/corporal/Tratamiento_de_flacidez.png";

interface Service {
  id: number;
  title: string;
  description: string;
  image?: string | StaticImageData;
  category: "corporal" | "facial";
}

const corporalServices: Service[] = [
  {
    id: 1,
    title: "Adelgazamiento localizado y general",
    description: "Reducción efectiva de grasa localizada mediante tecnología avanzada",
    image: AdelgazamientoImg,
    category: "corporal"
  },
  {
    id: 2,
    title: "Reducción de celulitis",
    description: "Tratamiento integral para mejorar la textura y apariencia de la piel",
    image: ReduccionCelulitisImg,
    category: "corporal"
  },
  {
    id: 3,
    title: "Reducción de estrías",
    description: "Protocolo especializado para minimizar la apariencia de estrías",
    image: ReduccionEstriasImg,
    category: "corporal"
  },
  {
    id: 4,
    title: "Remodelación corporal integral",
    description: "Transformación completa de la silueta con resultados duraderos",
    image: RemodelacionCorportalImg,
    category: "corporal"
  },
  {
    id: 5,
    title: "Tonificación muscular y reafirmación",
    description: "Fortalecimiento y definición muscular sin cirugía",
    image: TonificacionMuscularImg,
    category: "corporal"
  },
  {
    id: 6,
    title: "Reducción de medidas",
    description: "Protocolo completo para reducción de medidas corporales",
    image: ReduccionMedidasImg,
    category: "corporal"
  },
  {
    id: 7,
    title: "Tratamiento de flacidez",
    description: "Reafirmación de la piel con tecnología de radiofrecuencia",
    image: TratamientoFlacidezImg,
    category: "corporal"
  }
];
import RejuvenecimientoFacialImg from "@/app/assets/treatments/facial/Rejuvenecimiento_Facial.png";
import ReafirmacionOvaloFacialImg from "@/app/assets/treatments/facial/Reafirmacion_ovalo_facial.png";
import HidratacionProfundaImg from "@/app/assets/treatments/facial/Hidratacion_profunda.png";
import TratamientoAntiacneImg from "@/app/assets/treatments/facial/Tratamientos_antiacne.png";
import CorrecionManchasImg from "@/app/assets/treatments/facial/Correccion_manchas.png";
import TratamientoAntiarrugasImg from "@/app/assets/treatments/facial/Tratamiento_antiarrugas.png";
import LimpiezaFacialProfundaImg from "@/app/assets/treatments/facial/Limpieza_facial_profunda.png";

const facialServices: Service[] = [
  {
    id: 8,
    title: "Rejuvenecimiento facial",
    description: "Restauración de la juventud y luminosidad natural del rostro",
    image: RejuvenecimientoFacialImg,
    category: "facial"
  },
  {
    id: 9,
    title: "Reafirmación y redefinición del óvalo facial",
    description: "Lifting no quirúrgico para contornos faciales definidos",
    image: ReafirmacionOvaloFacialImg,
    category: "facial"
  },
  {
    id: 10,
    title: "Hidratación profunda",
    description: "Nutrición intensiva para una piel radiante y saludable",
    image: HidratacionProfundaImg,
    category: "facial"
  },
  {
    id: 11,
    title: "Tratamientos antiacné y post-acné",
    description: "Soluciones efectivas para piel propensa al acné y sus secuelas",
    image: TratamientoAntiacneImg,
    category: "facial"
  },
  {
    id: 12,
    title: "Corrección de manchas",
    description: "Eliminación de hiperpigmentación para un tono uniforme",
    image: CorrecionManchasImg,
    category: "facial"
  },
  {
    id: 13,
    title: "Tratamiento antiarrugas",
    description: "Prevención y corrección de líneas de expresión",
    image: TratamientoAntiarrugasImg,
    category: "facial"
  },
  {
    id: 14,
    title: "Limpieza facial profunda",
    description: "Desintoxicación y purificación de la piel del rostro",
    image: LimpiezaFacialProfundaImg,
    category: "facial"
  }
];

const InfiniteCarousel = ({
  services,
  direction = 1
}: {
  services: Service[];
  direction?: number;
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  // Corrige a reclamação do TS: inicializa o ref como null e inclui null na tipagem
  const animationRef = useRef<number | null>(null);
  const speed = 0.8;
  const isInitialized = useRef(false);

  // Duplicar os serviços para criar efeito infinito
  const duplicatedServices = [...services, ...services, ...services];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Inicializar na posição média apenas uma vez
    if (!isInitialized.current) {
      container.scrollLeft = container.scrollWidth / 3;
      isInitialized.current = true;
    }

    const animate = () => {
      if (!isPaused && container) {
        const currentScroll = container.scrollLeft;
        const maxScroll = container.scrollWidth / 3;

        // Movimento contínuo
        container.scrollLeft += speed * direction;

        // Reposicionar suavemente quando chegar ao fim
        if (direction > 0 && container.scrollLeft >= maxScroll * 2) {
          container.scrollLeft = maxScroll;
        } else if (direction < 0 && container.scrollLeft <= 0) {
          container.scrollLeft = maxScroll;
        }
      }

      if (!isPaused) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    if (!isPaused) {
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, direction, speed]);

  return (
    <div className="space-y-8">
      {/* Removido o título interno do carrossel */}

      <div className="relative">
        <div
          ref={containerRef}
          className="relative overflow-hidden py-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-6 px-4">
            {duplicatedServices.map((service, index) => (
              <div
                key={`${service.id}-${index}`}
                className="flex-shrink-0 w-80"
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-[var(--cor-soft-gray)]/30 hover:border-[var(--cor-dourado-claro)]/50 h-72 flex flex-col"
                >
                  {/* Seção de imagen do tratamento */}
                  <div className="relative w-full h-28 mb-4 overflow-hidden rounded-md bg-[var(--cor-soft-gray)]/20">
                    {service.image ? (
                      <Image src={service.image} alt={service.title} fill className="object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[var(--cor-charcoal)]/40 text-xs tracking-wide">
                        Imagen del tratamiento
                      </div>
                    )}
                  </div>

                  <h4
                    className="text-lg font-medium text-[var(--cor-charcoal)] mb-2 group-hover:text-[var(--cor-dourado-escuro)] transition-colors duration-300"
                    style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
                  >
                    {service.title}
                  </h4>
                  <p
                    className="text-[var(--cor-charcoal)]/70 text-sm leading-relaxed"
                    style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
                  >
                    {service.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Gradiente para efeito visual - agora fora do container de scroll */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none hidden md:block"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none hidden md:block"></div>
      </div>
    </div>
  );
};

export default function ServicesCarousel() {
  return (
    <section className="py-32 bg-gradient-to-br from-white via-[var(--cor-soft-gray)] to-white" id="servicios">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light text-[var(--cor-charcoal)] mb-8"
            style={{ fontFamily: 'var(--font-adelia)' }}
          >
            Nuestros Servicios
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "150px" }}
            transition={{ duration: 1.2, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-px bg-gradient-to-r from-transparent via-[var(--cor-dourado-claro)] to-transparent mx-auto mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-[var(--cor-charcoal)]/70 max-w-4xl mx-auto leading-relaxed"
          >
            En Equilibrio Line unimos tecnología de vanguardia y asesoramiento profesional para lograr un cuerpo más esbelto y tonificado, con resultados medibles y sostenibles.
            <br className="hidden md:block" />
            Nuestros protocolos faciales personalizados, combinando aparatología avanzada y cosmética profesional, potencian una piel radiante, sana y rejuvenecida.
          </motion.p>
        </div>

        {/* Services Carousels */}
        <InfiniteCarousel
          services={corporalServices}
          direction={-1} // Move para esquerda
        />

        <InfiniteCarousel
          services={facialServices}
          direction={1} // Move para direita
        />
      </div>
    </section>
  );
}