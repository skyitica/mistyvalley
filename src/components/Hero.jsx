import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden" id="hero">
      {/* Layered gradients for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest via-[#162e24] to-charcoal" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />

      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '128px 128px',
        }}
      />

      {/* Decorative horizontal lines */}
      <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cream/5 to-transparent" />
      <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cream/5 to-transparent" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        {/* Logo */}
        <motion.img
          src="/logo-misty-valley.png"
          alt="Misty Valley Farm"
          className="h-auto object-contain mb-10 md:mb-12"
          style={{ width: 'clamp(200px, 44vw, 380px)' }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease }}
        />

        {/* Ornamental divider */}
        <motion.div
          className="flex items-center gap-4 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease }}
        >
          <span className="block w-12 h-px bg-gold/40" />
          <span className="block w-1.5 h-1.5 rounded-full bg-gold/50" />
          <span className="block w-12 h-px bg-gold/40" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-heading text-[2.75rem] md:text-7xl lg:text-8xl text-cream font-light leading-[1.08] max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease }}
        >
          Where the mountains
          <br className="hidden md:block" />
          <span className="italic text-cream/90"> meet the table</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="font-body text-base md:text-lg text-cream/50 mt-7 max-w-md tracking-wide leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease }}
        >
          Farm · Deli · Distillery
          <br />
          Garden Route, South Africa
        </motion.p>

        {/* CTA */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease }}
        >
          <a
            href="#experiences"
            className="group relative px-10 py-3.5 border border-cream/20 text-cream font-body text-xs uppercase tracking-[4px] hover:border-cream/40 transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10">Explore</span>
            <span className="absolute inset-0 bg-cream/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </a>
          <a
            href="#contact"
            className="group relative px-10 py-3.5 bg-gold/90 text-charcoal font-body text-xs uppercase tracking-[4px] hover:bg-gold transition-all duration-500"
          >
            Book a Visit
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-cream/30 to-transparent mx-auto"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
