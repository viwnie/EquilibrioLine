"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../public/Equilibrio-line-logo.svg";

const navLinks = [
  { label: "Método", href: "#Método" },
  { label: "Tratamientos", href: "#Tratamientos" },
  { label: "Productos", href: "#Productos" },
  { label: "FAQs", href: "#FAQs" },
];

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="text-sm font-medium transition-colors duration-200 hover:text-green-700 hover:underline underline-offset-4"
  >
    {children}
  </Link>
);

const MobileMenuButton = ({ onClick }: { onClick: () => void }) => (
  <button onClick={onClick} aria-label="Abrir o menu">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  </button>
);

const CloseMenuButton = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    aria-label="Fechar o menu"
    className="absolute top-6 right-6"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M18 6 6 18" />
      <path d="M6 6 18 18" />
    </svg>
  </button>
);

const Logo = () => (
  <Link href="#" className="flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:drop-shadow-lg cursor-pointer">
    <Image
      src={logo}
      alt="Logo Equilibrio Line"
      width={60}
      height={60}
      priority
      className="rounded-full min-w-[60px]"
    />
    <span className="ml-2 text-lg sm:text-xl font-[adelia] whitespace-nowrap">Equilibrio Line</span>
  </Link>
);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full h-[70px] bg-white/55 backdrop-blur shadow-md px-3 sm:px-10 flex items-center justify-between">
      {/* Navegação Desktop - Esquerda */}
      <nav className="hidden md:flex flex-1 items-center justify-start space-x-3">
        {navLinks.slice(0, 2).map((link) => (
          <NavLink key={link.href} href={link.href}>{link.label}</NavLink>
        ))}
      </nav>

      {/* Logo Central */}
      <div className="flex flex-1 justify-center items-center">
        <Logo />
      </div>

      {/* Navegação Desktop - Direita */}
      <nav className="hidden md:flex flex-1 items-center justify-end space-x-3">
        {navLinks.slice(2).map((link) => (
          <NavLink key={link.href} href={link.href}>{link.label}</NavLink>
        ))}
      </nav>

      {/* Menu Mobile */}
      <div className="md:hidden">
        <MobileMenuButton onClick={() => setMenuOpen(true)} />
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }}
              exit={{ x: "100%", transition: { type: "spring", stiffness: 100, damping: 20 } }}
              className="fixed top-0 right-0 w-full h-screen bg-white z-50 flex flex-col items-center justify-center"
            >
              <CloseMenuButton onClick={closeMenu} />
              <ul className="space-y-8 text-2xl font-semibold">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} onClick={closeMenu}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
