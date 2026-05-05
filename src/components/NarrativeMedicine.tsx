"use client";

import { motion } from "framer-motion";
import { BookOpen, Moon, ShieldAlert, Baby, Network, Dna } from "lucide-react";

const pillars = [
  { title: "النوم", icon: Moon, desc: "تحسين جودة النوم ومعالجة الأرق واضطرابات النوم." },
  { title: "الأمراض المزمنة", icon: Dna, desc: "التعايش والتحكم الإيجابي في الأمراض المزمنة." },
  { title: "المناعة الذاتية", icon: ShieldAlert, desc: "دعم الاستجابة المناعية وتخفيف الالتهابات." },
  { title: "الصحة النفسية للأطفال", icon: Baby, desc: "رعاية مبكرة لتعزيز النمو النفسي السليم." },
  { title: "التوحد", icon: Network, desc: "برامج دمج وتأهيل قائمة على التفاعل السردي." },
];

export function NarrativeMedicine() {
  return (
    <section className="py-32 bg-surface relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <span className="text-primary text-xs font-bold tracking-[0.5em] uppercase mb-4 block">نموذج علاجي</span>
            <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-6 leading-tight">
              العلاج بالسرد
              <span className="block text-2xl font-light text-text-secondary mt-2">Narrative Medicine</span>
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mb-8" />
            <p className="text-lg text-text-secondary leading-relaxed font-light mb-8">
              نموذج علاجي مبتكر يرتكز على استخدام "الرواية الطبية" والقصة كأداة للتشافي. نؤمن بأن فهم قصة المريض يمثل نصف العلاج، وهو ما يمكننا من توفير رعاية أكثر دقة وتأثيراً.
            </p>
            <div className="flex items-center gap-4 bg-bg-deep border border-white/5 p-4 rounded-xl">
              <BookOpen className="w-8 h-8 text-primary" />
              <p className="text-sm text-text-primary font-bold">يرتكز العلاج بالسرد على 5 محاور أساسية لتغطية أدق التحديات الصحية.</p>
            </div>
          </motion.div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-bg-deep border border-white/5 p-6 rounded-2xl hover:border-primary/30 transition-all duration-300 flex gap-5"
                >
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">{pillar.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed font-light">{pillar.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
