"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { allTreatments } from "../../data/treatments";
import { ContactInfoData } from "../../data/contactInfo";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    treatment: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hola 😊, soy ${formData.name}. Les escribo desde su página web porque estoy interesada en ${formData.treatment}. ¿Podrían darme más información, por favor?`;
    const whatsappUrl = `https://wa.me/34621665635?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    
    setFormData({
      name: '',
      treatment: ''
    });
  };

  const treatments = allTreatments;

  return (
    <section id="contacto" className="py-16 md:py-32 bg-gradient-to-br from-[var(--cor-charcoal)] via-black to-[var(--cor-charcoal)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-4 md:mb-8 break-words"
            style={{ fontFamily: 'var(--font-adelia)' }}
          >
            Reserva tu Consulta
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "150px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-px bg-gradient-to-r from-transparent via-[var(--cor-dourado-claro)] to-transparent mx-auto mb-4 md:mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed px-2"
          >
            Descubre qué tratamiento se adapta perfectamente a tus necesidades.
            Permítenos crear una experiencia personalizada para ti.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 border border-white/10 overflow-hidden h-fit"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-4 md:mb-6 break-words" style={{ fontFamily: 'var(--font-adelia)' }}>
              Formulario de Contacto
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 md:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[var(--cor-dourado-claro)] transition-colors duration-300 text-sm sm:text-base"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Tratamiento de Interés *
                </label>
                <select
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 md:py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[var(--cor-dourado-claro)] transition-colors duration-300 text-sm sm:text-base"
                  >
                  <option value="" className="bg-[var(--cor-charcoal)]">Selecciona un tratamiento</option>
                  {treatments.map((treatment, index) => (
                    <option key={index} value={treatment} className="bg-[var(--cor-charcoal)] break-words">
                      {treatment}
                    </option>
                  ))}
                </select>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 md:py-4 bg-[var(--cor-dourado-claro)] text-white hover:bg-[var(--cor-dourado-escuro)] transition-all duration-300 text-sm font-medium tracking-wide uppercase rounded-lg shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.015-1.04 2.475 0 1.46 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0024.003 11.89c-.002-6.552-5.437-11.89-12.003-11.89z"/>
                </svg>
                Contáctanos
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 border border-white/10 overflow-hidden"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-light text-white mb-4 md:mb-8 break-words" style={{ fontFamily: 'var(--font-adelia)' }}>
              Información de Contacto
            </h3>

            <div className="space-y-4 md:space-y-6">
              {ContactInfoData.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                >
                  <div className="text-[var(--cor-dourado-claro)] mt-1 flex-shrink-0">
                    {info.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-white mb-1 text-sm sm:text-base">{info.label}</p>
                    <p className="text-white/80 text-sm sm:text-base break-words">{info.value}</p>
                    {info.subvalue && (
                      <p className="text-white/60 text-xs sm:text-sm break-words">{info.subvalue}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
