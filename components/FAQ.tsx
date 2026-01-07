import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: "Is there a free trial available?",
    answer: "Yes! We offer a 14-day free trial for both our Monthly and Annual plans. You can cancel anytime during the trial period and you won't be charged."
  },
  {
    question: "Can I use Breith offline?",
    answer: "Absolutely. Premium members can download any meditation, story, or soundscape for offline listening. Perfect for flights or disconnecting from the internet."
  },
  {
    question: "How often is new content added?",
    answer: "We add new daily meditations every morning, and new sleep stories and soundscapes are released weekly on Fridays."
  },
  {
    question: "Can I use Breith on multiple devices?",
    answer: "Yes, your subscription is linked to your account, so you can log in on your phone, tablet, or via our web player."
  },
  {
    question: "Do you offer student discounts?",
    answer: "We do! Students with a valid .edu email address are eligible for 50% off the Annual plan. Contact our support team to verify your status."
  }
];

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-stone-200">
      <button 
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
        onClick={onClick}
      >
        <span className="text-lg font-medium text-stone-900 pr-8">{question}</span>
        <span className={`p-2 rounded-full transition-colors ${isOpen ? 'bg-forest-900 text-white' : 'bg-stone-100 text-stone-500'}`}>
           {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-stone-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-forest-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-stone-500">Everything you need to know about Breith.</p>
        </div>
        
        <div>
          {faqData.map((item, index) => (
            <AccordionItem 
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};