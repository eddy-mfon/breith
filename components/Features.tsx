import React from 'react';
import { motion, Variants } from 'framer-motion';
import { CloudRain, Moon, Wind, Headphones, Heart, Sun } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tooltip: string;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 20
    }
  }
};

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, tooltip }) => (
  <motion.div
    variants={cardVariants}
    className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-shadow duration-500 group relative overflow-visible z-0 hover:z-10"
  >
    <div className="relative group/icon inline-block">
      <div className="w-12 h-12 bg-forest-50 rounded-2xl flex items-center justify-center text-forest-900 mb-6 group-hover:scale-110 group-hover:bg-forest-100 transition-all duration-300 cursor-help">
        {icon}
      </div>
      
      {/* Tooltip */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-40 p-2 bg-stone-900 text-white text-xs text-center rounded-lg opacity-0 group-hover/icon:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-stone-900">
        {tooltip}
      </div>
    </div>
    
    <h3 className="text-2xl font-serif font-medium text-stone-900 mb-3">{title}</h3>
    <p className="text-stone-500 leading-relaxed">{description}</p>
  </motion.div>
);

export const Features: React.FC = () => {
  const features = [
    {
      title: "Guided Meditation",
      description: "Expert-led sessions ranging from 5 to 60 minutes for every experience level.",
      icon: <Headphones className="w-6 h-6" />,
      tooltip: "Over 500+ tracks covering anxiety, focus, and growth."
    },
    {
      title: "Sleep Stories",
      description: "Drift off with soothing narratives set in the world's most peaceful locations.",
      icon: <Moon className="w-6 h-6" />,
      tooltip: "Narrated by voice actors with soothing tones."
    },
    {
      title: "Nature Sounds",
      description: "High-fidelity 3D audio recordings from forests, oceans, and mountains.",
      icon: <CloudRain className="w-6 h-6" />,
      tooltip: "Binaural audio recorded on location."
    },
    {
      title: "Breathwork",
      description: "Visual breathing exercises to reduce anxiety and improve focus instantly.",
      icon: <Wind className="w-6 h-6" />,
      tooltip: "Follow the visual pacer for coherence."
    },
    {
      title: "Daily Mood Check",
      description: "Track your emotional well-being and get personalized recommendations.",
      icon: <Heart className="w-6 h-6" />,
      tooltip: "Private journaling and mood tracking."
    },
    {
      title: "Morning Focus",
      description: "Start your day with intention using our specialized wake-up routines.",
      icon: <Sun className="w-6 h-6" />,
      tooltip: "Gentle alarms and wake-up meditations."
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section className="py-24 bg-stone-50" id="features">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-serif text-stone-900 mb-4"
          >
            Reconnect with yourself
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-stone-600 text-lg"
          >
            Breith provides the tools you need to build a sustainable mindfulness practice.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};