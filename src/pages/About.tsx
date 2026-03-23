import { motion } from 'motion/react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function About() {
  return (
    <div className="bg-stone-50 pt-32 pb-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl mb-24">
          <p className="tracking-[0.2em] uppercase text-xs text-brand-gold mb-6">Our Story</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] text-brand-blue">
            A legacy built on <span className="italic text-brand-gold">precision</span> and passion.
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}
            className="md:col-span-5 aspect-[3/4] overflow-hidden"
          >
            <img src="https://instagram.fdac3-2.fna.fbcdn.net/v/t51.82787-15/639857609_18129428320531656_2881748393551232271_n.webp?stp=dst-webp_s1080x1080&_nc_cat=106&ig_cache_key=MzgzNzU5OTgwMjg1OTg0MTE1Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=DrFN__4FHK8Q7kNvwFZC8Kh&_nc_oc=AdpzWhlybpjgB31Xl2pALe0NYwrRu3PKl96_d4aomRuXv3meUi9MFixIjifDXZw7SsM&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=LyLSURYGe-3FvLSSiaAjzQ&_nc_ss=7a32e&oh=00_AfxKw7usmIEqEAPXUNwB3Xruerz-lpywsg7d_vJ3WmjTWg&oe=69C645E8" alt="Craftsman at work" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </motion.div>
          
          <motion.div 
            initial="hidden" animate="visible" variants={fadeUp}
            className="md:col-span-6 md:col-start-7 pt-12 md:pt-24 space-y-8 text-stone-600 text-lg leading-relaxed"
          >
            <p>
              Evaristo Installation was founded on a simple principle: that the spaces we inhabit should be crafted with the utmost care and highest quality materials. As a premier local contractor, we specialize in luxury flooring, marble, and hardscaping.
            </p>
            <p>
              Our team of master artisans brings decades of combined experience to every project. We understand that working with premium materials like marble and flagstone requires not just technical skill, but an artist's eye for detail, veining, and layout.
            </p>
            <p>
              From expansive commercial lobbies to intimate residential bathrooms, we approach every installation with the same unwavering commitment to excellence. We don't just meet expectations; we redefine them.
            </p>
            
            <div className="pt-12 grid grid-cols-2 gap-8 border-t border-stone-200 mt-12">
              <div>
                <p className="text-4xl font-serif text-brand-blue mb-2">15+</p>
                <p className="text-xs tracking-widest uppercase text-brand-gold">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-serif text-brand-blue mb-2">500+</p>
                <p className="text-xs tracking-widest uppercase text-brand-gold">Projects Completed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
