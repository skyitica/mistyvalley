import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

function Counter({ from = 0, to, duration = 2, suffix = '', prefix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(from);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, to, { duration, ease: [0.22, 1, 0.36, 1] });
    const unsub = rounded.on('change', (v) => setDisplay(v));
    return () => { controls.stop(); unsub(); };
  }, [isInView, count, to, duration, rounded]);

  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}

const stats = [
  { value: 2019, label: 'Established', prefix: 'Est. ' },
  { value: 6, label: 'Experiences' },
  { value: 7, label: 'Days a Week' },
];

export default function LocationAtmosphere() {
  return (
    <section className="relative py-28 md:py-36 px-6 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #1e3a2f, #1a1a1a, #1e3a2f, #1a1a1a)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 12s ease infinite',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(122,140,99,0.08)_0%,_transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
        >
          <p className="font-body text-sage/60 uppercase tracking-[6px] text-xs mb-4">
            The Valley
          </p>
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl text-cream font-light max-w-4xl mx-auto leading-tight">
            Nestled beyond Hartenbos, where the Outeniqua Mountains begin
          </h2>
          <div className="flex items-center justify-center gap-3 mt-8">
            <span className="block w-16 h-px bg-cream/10" />
            <span className="block w-1.5 h-1.5 rounded-full bg-gold/40" />
            <span className="block w-16 h-px bg-cream/10" />
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center ${
                i > 0 ? 'md:border-l md:border-cream/10' : ''
              }`}
            >
              <div className="font-heading text-5xl md:text-6xl text-gold font-light">
                <Counter
                  from={stat.value > 100 ? stat.value - 20 : 0}
                  to={stat.value}
                  prefix={stat.prefix || ''}
                  suffix={stat.suffix || ''}
                />
              </div>
              <p className="font-body text-cream/40 mt-2 uppercase tracking-[4px] text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Location details */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4, ease }}
        >
          <p className="font-body text-cream/30 text-sm tracking-wider leading-loose">
            R328, Farm 151, Outeniquabosch · Hartenbos, Mosselbaai, 6520
            <br />
            <span className="text-cream/20 italic">Closed Mondays</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
