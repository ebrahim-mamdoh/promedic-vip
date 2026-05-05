"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "الكشف السياحي العلاجي الخماسي (5D)",
    points: ["تقييم شامل متعدد الأبعاد", "تحويل الحالة إلى خطة علاج متكاملة"],
  },
  {
    title: "برنامج التأهيل والتسويق الرياضي (5 شهور)",
    points: ["تطوير الأداء البدني", "إعداد ذهني", "بناء هوية تسويقية", "فرص احتراف"],
  },
  {
    title: "رحلات العافية الدينية",
    points: ["برامج روحانية", "جلسات صفاء ذهني", "دعم طبي", "متابعة للحالات المزمنة"],
  },
  {
    title: "الأمن الطبي والاستجابة للطوارئ",
    points: ["تغطية طبية للمنتجعات والفنادق", "فرق تدخل سريع", "نقل طبي منظم"],
  },
  {
    title: "الاستشارات الطبية الرقمية",
    points: ["استشارات عن بُعد", "كشف حضوري داخل المنشآت"],
  },
];

export function ServicesList() {
  return (
    <section className="py-32 bg-bg-secondary relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <span className="text-primary text-xs font-bold tracking-[0.5em] uppercase mb-4 block">المنتجات</span>
          <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-6">المنتجات والخدمات</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-surface rounded-2xl p-8 border border-white/5 hover:border-primary/20 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
              
              <div className="text-primary font-black text-4xl mb-6 opacity-20">
                0{index + 1}
              </div>
              
              <h3 className="text-2xl font-bold text-text-primary mb-6 leading-tight">
                {service.title}
              </h3>
              
              <ul className="space-y-3">
                {service.points.map((point, pIndex) => (
                  <li key={pIndex} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-text-secondary text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
