"use client";

import { motion } from "framer-motion";
import { Clock, Users, Target, Activity, ShieldCheck, Flame } from "lucide-react";

export function SpecialPrograms() {
  return (
    <section className="py-32 bg-bg-deep relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          
          {/* Program 100 Clients */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface border border-white/5 rounded-3xl p-10 md:p-14 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent" />
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Users className="w-8 h-8" />
              </div>
              <div>
                <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-1 block">حصري</span>
                <h3 className="text-3xl font-black text-text-primary">برنامج 100 عميل / 90 يوم</h3>
              </div>
            </div>
            
            <p className="text-text-secondary mb-8 leading-relaxed font-light">
              متابعة مستمرة للحالات تحت إشراف اللجنة الطبية المتخصصة، لضمان تحقيق أهداف العافية والتعافي. يتم قياس النتائج عبر:
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <Activity className="w-5 h-5 text-primary" />
                <span className="text-text-primary font-bold">التحسن</span>
              </div>
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-primary" />
                <span className="text-text-primary font-bold">اتخاذ القرار</span>
              </div>
              <div className="flex items-center gap-3">
                <Flame className="w-5 h-5 text-primary" />
                <span className="text-text-primary font-bold">تغيير السلوك</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span className="text-text-primary font-bold">الاستقرار</span>
              </div>
            </div>
          </motion.div>

          {/* Eternity Watch */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-surface to-bg-deep border border-primary/20 rounded-3xl p-10 md:p-14 relative overflow-hidden group"
          >
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-all duration-700" />
            
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-bg-deep shadow-[0_0_30px_rgba(198,167,94,0.3)]">
                <Clock className="w-8 h-8" />
              </div>
              <div>
                <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-1 block">نظام رقمي</span>
                <h3 className="text-3xl font-black text-text-primary">ساعة الخلود <span className="font-light text-xl text-text-secondary">(240 ثانية)</span></h3>
              </div>
            </div>
            
            <p className="text-text-secondary mb-10 leading-relaxed font-light relative z-10">
              نظام رقمي مبتكر صُمم ليكون نقطة الانطلاق في رحلتك نحو العافية. يتيح لك النظام:
            </p>
            
            <ul className="space-y-5 relative z-10">
              <li className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">1</div>
                <span className="text-text-primary">بدء رحلة العميل فورًا</span>
              </li>
              <li className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">2</div>
                <span className="text-text-primary">تحسين جودة القرار</span>
              </li>
              <li className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">3</div>
                <span className="text-text-primary">تعزيز الصفاء الذهني</span>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
