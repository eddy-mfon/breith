import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Check, Sun, Play, SkipForward, SkipBack, Heart } from 'lucide-react';

export const AppShowcase: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section className="py-32 overflow-hidden bg-stone-900 text-white relative" id="stories">
        {/* Sophisticated Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/40 via-stone-900 to-stone-900 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
             <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3], 
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-500 rounded-full blur-[120px]" 
             />
             <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1],
                  x: [0, 50, 0],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-teal-600 rounded-full blur-[150px]" 
             />
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 space-y-10"
          >
            <h2 className="text-5xl md:text-7xl font-serif leading-[1.1] tracking-tight">
              Peace in your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-teal-400 italic font-light">
                pocket.
              </span>
            </h2>
            <p className="text-stone-300 text-lg md:text-xl max-w-lg leading-relaxed font-light">
              Your personal sanctuary, available 24/7. Access our complete library of guided meditations, sleep stories, and soundscapes whenever you need a moment of calm.
            </p>
            
            <div className="space-y-6">
              {[
                { title: 'Offline Mode', desc: 'Download your favorites for travel.' },
                { title: 'Smart Timer', desc: 'Drift off without draining your battery.' },
                { title: 'Progress Tracking', desc: 'Visualize your mindfulness journey.' }
              ].map((item, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                    className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0 mt-1 border border-emerald-500/20">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-lg">{item.title}</h4>
                    <p className="text-stone-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Phone Mockup */}
          <motion.div 
             style={{ y: yParallax }}
             className="flex-1 relative flex justify-center perspective-1000"
          >
            <motion.div
               initial={{ opacity: 0, scale: 0.9, rotate: 6 }}
               whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
               viewport={{ once: true }}
               transition={{ type: "spring", stiffness: 40, damping: 20, duration: 1 }}
               className="relative"
            >
              {/* Phone Body */}
              <div className="relative w-[320px] h-[660px] bg-stone-950 rounded-[3.5rem] shadow-[0_0_0_8px_#292524,0_50px_100px_-20px_rgba(0,0,0,0.6)] overflow-hidden z-20">
                  {/* Hardware Buttons */}
                  <div className="absolute top-32 -left-[10px] w-[2px] h-8 bg-stone-700 rounded-l-md"></div>
                  <div className="absolute top-44 -left-[10px] w-[2px] h-14 bg-stone-700 rounded-l-md"></div>
                  <div className="absolute top-40 -right-[10px] w-[2px] h-20 bg-stone-700 rounded-r-md"></div>

                  {/* Dynamic Island / Notch */}
                  <div className="absolute top-7 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-30 flex items-center justify-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-stone-800/80"></div>
                  </div>

                  {/* Screen Content - Now Playing UI */}
                  <div className="w-full h-full bg-stone-900 relative flex flex-col">
                      {/* Album Art Background Blur */}
                      <div className="absolute inset-0 z-0">
                         <img src="https://picsum.photos/seed/forest_mist/600/1200" className="w-full h-full object-cover opacity-60" />
                         <div className="absolute inset-0 bg-gradient-to-b from-stone-900/30 via-stone-900/60 to-stone-950" />
                      </div>

                      {/* Header */}
                      <div className="relative z-10 pt-16 px-6 flex justify-between items-center text-white/80">
                         <div className="bg-white/10 p-2 rounded-full backdrop-blur-sm"><span className="block w-4 h-0.5 bg-white mb-1"></span><span className="block w-2.5 h-0.5 bg-white"></span></div>
                         <span className="text-xs font-medium tracking-widest uppercase opacity-70">Now Playing</span>
                         <div className="bg-white/10 p-2 rounded-full backdrop-blur-sm"><Heart size={16} /></div>
                      </div>

                      {/* Main Player Content */}
                      <div className="relative z-10 flex-1 flex flex-col justify-end p-8 pb-12">
                          <motion.div 
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="aspect-square rounded-2xl overflow-hidden shadow-2xl mb-8 border border-white/10"
                          >
                             <img src="https://picsum.photos/seed/forest_mist/400/400" className="w-full h-full object-cover" />
                          </motion.div>

                          <div className="mb-8">
                             <h3 className="text-2xl font-serif text-white mb-2">Morning Mist</h3>
                             <p className="text-emerald-400 font-medium text-sm">Guided Meditation • Nature</p>
                          </div>

                          {/* Progress Bar */}
                          <div className="mb-6">
                             <div className="w-full h-1 bg-white/20 rounded-full mb-2 overflow-hidden">
                                <motion.div 
                                    initial={{ width: "0%" }}
                                    whileInView={{ width: "45%" }}
                                    transition={{ duration: 2, ease: "linear" }}
                                    className="h-full bg-emerald-400 rounded-full relative"
                                >
                                   <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-lg" />
                                </motion.div>
                             </div>
                             <div className="flex justify-between text-xs text-white/50 font-medium">
                                <span>04:20</span>
                                <span>15:00</span>
                             </div>
                          </div>

                          {/* Controls */}
                          <div className="flex justify-between items-center px-2">
                             <SkipBack size={24} className="text-white/70" />
                             <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-stone-900 shadow-lg shadow-emerald-500/20 hover:scale-105 transition-transform cursor-pointer">
                                <Play size={24} fill="currentColor" className="ml-1" />
                             </div>
                             <SkipForward size={24} className="text-white/70" />
                          </div>
                      </div>
                  </div>
              </div>
            </motion.div>
            
            {/* Floating Elements around phone */}
             <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[20%] -right-12 z-30 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-xl hidden lg:block"
             >
                 <div className="flex items-center gap-3">
                     <div className="bg-orange-500/20 p-2 rounded-full text-orange-400">
                        <Sun size={20} />
                     </div>
                     <div>
                        <p className="text-xs text-white/60">Current Streak</p>
                        <p className="text-white font-bold text-lg">12 Days</p>
                     </div>
                 </div>
             </motion.div>

             <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[15%] -left-12 z-30 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-xl hidden lg:block"
             >
                 <div className="flex items-center gap-3">
                     <div className="bg-emerald-500/20 p-2 rounded-full text-emerald-400">
                        <Check size={20} />
                     </div>
                     <div>
                        <p className="text-xs text-white/60">Session Complete</p>
                        <p className="text-white font-bold text-lg">Focus Flow</p>
                     </div>
                 </div>
             </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};