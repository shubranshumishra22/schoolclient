import { motion } from 'framer-motion';
import { ClipboardList, FileText, CreditCard, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { submitAdmission } from '../api';

const schema = z.object({
  name: z.string().min(1, 'Full name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  grade: z.string().min(1, 'Grade is required'),
  message: z.string().optional(),
});

const steps = [
  { icon: ClipboardList, title: 'Submit Application', desc: 'Fill out the online form or collect a paper form from the school office.' },
  { icon: FileText, title: 'Document Verification', desc: 'Submit previous academic records, birth certificate, and ID proof.' },
  { icon: CreditCard, title: 'Pay Application Fee', desc: 'A non-refundable fee of ₹500 secures your application.' },
  { icon: Send, title: 'Confirmation', desc: 'Our admissions team will contact you within 7 working days.' },
];

const feeTable = [
  { grade: 'Pre-Primary', tuition: '₹1,20,000', annual: '₹25,000', total: '₹1,45,000' },
  { grade: 'Primary (1–5)', tuition: '₹1,50,000', annual: '₹30,000', total: '₹1,80,000' },
  { grade: 'Middle (6–8)', tuition: '₹1,80,000', annual: '₹35,000', total: '₹2,15,000' },
  { grade: 'Senior (9–10)', tuition: '₹2,00,000', annual: '₹40,000', total: '₹2,40,000' },
  { grade: 'Senior Secondary (11–12)', tuition: '₹2,40,000', annual: '₹50,000', total: '₹2,90,000' },
];

export default function Admissions() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await submitAdmission(data);
      alert('Application submitted successfully! We will reach out to you shortly.');
      reset();
    } catch {
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <div>
      <Navbar />

      <section className="bg-navy-800 py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 text-center">
          <p className="text-xs font-medium tracking-widest uppercase text-gold-600 mb-2">Join the Family</p>
          <h1 className="font-serif text-5xl text-white">Admissions</h1>
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
          <SectionHeader eyebrow="How to Apply" heading="Admissions Process 2025–26" subtext="Follow these simple steps to secure your child's place at Prentice The school." />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="text-center">
                  <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-navy-100 text-navy-800 relative">
                    <Icon size={28} />
                    <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gold-600 text-white text-xs flex items-center justify-center font-medium">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg text-navy-800 mt-4">{s.title}</h3>
                  <p className="text-slate-600 text-sm mt-1">{s.desc}</p>
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
          <SectionHeader eyebrow="Fee Structure" heading="Affordable Excellence" subtext="2025–26 annual fee structure for all grade levels." />

          <div className="overflow-x-auto mt-12">
            <table className="w-full text-left bg-white rounded-xl overflow-hidden shadow-sm">
              <thead className="bg-navy-800 text-white">
                <tr>
                  <th className="px-6 py-4 font-medium">Grade Level</th>
                  <th className="px-6 py-4 font-medium">Tuition Fee</th>
                  <th className="px-6 py-4 font-medium">Annual Charges</th>
                  <th className="px-6 py-4 font-medium">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {feeTable.map((f) => (
                  <tr key={f.grade} className="hover:bg-cream-50 transition">
                    <td className="px-6 py-4 font-medium text-navy-800">{f.grade}</td>
                    <td className="px-6 py-4 text-slate-600">{f.tuition}</td>
                    <td className="px-6 py-4 text-slate-600">{f.annual}</td>
                    <td className="px-6 py-4 font-medium text-navy-800">{f.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-4 text-center">* Scholarships and need-based financial aid available. Contact our admissions office for details.</p>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white py-20"
      >
        <div className="max-w-3xl mx-auto px-6 md:px-16 lg:px-24">
          <SectionHeader eyebrow="Apply Now" heading="Admission Enquiry Form" subtext="Fill in your details and our team will get back to you." />

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Input label="Full Name *" name="name" register={register} error={errors.name?.message} placeholder="Enter full name" />
              <Input label="Email Address *" name="email" type="email" register={register} error={errors.email?.message} placeholder="Enter email address" />
              <Input label="Phone Number *" name="phone" type="tel" register={register} error={errors.phone?.message} placeholder="Enter phone number" />
              <Input label="Grade Applying For *" name="grade" register={register} error={errors.grade?.message} placeholder="e.g. Grade 1, Grade 11" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-navy-800">Additional Message</label>
              <textarea
                {...register('message')}
                rows={4}
                className="px-4 py-2.5 border border-slate-300 rounded-lg text-sm outline-none transition focus:ring-2 focus:ring-navy-500"
                placeholder="Any questions or special requests..."
              />
            </div>
            <Button type="submit" variant="gold" className="w-full md:w-auto">Submit Enquiry</Button>
          </form>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
