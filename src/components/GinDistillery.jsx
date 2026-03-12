import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

const marqueeText = 'FYNBOS \u00B7 HANDCRAFTED \u00B7 GARDEN ROUTE \u00B7 DISTILLED ON SITE \u00B7 HARMONY GIN \u00B7 ';

const botanicals = [
  { name: 'Wild Rosemary', note: 'earthy, herbal' },
  { name: 'Honeybush', note: 'sweet, woody' },
  { name: 'Buchu', note: 'minty, camphor' },
  { name: 'Cape Snowbush', note: 'floral, delicate' },
];

export default function GinDistillery() {
  return (
    <section id="distillery" className="relative py-28 md:py-36 bg-charcoal overflow-hidden">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Subtle gold glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(201,168,76,0.04)_0%,_transparent_60%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
        >
          <p className="font-body text-gold/60 uppercase tracking-[6px] text-xs mb-4">
            Distillery
          </p>
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl text-cream font-light">
            Harmony Gin
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="block w-16 h-px bg-gold/20" />
            <span className="block w-1.5 h-1.5 rounded-full bg-gold/40" />
            <span className="block w-16 h-px bg-gold/20" />
          </div>
        </motion.div>

        {/* Quote */}
        <motion.p
          className="font-heading text-2xl md:text-3xl lg:text-4xl text-cream/70 italic font-light text-center max-w-3xl mx-auto mb-20 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
        >
          "A true taste of the fynbos — distilled from the indigenous
          botanicals of the Garden Route."
        </motion.p>

        {/* Botanicals */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gold/[0.06] mb-20 border border-gold/[0.06]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
        >
          {botanicals.map((b) => (
            <div
              key={b.name}
              className="bg-charcoal p-6 md:p-8 text-center group hover:bg-charcoal/80 transition-colors duration-500"
            >
              <p className="font-heading text-lg md:text-xl text-gold/80 group-hover:text-gold transition-colors duration-500">
                {b.name}
              </p>
              <p className="font-body text-cream/25 text-xs mt-2 italic tracking-wider">
                {b.note}
              </p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
        >
          <a
            href="https://harmonydistillery.co.za"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-3.5 border border-gold/30 text-gold/80 font-body text-xs uppercase tracking-[4px] hover:bg-gold/10 hover:border-gold/50 hover:text-gold transition-all duration-500"
          >
            Visit Harmony Distillery
          </a>
        </motion.div>
      </div>

      {/* Infinite marquee */}
      <div className="mt-24 border-t border-b border-gold/[0.06] py-5 overflow-hidden">
        <div className="flex whitespace-nowrap" style={{ animation: 'marquee 25s linear infinite' }}>
          <span className="font-heading text-xl md:text-2xl text-gold/[0.08] tracking-[8px]">
            {marqueeText.repeat(10)}
          </span>
          <span className="font-heading text-xl md:text-2xl text-gold/[0.08] tracking-[8px]">
            {marqueeText.repeat(10)}
          </span>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  );
}
