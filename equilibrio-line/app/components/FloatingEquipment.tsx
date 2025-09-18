"use client";
import { motion } from "framer-motion";

export default function FloatingEquipment() {
  const equipments = [
    { name: "ULTHERA", delay: 0 },
    { name: "THERMAGE", delay: 0.5 },
    { name: "PICO SURE", delay: 1 },
    { name: "DERMAPEN 4", delay: 1.5 },
    { name: "H2-O2 BUBBLE", delay: 2 },
    { name: "MAGNASHAPE", delay: 2.5 },
    { name: "TECARPLUS", delay: 3 },
    { name: "OXIGENOTERAPIA", delay: 3.5 },
    { name: "TANITA 580P", delay: 4 }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-[var(--cor-bege-luxo)] via-white to-[var(--cor-champagne)] overflow-hidden relative" id="equipos">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-[var(--cor-dourado-claro)] rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-[var(--cor-dourado-claro)] rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-[var(--cor-dourado-claro)] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2
            className="text-3xl md:text-5xl font-light text-[var(--cor-charcoal)] mb-8 tracking-wider"
            style={{ fontFamily: 'var(--font-adelia)' }}
          >
            Tecnología Premium
          </h2>
          <p className="text-xl text-[var(--cor-charcoal)]/70 max-w-3xl mx-auto leading-relaxed">
            Equipos de última generación que definen el estándar de excelencia en estética avanzada
          </p>
        </motion.div>

        {/* Floating Equipment Names */}
        <div className="relative h-96 flex items-center justify-center">
          {equipments.map((equipment, index) => {
            // Calculate position in a circular pattern
            const angle = (index * 360) / equipments.length;
            const radius = 180;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <motion.div
                key={equipment.name}
                initial={{
                  opacity: 0,
                  scale: 0,
                  x: 0,
                  y: 0
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  x: x,
                  y: y
                }}
                transition={{
                  duration: 1.5,
                  delay: equipment.delay * 0.2,
                  ease: "easeOut"
                }}
                whileHover={{
                  scale: 1.2,
                  zIndex: 10
                }}
                viewport={{ once: true }}
                className="absolute bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-[var(--cor-dourado-claro)]/30 cursor-pointer group"
                style={{
                  transformOrigin: 'center'
                }}
              >
                <motion.span
                  className="text-sm font-medium text-[var(--cor-charcoal)] group-hover:text-[var(--cor-dourado-escuro)] transition-colors duration-300 whitespace-nowrap"
                  animate={{
                    y: [0, -5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: equipment.delay * 0.3,
                    ease: "easeInOut"
                  }}
                >
                  {equipment.name}
                </motion.span>
              </motion.div>
            );
          })}

          {/* Central Logo/Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-32 h-32 bg-gradient-to-br from-[var(--cor-dourado-claro)] to-[var(--cor-dourado-escuro)] rounded-full flex items-center justify-center shadow-2xl">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="text-white text-2xl font-light"
                style={{ fontFamily: 'var(--font-adelia)' }}
              >
                EL
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-lg text-[var(--cor-charcoal)]/80 max-w-2xl mx-auto leading-relaxed mb-8">
            Cada equipo representa años de investigación y desarrollo,
            diseñados para ofrecer resultados excepcionales con la máxima seguridad.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-transparent border-2 border-[var(--cor-dourado-claro)] text-[var(--cor-dourado-escuro)] hover:bg-[var(--cor-dourado-claro)] hover:text-white transition-all duration-500 text-sm font-medium tracking-wider uppercase"
          >
            Conoce Más Detalles
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}