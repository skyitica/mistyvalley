import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

const offerings = [
  { category: 'From the Farm', items: 'Grassfed beef · Free-range eggs · Seasonal vegetables · Fresh herbs' },
  { category: 'The Deli', items: 'Artisanal breads · Cured meats · Farm cheeses · Preserves & honey' },
  { category: 'The Kitchen', items: 'Wood-fired pizzas · Farm-to-table plates · Weekend specials · Fresh pastries' },
  { category: 'To Drink', items: 'Harmony Gin cocktails · Local wines · Craft coffee · Fresh juices' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export default function DeliRestaurant() {
  return (
    <section id="deli" className="relative py-28 md:py-36 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest via-[#1a2f24] to-[#0f1f17]" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '128px 128px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
        >
          <p className="font-body text-sage/70 uppercase tracking-[6px] text-xs mb-4">
            Taste the Valley
          </p>
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl text-cream font-light">
            Deli & Restaurant
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="block w-16 h-px bg-cream/10" />
            <span className="block w-1.5 h-1.5 rounded-full bg-sage/40" />
            <span className="block w-16 h-px bg-cream/10" />
          </div>
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
        >
          <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-cream/80 italic font-light leading-relaxed">
            "Everything on your plate was grown, raised, or foraged within
            sight of the mountains you're looking at."
          </p>
        </motion.blockquote>

        {/* Offerings grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-cream/[0.06] border border-cream/[0.06]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {offerings.map((o) => (
            <motion.div
              key={o.category}
              className="bg-forest/60 backdrop-blur-sm p-10 lg:p-12 group hover:bg-forest/80 transition-colors duration-500"
              variants={itemVariants}
            >
              <h3 className="font-heading text-2xl md:text-3xl text-cream font-light mb-4">
                {o.category}
              </h3>
              <p className="font-body text-cream/45 leading-loose text-sm tracking-wide">
                {o.items}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
        >
          <a
            href="#contact"
            className="inline-block px-10 py-3.5 border border-cream/15 text-cream/70 font-body text-xs uppercase tracking-[4px] hover:border-cream/30 hover:text-cream transition-all duration-500"
          >
            Reserve a Table
          </a>
        </motion.div>
      </div>
    </section>
  );
}
