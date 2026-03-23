import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  const headerClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    scrolled || mobileMenuOpen ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm text-brand-blue' : 
    isHome ? 'bg-transparent py-6 md:py-8 text-white' : 'bg-transparent py-6 md:py-8 text-brand-blue'
  }`;

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={headerClass}
      >
        <nav className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link to="/" className="text-xl font-medium tracking-[0.2em] uppercase hover:text-brand-gold transition-colors relative z-50">
            Evaristo
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10 text-xs font-medium tracking-widest uppercase">
            <Link to="/services" className="hover:text-brand-gold transition-colors">Services</Link>
            <Link to="/projects" className="hover:text-brand-gold transition-colors">Projects</Link>
            <Link to="/about" className="hover:text-brand-gold transition-colors">About</Link>
            <Link to="/testimonials" className="hover:text-brand-gold transition-colors">Testimonials</Link>
            <Link to="/contact" className="hover:text-brand-gold transition-colors">Contact</Link>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="tel:6106808435" className="hidden sm:flex items-center gap-2 text-xs font-medium tracking-widest uppercase hover:text-brand-gold transition-colors">
              <Phone size={14} />
              610.680.8435
            </a>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden relative z-50 p-2 -mr-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 pb-6 flex flex-col md:hidden"
          >
            <div className="flex flex-col gap-8 text-3xl font-serif text-brand-blue mt-8">
              <Link to="/services" className="hover:text-brand-gold transition-colors">Services</Link>
              <Link to="/projects" className="hover:text-brand-gold transition-colors">Projects</Link>
              <Link to="/about" className="hover:text-brand-gold transition-colors">About</Link>
              <Link to="/testimonials" className="hover:text-brand-gold transition-colors">Testimonials</Link>
              <Link to="/contact" className="hover:text-brand-gold transition-colors">Contact</Link>
            </div>
            <div className="mt-auto pb-8">
              <p className="text-xs tracking-widest uppercase text-brand-gold mb-4">Contact Us</p>
              <a href="tel:6106808435" className="flex items-center gap-3 text-xl text-brand-blue mb-4">
                <Phone size={20} />
                610.680.8435
              </a>
              <a href="mailto:info@evaristoinstallation.com" className="text-sm text-stone-500">
                info@evaristoinstallation.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
