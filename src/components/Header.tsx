import { Link, useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    scrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm text-brand-blue' : 
    isHome ? 'bg-transparent py-8 text-white' : 'bg-transparent py-8 text-brand-blue'
  }`;

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={headerClass}
    >
      <nav className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="text-xl font-medium tracking-[0.2em] uppercase hover:text-brand-gold transition-colors">
          Evaristo
        </Link>
        <div className="hidden md:flex items-center gap-10 text-xs font-medium tracking-widest uppercase">
          <Link to="/services" className="hover:text-brand-gold transition-colors">Services</Link>
          <Link to="/projects" className="hover:text-brand-gold transition-colors">Projects</Link>
          <Link to="/about" className="hover:text-brand-gold transition-colors">About</Link>
          <Link to="/testimonials" className="hover:text-brand-gold transition-colors">Testimonials</Link>
          <Link to="/contact" className="hover:text-brand-gold transition-colors">Contact</Link>
        </div>
        <a href="tel:6106808435" className="hidden sm:flex items-center gap-2 text-xs font-medium tracking-widest uppercase hover:text-brand-gold transition-colors">
          <Phone size={14} />
          610.680.8435
        </a>
      </nav>
    </motion.header>
  );
}
