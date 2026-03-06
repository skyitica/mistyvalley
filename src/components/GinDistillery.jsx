import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

const marqueeText =
  'FYNBOS \u00B7 HANDCRAFTED \u00B7 GARDEN ROUTE \u00B7 DISTILLED ON SITE \u00B7 HARMONY GIN \u00B7 ';

export default function GinDistillery() {
  return (
    <section className="relative py-24 md:py-32 bg-charcoal overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.p
          className="font-body text-gold uppercase tracking-[6px] text-sm mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
        >
          Distillery
        </motion.p>

        <motion.h2
          className="font-heading text-4xl md:text-6xl lg:text-7xl text-cream font-light mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease }}
        >
          Harmony Gin — A true taste of the fynbos.
        </motion.h2>

        <motion.p
          className="font-body text-cream/60 text-lg leading-relaxed max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
        >
          Born from the indigenous botanicals of the Garden Route, Harmony Gin
          is distilled on-site at Misty Valley Farm. Join us for a tasting
          experience that takes you through the fynbos-lined valleys of the
          Outeniqua Mountains — one sip at a time.
        </motion.p>

        <motion.a
          href="https://harmonydistillery.co.za"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-3 border border-gold/50 text-gold font-body text-sm uppercase tracking-[3px] hover:bg-gold/10 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
        >
          Visit Harmony Distillery
        </motion.a>
      </div>

      {/* Infinite marquee */}
      <div className="mt-20 border-t border-b border-gold/10 py-5 overflow-hidden">
        <div
          className="flex whitespace-nowrap"
          style={{ animation: 'marquee 20s linear infinite' }}
        >
          <span className="font-heading text-2xl md:text-3xl text-gold/20 tracking-[6px]">
            {marqueeText.repeat(8)}
          </span>
          <span className="font-heading text-2xl md:text-3xl text-gold/20 tracking-[6px]">
            {marqueeText.repeat(8)}
          </span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    </section>
  );
}
