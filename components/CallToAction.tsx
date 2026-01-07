import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const CallToAction: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden flex items-center justify-center min-h-[80vh]">
      {/* Parallax Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div style={{ y }} className="relative w-full h-[140%] -top-[20%]">
             <img 
                src="https://picsum.photos/seed/lake_sunset/1920/1080" 
                alt="Peaceful Lake" 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-forest-900/80 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </motion.div>
      </div>

      {/* Animated Wave Background */}
      <div className="absolute bottom-0 left-0 w-full z-0 opacity-20 text-emerald-900 mix-blend-screen pointer-events-none">
         <motion.div
           animate={{ x: ["0%", "-50%"] }}
           transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
           className="w-[200%] flex"
         >
           {/* SVG Wave 1 */}
           <svg className="w-1/2 h-48 md:h-64" viewBox="0 0 1440 320" preserveAspectRatio="none" fill="currentColor">
              <path d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
           </svg>
           {/* SVG Wave 2 (Duplicate for loop) */}
           <svg className="w-1/2 h-48 md:h-64" viewBox="0 0 1440 320" preserveAspectRatio="none" fill="currentColor">
              <path d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
           </svg>
         </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif text-white mb-6"
        >
            Begin your journey <br/> to stillness.
        </motion.h2>
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-stone-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light tracking-wide"
        >
            Experience the calm that millions have already found. 
            Download Breith today and take the first step towards a more peaceful mind.
        </motion.p>
        
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
            {/* App Store Button */}
               <motion.button 
                 whileHover={{ scale: 1.02, y: -2, boxShadow: "0 20px 40px -10px rgba(255, 255, 255, 0.2)" }}
                 whileTap={{ scale: 0.98, y: 0 }}
                 className="bg-white text-forest-900 px-8 py-4 rounded-xl transition-all duration-300 flex items-center gap-4 w-full md:w-auto justify-center shadow-2xl relative overflow-hidden group"
               >
                 <div className="absolute inset-0 bg-stone-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                 <svg viewBox="0 0 384 512" width="32" className="fill-current shrink-0 relative z-10">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z"/>
                 </svg>
                 <div className="text-left relative z-10">
                    <div className="text-xs leading-tight font-bold uppercase tracking-wider opacity-60">Download on the</div>
                    <div className="text-xl font-bold leading-none font-serif tracking-tight">App Store</div>
                 </div>
               </motion.button>
               
               {/* Google Play Button */}
               <motion.button 
                 whileHover={{ scale: 1.02, y: -2, borderColor: "rgba(255,255,255,0.2)", boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.6)" }}
                 whileTap={{ scale: 0.98, y: 0 }}
                 className="bg-stone-900 border border-stone-800 text-white px-8 py-4 rounded-xl transition-all duration-300 flex items-center gap-4 w-full md:w-auto justify-center shadow-xl relative overflow-hidden group"
               >
                 <div className="absolute inset-0 bg-stone-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                 <svg viewBox="0 0 512 512" width="32" className="fill-current shrink-0 relative z-10">
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                 </svg>
                 <div className="text-left relative z-10">
                    <div className="text-xs leading-tight font-bold uppercase tracking-wider opacity-60">Get it on</div>
                    <div className="text-xl font-bold leading-none font-serif tracking-tight">Google Play</div>
                 </div>
               </motion.button>
        </motion.div>
      </div>
    </section>
  );
};