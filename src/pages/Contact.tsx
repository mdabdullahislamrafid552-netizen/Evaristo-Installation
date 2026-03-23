import { motion } from 'motion/react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function Contact() {
  return (
    <div className="bg-stone-50 pt-24 md:pt-32 pb-16 md:pb-20 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif leading-[1.1] text-brand-blue mb-6 md:mb-8">
              Let's discuss your <span className="italic text-brand-gold">vision.</span>
            </h1>
            <p className="text-stone-600 text-base md:text-lg mb-8 md:mb-12 max-w-md">
              Reach out to schedule a complimentary consultation. We look forward to bringing your project to life with unparalleled craftsmanship.
            </p>
            
            <div className="space-y-6">
              <div>
                <p className="text-xs tracking-widest uppercase text-brand-gold mb-1">Phone</p>
                <a href="tel:6106808435" className="text-2xl font-serif text-brand-blue hover:text-brand-blue/80 transition-colors">610.680.8435</a>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-brand-gold mb-1">Email</p>
                <a href="mailto:info@evaristoinstallation.com" className="text-2xl font-serif text-brand-blue hover:text-brand-blue/80 transition-colors">info@evaristoinstallation.com</a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 md:p-16 shadow-2xl shadow-stone-200/50"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-xs tracking-widest uppercase text-stone-500">Name</label>
                <input type="text" className="w-full bg-transparent border-b border-stone-300 py-2 focus:outline-none focus:border-stone-900 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs tracking-widest uppercase text-stone-500">Email</label>
                <input type="email" className="w-full bg-transparent border-b border-stone-300 py-2 focus:outline-none focus:border-stone-900 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs tracking-widest uppercase text-stone-500">Project Type</label>
                <select className="w-full bg-transparent border-b border-stone-300 py-2 focus:outline-none focus:border-stone-900 transition-colors text-stone-900">
                  <option>Tile Installation</option>
                  <option>Marble Work</option>
                  <option>Flagstone & Hardscaping</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs tracking-widest uppercase text-stone-500">Message</label>
                <textarea className="w-full bg-transparent border-b border-stone-300 py-2 focus:outline-none focus:border-stone-900 transition-colors h-24 resize-none"></textarea>
              </div>
              <button className="w-full bg-brand-blue text-white py-5 text-xs tracking-widest uppercase hover:bg-brand-blue/90 transition-colors mt-8">
                Submit Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
