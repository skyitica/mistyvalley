import { useRef, useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

function getIntroLogoWidthPx() {
  if (typeof window === 'undefined') return 380;
  const w = window.innerWidth;
  if (w >= 1024) return Math.min(0.44 * w, 380);
  if (w >= 768) return Math.min(0.52 * w, 420);
  return Math.min(0.78 * w, 860);
}

export default function Hero({ transitionFromIntro, onTransitionComplete }) {
  const slotRef = useRef(null);
  const [targetRect, setTargetRect] = useState(null);
  const [initialLogoWidth] = useState(getIntroLogoWidthPx);
  const [overlayVisible, setOverlayVisible] = useState(!!transitionFromIntro);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!transitionFromIntro || !slotRef.current) return;
    const measure = () => {
      if (slotRef.current) {
        const r = slotRef.current.getBoundingClientRect();
        setTargetRect({ x: r.left, y: r.top, width: r.width, height: r.height });
      }
    };
    const t = requestAnimationFrame(measure);
    const onResize = () => measure();
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(t);
      window.removeEventListener('resize', onResize);
    };
  }, [transitionFromIntro]);

  // When skipping transition (e.g. reduced motion), signal complete immediately
  useEffect(() => {
    if (transitionFromIntro && reduceMotion) {
      const id = setTimeout(() => onTransitionComplete?.(), 100);
      return () => clearTimeout(id);
    }
  }, [transitionFromIntro, reduceMotion, onTransitionComplete]);

  const skipTransition = reduceMotion || !transitionFromIntro;

  return (
    <section className="relative h-screen overflow-hidden flex flex-col" id="hero">
      <div className="absolute inset-0 bg-gradient-to-b from-forest via-[#162e24] to-charcoal" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-forest/30" />

      {/* Logo slot (final position in hero) */}
      <div
        ref={slotRef}
        className="relative z-10 flex justify-center pt-12 md:pt-16 lg:pt-20 shrink-0"
        style={{ minHeight: '120px' }}
      >
        <motion.img
          src="/logo-misty-valley.png"
          alt="Misty Valley Farm"
          className="h-auto object-contain object-center"
          style={{
            width: 'clamp(180px, 38vw, 280px)',
            maxHeight: '120px',
          }}
          initial={
            skipTransition
              ? false
              : transitionFromIntro && { opacity: 0 }
          }
          animate={{
            opacity: overlayVisible && transitionFromIntro && !skipTransition ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 text-center -mt-8">
        <motion.h1
          className="font-heading text-5xl md:text-7xl lg:text-8xl text-cream font-light leading-[1.1] max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: skipTransition ? 0.4 : 1.2,
            delay: skipTransition ? 0 : 0.5,
            ease,
          }}
        >
          Where the mountains meet the table.
        </motion.h1>

        <motion.p
          className="font-body text-lg md:text-xl text-cream/70 mt-6 max-w-xl tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: skipTransition ? 0.3 : 1,
            delay: skipTransition ? 0.1 : 0.8,
            ease,
          }}
        >
          A farm escape in the heart of the Garden Route.
        </motion.p>

        <motion.div
          className="flex gap-4 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: skipTransition ? 0.3 : 1,
            delay: skipTransition ? 0.2 : 1,
            ease,
          }}
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
      </div>

      {/* Fixed overlay logo: starts at intro position, animates to slot */}
      {transitionFromIntro && !skipTransition && (
        <motion.div
          className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center"
          initial={false}
        >
          <motion.img
            src="/logo-misty-valley.png"
            alt=""
            className="object-contain absolute"
            initial={
              skipTransition
                ? false
                : {
                    x: '-50%',
                    y: '-50%',
                    left: '50%',
                    top: '50%',
                    width: initialLogoWidth,
                  }
            }
            animate={
              skipTransition
                ? { opacity: 0 }
                : targetRect
                  ? {
                      left: targetRect.x + targetRect.width / 2,
                      top: targetRect.y + targetRect.height / 2,
                      x: '-50%',
                      y: '-50%',
                      width: targetRect.width,
                      opacity: 1,
                    }
                  : {}
            }
            transition={{
              duration: reduceMotion ? 0.2 : 1.1,
              ease,
            }}
            onAnimationComplete={() => {
              if (targetRect) {
                setOverlayVisible(false);
                onTransitionComplete?.();
              }
            }}
          />
        </motion.div>
      )}
    </section>
  );
}
