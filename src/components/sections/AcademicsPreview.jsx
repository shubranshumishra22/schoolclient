import { motion } from 'framer-motion';
import { FlaskConical, BookOpen, BarChart3, Trophy } from 'lucide-react';
import { ACADEMICS_DATA } from '../../utils/constants';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const iconMap = { FlaskConical, BookOpen, BarChart3, Trophy };

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function AcademicsPreview() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-white py-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <SectionHeader eyebrow="Our Programs" heading="From Curiosity to Mastery" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {ACADEMICS_DATA.map((a) => {
            const Icon = iconMap[a.icon];
            return (
              <motion.div key={a.title} variants={cardVariants} className="bg-cream-50 rounded-xl p-6 border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-navy-100 text-navy-800">
                  <Icon size={22} />
                </div>
                <h3 className="font-serif text-xl text-navy-800 mt-4 mb-2">{a.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{a.description}</p>
                <Link to="/academics" className="inline-block text-gold-600 text-sm mt-4 font-medium hover:underline">
                  Explore →
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="text-center mt-10">
          <Link to="/academics">
            <Button variant="outline">View All Programs</Button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
