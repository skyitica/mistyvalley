import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

const experiences = [
  {
    emoji: '🌿',
    title: 'Artisanal Deli',
    desc: 'Farm-fresh produce, cold meats, handcrafted breads and grassfed beef.',
  },
  {
    emoji: '🍕',
    title: 'Restaurant & Wood-Fired Pizza',
    desc: 'Gourmet meals made from what the farm grows.',
  },
  {
    emoji: '🍸',
    title: 'Harmony Gin Distillery',
    desc: 'Fynbos gin, distilled on-site. Tastings, pairings, take-home bottles.',
  },
  {
    emoji: '💒',
    title: 'Weddings & Functions',
    desc: 'An unforgettable venue in the Outeniqua Mountains.',
  },
  {
    emoji: '🧺',
    title: 'Picnic Escapes',
    desc: 'Curated baskets, mountain views, no itinerary needed.',
  },
  {
    emoji: '🛒',
    title: 'Farm Market',
    desc: 'Local produce, artisanal goods, regional treasures.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export default function ExperienceCards() {
  return (
    <section id="experiences" className="py-24 md:py-32 px-6 bg-cream">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.h2
          className="font-heading text-4xl md:text-6xl text-charcoal text-center mb-4 font-light"
          variants={cardVariants}
        >
          The Experience
        </motion.h2>
        <motion.p
          className="font-body text-sage text-center mb-16 text-lg tracking-wide"
          variants={cardVariants}
        >
          Six ways to lose yourself in the valley
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.title}
              className="group relative bg-white p-8 cursor-pointer overflow-hidden"
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 60px rgba(30,58,47,0.15)',
              }}
              transition={{ duration: 0.4, ease }}
            >
              <span className="text-4xl block mb-4">{exp.emoji}</span>
              <h3 className="font-heading text-2xl text-charcoal mb-3">
                {exp.title}
              </h3>
              <p className="font-body text-charcoal/60 leading-relaxed">
                {exp.desc}
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-sage scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
