"use client";

import { ContactForm } from "./ContactForm";

export function Footer() {
  return (
    <footer id="contact" className="bg-bg-deep relative overflow-hidden pt-32 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <div className="text-text-primary">
            <span className="text-primary text-xs font-bold tracking-[0.5em] uppercase mb-4 block">اتصل بنا</span>
            <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">تواصل مع <span className="text-primary">Promedic</span></h2>
            <p className="text-text-secondary text-lg mb-12 max-w-md leading-relaxed font-light">
              نحن هنا للإجابة على استفساراتك وتقديم أفضل رعاية طبية وتأهيل رياضي يناسب احتياجاتك. اترك بياناتك وسيقوم فريقنا بالتواصل معك في أقرب وقت.
            </p>
            <div className="space-y-6 text-text-primary">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary transition-all group-hover:border-primary">
                  <span className="text-primary group-hover:text-bg-deep transition-colors">📍</span>
                </div>
                <span className="text-sm font-bold tracking-wide">العيادة الرئيسية: المهندسين، القاهرة</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary transition-all group-hover:border-primary">
                  <span className="text-primary group-hover:text-bg-deep transition-colors">📞</span>
                </div>
                <span className="text-sm font-bold tracking-wide">الخط الساخن: 19000</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary transition-all group-hover:border-primary">
                  <span className="text-primary group-hover:text-bg-deep transition-colors">✉️</span>
                </div>
                <span className="text-sm font-bold tracking-wide">promedic2026@gmail.com</span>
              </div>
            </div>
          </div>
          
          <div className="p-10 bg-surface rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <ContactForm />
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-12 text-center text-text-secondary/40 text-xs flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="tracking-widest uppercase">© {new Date().getFullYear()} Promedic vip. All Rights Reserved.</p>
          <div className="flex gap-8 uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      
      {/* Subtle Background Accent */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
    </footer>
  );
}
