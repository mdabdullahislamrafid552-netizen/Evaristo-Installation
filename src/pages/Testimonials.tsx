import { motion } from 'motion/react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const testimonials = [
  { name: 'John D.', location: 'Main Line, PA', feedback: 'The level of precision Evaristo Installation brought to our master bathroom remodel was astounding. The marble vein matching is a true work of art.' },
  { name: 'Sarah K.', location: 'West Chester, PA', feedback: 'Timely completion, immaculate workspace, and a final product that exceeded our highest expectations. They transformed our outdoor living space.' },
  { name: 'Michael R.', location: 'Philadelphia, PA', feedback: 'As an architect, I demand perfection. Evaristo is one of the few contractors I trust to execute complex tile layouts flawlessly.' },
];

export default function Testimonials() {
  return (
    <div className="bg-brand-blue text-stone-50 pt-24 md:pt-32 pb-24 md:pb-32 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-16 md:mb-24 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif leading-[1.1] text-white">
            Client <span className="italic text-brand-gold">Reflections</span>
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              transition={{ delay: i * 0.2 }}
              className="border-t border-brand-blue/50 pt-8"
            >
              <p className="text-stone-200 text-lg leading-relaxed mb-8 font-light">"{t.feedback}"</p>
              <div>
                <p className="font-serif text-xl text-brand-gold">{t.name}</p>
                <p className="text-xs tracking-widest uppercase text-stone-300 mt-1">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
