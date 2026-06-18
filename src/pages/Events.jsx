import { motion } from 'framer-motion';
import { MapPin, CalendarDays } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionHeader from '../components/ui/SectionHeader';
import { EVENTS_DATA } from '../utils/constants';

const moreEvents = [
  { day: '12', month: 'Jul', title: 'Parent-Teacher Conference', location: 'School Auditorium', desc: 'Meet with your child\'s teachers to discuss academic progress.' },
  { day: '20', month: 'Jul', title: 'Inter-School Debate Championship', location: 'Multi-Purpose Hall', desc: 'Hosting schools from across the city for a day of sharp rhetoric.' },
  { day: '01', month: 'Aug', title: 'Independence Day Celebration', location: 'Main Ground', desc: 'Flag hoisting, cultural performances, and patriotic fervour.' },
  { day: '10', month: 'Aug', title: 'Career Counselling Workshop', location: 'Seminar Room', desc: 'Expert sessions for Grade 10–12 students on career pathways.' },
  { day: '25', month: 'Aug', title: 'Prentice Run for Charity', location: 'Campus Track', desc: 'Annual fundraising run supporting local education initiatives.' },
  { day: '05', month: 'Sep', title: 'Teachers\' Day', location: 'School Auditorium', desc: 'Students take over the classroom to honour their mentors.' },
];

const allEvents = [...EVENTS_DATA, ...moreEvents];

export default function Events() {
  return (
    <div>
      <Navbar />

      <section className="bg-navy-800 py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 text-center">
          <p className="text-xs font-medium tracking-widest uppercase text-gold-600 mb-2">Stay Connected</p>
          <h1 className="font-serif text-5xl text-white">Events</h1>
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
          <SectionHeader eyebrow="Calendar" heading="Upcoming Events 2025" subtext="Mark your calendar — there's always something exciting happening at Prentice." />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {allEvents.map((ev) => (
              <motion.div
                key={ev.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="bg-cream-50 rounded-xl p-5 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="bg-navy-800 text-white rounded-lg p-3 text-center min-w-[65px]">
                    <p className="font-serif text-2xl">{ev.day}</p>
                    <p className="text-xs uppercase tracking-wide text-white/70">{ev.month}</p>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-navy-800 text-base">{ev.title}</h4>
                    <p className="text-slate-500 text-sm flex items-center gap-1 mt-1">
                      <MapPin size={14} />
                      {ev.location}
                    </p>
                    <p className="text-slate-600 text-sm mt-2">{ev.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-cream-50 py-20"
      >
        <div className="max-w-4xl mx-auto px-6 md:px-16 lg:px-24 text-center">
          <CalendarDays className="mx-auto text-gold-600" size={40} />
          <p className="text-xs font-medium tracking-widest uppercase text-gold-600 mt-6 mb-2">Stay Updated</p>
          <h2 className="font-serif text-4xl text-navy-800 mt-2 mb-4">Never Miss an Event</h2>
          <p className="text-slate-500 text-lg">
            Subscribe to our school calendar or follow us on social media for real-time updates on all school events.
          </p>
        </div>
      </motion.section>

      {/* TODO: connect to GET /events API */}

      <Footer />
    </div>
  );
}
