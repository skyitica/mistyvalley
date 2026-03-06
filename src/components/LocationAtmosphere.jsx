import { useEffect, useRef, useState } from 'react';
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

function Counter({ from = 0, to, duration = 2, suffix = '', prefix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(from);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    });
    const unsub = rounded.on('change', (v) => setDisplay(v));
    return () => {
      controls.stop();
      unsub();
    };
  }, [isInView, count, to, duration, rounded]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 2019, label: 'Established', prefix: 'Est. ', suffix: '' },
  { value: 6, label: 'Experiences', prefix: '', suffix: '' },
  { value: 7, label: 'Days a Week', prefix: '', suffix: '' },
];

export default function LocationAtmosphere() {
  return (
    <section className="relative py-24 md:py-32 px-6 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, #1e3a2f, #1a1a1a, #1e3a2f, #1a1a1a)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 12s ease infinite',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream font-light leading-tight">
            Nestled beyond Hartenbos, in the valley where the Outeniqua
            Mountains begin.
          </h2>
        </motion.div>

        <motion.div
          className="flex flex-col gap-10"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="border-l-2 border-gold/40 pl-6">
              <div className="font-heading text-5xl md:text-6xl text-gold font-light">
                <Counter
                  from={stat.value > 100 ? stat.value - 20 : 0}
                  to={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>
              <p className="font-body text-cream/60 mt-1 uppercase tracking-[3px] text-sm">
                {stat.label}
              </p>
            </div>
          ))}
          <p className="font-body text-cream/40 text-sm italic pl-6">
            Closed Mondays
          </p>
        </motion.div>
      </div>
    </section>
  );
}
