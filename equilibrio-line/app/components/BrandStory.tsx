"use client";
import { motion } from "framer-motion";

export default function BrandStory() {
  return (
    <section className="py-24 bg-white" id="nosotros">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl font-light text-[var(--cor-charcoal)] mb-6"
                style={{ fontFamily: 'var(--font-adelia)' }}
              >
                Equilibrio Line
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg text-[var(--cor-charcoal)]/80 leading-relaxed mb-8"
              >
                Equilibrio Line es la unión perfecta entre <strong>Equilibrio</strong> (Balance) y <strong>Línea</strong> (Elegancia).
                Para todas las personas que nos visitan, ofrecemos el valor único de cada individuo,
                es decir, realzamos su belleza personal.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-[var(--cor-charcoal)]/80 leading-relaxed"
              >
                Tratamos a cada persona con dedicación y cuidado personalizado,
                creando tratamientos únicos que resaltan la belleza natural de cada cliente.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[var(--cor-dourado-claro)] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">#01</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[var(--cor-charcoal)] mb-2">
                    Equilibrio Line descubre el valor personal y lo expresa bellamente.
                  </h3>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[var(--cor-dourado-claro)] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">#02</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[var(--cor-charcoal)] mb-2">
                    Equilibrio Line se enfoca en el corazón y servicio de nuestros clientes.
                  </h3>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-96 bg-gradient-to-br from-[var(--cor-bege-luxo)] to-[var(--cor-champagne)] rounded-lg overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <span className="text-3xl">✨</span>
                  </div>
                  <h3 className="text-2xl font-light text-[var(--cor-charcoal)]" style={{ fontFamily: 'var(--font-adelia)' }}>
                    Tu Belleza Única
                  </h3>
                  <p className="text-[var(--cor-charcoal)]/70 max-w-xs">
                    Cada persona tiene un valor especial que merece ser realzado con elegancia
                  </p>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 left-8 w-4 h-4 bg-white/40 rounded-full"
              />
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-12 right-12 w-6 h-6 bg-white/30 rounded-full"
              />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/3 right-8 w-3 h-3 bg-white/50 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}