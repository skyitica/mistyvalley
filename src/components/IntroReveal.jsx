import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

const mountainPaths = [
  'M0 160 Q60 90 120 130 Q180 60 240 110 Q300 40 360 100 Q420 55 480 90 Q540 50 600 110 Q660 70 720 120 Q780 55 800 100',
  'M0 180 Q80 120 160 155 Q240 90 320 140 Q400 80 480 130 Q560 95 640 145 Q720 85 800 130',
];

const fynbosPaths = [
  'M390 200 C390 185 385 155 382 125',
  'M400 200 C400 180 400 145 400 110',
  'M410 200 C410 185 415 155 418 125',
  'M380 200 C375 190 365 170 355 150',
  'M420 200 C425 190 435 170 445 150',
];

export default function IntroReveal({ onComplete }) {
  const [showLogo, setShowLogo] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t1 = setTimeout(() => setShowLogo(true), 2200);
    const t2 = setTimeout(() => setVisible(false), 4200);
    const t3 = setTimeout(() => onComplete?.(), 5000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease }}
        >
          <div className="relative w-[min(85vw,600px)] aspect-[8/3]">
            {/* SVG stroke animation — mountain lines + fynbos + text */}
            <svg
              viewBox="0 0 800 300"
              className="absolute inset-0 w-full h-full"
              fill="none"
            >
              {mountainPaths.map((d, i) => (
                <motion.path
                  key={`m-${i}`}
                  d={d}
                  stroke="rgba(122,140,99,0.6)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2.2, delay: i * 0.15, ease }}
                />
              ))}
              {fynbosPaths.map((d, i) => (
                <motion.path
                  key={`f-${i}`}
                  d={d}
                  stroke="rgba(122,140,99,0.4)"
                  strokeWidth="1"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.8, delay: 0.3 + i * 0.1, ease }}
                />
              ))}
              <motion.line
                x1="200"
                y1="230"
                x2="600"
                y2="230"
                stroke="rgba(201,168,76,0.4)"
                strokeWidth="0.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1, ease }}
              />
              <motion.text
                x="400"
                y="262"
                textAnchor="middle"
                fill="rgba(245,240,232,0.9)"
                fontSize="24"
                fontFamily="'Cormorant Garamond', serif"
                letterSpacing="12"
                fontWeight="300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.2, ease }}
              >
                MISTY VALLEY FARM
              </motion.text>
            </svg>

            {/* Colored logo PNG fades in on top */}
            <motion.img
              src="/logo.png"
              alt="Misty Valley Farm"
              className="absolute inset-0 w-full h-full object-contain"
              initial={{ opacity: 0 }}
              animate={{ opacity: showLogo ? 1 : 0 }}
              transition={{ duration: 0.9, ease }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
