import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SLIDE_IMAGES } from '../../utils/constants';
import Button from '../ui/Button';

const slideVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDE_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center animate-[kenburns_5s_linear]"
            style={{ backgroundImage: `url(${SLIDE_IMAGES[current]})` }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-navy-950/65" />

      <div className="relative z-10 min-h-screen flex items-center px-6 md:px-16 lg:px-24">
        <div className="w-full lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.p variants={item} className="text-xs font-medium tracking-widest uppercase text-gold-600 mb-2">
              Admissions Open · 2025–26
            </motion.p>
            <motion.h1 variants={item} className="font-serif text-5xl lg:text-6xl text-white leading-tight">
              Where Every Student Finds Their Excellence
            </motion.h1>
            <motion.p variants={item} className="text-white/70 text-lg mt-4 max-w-md">
              A world-class K-12 school committed to academic rigour, character, and community since 1985.
            </motion.p>
            <motion.div variants={item} className="flex flex-wrap gap-4 mt-8">
              <Link to="/admissions">
                <Button variant="gold">Apply Now</Button>
              </Link>
              <Link to="/about">
                <span className="inline-block border border-white/40 text-white px-6 py-3 rounded-lg hover:bg-white/10 transition font-medium">
                  Take a Tour →
                </span>
              </Link>
            </motion.div>
          </motion.div>

          <div className="hidden lg:block">
            {/* Right column reserved for future content */}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {SLIDE_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 hover:scale-110 ${
              i === current ? 'bg-gold-600 w-8 h-2' : 'bg-white/40 w-4 h-2 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
