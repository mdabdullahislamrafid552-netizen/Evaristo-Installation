import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-blue text-stone-300 py-16 md:py-20 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-serif text-brand-gold mb-6">Evaristo Installation</h2>
          <p className="text-sm max-w-sm leading-relaxed">
            Mastering the art of luxury tile, marble, and flagstone installations for residential and commercial spaces.
          </p>
        </div>
        <div>
          <h3 className="text-xs font-medium tracking-widest uppercase text-brand-gold mb-6">Navigation</h3>
          <ul className="space-y-4 text-sm">
            <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-medium tracking-widest uppercase text-brand-gold mb-6">Contact</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="tel:6106808435" className="hover:text-white transition-colors">610.680.8435</a></li>
            <li><a href="mailto:info@evaristoinstallation.com" className="hover:text-white transition-colors">info@evaristoinstallation.com</a></li>
            <li>Pennsylvania, USA</li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto pt-8 border-t border-brand-blue/50 text-xs flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p>&copy; {new Date().getFullYear()} Evaristo Installation. All rights reserved.</p>
        <p className="tracking-widest uppercase text-brand-gold">Premium Craftsmanship</p>
      </div>
    </footer>
  );
}
