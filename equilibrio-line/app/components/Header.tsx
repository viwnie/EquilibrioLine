"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../public/Equilibrio-line-logo.svg";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Tecnología", href: "#tecnologia" },
  { label: "Equipos", href: "#equipos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="text-sm font-light tracking-wide transition-colors duration-300 hover:text-[var(--cor-dourado-escuro)] relative group"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--cor-dourado-escuro)] transition-all duration-300 group-hover:w-full"></span>
  </Link>
);

const MobileMenuButton = ({ onClick }: { onClick: () => void }) => (
  <button onClick={onClick} aria-label="Abrir menu" className="p-2">
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
  </button>
);

const CloseMenuButton = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    aria-label="Fechar menu"
    className="absolute top-6 right-6 p-2"
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
  </button>
);

const Logo = () => (
  <Link href="#inicio" className="flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer">
    <Image
      src={logo}
      alt="Logo Equilibrio Line"
      width={50}
      height={50}
      priority
      className="rounded-full"
    />
    <span
      className="ml-3 text-xl font-light tracking-wide text-[var(--cor-charcoal)]"
      style={{ fontFamily: 'var(--font-adelia)' }}
    >
      Equilibrio Line
    </span>
  </Link>
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

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${scrolled
        ? 'bg-white/70 backdrop-blur-lg shadow-lg h-16'
        : 'bg-white/50 backdrop-blur-md h-20'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Desktop Navigation - Left */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.slice(0, 3).map((link) => (
            <NavLink key={link.href} href={link.href}>{link.label}</NavLink>
          ))}
        </nav>

        {/* Logo Central */}
        <div className="flex-1 lg:flex-none flex justify-center lg:justify-center">
          <Logo />
        </div>

        {/* Desktop Navigation - Right */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.slice(3).map((link) => (
            <NavLink key={link.href} href={link.href}>{link.label}</NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <MobileMenuButton onClick={() => setMenuOpen(true)} />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={closeMenu}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 p-6"
            >
              <CloseMenuButton onClick={closeMenu} />

              <nav className="mt-16 space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="block text-lg font-light text-[var(--cor-charcoal)] hover:text-[var(--cor-dourado-escuro)] transition-colors duration-300 py-2 border-b border-gray-100"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
