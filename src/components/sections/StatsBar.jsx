import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '1500+', label: 'Students' },
  { value: '85+', label: 'Faculty' },
  { value: '98%', label: 'Success Rate' },
  { value: '25+', label: 'Years' },
];

function CountUp({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = Date.now();
          const raw = parseInt(end.replace(/[^0-9]/g, ''));
          const suffix = end.replace(/[0-9]/g, '');
          const tick = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const current = Math.floor(progress * raw);
            setCount(current + suffix);
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count || '0'}</span>;
}

export default function StatsBar() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-cream-50 py-12"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className={`text-center ${i < stats.length - 1 ? 'md:border-r border-slate-200' : ''}`}>
              <p className="font-serif text-4xl text-navy-800">
                <CountUp end={stat.value} />
              </p>
              <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
