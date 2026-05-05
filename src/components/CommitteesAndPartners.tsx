"use client";

import { motion } from "framer-motion";
import { Building2, Stethoscope, Landmark, HandshakeIcon, Rocket } from "lucide-react";

const committees = [
  "اللجنة الطبية",
  "اللجنة السياحية",
  "اللجنة العلمية",
  "اللجنة التسويقية",
  "لجنة تجربة العميل والأمن الطبي"
];

const partners = [
  { title: "الأطباء والاستشاريين", icon: Stethoscope },
  { title: "المؤسسات الطبية", icon: Building2 },
  { title: "الفنادق والمنتجعات", icon: Landmark },
  { title: "شركات التطوير العقاري", icon: Rocket },
  { title: "الجهات التنظيمية", icon: HandshakeIcon },
];

export function CommitteesAndPartners() {
  return (
    <section className="py-32 bg-bg-deep relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Scientific Committee & Operating Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surface rounded-3xl p-10 border border-white/5 relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">القيادة والتطوير</span>
            <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-6">اللجنة العلمية والطبية</h2>
            
            <div className="flex items-center gap-4 mb-8 bg-bg-deep p-4 rounded-xl border border-white/5 inline-flex">
              <span className="text-text-secondary">بقيادة:</span>
              <span className="text-primary font-bold text-xl">د. حسن حمزة</span>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-text-secondary">
                <span className="w-2 h-2 rounded-full bg-primary" />
                اعتماد البرامج الطبية
              </li>
              <li className="flex items-center gap-3 text-text-secondary">
                <span className="w-2 h-2 rounded-full bg-primary" />
                تطوير بروتوكولات 5D
              </li>
              <li className="flex items-center gap-3 text-text-secondary">
                <span className="w-2 h-2 rounded-full bg-primary" />
                ضمان الجودة والمتابعة المستمرة
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-surface rounded-3xl p-10 border border-white/5"
          >
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">النظام المؤسسي</span>
            <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-8">هيكل التشغيل</h2>
            <p className="text-text-secondary mb-8 font-light">تعتمد الشركة في تشغيل منظومتها على 5 لجان رئيسية لضمان التكامل:</p>
            
            <div className="flex flex-wrap gap-4">
              {committees.map((committee, i) => (
                <div key={i} className="px-6 py-3 rounded-full bg-bg-deep border border-white/5 text-text-primary font-bold text-sm hover:border-primary/40 transition-colors">
                  {i + 1}. {committee}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Partnerships */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-primary text-xs font-bold tracking-[0.5em] uppercase mb-4 block">التكامل</span>
          <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-16">فرص التعاون</h2>
          
          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            {partners.map((partner, index) => {
              const Icon = partner.icon;
              return (
                <div 
                  key={index}
                  className="flex flex-col items-center justify-center p-6 bg-surface border border-white/5 rounded-2xl min-w-[180px] hover:bg-primary/5 hover:border-primary/30 transition-all duration-300"
                >
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <span className="text-text-primary font-bold text-sm">{partner.title}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
