import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Shield } from 'lucide-react';
import { NAV_LINKS } from '../../utils/constants';
import Button from '../ui/Button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav className={`bg-navy-950 sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 flex items-center justify-between h-16">
        <Link to="/" className="font-serif text-white text-xl">Prentice The school</Link>

        <div className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm transition ${
                pathname === link.path
                  ? 'text-gold-600'
                  : 'text-white/70 hover:text-gold-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/admin/login"
            className="text-white/40 hover:text-gold-600 text-xs transition flex items-center gap-1"
            title="Admin Login"
          >
            <Shield size={14} />
            <span>Admin</span>
          </Link>
          <Link to="/admissions">
            <Button variant="gold">Apply Now</Button>
          </Link>
        </div>

        <button className="lg:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-navy-950 border-t border-white/10 px-6 overflow-hidden"
          >
            <div className="pb-6 space-y-3 pt-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block text-sm transition ${
                    pathname === link.path
                      ? 'text-gold-600'
                      : 'text-white/70 hover:text-gold-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-2 border-t border-white/10">
                <Link
                  to="/admin/login"
                  className="text-white/40 hover:text-gold-600 text-xs transition flex items-center gap-1"
                >
                  <Shield size={14} />
                  Admin
                </Link>
                <Link to="/admissions">
                  <Button variant="gold" className="w-full">Apply Now</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
