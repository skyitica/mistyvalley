import { motion } from 'framer-motion';
import { Leaf, UtensilsCrossed, Wine, Heart, TreePine, Store } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1];

const experiences = [
  {
    icon: Leaf,
    title: 'Artisanal Deli',
    desc: 'Farm-fresh produce, cold meats, handcrafted breads and grassfed beef straight from the land.',
    accent: 'sage',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurant & Pizza',
    desc: 'Wood-fired pizzas and gourmet meals crafted from what the farm grows, served with mountain views.',
    accent: 'forest',
  },
  {
    icon: Wine,
    title: 'Harmony Gin',
    desc: 'Fynbos-infused gin distilled on-site. Tastings, pairings, and bottles to take home.',
    accent: 'gold',
  },
  {
    icon: Heart,
    title: 'Weddings & Events',
    desc: 'An unforgettable venue nestled in the Outeniqua Mountains for your most important day.',
    accent: 'forest',
  },
  {
    icon: TreePine,
    title: 'Picnic Escapes',
    desc: 'Curated baskets, rolling green hills, and no itinerary — just the valley and you.',
    accent: 'sage',
  },
  {
    icon: Store,
    title: 'Farm Market',
    desc: 'Local produce, artisanal goods, and regional treasures sourced from the Garden Route.',
    accent: 'gold',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export default function ExperienceCards() {
  return (
    <section id="experiences" className="relative py-28 md:py-36 px-6 bg-cream overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, #1a1a1a 1px, transparent 0)',
        backgroundSize: '32px 32px',
      }} />

      <motion.div
        className="relative max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={containerVariants}
      >
        {/* Section header */}
        <motion.div className="text-center mb-20" variants={cardVariants}>
          <p className="font-body text-sage uppercase tracking-[6px] text-xs mb-4">
            Discover
          </p>
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl text-charcoal font-light">
            The Experience
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="block w-16 h-px bg-charcoal/15" />
            <span className="block w-1.5 h-1.5 rounded-full bg-sage/40" />
            <span className="block w-16 h-px bg-charcoal/15" />
          </div>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
          variants={containerVariants}
        >
          {experiences.map((exp, i) => {
            const Icon = exp.icon;
            const num = String(i + 1).padStart(2, '0');
            return (
              <motion.div
                key={exp.title}
                className="group relative bg-white/80 backdrop-blur-sm p-8 lg:p-10 cursor-default overflow-hidden border border-charcoal/[0.04] hover:border-charcoal/[0.08] transition-all duration-500"
                variants={cardVariants}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease }}
              >
                {/* Card number */}
                <span className="absolute top-6 right-7 font-heading text-[5rem] leading-none text-charcoal/[0.03] font-light select-none">
                  {num}
                </span>

                <Icon
                  className="text-sage/70 w-9 h-9 mb-5 group-hover:text-sage transition-colors duration-500"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <h3 className="font-heading text-2xl text-charcoal mb-3 font-normal">
                  {exp.title}
                </h3>
                <p className="font-body text-charcoal/55 leading-relaxed text-[0.95rem]">
                  {exp.desc}
                </p>

                {/* Bottom accent bar */}
                <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-${exp.accent} scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`} />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
