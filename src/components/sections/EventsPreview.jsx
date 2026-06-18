import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { EVENTS_DATA } from '../../utils/constants';
import SectionHeader from '../ui/SectionHeader';

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function EventsPreview() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-cream-50 py-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <SectionHeader eyebrow="Upcoming Events" heading="Mark Your Calendar" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        >
          {EVENTS_DATA.map((ev) => (
            <motion.div key={ev.title} variants={cardVariants} className="bg-white rounded-xl shadow-sm p-5 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="flex gap-4">
                <div className="bg-navy-800 text-white rounded-lg p-3 text-center min-w-[60px]">
                  <p className="font-serif text-2xl">{ev.day}</p>
                  <p className="text-xs uppercase tracking-wide text-white/70">{ev.month}</p>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-navy-800 text-base">{ev.title}</h4>
                  <p className="text-slate-500 text-sm flex items-center gap-1 mt-1">
                    <MapPin size={14} />
                    {ev.location}
                  </p>
                  <p className="text-slate-600 text-sm mt-1 line-clamp-2">{ev.desc}</p>
                  <Link to="/events" className="inline-block text-gold-600 text-sm mt-2 font-medium hover:underline">
                    Learn More →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* TODO: connect to GET /events API */}
      </div>
    </motion.section>
  );
}
