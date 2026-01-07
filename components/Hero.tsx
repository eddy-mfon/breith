import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, Sparkles, ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityScrollIndicator = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <div ref={containerRef} className="relative min-h-[110vh] flex flex-col justify-center items-center overflow-hidden bg-stone-50">
      
      {/* Background Image with Parallax & Overlay */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 z-0 h-[120%] w-full -top-[10%]"
      >
        <img
          src="https://picsum.photos/seed/mountains_mist/1920/1080"
          alt="Misty Mountains"
          className="w-full h-full object-cover object-center"
        />
        {/* Revamped Gradients for a softer, deeper misty look */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-900/10 via-emerald-50/20 to-stone-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-stone-50/60 to-transparent" />
      </motion.div>

      <motion.div 
        style={{ opacity: opacityText, y: yText }}
        className="container mx-auto px-4 z-10 text-center mt-20 relative"
      >
        
        {/* Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-md px-5 py-2 rounded-full border border-white/40 mb-8 shadow-sm hover:bg-white/40 transition-colors cursor-default"
        >
          <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
          <span className="text-xs font-semibold uppercase tracking-widest text-forest-900">
            #1 Mindfulness App of 2024
          </span>
        </motion.div>

        {/* Main Heading - Staggered & Dynamic */}
        <div className="mb-8 relative">
           <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 50 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-forest-900 leading-[1.05] tracking-tight block"
          >
            Find your sanctuary
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 50 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-forest-900 leading-[1.05] tracking-tight block"
          >
            in the <span className="italic font-light text-emerald-700 relative inline-block">
              present moment
              <motion.svg 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
                className="absolute w-full h-3 -bottom-1 left-0 text-emerald-300/60" 
                viewBox="0 0 100 10" 
                preserveAspectRatio="none"
              >
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
              </motion.svg>
            </span>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          className="text-forest-800/80 max-w-xl mx-auto text-lg md:text-xl leading-relaxed mb-12 font-medium"
        >
          Immersive soundscapes and guided meditations to help you sleep better, focus deeper, and live happier.
        </motion.p>

        {/* Input/CTA Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, type: "spring", stiffness: 100, damping: 20 }}
          className="bg-white/70 backdrop-blur-xl p-2.5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] max-w-lg mx-auto flex items-center border border-white/60 ring-1 ring-forest-900/5 relative z-20"
        >
          <div className="pl-5 pr-3 text-emerald-600">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            placeholder="What are you looking for?"
            className="flex-1 bg-transparent border-none outline-none text-forest-900 placeholder:text-forest-900/40 h-12 font-medium"
          />
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "#1c1917" }}
            whileTap={{ scale: 0.95 }}
            className="bg-forest-900 text-stone-50 px-8 h-12 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Begin
          </motion.button>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div
           style={{ opacity: opacityScrollIndicator }}
           animate={{ y: [0, 10, 0] }}
           transition={{ delay: 2, duration: 2, repeat: Infinity }}
           className="absolute bottom-10 left-1/2 -translate-x-1/2 text-stone-600 flex flex-col items-center gap-2 cursor-pointer"
           onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
           <span className="text-xs uppercase tracking-widest font-medium opacity-60">Scroll</span>
           <ArrowDown size={16} />
        </motion.div>

        {/* Floating Decorative Elements */}
        <motion.div 
            animate={{ y: [0, -20, 0], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-[5%] w-64 h-64 bg-emerald-300/10 rounded-full blur-[80px] -z-10 pointer-events-none"
        />
        <motion.div 
            animate={{ y: [0, 30, 0], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-0 right-[5%] w-80 h-80 bg-teal-300/10 rounded-full blur-[100px] -z-10 pointer-events-none"
        />

      </motion.div>
    </div>
  );
};