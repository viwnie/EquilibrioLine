"use client";
import { motion } from "framer-motion";
import Image from 'next/image';

export default function Tecnologia() {
  const equipamentos = [
    {
      nombre: "ULTHERA",
      descripcion: "Ultrasonido microfocalizado para lifting facial no invasivo con resultados duraderos.",
      imagen: "/ulthera.svg",
      categoria: "Lifting"
    },
    {
      nombre: "THERMAGE",
      descripcion: "Radiofrecuencia monopolar para reafirmación y rejuvenecimiento facial y corporal.",
      imagen: "/thermage.svg",
      categoria: "Reafirmación"
    },
    {
      nombre: "PICO SURE",
      descripcion: "Láser picosegundo para eliminación de manchas y rejuvenecimiento cutáneo.",
      imagen: "/pico-sure.svg",
      categoria: "Láser"
    },
    {
      nombre: "Dermapen 4",
      descripcion: "Microagujas para regeneración celular, estrías y mejora de textura cutánea.",
      imagen: "/dermapen-4.svg",
      categoria: "Microagujas"
    },
    {
      nombre: "H2-O2 Small Bubble",
      descripcion: "Limpieza facial profunda con burbujas ricas en hidrógeno y oxígeno.",
      imagen: "/h2o2-small-bubble.svg",
      categoria: "Limpieza Facial"
    },
    {
      nombre: "MagnaShape Quadra Core",
      descripcion: "Radiofrecuencia multipolar para celulitis, grasa localizada y flacidez.",
      imagen: "/magnashape-quadra-core.svg",
      categoria: "Radiofrecuencia"
    },
    {
      nombre: "Tecarplus 448 kHz",
      descripcion: "Tecarterapia para reafirmación profunda, tonificación y recuperación muscular.",
      imagen: "/tecarplus-448khz.svg",
      categoria: "Tecarterapia"
    },
    {
      nombre: "OLV-10 Oxigenoterapia",
      descripcion: "Oxigenoterapia con efectos regenerativos y calmantes para la piel.",
      imagen: "/olv-10-oxigenoterapia.svg",
      categoria: "Oxigenoterapia"
    },
    {
      nombre: "Tanita 580P",
      descripcion: "Análisis corporal profesional para planificación de tratamientos personalizados.",
      imagen: "/tanita-580p.svg",
      categoria: "Análisis"
    }
  ];

  return (
    <section id="tecnologia" className="py-24 bg-[var(--cor-soft-gray)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light text-[var(--cor-charcoal)] mb-6"
            style={{ fontFamily: 'var(--font-adelia)' }}>
            Tecnología de Vanguardia
          </h2>
          <p className="text-lg text-[var(--cor-charcoal)]/70 max-w-3xl mx-auto leading-relaxed">
            Equipos de última generación que garantizan resultados excepcionales
            y tratamientos seguros para tu bienestar y belleza.
          </p>
        </motion.div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipamentos.map((equipo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 h-full">
                {/* Equipment Image */}
                <div className="relative h-48 bg-gradient-to-br from-[var(--cor-bege-luxo)] to-[var(--cor-champagne)] flex items-center justify-center">
                  {equipo.imagen && (
                    <Image
                      src={equipo.imagen}
                      alt={equipo.nombre}
                      width={120}
                      height={120}
                      className="object-contain filter group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-[var(--cor-charcoal)] px-3 py-1 rounded-full text-xs font-medium">
                      {equipo.categoria}
                    </span>
                  </div>
                </div>

                {/* Equipment Info */}
                <div className="p-6">
                  <h3 className="text-xl font-medium text-[var(--cor-charcoal)] mb-3 group-hover:text-[var(--cor-dourado-escuro)] transition-colors duration-300">
                    {equipo.nombre}
                  </h3>
                  <p className="text-[var(--cor-charcoal)]/70 text-sm leading-relaxed">
                    {equipo.descripcion}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-[var(--cor-charcoal)]/80 mb-8 max-w-2xl mx-auto">
            Descubre cómo nuestras tecnologías avanzadas pueden transformar tu experiencia de belleza
          </p>
          <button className="px-8 py-3 bg-[var(--cor-charcoal)] text-white hover:bg-[var(--cor-dourado-escuro)] transition-all duration-300 text-sm font-medium tracking-wide uppercase">
            Consulta Personalizada
          </button>
        </motion.div>
      </div>
    </section>
  );
}
