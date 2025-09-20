"use client";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer id="localizacion" className="bg-gradient-to-br from-[var(--cor-charcoal)] to-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h2
              className="text-2xl font-light mb-4 text-[var(--cor-dourado-claro)]"
              style={{ fontFamily: 'var(--font-adelia)' }}
            >
              Equilibrio Line
            </h2>
            <p className="text-white/80 text-base leading-relaxed mb-6 max-w-md">
              Descubrimos el valor único que cada persona posee, realzando su belleza
              natural con elegancia y sofisticación.
            </p>
          </motion.div>

          {/* Google Maps Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="w-full h-64 rounded-lg overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.0000000000005!2d-1.2143874!3d38.0530838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd647f77ba5cb9bb%3A0x50220371ed56768b!2sEquilibrio%20Line!5e0!3m2!1ses!2ses!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Equilibrio Line Ubicación"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Credits */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="text-center">
            <p className="text-white/60 text-xs">
              © 2003 Interex S.L. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
