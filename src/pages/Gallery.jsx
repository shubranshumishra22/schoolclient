import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionHeader from '../components/ui/SectionHeader';

const categories = ['All', 'Academic', 'Sports', 'Arts', 'Events', 'Campus'];

const galleryItems = [
  { label: 'Classroom', category: 'Academic', height: 'h-48', color: 'bg-navy-500' },
  { label: 'Science Lab', category: 'Academic', height: 'h-64', color: 'bg-navy-100' },
  { label: 'Sports Day', category: 'Sports', height: 'h-56', color: 'bg-navy-500' },
  { label: 'Cricket Match', category: 'Sports', height: 'h-64', color: 'bg-navy-100' },
  { label: 'Annual Day', category: 'Events', height: 'h-48', color: 'bg-navy-500' },
  { label: 'Music Recital', category: 'Arts', height: 'h-72', color: 'bg-navy-100' },
  { label: 'Library', category: 'Campus', height: 'h-56', color: 'bg-navy-500' },
  { label: 'Art Exhibition', category: 'Arts', height: 'h-48', color: 'bg-navy-100' },
  { label: 'Swimming Pool', category: 'Campus', height: 'h-64', color: 'bg-navy-500' },
  { label: 'Football Ground', category: 'Sports', height: 'h-48', color: 'bg-navy-100' },
  { label: 'Debate Competition', category: 'Events', height: 'h-56', color: 'bg-navy-500' },
  { label: 'Computer Lab', category: 'Academic', height: 'h-64', color: 'bg-navy-100' },
  { label: 'Cultural Fest', category: 'Events', height: 'h-48', color: 'bg-navy-500' },
  { label: 'Drama Performance', category: 'Arts', height: 'h-56', color: 'bg-navy-100' },
  { label: 'School Building', category: 'Campus', height: 'h-72', color: 'bg-navy-500' },
];

export default function Gallery() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? galleryItems : galleryItems.filter((g) => g.category === active);

  return (
    <div>
      <Navbar />

      <section className="bg-navy-800 py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 text-center">
          <p className="text-xs font-medium tracking-widest uppercase text-gold-600 mb-2">Moments That Matter</p>
          <h1 className="font-serif text-5xl text-white">Gallery</h1>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white py-20"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <SectionHeader eyebrow="Campus Life" heading="See Prentice in Action" subtext="A visual journey through life at our vibrant campus." />

          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                  active === cat
                    ? 'bg-navy-800 text-white'
                    : 'bg-navy-100 text-navy-800 hover:bg-navy-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {filtered.map((item) => (
              <motion.div
                key={item.label}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`${item.height} ${item.color} rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer relative`}
              >
                {/* TODO: replace with real gallery images */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/60 text-sm font-medium">{item.label}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-navy-950/50 text-white text-xs p-2">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
