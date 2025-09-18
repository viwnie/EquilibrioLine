"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TratamientosCorporales() {
  const tratamientos = [
    "Adelgazamiento localizado y general",
    "Reducción de celulitis",
    "Reducción de estrías",
    "Remodelación corporal integral",
    "Tonificación muscular y reafirmación"
  ];

  return (
    <section id="Tratamientos" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Remodela tu silueta.{" "}
            <span className="text-green-600">Mejora tu bienestar.</span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            Nuestros tratamientos corporales están diseñados para ayudarte a
            conseguir un cuerpo más esbelto, tonificado y saludable:
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {tratamientos.map((tratamiento, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-gray-800 font-medium">{tratamiento}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Combinamos tecnología de vanguardia con asesoramiento profesional
            para resultados medibles y sostenibles.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="#contacto"
              className="inline-block bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:shadow-xl"
            >
              Conoce nuestros tratamientos
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
