"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail } from "lucide-react";

// TikTok SVG since lucide-react doesn't have it natively
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91.04.15 1.5.76 2.91 1.76 4.02.99 1.11 2.33 1.83 3.8 2.05v3.83c-1.39-.05-2.73-.44-3.89-1.14-.13 1.25-.13 2.51 0 3.76.33 2.27 1.54 4.31 3.37 5.67 1.82 1.34 4.07 1.95 6.33 1.7v3.91c-3.1.28-6.19-.65-8.62-2.58-1.55-1.25-2.69-2.93-3.23-4.85-.31-1.12-.45-2.28-.42-3.44V7.57c-2.3 1.78-5.18 2.5-8.06 2.02-2.12-.34-4.06-1.46-5.46-3.15-1.41-1.68-2.15-3.84-2.07-6.04.09-2.35.98-4.57 2.53-6.28C5.03 1.6 7.55.51 10.36.43c.72-.01 1.44-.02 2.16-.01V.02z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

export function FloatingActions() {
  return (
    <div className="fixed bottom-8 left-8 z-50 flex flex-col items-center gap-5">
      {/* Social Icons Stack */}
      <div className="flex flex-col gap-4 mb-2">
        <a href="https://www.tiktok.com/@promedic.group.in?_r=1&_t=ZS-95b3gru4iRR" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-lg bg-surface border border-primary/20 shadow-xl flex items-center justify-center text-primary hover:bg-primary hover:text-bg-deep transition-all">
          <TikTokIcon className="w-5 h-5" />
        </a>
        <a href="https://www.facebook.com/share/18RZLzjqTx/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-lg bg-surface border border-primary/20 shadow-xl flex items-center justify-center text-primary hover:bg-primary hover:text-bg-deep transition-all">
          <FacebookIcon className="w-5 h-5" />
        </a>
        <a href="https://www.instagram.com/promedic.0?igsh=bjBhemo0d2FiYWgy" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-lg bg-surface border border-primary/20 shadow-xl flex items-center justify-center text-primary hover:bg-primary hover:text-bg-deep transition-all">
          <InstagramIcon className="w-5 h-5" />
        </a>
        <a href="mailto:promedic2026@gmail.com" className="w-11 h-11 rounded-lg bg-surface border border-primary/20 shadow-xl flex items-center justify-center text-primary hover:bg-primary hover:text-bg-deep transition-all">
          <Mail className="w-5 h-5" />
        </a>
      </div>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/201093011183"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group w-16 h-16 bg-primary rounded-lg flex items-center justify-center shadow-[0_0_30px_rgba(198,167,94,0.3)] text-bg-deep"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="absolute inset-0 bg-primary rounded-lg animate-ping opacity-20 group-hover:hidden" />
        <MessageCircle className="w-9 h-9 relative z-10" />
      </motion.a>
    </div>
  );
}
