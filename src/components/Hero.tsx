"use client";

import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const itemVariants: Variants = {
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
              منظومة عافية متكاملة
            </span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-6xl md:text-[5.5rem] font-black text-text-primary leading-[1.1] mb-8 tracking-tighter">
            العقبي <span className="text-primary">94 VIP</span> <br/>
            <span className="text-2xl md:text-3xl font-light tracking-[0.2em] text-text-secondary mt-4 block leading-relaxed">
              الوعي + القرار + التجربة + الأمان
            </span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-text-secondary mb-12 leading-loose font-light max-w-3xl mx-auto tracking-wide px-4">
            منصة رائدة في تقديم حلول العافية المتكاملة في مصر والمملكة العربية السعودية، تجمع بين الطب الحديث، السياحة العلاجية، التأهيل الرياضي، والبرامج الروحانية استجابة للتحولات العالمية في مفهوم الصحة.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-4"
          >
            <a
              href="https://wa.me/201093011183"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-12 py-5 bg-primary hover:bg-primary-dark text-bg-deep font-black uppercase tracking-widest text-sm rounded-lg transition-all transform hover:scale-[1.02] shadow-[0_0_30px_rgba(198,167,94,0.3)]"
            >
              ابدأ رحلتك خلال 240 ثانية (ساعة الخلود)
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Divider Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg-secondary to-transparent z-20" />
    </section>
  );
}
