"use client";
import { motion } from "framer-motion";

export default function QuienesSomos() {
  const beneficios = [
    "Trato personalizado y diagnóstico profesional",
    "Equipos de última generación",
    "Protocolos combinados para potenciar resultados",
    "Resultados visibles desde las primeras sesiones",
    "Amplia experiencia y compromiso con la excelencia"
  ];

  return (
    <section id="Método" className="py-20 bg-gradient-to-br from-[var(--cor-creme)] to-[var(--cor-off-white)] px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--cor-charcoal)] mb-6">
            Tu centro de estética avanzada en{" "}
            <span className="text-[var(--cor-dourado-escuro)]">Molina de Segura</span>
          </h2>

          <p className="text-lg sm:text-xl text-[var(--cor-marrom-luxo)] max-w-4xl mx-auto leading-relaxed">
            En Equilibrio Line contamos con un equipo altamente cualificado y en
            constante formación. Nuestra misión es ofrecer soluciones efectivas,
            seguras y personalizadas a quienes desean mejorar su cuerpo, su piel
            y su bienestar general.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
           viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--cor-charcoal)] mb-6">
            Tu centro de estética avanzada en{" "}
            <span className="text-[var(--cor-dourado-escuro)]">Molina de Segura</span>
          </h2>

          <p className="text-lg sm:text-xl text-[var(--cor-marrom-luxo)] max-w-4xl mx-auto leading-relaxed">
            En Equilibrio Line contamos con un equipo altamente cualificado y en
            constante formación. Nuestra misión es ofrecer soluciones efectivas,
            seguras y personalizadas a quienes desean mejorar su cuerpo, su piel
            y su bienestar general.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
           viewport={{ once: true }}
          className="bg-gradient-to-r from-[var(--cor-bege-luxo)] to-[var(--cor-champagne)] rounded-3xl p-8 sm:p-12 border border-[var(--cor-dourado-claro)]"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-[var(--cor-charcoal)] mb-8 text-center">
            ¿Por qué elegirnos?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beneficios.map((beneficio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                 viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-[var(--cor-dourado-claro)] rounded-full flex items-center justify-center mt-1 border border-[var(--cor-dourado-escuro)]">
                  <svg className="w-4 h-4 text-[var(--cor-charcoal)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-[var(--cor-charcoal)] font-medium">{beneficio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
