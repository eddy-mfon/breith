import React from 'react';
import { motion } from 'framer-motion';

export const TrustBar: React.FC = () => {
  const brands = [
    "Forbes", "Men's Health", "Bloomberg", "The Washington Post", "Vogue",
    "TechCrunch", "Mindful", "Psychology Today"
  ];
  
  // Double the content for seamless loop
  const seamlessBrands = [...brands, ...brands];

  return (
    <div className="bg-stone-50 pb-20 pt-10 relative z-20 -mt-20 overflow-hidden">
      <div className="text-center mb-8">
        <span className="text-xs uppercase tracking-widest text-stone-400 font-semibold">Featured as the safest place to go in</span>
      </div>
      
      <div className="relative w-full flex overflow-hidden">
         <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-stone-50 to-transparent z-10" />
         <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-stone-50 to-transparent z-10" />
         
         {/* Container specifically sized to allow -50% translation of doubled content */}
         <motion.div 
           className="flex min-w-max"
           animate={{ x: "-50%" }}
           transition={{ 
             repeat: Infinity, 
             ease: "linear", 
             duration: 40 
           }}
         >
            {seamlessBrands.map((brand, index) => (
              <div key={index} className="px-10 md:px-16">
                  <span
                    className="text-3xl md:text-4xl font-serif font-bold text-stone-300 grayscale hover:grayscale-0 hover:text-stone-800 transition-colors duration-500 cursor-default block"
                  >
                    {brand}
                  </span>
              </div>
            ))}
         </motion.div>
      </div>
    </div>
  );
};