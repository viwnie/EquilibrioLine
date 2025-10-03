"use client";
import { motion } from "framer-motion";
import Image from 'next/image';
import { EquipmentData } from "../../data/equipments";

export default function Technology() {

  return (
    <section id="equipos" className="py-24 bg-[var(--cor-soft-gray)]">
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
          {EquipmentData.map((equipo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div 
                className="bg-white rounded-lg overflow-hidden shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-1px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15),0_0_40px_-10px_rgba(212,175,55,0.2)] hover:bg-gradient-to-br hover:from-white hover:to-[var(--cor-champagne)]/5 transition-all duration-700 h-full"
                whileHover="hover"
                initial="initial"
              >
                {/* Equipment Image */}
                <div className="relative h-48 bg-gradient-to-br from-[var(--cor-bege-luxo)] to-[var(--cor-champagne)] flex items-center justify-center overflow-hidden">
                  {/* Star Effect Background */}
                  <motion.div 
                    className="absolute inset-0"
                    variants={{
                      initial: { opacity: 0 },
                      hover: { opacity: 1 }
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Animated stars */}
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        variants={{
                          initial: { opacity: 0, scale: 0 },
                          hover: {
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0],
                            transition: {
                              duration: 2,
                              delay: i * 0.2,
                              repeat: Infinity,
                              repeatDelay: 1
                            }
                          }
                        }}
                        style={{
                          left: `${20 + (i % 4) * 20}%`,
                          top: `${20 + Math.floor(i / 4) * 30}%`
                        }}
                      />
                    ))}
                    {/* Larger stars */}
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={`large-${i}`}
                        className="absolute w-2 h-2 bg-white rounded-full"
                        variants={{
                          initial: { opacity: 0, scale: 0 },
                          hover: {
                            opacity: [0, 0.8, 0],
                            scale: [0, 2, 0],
                            transition: {
                              duration: 2.5,
                              delay: i * 0.3 + 0.5,
                              repeat: Infinity,
                              repeatDelay: 1.5
                            }
                          }
                        }}
                        style={{
                          left: `${15 + i * 25}%`,
                          top: `${10 + i * 20}%`
                        }}
                      />
                    ))}
                  </motion.div>
                  
                  {equipo.imagen && (
                    <motion.div 
                      className="relative z-10"
                      variants={{
                        initial: { scale: 1 },
                        hover: { scale: 1.1 }
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        src={equipo.imagen}
                        alt={equipo.nombre}
                        width={equipo.nombre === "ONDAS ELECTROMAGNÉTICAS" ? 180 : 120}
                        height={equipo.nombre === "ONDAS ELECTROMAGNÉTICAS" ? 180 : 120}
                        className="object-contain filter transition-transform duration-500"
                      />
                    </motion.div>
                  )}
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
              </motion.div>
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
          <button onClick={() => window.location.href = '#contacto'} className="px-8 py-3 bg-[var(--cor-charcoal)] text-white hover:bg-[var(--cor-dourado-escuro)] transition-all duration-300 text-sm font-medium tracking-wide uppercase cursor-pointer">
            Consulta Personalizada
          </button>
        </motion.div>
      </div>
    </section>
  );
}
