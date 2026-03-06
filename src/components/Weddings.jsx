import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

const features = [
  'Outeniqua Mountain backdrop',
  'Full catering from the farm',
  'Intimate or grand — we tailor it',
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export default function Weddings() {
  return (
    <section className="py-24 md:py-32 px-6 bg-cream">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="font-heading text-4xl md:text-6xl lg:text-7xl text-charcoal font-light mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
        >
          Make your wedding dreams come true.
        </motion.h2>

        <motion.div
          className="flex flex-col gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {features.map((feature, i) => (
            <motion.div key={feature} className="group" variants={itemVariants}>
              <p className="font-body text-xl md:text-2xl text-charcoal/80 tracking-wide">
                {feature}
              </p>
              <motion.div
                className="h-px bg-sage/40 mt-3 mx-auto"
                initial={{ width: 0 }}
                whileInView={{ width: '120px' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.15, ease }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.a
          href="#contact"
          className="inline-block px-10 py-3 bg-forest text-cream font-body text-sm uppercase tracking-[3px] hover:bg-forest/90 transition-all duration-300"
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
