"use client";

import { motion } from "framer-motion";
import { Activity, Brain, Eye, Heart, Zap } from "lucide-react";

const dimensions = [
  { id: "01", title: "الجسد", icon: Activity, desc: "تقييم وبناء القوة العضوية والبدنية" },
  { id: "02", title: "النفس", icon: Heart, desc: "تحقيق التوازن العاطفي والسلام الداخلي" },
  { id: "03", title: "الإدراك", icon: Brain, desc: "تعزيز التركيز، الوعي، والصفاء الذهني" },
  { id: "04", title: "السلوك", icon: Zap, desc: "تعديل وتطوير العادات لبناء أسلوب حياة صحي" },
  { id: "05", title: "الروح", icon: Eye, desc: "تنمية الارتباط الروحي والمعنى العميق للحياة" },
];

export function FiveDSystem() {
  return (
    <section className="py-32 bg-bg-deep relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary text-sm font-bold tracking-[0.5em] uppercase mb-4 block"
          >
            النموذج العلاجي
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-text-primary mb-6"
          >
            نظام 5D المبتكر
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            viewport={{ once: true }}
            className="h-1 bg-primary mx-auto rounded-full mb-8" 
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-text-secondary text-lg max-w-2xl mx-auto font-light"
          >
            نموذج تشخيصي مبتكر يعتمد على 5 أبعاد رئيسية، لتحويل حالة الفرد إلى خطة علاجية متكاملة قابلة للتنفيذ والمتابعة.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {dimensions.map((dim, index) => {
            const Icon = dim.icon;
            return (
              <motion.div
                key={dim.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-surface border border-white/5 p-8 rounded-2xl hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
              >
                <div className="text-primary/20 font-black text-5xl mb-4 group-hover:text-primary/40 transition-colors">
                  {dim.id}
                </div>
                <div className="w-12 h-12 rounded-xl bg-bg-deep border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">{dim.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{dim.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-primary/10 border border-primary/20 px-8 py-4 rounded-2xl">
            <span className="w-3 h-3 rounded-full bg-primary animate-pulse" />
            <p className="text-text-primary font-bold">
              المخرجات: <span className="text-primary font-normal">خطة علاجية متكاملة قابلة للتنفيذ والمتابعة</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
