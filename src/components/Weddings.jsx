import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

const features = [
  'Outeniqua Mountain backdrop',
  'Full catering from the farm',
  'Intimate or grand — we tailor it',
  'On-site gin bar by Harmony Distillery',
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export default function Weddings() {
  return (
    <section id="weddings" className="relative py-28 md:py-36 px-6 bg-cream overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-charcoal/10 to-transparent" />

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
        >
          <p className="font-body text-sage uppercase tracking-[6px] text-xs mb-4">
            Celebrations
          </p>
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl text-charcoal font-light leading-tight">
            Your most beautiful day,
            <br />
            <span className="italic text-charcoal/80">in the most beautiful valley</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6 mb-20">
            <span className="block w-16 h-px bg-charcoal/15" />
            <span className="block w-1.5 h-1.5 rounded-full bg-sage/40" />
            <span className="block w-16 h-px bg-charcoal/15" />
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col gap-6 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {features.map((feature, i) => (
            <motion.div key={feature} variants={itemVariants} className="group">
              <p className="font-body text-lg md:text-xl text-charcoal/70 tracking-wide">
                {feature}
              </p>
              <motion.div
                className="h-px bg-sage/25 mt-4 mx-auto"
                initial={{ width: 0 }}
                whileInView={{ width: '100px' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.a
          href="#contact"
          className="inline-block px-10 py-3.5 bg-forest text-cream font-body text-xs uppercase tracking-[4px] hover:bg-forest/90 transition-all duration-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease }}
        >
          Enquire About Your Date
        </motion.a>
      </div>
    </section>
  );
}
