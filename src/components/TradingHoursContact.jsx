import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

const hours = [
  { day: 'Monday', time: 'Closed' },
  { day: 'Tuesday', time: '8am – 5pm' },
  { day: 'Wednesday', time: '8am – 8pm' },
  { day: 'Thursday', time: '8am – 5pm' },
  { day: 'Friday', time: '8am – 9pm' },
  { day: 'Saturday', time: '8am – 9pm' },
  { day: 'Sunday', time: '8am – 5pm' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const rowVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease } },
};

export default function TradingHoursContact() {
  return (
    <section id="contact" className="relative py-28 md:py-36 px-6 bg-charcoal overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(30,58,47,0.3)_0%,_transparent_60%)]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
        >
          <p className="font-body text-cream/30 uppercase tracking-[6px] text-xs mb-4">
            Plan Your Visit
          </p>
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl text-cream font-light">
            Come Find Us
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="block w-16 h-px bg-cream/10" />
            <span className="block w-1.5 h-1.5 rounded-full bg-gold/40" />
            <span className="block w-16 h-px bg-cream/10" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Trading Hours */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h3
              className="font-heading text-2xl md:text-3xl text-cream/80 font-light mb-8"
              variants={rowVariants}
            >
              Trading Hours
            </motion.h3>
            <div>
              {hours.map((h) => (
                <motion.div
                  key={h.day}
                  className="flex justify-between items-center py-3.5 border-b border-cream/[0.06] last:border-b-0"
                  variants={rowVariants}
                >
                  <span className="font-body text-cream/60 text-sm tracking-wide">
                    {h.day}
                  </span>
                  <span
                    className={`font-body text-sm tracking-wide ${
                      h.time === 'Closed'
                        ? 'text-cream/25 italic'
                        : 'text-gold/80'
                    }`}
                  >
                    {h.time}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15, ease }}
          >
            <h3 className="font-heading text-2xl md:text-3xl text-cream/80 font-light mb-8">
              Get in Touch
            </h3>
            <div className="space-y-8 font-body">
              <div>
                <p className="text-cream/25 uppercase tracking-[4px] text-[10px] mb-2">
                  Phone
                </p>
                <p className="text-cream/70">
                  <a href="tel:0664704518" className="hover:text-gold transition-colors duration-300">
                    066 470 4518
                  </a>
                  <span className="text-cream/20 mx-2">/</span>
                  <a href="tel:0673825504" className="hover:text-gold transition-colors duration-300">
                    067 382 5504
                  </a>
                </p>
              </div>

              <div>
                <p className="text-cream/25 uppercase tracking-[4px] text-[10px] mb-2">
                  Email
                </p>
                <a
                  href="mailto:info@mistyvalleyfarm.co.za"
                  className="text-cream/70 hover:text-gold transition-colors duration-300"
                >
                  info@mistyvalleyfarm.co.za
                </a>
              </div>

              <div>
                <p className="text-cream/25 uppercase tracking-[4px] text-[10px] mb-2">
                  Location
                </p>
                <p className="text-cream/50 leading-relaxed">
                  R328, Farm 151, Outeniquabosch
                  <br />
                  Hartenbos, Mosselbaai, 6520
                </p>
              </div>

              <div className="flex gap-5 pt-2">
                <a
                  href="https://www.facebook.com/mistyvalleyfarm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/30 hover:text-gold transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/mistyvalleyfarm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/30 hover:text-gold transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
