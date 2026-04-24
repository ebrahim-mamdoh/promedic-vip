import React, { useRef, useEffect } from 'react';
import { Plane, Globe, ClipboardList, Users, Award, Handshake, Play } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const AnkhIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="7" r="4" />
    <path d="M12 11v11" />
    <path d="M8 15h8" />
  </svg>
);

const ScarabIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="12" rx="4" ry="6" />
    <path d="M12 6v12" />
    <path d="M10 8c-2-2-5-2-5-2s1 3 2 5" />
    <path d="M14 8c2-2 5-2 5-2s-1 3-2 5" />
    <path d="M10 16c-2 2-5 2-5 2s1-3 2-5" />
    <path d="M14 16c2 2 5 2 5 2s-1-3-2-5" />
    <circle cx="12" cy="4" r="1.5" />
  </svg>
);

const PharaohIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M8 4h8l2 8-3 8h-6l-3-8z" />
    <path d="M12 4v4" />
    <path d="M9 12h6" />
    <path d="M12 16v4" />
  </svg>
);

const CaduceusIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2v20" />
    <path d="M8 6c0-2 8-2 8 2s-8 4-8 4 8 2 8 4-8 4-8 4" />
    <circle cx="12" cy="4" r="2" />
  </svg>
);

export const WellnessTourism = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(videoRef, { amount: 0.5 });

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(error => {
          console.log("Autoplay prevented by browser:", error);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden dir-rtl">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Right Column (Text Content) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-right order-2 lg:order-1"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-primary/40 px-5 py-1.5 rounded-full mb-8 text-primary text-sm font-bold shadow-[0_0_15px_rgba(201,160,80,0.1)]">
              <AnkhIcon className="w-4 h-4" />
              <span>السياحة العلاجية</span>
            </div>
            
            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 tracking-wide w-full flex flex-col lg:items-center">
              <span className="flex items-center justify-center lg:justify-center w-full gap-2">
                Promedic <span className="text-primary italic">VIP</span>
              </span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-wide w-full text-center">
              ريادة في السياحة العلاجية
            </h3>
            
            {/* Divider */}
            <div className="flex items-center justify-center gap-4 my-6 w-full">
              <div className="w-24 h-[1px] bg-primary/40"></div>
              <div className="w-2 h-2 rotate-45 bg-primary"></div>
              <div className="w-24 h-[1px] bg-primary/40"></div>
            </div>
            
            {/* Paragraph */}
            <p className="text-text-secondary text-lg leading-loose font-light text-center lg:text-right mb-12 max-w-2xl mx-auto lg:mx-0">
              في Promedic VIP نقدم تجربة متكاملة في السياحة العلاجية، تجمع بين الخبرة الطبية المتقدمة والتنظيم الاحترافي لكل تفاصيل رحلتك العلاجية. نُسهل وصولك إلى أفضل المراكز والأطباء، مع برامج علاجية وتأهيلية مصممة وفق حالتك، بما يتوافق مع أحدث المعايير الدولية وتوصيات الصحة العالمية.
            </p>
            
            {/* 4-Column Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x divide-x-reverse divide-white/10 w-full">
              <div className="flex flex-col items-center px-2">
                <Plane className="w-8 h-8 text-primary mb-3" strokeWidth={1.5} />
                <h4 className="text-white font-bold text-sm mb-2">تنسيق شامل للرحلة</h4>
                <p className="text-text-secondary text-[10px] leading-relaxed">نعتني بكامل تفاصيل رحلتك العلاجية من البداية للنهاية</p>
              </div>
              <div className="flex flex-col items-center px-2">
                <Globe className="w-8 h-8 text-primary mb-3" strokeWidth={1.5} />
                <h4 className="text-white font-bold text-sm mb-2">معايير عالمية معتمدة</h4>
                <p className="text-text-secondary text-[10px] leading-relaxed">نتبع أحدث توصيات الصحة العالمية والاتحادات الدولية</p>
              </div>
              <div className="flex flex-col items-center px-2">
                <ClipboardList className="w-8 h-8 text-primary mb-3" strokeWidth={1.5} />
                <h4 className="text-white font-bold text-sm mb-2">برامج علاج وتأهيل مخصصة</h4>
                <p className="text-text-secondary text-[10px] leading-relaxed">برامج علاجية وتأهيلية مصممة وفق حالتك واحتياجاتك</p>
              </div>
              <div className="flex flex-col items-center px-2">
                <Users className="w-8 h-8 text-primary mb-3" strokeWidth={1.5} />
                <h4 className="text-white font-bold text-sm mb-2">نخبة من الأطباء<br/>والمراكز المتخصصة</h4>
                <p className="text-text-secondary text-[10px] leading-relaxed">شراكات مع أفضل الأطباء والمؤسسات الطبية حول العالم</p>
              </div>
            </div>
            
          </motion.div>

          {/* Left Column (Video) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 w-full lg:pr-8"
          >
            <div className="relative border border-primary/40 p-2 md:p-3 rounded-sm shadow-[0_0_30px_rgba(201,160,80,0.05)]">
              {/* Corner Accents */}
              <div className="absolute -top-[5px] -left-[5px] w-3 h-3 border-t-2 border-l-2 border-primary" />
              <div className="absolute -top-[5px] -right-[5px] w-3 h-3 border-t-2 border-r-2 border-primary" />
              <div className="absolute -bottom-[5px] -left-[5px] w-3 h-3 border-b-2 border-l-2 border-primary" />
              <div className="absolute -bottom-[5px] -right-[5px] w-3 h-3 border-b-2 border-r-2 border-primary" />
              
              {/* Ankh Side Accents */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-6 text-primary hidden md:flex items-center justify-center bg-[#0a0a0a] py-4">
                <AnkhIcon className="w-5 h-5" />
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 -right-6 text-primary hidden md:flex items-center justify-center bg-[#0a0a0a] py-4">
                <AnkhIcon className="w-5 h-5" />
              </div>

              {/* Video Container */}
              <div className="relative aspect-video w-full border border-primary/20 overflow-hidden bg-surface group">
                <video 
                  ref={videoRef}
                  src="/Video .mp4" 
                  controls 
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </motion.div>
          
        </div>

        {/* Bottom Features Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 border border-primary/20 py-8 md:py-6 relative rounded-sm px-4"
        >
          {/* Corner decorations */}
          <div className="absolute -top-[3px] -left-[3px] w-2 h-2 border-t border-l border-primary/60" />
          <div className="absolute -top-[3px] -right-[3px] w-2 h-2 border-t border-r border-primary/60" />
          <div className="absolute -bottom-[3px] -left-[3px] w-2 h-2 border-b border-l border-primary/60" />
          <div className="absolute -bottom-[3px] -right-[3px] w-2 h-2 border-b border-r border-primary/60" />

          {/* Background horizontal line */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-[1px] bg-primary/10 hidden md:block" />

          <div className="grid grid-cols-2 md:grid-cols-5 items-center justify-between text-center gap-y-10 md:gap-y-0 md:divide-x md:divide-x-reverse md:divide-primary/10 relative z-10">
            {/* Item 1 */}
            <div className="flex flex-col items-center gap-3 px-2 md:order-1">
              <CaduceusIcon className="w-8 h-8 text-primary" />
              <div className="flex flex-col items-center">
                <span className="text-white font-bold text-sm mb-1">منهج علاجي معاصر</span>
                <span className="text-text-secondary text-[10px]">مستوحى من إله الطب إمحوتب</span>
              </div>
            </div>
            
            {/* Item 2 */}
            <div className="flex flex-col items-center gap-3 px-2 md:order-2">
              <PharaohIcon className="w-8 h-8 text-primary" />
              <span className="text-white font-bold text-sm">إرث حضاري مقدس</span>
            </div>
            
            {/* Center Item (Scarab) */}
            <div className="flex flex-col items-center px-4 md:-mt-14 relative z-20 order-first md:order-3 col-span-2 md:col-span-1">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-[#0a0a0a] rounded-full border border-primary flex items-center justify-center shadow-[0_0_30px_rgba(201,160,80,0.2)]">
                <ScarabIcon className="w-12 h-12 md:w-14 md:h-14 text-primary" />
              </div>
            </div>
            
            {/* Item 4 */}
            <div className="flex flex-col items-center gap-3 px-2 md:order-4">
              <Award className="w-8 h-8 text-primary" strokeWidth={1.5} />
              <span className="text-white font-bold text-sm">اعتماد علمي رسمي</span>
            </div>
            
            {/* Item 5 */}
            <div className="flex flex-col items-center gap-3 px-2 md:order-5">
              <Handshake className="w-8 h-8 text-primary" strokeWidth={1.5} />
              <span className="text-white font-bold text-sm">خبرة تتجاوز 30 عاماً</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
