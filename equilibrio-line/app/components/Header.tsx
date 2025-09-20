"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../public/Equilibrio-line-logo.svg";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Equipos", href: "#equipos" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
  { label: "Ubicación", href: "#ubicacion" },
];

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="relative"
  >
    <Link
      href={href}
      className="text-sm font-light tracking-wide transition-all duration-300 hover:text-[var(--cor-dourado-escuro)] relative group block px-3 py-2 rounded-full focus:outline-none focus:ring-0"
    >
      {children}
      <motion.span
        className="absolute -bottom-1 left-0 h-px bg-[var(--cor-dourado-escuro)]"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </Link>
  </motion.div>
);

const MobileMenuButton = ({ onClick }: { onClick: () => void }) => (
  <motion.button
    onClick={onClick}
    aria-label="Abrir menu"
    className="p-2 rounded-full hover:bg-white/10 transition-colors duration-300 focus:outline-none focus:ring-0"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <line x1="3" x2="21" y1="6" y2="6" />
      <line x1="3" x2="21" y1="12" y2="12" />
      <line x1="3" x2="21" y1="18" y2="18" />
    </svg>
  </motion.button>
);

const CloseMenuButton = ({ onClick }: { onClick: () => void }) => (
  <motion.button
    onClick={onClick}
    aria-label="Fechar menu"
    className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 transition-colors duration-300 focus:outline-none focus:ring-0"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path d="M18 6 6 18" />
      <path d="M6 6 18 18" />
    </svg>
  </motion.button>
);

const Logo = () => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="relative focus:outline-none focus:ring-0"
  >
    <Link
      href="#inicio"
      className="flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer focus:outline-none focus:ring-0"
      style={{ outline: 'none', WebkitTapHighlightColor: 'transparent' }}
    >
      <div className="relative w-12 h-12 rounded-full overflow-hidden focus:outline-none focus:ring-0" style={{ outline: 'none' }}>
        <Image
          src={logo}
          alt="Logo Equilibrio Line"
          fill
          priority
          className="object-cover focus:outline-none focus:ring-0"
          style={{ outline: 'none' }}
        />
      </div>
      <span
        className="ml-3 text-xl font-light tracking-wide text-[var(--cor-charcoal)] focus:outline-none focus:ring-0"
        style={{ fontFamily: 'var(--font-adelia)', outline: 'none' }}
      >
        Equilibrio Line
      </span>
    </Link>
  </motion.div>
);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${scrolled
        ? 'bg-white/80 backdrop-blur-lg shadow-lg h-16'
        : 'bg-white/60 backdrop-blur-md h-20'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Desktop Navigation - Left */}
        <nav className="hidden lg:flex items-center space-x-2">
          {navLinks.slice(0, 3).map((link) => (
            <NavLink key={link.href} href={link.href}>{link.label}</NavLink>
          ))}
        </nav>

        {/* Logo Central */}
        <div className="flex-1 lg:flex-none flex justify-center lg:justify-center">
          <Logo />
        </div>

        {/* Desktop Navigation - Right */}
        <nav className="hidden lg:flex items-center space-x-2">
          {navLinks.slice(3).map((link) => (
            <NavLink key={link.href} href={link.href}>{link.label}</NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <MobileMenuButton onClick={() => setMenuOpen(true)} />
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 h-screen w-screen bg-white backdrop-blur-xl shadow-2xl z-50 lg:hidden"
          >
            <div className="p-8 pt-20 h-full w-full flex flex-col">
              <CloseMenuButton onClick={closeMenu} />
              <nav className="flex flex-col space-y-6 flex-1 justify-center items-center">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 + 0.2 * navLinks.indexOf(link) }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="text-lg font-light tracking-wide transition-colors duration-300 hover:text-[var(--cor-dourado-escuro)] block py-3 focus:outline-none focus:ring-0"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
