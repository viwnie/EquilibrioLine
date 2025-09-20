"use client";
import { motion } from "framer-motion";

const reasons = [
  "Trato personalizado y diagnóstico profesional",
  "Equipos de última generación",
  "Protocolos combinados para potenciar resultados",
  "Resultados visibles desde las primeras sesiones",
  "Amplia experiencia y compromiso con la excelencia"
];

const BrandStory = () => {
   return (
     <section className="py-24 bg-white overflow-hidden" id="nosotros">
       <div className="max-w-6xl mx-auto px-6">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           {/* Left Content */}
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6, ease: "easeOut" }}
             className="space-y-8"
           >
             <div>
               <motion.h2
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                 className="text-4xl md:text-5xl font-light text-[var(--cor-charcoal)] mb-6"
                 style={{ fontFamily: 'var(--font-adelia)' }}
               >
                 Equilibrio Line
               </motion.h2>

               <motion.p
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                 className="text-lg text-[var(--cor-charcoal)]/80 leading-relaxed mb-8"
               >
                 Contamos con un equipo altamente cualificado y en constante formación. Nuestra misión es ofrecer soluciones efectivas, seguras y
                 personalizadas a quienes desean mejorar su cuerpo, su piel y su bienestar general.
               </motion.p>

               <motion.p
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.6 }}
                 viewport={{ once: true }}
                 className="text-lg text-[var(--cor-charcoal)]/80 leading-relaxed"
               >
                 Tratamos a cada persona con dedicación y cuidado personalizado,
                 creando tratamientos únicos que resaltan la belleza natural de cada cliente. 
                <strong> Por qué elegirnos:</strong>
               </motion.p>
             </div>

             <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
               className="space-y-6"
             >
               {reasons.map((reason, index) => (
                 <div key={index} className="flex items-start space-x-4">
                   <div className="flex-shrink-0 w-8 h-8 bg-[var(--cor-dourado-claro)] rounded-full flex items-center justify-center">
                     <span className="text-white text-sm font-bold">{String(index + 1).padStart(2, '0')}</span>
                   </div>
                   <div>
                     <h3 className="text-lg font-medium text-[var(--cor-charcoal)] mb-2">
                       {reason}
                     </h3>
                   </div>
                 </div>
               ))}
             </motion.div>
           </motion.div>

           {/* Right Content - Video Element */}
           <motion.div
             initial={{ opacity: 0, x: 30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
             className="relative"
           >
             <div className="relative h-96 bg-gradient-to-br from-[var(--cor-bege-luxo)] to-[var(--cor-champagne)] rounded-lg overflow-hidden">
               <video
                 className="absolute inset-0 w-full h-full object-cover rounded-lg"
                 autoPlay
                 muted
                 loop
                 playsInline
                 preload="metadata"
               >
                 <source src="/Equilibrio_Video.mp4" type="video/mp4" />
                 Tu navegador no soporta el elemento de video.
               </video>

               <div className="absolute inset-0 bg-black/20 rounded-lg"></div>

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
};

export default BrandStory;