import { motion } from 'motion/react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const services = [
  {
    id: '01',
    title: 'Tile Installation',
    desc: 'From intricate mosaics to large-format porcelain, our tile installations are characterized by perfectly level surfaces, uniform grout lines, and meticulous attention to layout and flow. We specialize in kitchens, bathrooms, and expansive living areas.',
    img: 'https://media.istockphoto.com/id/979340006/photo/worker-placing-ceramic-floor-tiles.jpg?s=612x612&w=0&k=20&c=Vw7V2IazJ1nNTgRt_4DpQgChiyDkXOtlckNwx3Y3IPg='
  },
  {
    id: '02',
    title: 'Marble Work',
    desc: 'Marble requires a master touch. We handle premium natural stone with the respect it deserves, ensuring seamless transitions, beautiful vein matching, and a flawless finish for countertops, flooring, and custom architectural accents.',
    img: 'https://media.istockphoto.com/id/518203138/photo/marble-repair-with-angle-grinder.jpg?s=612x612&w=0&k=20&c=xgR1XvjOjEziRKGvqVSVrAAj1RyRefd8-BUijrQ7ZXI='
  },
  {
    id: '03',
    title: 'Flagstone & Hardscaping',
    desc: 'Extend your luxury living space outdoors. Our hardscaping team designs and installs stunning flagstone patios, elegant walkways, and durable outdoor features that harmonize with your landscape and stand the test of time.',
    img: 'https://media.istockphoto.com/id/483785475/photo/professional-landscaping.jpg?s=612x612&w=0&k=20&c=9jzH5rBOGkTVSYvOg194G7_U2sC32u9KXXYp7vvZbcY='
  }
];

export default function Services() {
  return (
    <div className="bg-stone-50 pt-24 md:pt-32 pb-16 md:pb-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-16 md:mb-32">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] text-brand-blue">
            Our <span className="italic text-brand-gold">Expertise</span>
          </h1>
        </motion.div>

        <div className="space-y-20 md:space-y-32">
          {services.map((service, index) => (
            <motion.section 
              key={service.id}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
              className={`grid md:grid-cols-2 gap-12 md:gap-24 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className={index % 2 !== 0 ? 'md:order-2' : ''}>
                <p className="text-brand-gold font-serif text-6xl mb-6">{service.id}</p>
                <h2 className="text-4xl md:text-5xl font-serif text-brand-blue mb-6">{service.title}</h2>
                <p className="text-stone-600 text-lg leading-relaxed">{service.desc}</p>
              </div>
              <div className={`aspect-[4/3] overflow-hidden ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                <img src={service.img} alt={service.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
}
