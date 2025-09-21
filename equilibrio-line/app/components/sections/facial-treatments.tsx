"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FacialTreatmentsData } from "../../data/treatments";

export default function FacialTreatments() {
  const tratamientos = FacialTreatmentsData;

  return (
    <section className="py-20 bg-white px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Potencia la{" "}
            <span className="text-green-600">belleza natural</span> de tu rostro.
          </h2>

          <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            Cuidamos tu piel con protocolos personalizados según tus necesidades
            y tipo de piel:
          </p>
        </motion.div>

        <TreatmentsCarousel treatments={tratamientos} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-green-50 p-8 rounded-2xl mb-8">
            <p className="text-lg text-gray-700 mb-6">
              La combinación de aparatología avanzada con cosmética profesional
              nos permite lograr una piel radiante, sana y rejuvenecida.
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="#contacto"
              className="inline-block bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:shadow-xl"
            >
              Solicita tu diagnóstico facial gratuito
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const TreatmentsCarousel = ({ treatments }: { treatments: string[] }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const speed = 0.5;

  const duplicatedTreatments = [...treatments, ...treatments, ...treatments];

  useEffect(() => {
    const animate = () => {
      if (!isPaused) {
        setTranslateX(prev => {
          const itemWidth = 320; // 80 * 4 (w-80 = 320px)
          const totalWidth = itemWidth * treatments.length;
          
          if (prev <= -totalWidth) {
            return 0;
          }
          return prev - speed;
        });
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, treatments.length, speed]);

  return (
    <div className="space-y-8 mb-12">
      <div className="relative overflow-hidden">
        <div
          ref={containerRef}
          className="relative py-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className="flex gap-4 px-4 transition-none"
            style={{ 
              transform: `translateX(${translateX}px)`,
              width: 'fit-content'
            }}
          >
            {duplicatedTreatments.map((tratamiento, index) => (
              <div
                key={`${tratamiento}-${index}`}
                className="flex-shrink-0 w-80"
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 hover:shadow-md transition-all duration-300 h-20 flex items-center"
                >
                  <div className="flex items-center space-x-3 w-full">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-800 font-medium text-sm">{tratamiento}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none hidden md:block"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none hidden md:block"></div>
      </div>
    </div>
  );
};
