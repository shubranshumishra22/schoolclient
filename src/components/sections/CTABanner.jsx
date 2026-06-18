import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function CTABanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-navy-800 py-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center px-6 md:px-16 lg:px-24"
      >
        <motion.h2 variants={childVariants} className="font-serif text-4xl text-white">Ready to Join the Prentice Family?</motion.h2>
        <motion.p variants={childVariants} className="text-white/60 mt-4">
          Applications for 2025–26 are now open. Secure your child's future today.
        </motion.p>
        <motion.div variants={childVariants} className="flex flex-wrap justify-center gap-4 mt-8">
          <Link to="/admissions">
            <Button variant="gold">Apply for 2025–26</Button>
          </Link>
          <Link to="/contact">
            <span className="inline-block border border-white/40 text-white px-6 py-3 rounded-lg hover:bg-white/10 transition font-medium">
              Contact Admissions
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
