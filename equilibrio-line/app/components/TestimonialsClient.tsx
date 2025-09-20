"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  treatment: string;
  content: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "María González",
    treatment: "ULTHERA Lifting Facial",
    content: "Increíble experiencia en Equilibrio Line. El tratamiento ULTHERA superó todas mis expectativas. Mi piel se ve más firme y radiante. El equipo es muy profesional y me sentí cómoda en todo momento.",
    rating: 5,
    image: "MG"
  },
  {
    id: 2,
    name: "Carmen Ruiz",
    treatment: "PICO SURE + Skin Booster",
    content: "Después de años luchando contra las manchas, finalmente encontré la solución perfecta. El láser PICO SURE combinado con el skin booster me devolvió la confianza. Resultados visibles desde la primera sesión.",
    rating: 5,
    image: "CR"
  },
  {
    id: 3,
    name: "Ana Martínez",
    treatment: "THERMAGE Corporal",
    content: "El tratamiento THERMAGE ha transformado completamente mi silueta. La tecnología es impresionante y los resultados son naturales. Sin duda, la mejor inversión en mi bienestar y autoestima.",
    rating: 5,
    image: "AM"
  },
  {
    id: 4,
    name: "Isabel López",
    treatment: "Tratamiento Integral",
    content: "Llevo más de un año siendo cliente de Equilibrio Line y cada visita es una experiencia única. La atención personalizada y los equipos de última generación hacen la diferencia. Totalmente recomendado.",
    rating: 5,
    image: "IL"
  }
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-32 bg-gradient-to-br from-[var(--cor-champagne)] via-white to-[var(--cor-bege-luxo)]" id="testimonios">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light text-[var(--cor-charcoal)] mb-8"
            style={{ fontFamily: 'var(--font-adelia)' }}
          >
            Experiencias Reales
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "150px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-px bg-gradient-to-r from-transparent via-[var(--cor-dourado-claro)] to-transparent mx-auto mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-[var(--cor-charcoal)]/70 max-w-3xl mx-auto leading-relaxed"
          >
            Descubre lo que nuestros clientes dicen sobre su transformación en Equilibrio Line
          </motion.p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-[var(--cor-dourado-claro)]/20"
            >
              {/* Stars Rating */}
              <div className="flex justify-center mb-8">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    <svg className="w-6 h-6 text-[var(--cor-dourado-claro)] mx-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </motion.div>
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-center mb-8">
                <p className="text-xl md:text-2xl text-[var(--cor-charcoal)] leading-relaxed italic font-light">
                  "{testimonials[currentTestimonial].content}"
                </p>
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--cor-dourado-claro)] to-[var(--cor-dourado-escuro)] rounded-full flex items-center justify-center text-white font-medium text-lg">
                  {testimonials[currentTestimonial].image}
                </div>
                <div className="text-left">
                  <h4 className="text-xl font-medium text-[var(--cor-charcoal)]">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-[var(--cor-charcoal)]/70">
                    {testimonials[currentTestimonial].treatment}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-[var(--cor-dourado-claro)] hover:text-white transition-all duration-300 group"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-[var(--cor-dourado-claro)] hover:text-white transition-all duration-300 group"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentTestimonial === index
                ? 'bg-[var(--cor-dourado-claro)] scale-125'
                : 'bg-[var(--cor-charcoal)]/30 hover:bg-[var(--cor-charcoal)]/50'
                }`}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-[var(--cor-charcoal)]/80 mb-8 max-w-2xl mx-auto">
            Únete a nuestros clientes satisfechos y descubre tu mejor versión
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-[var(--cor-dourado-claro)] text-white hover:bg-[var(--cor-dourado-escuro)] transition-all duration-300 text-sm font-medium tracking-wide uppercase rounded-full shadow-lg"
          >
            Reserva tu Consulta
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;