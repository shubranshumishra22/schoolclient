import { motion } from 'framer-motion';
import { FlaskConical, BookOpen, BarChart3, Trophy } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionHeader from '../components/ui/SectionHeader';
import { ACADEMICS_DATA } from '../utils/constants';

const iconMap = { FlaskConical, BookOpen, BarChart3, Trophy };

const curriculum = [
  { grade: 'Pre-Primary (Nursery–KG)', focus: 'Play-based learning, motor skills, social interaction, creative expression.' },
  { grade: 'Primary (Grades 1–5)', focus: 'Foundational literacy & numeracy, environmental science, arts, physical education.' },
  { grade: 'Middle School (Grades 6–8)', focus: 'Core subjects with introduced electives, coding, debate, and life skills.' },
  { grade: 'Senior School (Grades 9–10)', focus: 'CBSE curriculum with rigorous preparation, career counselling, and board exam readiness.' },
  { grade: 'Senior Secondary (Grades 11–12)', focus: 'Specialisation in Science, Commerce, or Humanities with research projects.' },
];

const coCurricular = [
  { name: 'Sports', items: 'Cricket, Football, Basketball, Swimming, Athletics, Tennis' },
  { name: 'Performing Arts', items: 'Music (vocal & instrumental), Dance, Theatre, Orchestra' },
  { name: 'Clubs', items: 'Debate, Robotics, Astronomy, Photography, Literary, Environment, Chess' },
  { name: 'Community Service', items: 'NSS, Interact Club, Fundraising drives, Tree plantation campaigns' },
];

export default function Academics() {
  return (
    <div>
      <Navbar />

      <section className="bg-navy-800 py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 text-center">
          <p className="text-xs font-medium tracking-widest uppercase text-gold-600 mb-2">Curriculum</p>
          <h1 className="font-serif text-5xl text-white">Academics</h1>
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
          <SectionHeader eyebrow="Our Programs" heading="From Curiosity to Mastery" subtext="A comprehensive curriculum designed to challenge and inspire every student." />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {ACADEMICS_DATA.map((a) => {
              const Icon = iconMap[a.icon];
              return (
                <div key={a.title} className="bg-cream-50 rounded-xl p-6 border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-navy-100 text-navy-800">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-serif text-xl text-navy-800 mt-4 mb-2">{a.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{a.description}</p>
                </div>
              );
            })}
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
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <SectionHeader eyebrow="Curriculum" heading="Learning at Every Stage" subtext="Our age-appropriate curriculum builds a strong foundation for lifelong success." />

          <div className="space-y-4 mt-12">
            {curriculum.map((c) => (
              <div key={c.grade} className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col md:flex-row gap-4 md:items-center">
                <div className="md:w-1/3">
                  <p className="font-serif text-lg text-navy-800">{c.grade}</p>
                </div>
                <div className="md:w-2/3">
                  <p className="text-slate-600 text-sm">{c.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white py-20"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <SectionHeader eyebrow="Beyond the Classroom" heading="Co-Curricular Excellence" subtext="We believe in educating the whole child through a rich array of activities." />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {coCurricular.map((c) => (
              <div key={c.name} className="bg-cream-50 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-serif text-xl text-navy-800 mb-2">{c.name}</h3>
                <p className="text-slate-600 text-sm">{c.items}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-navy-950 py-20"
      >
        <div className="max-w-4xl mx-auto px-6 md:px-16 lg:px-24 text-center">
          <p className="text-xs font-medium tracking-widest uppercase text-gold-600 mb-2">Academic Support</p>
          <h2 className="font-serif text-4xl text-white mt-2 mb-4">Every Student Gets the Support They Need</h2>
          <p className="text-white/60 text-lg">
            From remedial classes and gifted enrichment programs to one-on-one mentoring and career counselling, 
            we ensure no child is left behind and every talent is nurtured.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 border border-white/10 rounded-xl p-6">
              <p className="font-serif text-3xl text-gold-600">1:8</p>
              <p className="text-white/70 text-sm mt-1">Student–Teacher Ratio</p>
            </div>
            <div className="bg-white/10 border border-white/10 rounded-xl p-6">
              <p className="font-serif text-3xl text-gold-600">100%</p>
              <p className="text-white/70 text-sm mt-1">Qualified Faculty</p>
            </div>
            <div className="bg-white/10 border border-white/10 rounded-xl p-6">
              <p className="font-serif text-3xl text-gold-600">15</p>
              <p className="text-white/70 text-sm mt-1">Avg. Years of Experience</p>
            </div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
