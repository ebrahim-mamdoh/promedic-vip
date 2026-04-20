"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, User } from "lucide-react";

interface ExpertCardProps {
  name: string;
  title: string;
  image?: string;
  delay?: number;
}

export function ExpertCard({ name, title, image, delay = 0 }: ExpertCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, type: "spring", stiffness: 100 }}
      className="bg-surface rounded-xl overflow-hidden p-8 flex flex-col h-full group border border-border-gold transition-all"
    >
      <div className="relative w-full aspect-[4/5] bg-bg-deep rounded-lg mb-8 overflow-hidden border border-white/5">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-primary/10 group-hover:scale-110 transition-transform duration-700">
            <User className="w-24 h-24" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-transparent to-transparent opacity-40" />
      </div>

      <div className="flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-text-primary mb-3 tracking-wide">
          {name}
        </h3>
        <p className="text-text-secondary leading-relaxed flex-grow text-sm font-medium">
          {title}
        </p>
      </div>

      <div className="mt-8">
        <button className="flex items-center text-primary font-bold transition-all border border-primary/40 px-5 py-2.5 rounded-lg group-hover:bg-primary group-hover:text-bg-deep">
          <span className="text-xs uppercase tracking-widest">عرض السيرة الذاتية</span>
          <ChevronLeft className="w-4 h-4 ml-1 transform group-hover:-translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}
