import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden" id="hero">
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div className="absolute inset-0 bg-gradient-to-b from-forest via-[#162e24] to-charcoal" />
        {/* Animated grain texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '128px 128px',
            animation: 'grain 8s steps(10) infinite',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-forest/30" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center"
        style={{ opacity: contentOpacity }}
      >
        <motion.h1
          className="font-heading text-5xl md:text-7xl lg:text-8xl text-cream font-light leading-[1.1] max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease }}
        >
          Where the mountains meet the table.
        </motion.h1>

        <motion.p
          className="font-body text-lg md:text-xl text-cream/70 mt-6 max-w-xl tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease }}
        >
          A farm escape in the heart of the Garden Route.
        </motion.p>

        <motion.div
          className="flex gap-4 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease }}
        >
          <a
            href="#experiences"
            className="px-8 py-3 border border-cream/30 text-cream font-body text-sm uppercase tracking-[3px] hover:bg-cream/10 transition-all duration-300"
          >
            Explore
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-gold/90 text-charcoal font-body text-sm uppercase tracking-[3px] hover:bg-gold transition-all duration-300"
          >
            Book a Visit
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
