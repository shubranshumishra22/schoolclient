import { Link } from 'react-router-dom';
import { Camera, Video, MapPin, Phone, Mail } from 'lucide-react';
import { NAV_LINKS } from '../../utils/constants';

const footerLinks = {
  quick: NAV_LINKS.filter((l) => l.label !== 'Contact'),
  academics: [
    { label: 'Science & Technology', path: '/academics' },
    { label: 'Liberal Arts', path: '/academics' },
    { label: 'Commerce', path: '/academics' },
    { label: 'Sports Academy', path: '/academics' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-950 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <p className="font-serif text-white text-xl">Prentice The school</p>
            <p className="text-white/50 text-sm mt-2 max-w-xs leading-relaxed">
              A world-class K-12 school committed to academic rigour, character, and community since 1985.
            </p>
            <div className="flex gap-3 mt-6">
              <span className="bg-white/10 rounded-full p-2 text-white/60 hover:text-gold-600 hover:bg-white/20 transition cursor-pointer" title="Instagram">
                <Camera size={18} />
              </span>
              <span className="bg-white/10 rounded-full p-2 text-white/60 hover:text-gold-600 hover:bg-white/20 transition cursor-pointer" title="YouTube">
                <Video size={18} />
              </span>
            </div>
          </div>

          <div>
            <p className="text-white/40 text-xs uppercase tracking-widest font-medium mb-4">Quick Links</p>
            {footerLinks.quick.map((link) => (
              <Link key={link.label} to={link.path} className="block text-white/60 hover:text-gold-600 text-sm mb-2 transition">
                {link.label}
              </Link>
            ))}
          </div>

          <div>
            <p className="text-white/40 text-xs uppercase tracking-widest font-medium mb-4">Academics</p>
            {footerLinks.academics.map((link) => (
              <Link key={link.label} to={link.path} className="block text-white/60 hover:text-gold-600 text-sm mb-2 transition">
                {link.label}
              </Link>
            ))}
          </div>

          <div>
            <p className="text-white/40 text-xs uppercase tracking-widest font-medium mb-4">Contact</p>
            <p className="text-white/60 text-sm mb-2 flex items-start gap-2">
              <MapPin size={14} className="mt-0.5 shrink-0" />
              123 School Road, Bangalore, KA 560001
            </p>
            <p className="text-white/60 text-sm mb-2 flex items-center gap-2">
              <Phone size={14} className="shrink-0" />
              +91 80 1234 5678
            </p>
            <p className="text-white/60 text-sm flex items-center gap-2">
              <Mail size={14} className="shrink-0" />
              admissions@prenticeschool.edu
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12" />

        <div className="flex flex-col md:flex-row justify-between text-white/30 text-xs py-6 gap-2">
          <p>© 2025 Prentice The school. All rights reserved.</p>
          <p className="flex gap-3">
            <span className="hover:text-white/50 transition cursor-pointer">Privacy Policy</span>
            <span>·</span>
            <span className="hover:text-white/50 transition cursor-pointer">Terms of Use</span>
            <span>·</span>
            <Link to="/admin/login" className="hover:text-white/50 transition">Admin</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
