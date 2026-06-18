import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { submitContact } from '../api';

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Valid email is required'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required'),
});

const contactInfo = [
  { icon: MapPin, label: 'Address', value: '123 School Road, Bangalore, KA 560001' },
  { icon: Phone, label: 'Phone', value: '+91 80 1234 5678' },
  { icon: Mail, label: 'Email', value: 'admissions@prenticeschool.edu' },
  { icon: Clock, label: 'Office Hours', value: 'Mon–Fri, 8:00 AM – 4:00 PM' },
];

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await submitContact(data);
      alert('Thank you for reaching out! We will get back to you shortly.');
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
          <p className="text-xs font-medium tracking-widest uppercase text-gold-600 mb-2">Get in Touch</p>
          <h1 className="font-serif text-5xl text-white">Contact Us</h1>
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
          <div className="lg:grid lg:grid-cols-2 gap-16">
            <div>
              <SectionHeader eyebrow="Contact" heading="We'd Love to Hear from You" subtext="Have a question, feedback, or want to schedule a campus visit? Reach out to us." />

              <div className="space-y-6 mt-10">
                {contactInfo.map((c) => {
                  const Icon = c.icon;
                  return (
                    <div key={c.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-navy-100 text-navy-800 shrink-0">
                        <Icon size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">{c.label}</p>
                        <p className="text-navy-800 font-medium">{c.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-10 bg-cream-50 rounded-xl p-6">
                <p className="text-xs font-medium tracking-widest uppercase text-gold-600 mb-2">Visit Us</p>
                <h3 className="font-serif text-xl text-navy-800">Campus Tours</h3>
                <p className="text-slate-600 text-sm mt-2">
                  We welcome families to visit our campus. Schedule a guided tour through our admissions office.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="bg-cream-50 rounded-xl p-8">
                <h3 className="font-serif text-2xl text-navy-800 mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input label="Name *" name="name" register={register} error={errors.name?.message} placeholder="Your name" />
                    <Input label="Email *" name="email" type="email" register={register} error={errors.email?.message} placeholder="Your email" />
                  </div>
                  <Input label="Subject *" name="subject" register={register} error={errors.subject?.message} placeholder="Subject" />
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-navy-800">Message *</label>
                    <textarea
                      {...register('message')}
                      rows={5}
                      className="px-4 py-2.5 border border-slate-300 rounded-lg text-sm outline-none transition focus:ring-2 focus:ring-navy-500"
                      placeholder="Write your message..."
                    />
                    {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
                  </div>
                  <Button type="submit" variant="primary" className="flex items-center gap-2">
                    <Send size={16} />
                    Send Message
                  </Button>
                </form>
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
        className="bg-cream-50 h-80"
      >
        {/* TODO: replace with real Google Maps embed */}
        <div className="w-full h-full flex items-center justify-center bg-navy-100 text-navy-500 text-sm">
          Map Embed — 123 School Road, Bangalore
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
