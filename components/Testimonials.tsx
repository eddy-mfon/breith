import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Yoga Instructor",
      quote: "Breith has completely transformed my morning routine. The soundscapes are incredibly realistic and the guided sessions are the perfect length.",
      image: "https://picsum.photos/seed/sarah/150/150",
      featured: true
    },
    {
      name: "Marcus Chen",
      role: "Software Engineer",
      quote: "As someone with high anxiety, the visual breathing exercises are a lifesaver. Simple, effective, and beautiful.",
      image: "https://picsum.photos/seed/marcus/150/150",
      featured: false
    },
    {
      name: "Elena Rodriguez",
      role: "Digital Nomad",
      quote: "I use the sleep stories every single night. I haven't slept this well in years. Truly a magical app that I recommend to everyone.",
      image: "https://picsum.photos/seed/elena/150/150",
      featured: false
    },
    {
      name: "David Kim",
      role: "Creative Director",
      quote: "The interface is stunning. It's the only meditation app that feels like a piece of art rather than a utility.",
      image: "https://picsum.photos/seed/david/150/150",
      featured: false
    }
  ];

  return (
    <section className="py-32 bg-stone-50 relative overflow-hidden" id="testimonials">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-50 mix-blend-multiply" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-50 mix-blend-multiply" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif text-stone-900 mb-6"
          >
            Stories from our <br/><span className="italic text-emerald-800">community.</span>
          </motion.h2>
          <p className="text-stone-500 text-lg max-w-xl mx-auto">
            Join thousands of others who have found their sanctuary with Breith.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
            {testimonials.map((t, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.6 }}
                    className={`bg-white p-8 rounded-[2rem] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border border-stone-100 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 ${t.featured ? 'md:col-span-2 md:flex-row md:items-center gap-8' : 'col-span-1'}`}
                >
                   <div className="mb-6 md:mb-0 relative">
                       <Quote className="absolute -top-4 -left-2 text-emerald-100 w-12 h-12 -z-10 transform -scale-x-100" />
                       <p className={`text-stone-700 font-medium leading-relaxed ${t.featured ? 'text-xl md:text-2xl font-serif' : 'text-lg'}`}>
                           "{t.quote}"
                       </p>
                   </div>
                   
                   <div className={`flex items-center gap-4 ${t.featured ? 'md:min-w-[200px]' : ''}`}>
                       <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-emerald-50" />
                       <div>
                           <h4 className="font-bold text-stone-900 text-sm">{t.name}</h4>
                           <p className="text-xs text-stone-400 uppercase tracking-wide font-medium">{t.role}</p>
                       </div>
                   </div>
                </motion.div>
            ))}
            
            {/* Stats Card */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.6 }}
               className="bg-forest-900 rounded-[2rem] p-8 text-white flex flex-col justify-center items-center text-center col-span-1"
            >
               <h3 className="text-5xl font-serif mb-2 text-emerald-300">4.9/5</h3>
               <p className="text-stone-300 mb-6">Average rating on App Store</p>
               <div className="flex -space-x-3">
                   {[1,2,3,4,5].map((_, idx) => (
                       <img key={idx} src={`https://picsum.photos/seed/${idx}/50/50`} className="w-10 h-10 rounded-full border-2 border-forest-900" />
                   ))}
               </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};