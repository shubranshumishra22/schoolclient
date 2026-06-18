import { motion } from 'framer-motion';
import { Check, Target, Heart, Shield } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const values = [
  { icon: Target, title: 'Excellence', desc: 'We set high standards and support every student to reach them.' },
  { icon: Heart, title: 'Compassion', desc: 'Empathy and respect guide every interaction on our campus.' },
  { icon: Shield, title: 'Integrity', desc: 'Honesty and responsibility are the foundation of our community.' },
  { icon: Check, title: 'Innovation', desc: 'We embrace creative thinking and adapt to a changing world.' },
];

const milestones = [
  { year: '1985', event: 'Prentice The school founded with 120 students' },
  { year: '1995', event: 'Expanded to senior secondary grades (XI–XII)' },
  { year: '2005', event: 'Opened dedicated Science & Technology wing' },
  { year: '2010', event: 'Ranked #1 in the district for board results' },
  { year: '2018', event: 'Launched Sports Academy with professional coaches' },
  { year: '2024', event: '98% pass rate — highest in school history' },
];

const team = [
  { name: 'Dr. Ananya Rao', role: 'Principal', bio: 'PhD in Education, 25+ years of leadership experience.' },
  { name: 'Mr. Vikram Shah', role: 'Vice Principal (Academics)', bio: 'Former CBSE board examiner with a passion for curriculum design.' },
  { name: 'Ms. Lata Krishnan', role: 'Head of Student Welfare', bio: 'Counseling psychologist dedicated to student well-being.' },
  { name: 'Mr. Arjun Desai', role: 'Director of Sports', bio: 'National-level athlete and certified coach.' },
];

export default function About() {
  return (
    <div>
      <Navbar />

      <section className="bg-navy-800 py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 text-center">
          <p className="text-xs font-medium tracking-widest uppercase text-gold-600 mb-2">Our Story</p>
          <h1 className="font-serif text-5xl text-white">About Us</h1>
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
          <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-gold-600 mb-2">Mission & Vision</p>
              <h2 className="font-serif text-4xl text-navy-800 mt-2 mb-4">Shaping Tomorrow's Leaders</h2>
              <p className="text-slate-600 leading-relaxed">
                Prentice The school was founded in 1985 with a single vision: to provide a world-class education that nurtures 
                every child's intellectual, emotional, and physical potential. Today, we are a thriving K-12 community of 
                over 1,500 students guided by 85+ dedicated faculty members.
              </p>
              <p className="text-slate-600 leading-relaxed mt-4">
                Our mission is to cultivate curious, confident, and compassionate individuals who are prepared to excel 
                in higher education and lead meaningful lives. We believe that education is not just about grades — it is 
                about building character, fostering creativity, and inspiring a lifelong love of learning.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8 lg:mt-0">
              <div className="bg-cream-50 rounded-xl p-6 text-center">
                <p className="font-serif text-5xl text-navy-800">1500+</p>
                <p className="text-sm text-slate-500 mt-1">Students</p>
              </div>
              <div className="bg-cream-50 rounded-xl p-6 text-center">
                <p className="font-serif text-5xl text-navy-800">85+</p>
                <p className="text-sm text-slate-500 mt-1">Faculty</p>
              </div>
              <div className="bg-cream-50 rounded-xl p-6 text-center">
                <p className="font-serif text-5xl text-navy-800">98%</p>
                <p className="text-sm text-slate-500 mt-1">Pass Rate</p>
              </div>
              <div className="bg-cream-50 rounded-xl p-6 text-center">
                <p className="font-serif text-5xl text-navy-800">40</p>
                <p className="text-sm text-slate-500 mt-1">Years</p>
              </div>
            </div>
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
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-medium tracking-widest uppercase text-gold-600 mb-2">Our Values</p>
            <h2 className="font-serif text-4xl text-navy-800 mt-2 mb-4">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-navy-100 text-navy-800">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-serif text-xl text-navy-800 mt-4">{v.title}</h3>
                  <p className="text-slate-600 text-sm mt-2">{v.desc}</p>
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
        className="bg-white py-20"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-medium tracking-widest uppercase text-gold-600 mb-2">Our Journey</p>
            <h2 className="font-serif text-4xl text-navy-800 mt-2 mb-4">Key Milestones</h2>
          </div>
          <div className="relative mt-12">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-navy-100 -translate-x-1/2" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className={`flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`hidden md:block w-1/2 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <p className="font-serif text-3xl text-gold-600">{m.year}</p>
                  </div>
                  <div className="hidden md:flex items-center justify-center shrink-0">
                    <div className="w-4 h-4 rounded-full bg-gold-600 border-4 border-white shadow" />
                  </div>
                  <div className="w-full md:w-1/2 bg-cream-50 rounded-xl p-5 shadow-sm">
                    <p className="font-serif text-3xl text-gold-600 md:hidden">{m.year}</p>
                    <p className="text-navy-800 font-medium mt-1 md:mt-0">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
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
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-medium tracking-widest uppercase text-gold-600 mb-2">Leadership</p>
            <h2 className="font-serif text-4xl text-white mt-2 mb-4">Meet Our Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {team.map((t) => (
              <div key={t.name} className="bg-white/10 border border-white/10 rounded-xl p-6 text-center hover:-translate-y-1 transition-all duration-300">
                <div className="w-20 h-20 mx-auto rounded-full bg-navy-500 flex items-center justify-center">
                  <span className="font-serif text-2xl text-white">
                    {t.name.split(' ').map((w) => w[0]).join('')}
                  </span>
                </div>
                <h3 className="text-white font-medium text-lg mt-4">{t.name}</h3>
                <p className="text-gold-600 text-sm">{t.role}</p>
                <p className="text-white/50 text-xs mt-2">{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
