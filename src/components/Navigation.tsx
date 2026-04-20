"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const navLinks = [
    { name: "الرئيسية", href: "#" },
    { name: "أطباؤنا", href: "#experts" },
    { name: "خدماتنا", href: "#services" },
    { name: "تواصل معنا", href: "#contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-bg-deep/95 backdrop-blur-md shadow-2xl py-4 border-b border-white/5"
          : "bg-transparent py-8"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="font-black text-2xl tracking-tighter cursor-pointer flex items-center gap-3 group">
          <span className="text-text-primary group-hover:text-primary transition-colors">PROMEDIC <span className="text-primary italic">VIP</span></span>
          <span className="text-[10px] uppercase tracking-[0.2em] border border-primary/30 px-3 py-1 rounded-full text-primary hidden sm:inline-block">1994 العقبي</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] font-bold text-text-secondary hover:text-primary transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="px-8 py-3 bg-primary hover:bg-primary-dark text-bg-deep text-xs font-black uppercase tracking-widest rounded-lg transition-all shadow-lg shadow-primary/10"
          >
            احجز الآن
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2 text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="md:hidden fixed inset-x-0 top-full bg-bg-deep border-t border-white/5 shadow-2xl overflow-hidden"
        >
          <div className="flex flex-col p-8 gap-6 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-[0.3em] font-bold text-text-primary hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-4 px-8 py-4 bg-primary text-bg-deep font-black uppercase tracking-widest text-xs rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              احجز الآن
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
