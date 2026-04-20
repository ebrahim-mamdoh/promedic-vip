"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 }
  }
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-deep">
      {/* Background Subtle Atmosphere */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px]" 
        />
        <motion.div 
          animate={{ x: [0, -50, 0], y: [0, -40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] right-[20%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" 
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="inline-block mb-6">
            <span className="text-primary font-black tracking-[0.5em] uppercase text-xs border border-primary/20 px-8 py-2.5 rounded-full backdrop-blur-sm bg-primary/5">
              Promedic Elite Care
            </span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-6xl md:text-[5.5rem] font-black text-text-primary leading-[1.1] mb-8 tracking-tighter">
            PROMEDIC <span className="text-primary">VIP</span> <br/>
            <span className="text-2xl md:text-4xl font-light tracking-[0.3em] uppercase text-text-secondary mt-4 block leading-relaxed">
              1994 العقبي
            </span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-text-secondary mb-12 leading-loose font-light max-w-2xl mx-auto uppercase tracking-widest px-4">
            دكتور في التدريب الرياضي من كلية ليدز في انجلترا يقدم لك رعاية ومتابعة استثنائية للوصول إلى أفضل مستوى بدني وصحي.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-4"
          >
            <a
              href="#experts"
              className="w-full sm:w-auto px-12 py-5 bg-primary hover:bg-primary-dark text-bg-deep font-black uppercase tracking-widest text-xs rounded-lg transition-all transform hover:scale-[1.02]"
            >
              تعرف على الخبراء
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-12 py-5 border border-primary/40 text-primary hover:bg-primary hover:text-bg-deep font-black uppercase tracking-widest text-xs rounded-lg transition-all backdrop-blur-sm shadow-xl shadow-black/20"
            >
              احجز موعداً
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Divider Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg-secondary to-transparent z-20" />
    </section>
  );
}
