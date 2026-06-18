import { motion } from 'framer-motion';
import { GALLERY_ITEMS } from '../../utils/constants';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function GalleryPreview() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-white py-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <SectionHeader eyebrow="Campus Life" heading="See Prentice in Action" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12"
        >
          {GALLERY_ITEMS.map((item) => (
            <motion.div
              key={item.label}
              variants={itemVariants}
              className={`${item.height} bg-navy-100 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer relative`}
            >
              {/* TODO: replace with real gallery images */}
              <div className="absolute bottom-0 left-0 right-0 bg-navy-950/50 text-white text-xs p-2">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <Link to="/gallery">
            <Button variant="outline">View Full Gallery →</Button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
