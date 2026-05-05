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
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 shrink-0 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary transition-all group-hover:border-primary mt-1">
                  <span className="text-primary group-hover:text-bg-deep transition-colors">📍</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-bold tracking-wide">العيادة الرئيسية: المهندسين، القاهرة</span>
                  <span className="text-sm font-bold tracking-wide text-text-secondary">الأقصر: فندق أوبال</span>
                  <span className="text-sm font-bold tracking-wide text-text-secondary">الكشف في مستشفي الكمال</span>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary transition-all group-hover:border-primary">
                  <span className="text-primary group-hover:text-bg-deep transition-colors">📞</span>
                </div>
                <span className="text-sm font-bold tracking-wide">الخط الساخن: 01093011183 - 01093011173</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary transition-all group-hover:border-primary">
                  <span className="text-primary group-hover:text-bg-deep transition-colors">✉️</span>
                </div>
                <span className="text-sm font-bold tracking-wide">promedic2026@gmail.com</span>
              </div>
            </div>
            
            <div className="mt-12">
              <p className="text-text-secondary text-sm font-bold tracking-widest mb-6 uppercase">تواصل معنا عبر</p>
              <div className="flex items-center gap-4 flex-wrap">
                <a target="blank" href="https://www.facebook.com/profile.php?id=61586003324620&rdid=PywPDuXv2jQMuUMy&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18RZLzjqTx%2F#" aria-label="Facebook" className="w-12 h-12 rounded-xl bg-surface border border-white/5 flex items-center justify-center text-text-secondary hover:text-primary hover:bg-primary/5 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a target="blank" href="https://www.instagram.com/promedic.0?igsh=bjBhemo0d2FiYWgy" aria-label="Instagram" className="w-12 h-12 rounded-xl bg-surface border border-white/5 flex items-center justify-center text-text-secondary hover:text-primary hover:bg-primary/5 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a target="blank" href="https://www.tiktok.com/@promedic.group.in?_r=1&_t=ZS-95b3gru4iRR" aria-label="TikTok" className="w-12 h-12 rounded-xl bg-surface border border-white/5 flex items-center justify-center text-text-secondary hover:text-primary hover:bg-primary/5 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                </a>
                <a target="blank" href="https://wa.me/201093011183" aria-label="WhatsApp" className="w-12 h-12 rounded-xl bg-surface border border-white/5 flex items-center justify-center text-text-secondary hover:text-primary hover:bg-primary/5 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </a>
                <a target="blank" href="tel:+201093011173" aria-label="Phone" className="w-12 h-12 rounded-xl bg-surface border border-white/5 flex items-center justify-center text-text-secondary hover:text-primary hover:bg-primary/5 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </a>
                <a target="blank" href="mailto:promedic2026@gmail.com" aria-label="Email" className="w-12 h-12 rounded-xl bg-surface border border-white/5 flex items-center justify-center text-text-secondary hover:text-primary hover:bg-primary/5 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </a>
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
