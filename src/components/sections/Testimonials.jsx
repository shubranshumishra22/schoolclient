import { motion } from 'framer-motion';
import { TESTIMONIALS_DATA } from '../../utils/constants';
import SectionHeader from '../ui/SectionHeader';

function getInitials(name) {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('');
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Testimonials() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-navy-950 py-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <SectionHeader eyebrow="Testimonials" heading="What Our Community Says" light />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        >
          {TESTIMONIALS_DATA.map((t) => (
            <motion.div key={t.author} variants={cardVariants} className="bg-white/10 border border-white/10 rounded-xl p-6 hover:-translate-y-1 transition-all duration-300">
              <p className="text-gold-600 text-5xl font-serif leading-none">"</p>
              <p className="text-white/80 text-sm leading-relaxed mt-2">{t.quote}</p>
              <div className="border-t border-white/10 mt-4 pt-4 flex items-center">
                <div className="bg-navy-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-medium text-sm shrink-0">
                  {getInitials(t.author)}
                </div>
                <div className="ml-3">
                  <p className="text-white font-medium text-sm">{t.author}</p>
                  <p className="text-white/50 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
