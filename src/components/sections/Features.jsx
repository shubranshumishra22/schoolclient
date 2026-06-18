import { motion } from 'framer-motion';
import { BookOpen, Users, Globe } from 'lucide-react';
import { FEATURES_DATA } from '../../utils/constants';
import SectionHeader from '../ui/SectionHeader';

const iconMap = { BookOpen, Users, Globe };

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Features() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-cream-50 py-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <SectionHeader eyebrow="Why Prentice" heading="Excellence in Every Dimension" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        >
          {FEATURES_DATA.map((f) => {
            const Icon = iconMap[f.icon];
            return (
              <motion.div
                key={f.title}
                variants={cardVariants}
                className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-12 h-12 flex items-center justify-center rounded-lg ${f.bg} text-navy-800`}>
                  <Icon size={24} />
                </div>
                <h3 className="font-serif text-xl text-navy-800 mt-4 mb-2">{f.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{f.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
