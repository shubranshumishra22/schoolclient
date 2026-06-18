import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const bullets = [
  'Experienced and passionate faculty dedicated to every child\'s growth.',
  'State-of-the-art campus with modern labs, libraries, and sports facilities.',
  'A proven track record of academic excellence and holistic development.',
];

const textVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const textItem = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function AboutSnapshot() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-white py-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4 mb-10 lg:mb-0">
            <div className="bg-navy-100 rounded-xl aspect-square border-2 border-gold-600 hover:scale-[1.02] transition-transform duration-300">
              {/* TODO: replace with real school photo */}
            </div>
            <div className="bg-navy-100 rounded-xl aspect-square hover:scale-[1.02] transition-transform duration-300">
              {/* TODO: replace with real school photo */}
            </div>
            <div className="bg-navy-100 rounded-xl aspect-square hover:scale-[1.02] transition-transform duration-300">
              {/* TODO: replace with real school photo */}
            </div>
            <div className="bg-navy-100 rounded-xl aspect-square hover:scale-[1.02] transition-transform duration-300">
              {/* TODO: replace with real school photo */}
            </div>
          </div>

          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.p variants={textItem} className="text-xs font-medium tracking-widest uppercase text-gold-600 mb-2">About Prentice The school</motion.p>
            <motion.h2 variants={textItem} className="font-serif text-4xl text-navy-800 mt-2 mb-4">40 Years of Shaping Futures</motion.h2>
            <motion.p variants={textItem} className="text-slate-600 leading-relaxed">
              Founded in 1985, Prentice The school has been a beacon of educational excellence in Bangalore. 
              We nurture each student's unique potential through a balanced approach to academics, arts, and athletics.
            </motion.p>
            <motion.p variants={textItem} className="text-slate-600 leading-relaxed mt-3">
              Our mission is to create lifelong learners who are ready to lead with integrity, empathy, and purpose.
            </motion.p>
            <motion.ul variants={textItem} className="mt-6 space-y-3">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 text-gold-600 shrink-0"><Check size={18} /></span>
                  <span className="text-slate-600">{b}</span>
                </li>
              ))}
            </motion.ul>
            <motion.div variants={textItem}>
              <Link to="/about" className="inline-flex items-center gap-2 text-navy-800 underline mt-6 font-medium hover:text-gold-600 transition">
                Learn More About Us <span className="inline-block">→</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
