"use client";

import Image from "next/image";
import { Hero } from "@/components/Hero";
import { WellnessTourism } from "@/components/WellnessTourism";
import { ExpertCard } from "@/components/ExpertCard";
import { motion } from "framer-motion";

const experts = [
  {
    name: "د. حسن حمزة",
    title: "مدير عام الاستشفاء البيئي بخليج سفاجا وطبيب الأشعة التشخيصية السابق بمستشفي القوات المسلحة",
    image: "/doctor-2.jpg",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      
      <WellnessTourism />
      
      {/* Bio Section */}
      <section id="experts" className="py-32 bg-bg-secondary relative overflow-hidden">
        {/* Subtle Decorative Elements */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto bg-surface rounded-2xl overflow-hidden border border-white/5 shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-12 md:p-20 flex flex-col justify-center">
                <span className="text-primary font-bold tracking-[0.3em] uppercase mb-4 text-xs">منحن 1994 العقبي</span>
                <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-6 leading-tight">
                  Promedic <span className="text-primary italic">VIP</span>
                </h2>
                <div className="w-16 h-1 bg-primary rounded-full mb-10" />
                
                <h3 className="text-2xl font-bold text-text-primary mb-6 leading-relaxed">
شركة رائدة في علوم التدريب والتأهيل الرياضي بخبرة تتجاوز 30 عامًا                </h3>
                <p className="text-lg text-text-secondary leading-relaxed mb-10 font-light max-w-lg">
                  تجمع خبرتنا بين أحدث التقنيات وأفضل العقول لتوفير بيئة تدريب متطورة وتجربة تأهيل رياضي وطبي لا مثيل لها، 
                  مع التركيز على الصحة العامة وتقديم نظام شامل للوصول لأفضل مستوى عضلي ولياقة.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-6 py-2.5 bg-white/5 rounded-lg text-text-primary text-xs font-bold uppercase tracking-widest border border-white/5">تأهيل رياضي</span>
                  <span className="px-6 py-2.5 bg-white/5 rounded-lg text-text-primary text-xs font-bold uppercase tracking-widest border border-white/5">خبرة دولية</span>
                  <span className="px-6 py-2.5 bg-white/5 rounded-lg text-text-primary text-xs font-bold uppercase tracking-widest border border-white/5">تقنيات حديثة</span>
                </div>
              </div>
              
              <div className="relative h-[500px] lg:h-auto overflow-hidden bg-bg-deep group">
                <div className="absolute inset-0 w-full h-full">
                  <Image 
                    src="/landing.jpg" 
                    alt="Doctor showing expertise" 
                    fill 
                    className="object-cover  opacity-60" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-surface via-surface/40 to-transparent" />
                </div>
                
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="absolute "
                >
                  <Image src="/logo2.png" alt="Promedic Logo" fill className="object-cover" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experts Section */}
      <section id="our-experts" className="py-32 bg-bg-deep relative">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <span className="text-primary text-xs font-bold tracking-[0.5em] uppercase mb-4 block">فريق العمل</span>
            <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-6">أطباؤنا الخبراء</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>
          
          <div className="grid grid-cols-1 gap-10 max-w-md mx-auto">
            {experts.map((expert, index) => (
              <ExpertCard 
                key={index} 
                name={expert.name} 
                title={expert.title} 
                image={expert.image}
                delay={index * 0.15} 
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
