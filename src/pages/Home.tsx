import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  return (
    <div className="bg-stone-50">
      {/* Hero */}
      <section className="relative h-screen flex flex-col justify-end pb-24 px-6 md:px-12">
        <div className="absolute inset-0 overflow-hidden">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="https://www.designtiles.com.au/wp-content/uploads/2025/02/Taj-Mahal-Bathroom-lifestyle2.jpg" 
            alt="Luxury Bathroom Marble" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto w-full">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl">
            <p className="text-brand-gold tracking-[0.2em] uppercase text-sm mb-6">Premium Craftsmanship</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] mb-8">
              Mastering <span className="italic font-light">the art</span> <br/>of luxury stone.
            </h1>
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <Link to="/contact" className="bg-brand-blue text-white px-8 py-4 text-xs tracking-widest uppercase hover:bg-brand-blue/90 transition-colors">
                Request Estimate
              </Link>
              <Link to="/projects" className="text-white flex items-center gap-3 text-xs tracking-widest uppercase hover:opacity-70 transition-opacity">
                View Portfolio <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro / Philosophy */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          >
            <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
              Elevating spaces through <span className="italic text-stone-500">meticulous precision</span> and timeless materials.
            </h2>
            <p className="text-stone-600 leading-relaxed mb-8 max-w-md">
              For over a decade, Evaristo Installation has been the trusted name in high-end residential and commercial hardscaping, tile, and marble work. We don't just lay stone; we craft enduring legacies.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-medium border-b border-stone-900 pb-1 hover:text-stone-500 hover:border-stone-500 transition-colors">
              Our Story <ArrowRight size={14} />
            </Link>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="aspect-[4/5] overflow-hidden"
          >
            <img src="https://instagram.fdac3-2.fna.fbcdn.net/v/t51.82787-15/639857609_18129428320531656_2881748393551232271_n.webp?stp=dst-webp_s1080x1080&_nc_cat=106&ig_cache_key=MzgzNzU5OTgwMjg1OTg0MTE1Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=DrFN__4FHK8Q7kNvwFZC8Kh&_nc_oc=AdpzWhlybpjgB31Xl2pALe0NYwrRu3PKl96_d4aomRuXv3meUi9MFixIjifDXZw7SsM&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=LyLSURYGe-3FvLSSiaAjzQ&_nc_ss=7a32e&oh=00_AfxKw7usmIEqEAPXUNwB3Xruerz-lpywsg7d_vJ3WmjTWg&oe=69C645E8" alt="Craftsmanship" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </motion.div>
        </div>
      </section>

      {/* Services Bento/Editorial */}
      <section className="py-32 px-6 md:px-12 bg-brand-blue text-stone-50">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-20">
            <p className="tracking-[0.2em] uppercase text-xs text-brand-gold mb-4">Expertise</p>
            <h2 className="text-5xl md:text-6xl font-serif">Our Services</h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { title: 'Tile Installation', desc: 'Flawless execution for kitchens, bathrooms, and expansive flooring.', img: 'https://media.istockphoto.com/id/979340006/photo/worker-placing-ceramic-floor-tiles.jpg?s=612x612&w=0&k=20&c=Vw7V2IazJ1nNTgRt_4DpQgChiyDkXOtlckNwx3Y3IPg=' },
              { title: 'Marble Work', desc: 'Bespoke marble installations for countertops, flooring, and architectural accents.', img: 'https://media.istockphoto.com/id/518203138/photo/marble-repair-with-angle-grinder.jpg?s=612x612&w=0&k=20&c=xgR1XvjOjEziRKGvqVSVrAAj1RyRefd8-BUijrQ7ZXI=' },
              { title: 'Flagstone & Hardscaping', desc: 'Transformative outdoor spaces including patios, walkways, and custom features.', img: 'https://media.istockphoto.com/id/483785475/photo/professional-landscaping.jpg?s=612x612&w=0&k=20&c=9jzH5rBOGkTVSYvOg194G7_U2sC32u9KXXYp7vvZbcY=' },
            ].map((service) => (
              <motion.div key={service.title} variants={fadeUp} className="group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden mb-6 relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-2xl font-serif mb-3 flex items-center justify-between group-hover:text-brand-gold transition-colors">
                  {service.title}
                  <ArrowRight size={18} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </h3>
                <p className="text-stone-200 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 md:px-12 text-center bg-brand-gold/10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-serif mb-8 text-stone-900">Ready to transform your space?</h2>
          <p className="text-stone-600 mb-12 text-lg">Contact us today to schedule your complimentary consultation and estimate.</p>
          <Link to="/contact" className="inline-block bg-brand-blue text-white px-10 py-5 text-xs tracking-widest uppercase hover:bg-brand-blue/90 transition-colors">
            Request Consultation
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
