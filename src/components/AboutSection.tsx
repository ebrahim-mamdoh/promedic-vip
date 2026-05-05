"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-32 bg-bg-secondary relative overflow-hidden">
      {/* Subtle Decorative Elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-[80px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto bg-surface rounded-3xl overflow-hidden border border-white/5 shadow-2xl relative"
        >
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
          
          <div className="p-12 md:p-24 flex flex-col justify-center items-center text-center">
            <span className="text-primary font-bold tracking-[0.3em] uppercase mb-6 text-sm">من نحن</span>
            
            <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-8 leading-tight">
              فلسفة الصفاء الذهني والإدراك
            </h2>
            
            <div className="w-20 h-1 bg-primary rounded-full mb-12" />
            
            <p className="text-xl md:text-2xl text-text-primary leading-relaxed mb-8 font-light max-w-4xl">
              بخبرة ممتدة واعتماد طويل، ننتقل في العقبي 94 VIP من مجرد "شركة خدمات" إلى 
              <span className="text-primary font-bold mx-2">"نظام عافية"</span> متكامل.
            </p>
            
            <p className="text-lg text-text-secondary leading-loose max-w-3xl font-light">
              نحن نؤمن بأن العافية ليست مجرد غياب للمرض، بل هي حالة من التوازن التام بين الجسد والروح. 
              صممنا منظومتنا لتعيد تشكيل مفهوم الصحة من خلال برامج مبتكرة ترتكز على الوعي، القرار، التجربة، والأمان.
            </p>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
