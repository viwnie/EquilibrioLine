"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import HeroCarrossel from "@/app/assets/hero/Hero_EquilibrioLine.png";

// Seeded PRNG to ensure deterministic values on server and client
function mulberry32(seed: number) {
  let t = seed >>> 0;
  return function () {
    t += 0x6D2B79F5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

export default function CarouselHome() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden" id="inicio">
      {/* Sophisticated Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={HeroCarrossel}
            alt="Equilibrio Line"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => {
            const rand = mulberry32(0xC0FFEE + i);
            const left = `${rand() * 100}%`;
            const top = `${rand() * 100}%`;
            const duration = 3 + rand() * 2;
            const delay = rand() * 2;
            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                style={{ left, top }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration,
                  repeat: Infinity,
                  delay,
                }}
              />
            );
          })}
        </div>

        {/* Elegant Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center px-6 max-w-5xl mx-auto">
          <AnimatePresence>
            {isLoaded && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-6 md:space-y-8 lg:space-y-10"
              >

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-white/90 text-xl md:text-2xl lg:text-3xl font-light tracking-wide max-w-3xl mx-auto leading-relaxed"
                >
                  Bienvenida a Equilibrio Line
                </motion.p>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                  className="text-white/70 text-base md:text-lg lg:text-xl font-light max-w-4xl mx-auto leading-relaxed px-4"
                >
                  Especialistas en remodelación corporal y cuidado facial avanzado. Nuestro centro estético en Molina de Segura combina tecnología de última generación con un
                  enfoque profesional y personalizado para ayudarte a conseguir tu mejor versión.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="pt-8 md:pt-10 lg:pt-12"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="#contacto"
                      className="inline-block px-8 py-4 md:px-12 md:py-5 lg:px-16 lg:py-5 bg-transparent border-2 border-white/60 text-white hover:bg-white hover:text-black transition-all duration-700 text-sm md:text-base lg:text-lg font-light tracking-widest uppercase backdrop-blur-sm"
                    >
                      Solicita tu primera
                      <br className="sm:hidden" />
                      sesión gratuita
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="absolute bottom-6 md:bottom-8 lg:bottom-8 xl:bottom-12 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center space-y-1 md:space-y-2">
          <div className="w-px h-12 md:h-16 lg:h-20 bg-gradient-to-b from-white/60 to-transparent"></div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-2 h-2 md:w-3 md:h-3 bg-white/70 rounded-full"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
}