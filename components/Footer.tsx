import React from 'react';
import { Wind, Instagram, Twitter, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

const SocialIcon = ({ Icon }: { Icon: React.ElementType }) => (
  <motion.div
    whileHover={{ y: -3, scale: 1.1, color: "#065f46" }} // forest-800 equivalent
    whileTap={{ scale: 0.95 }}
    className="bg-stone-100 p-3 rounded-full text-stone-400 cursor-pointer hover:bg-emerald-50 transition-colors"
  >
    <Icon className="w-5 h-5" />
  </motion.div>
);

const FooterLink = ({ href, children }: { href: string; children?: React.ReactNode }) => (
  <li>
    <a href={href} className="hover:text-emerald-800 transition-colors inline-block relative group text-stone-500">
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-px bg-emerald-800 transition-all duration-300 group-hover:w-full opacity-50" />
    </a>
  </li>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-stone-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-6 group">
               <motion.div 
                 whileHover={{ rotate: -180 }}
                 transition={{ duration: 0.8 }}
               >
                 <Wind className="w-6 h-6 text-forest-900" />
               </motion.div>
               <span className="text-2xl font-serif font-bold tracking-tight text-forest-900">
                 Breith
               </span>
            </div>
            <p className="text-stone-500 leading-relaxed">
              Find clarity and calm in your daily life. Join millions who use Breith to sleep better and stress less.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 w-full md:w-auto">
             <div>
                <h4 className="font-bold text-stone-900 mb-6">Company</h4>
                <ul className="space-y-4">
                   <FooterLink href="#about">About Us</FooterLink>
                   <FooterLink href="#careers">Careers</FooterLink>
                   <FooterLink href="#press">Press</FooterLink>
                   <FooterLink href="#blog">Blog</FooterLink>
                </ul>
             </div>
             <div>
                <h4 className="font-bold text-stone-900 mb-6">Legal</h4>
                <ul className="space-y-4">
                   <FooterLink href="#privacy">Privacy Policy</FooterLink>
                   <FooterLink href="#terms">Terms of Service</FooterLink>
                   <FooterLink href="#cookies">Cookie Policy</FooterLink>
                </ul>
             </div>
             <div>
                <h4 className="font-bold text-stone-900 mb-6">Support</h4>
                <ul className="space-y-4">
                   <FooterLink href="#help">Help Center</FooterLink>
                   <FooterLink href="#contact">Contact</FooterLink>
                   <FooterLink href="#community">Community</FooterLink>
                </ul>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-100 gap-4">
           <p className="text-stone-400 text-sm">© 2024 Breith Inc. All rights reserved.</p>
           <div className="flex gap-4">
              <SocialIcon Icon={Instagram} />
              <SocialIcon Icon={Twitter} />
              <SocialIcon Icon={Facebook} />
           </div>
        </div>
      </div>
    </footer>
  );
};