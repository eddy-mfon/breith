import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section className="py-32 bg-stone-50" id="pricing">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-serif text-forest-900 mb-6">Invest in your <br/> <span className="italic text-emerald-700">peace of mind.</span></h2>
          <p className="text-stone-500 text-lg">Start your journey with a 14-day free trial. Cancel anytime.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
          {/* Monthly Plan */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-[2.5rem] border border-stone-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-300 relative z-0"
          >
            <h3 className="text-2xl font-serif text-stone-900 mb-2">Monthly</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold text-forest-900">$12.99</span>
              <span className="text-stone-400 font-medium">/month</span>
            </div>
            <p className="text-stone-500 mb-8 border-b border-stone-100 pb-8">Perfect for short-term mindfulness goals.</p>
            
            <ul className="space-y-4 mb-8">
               {['Access to all meditations', 'Offline listening', 'Basic stats'].map((item, i) => (
                 <li key={i} className="flex items-center gap-3 text-stone-600">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                        <Check size={12} strokeWidth={3} />
                    </div>
                    {item}
                 </li>
               ))}
            </ul>

            <motion.button 
              whileHover={{ scale: 1.02, backgroundColor: "#f5f5f4", borderColor: "#0c0a09", color: "#0c0a09" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="w-full py-4 rounded-2xl border-2 border-stone-100 font-bold text-stone-600 transition-all"
            >
              Start Free Trial
            </motion.button>
          </motion.div>

          {/* Annual Plan */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-forest-900 p-10 rounded-[2.5rem] border border-forest-800 shadow-2xl relative overflow-hidden text-white transform md:-translate-y-4"
          >
            <div className="absolute top-0 right-0 bg-gradient-to-bl from-emerald-400 to-emerald-600 text-white text-xs font-bold px-6 py-2 rounded-bl-2xl uppercase tracking-wider shadow-lg">
               Best Value
            </div>
            
            <h3 className="text-2xl font-serif mb-2 text-emerald-50">Yearly</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-5xl font-bold">$69.99</span>
              <span className="text-emerald-200/60 font-medium">/year</span>
            </div>
            <p className="text-stone-300 mb-8 border-b border-white/10 pb-8">Save 55% and build a lasting habit.</p>
            
            <ul className="space-y-4 mb-8">
               {['Everything in Monthly', 'Exclusive masterclasses', 'Priority support', 'Gift 1 month to a friend'].map((item, i) => (
                 <li key={i} className="flex items-center gap-3 text-stone-200">
                    <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-forest-900 shrink-0">
                        <Check size={12} strokeWidth={3} />
                    </div>
                    {item}
                 </li>
               ))}
            </ul>

            <motion.button 
              whileHover={{ scale: 1.02, backgroundColor: "#ecfdf5", color: "#064e3b" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="w-full py-4 rounded-2xl bg-white text-forest-900 font-bold transition-all shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
            >
              Start Free 14-Day Trial
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};