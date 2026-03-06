import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

export default function IntroReveal({ onComplete }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(false), 4000);
    const t2 = setTimeout(() => onComplete?.(), 4800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 bg-black"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease }}
        >
          <iframe
            src="/intro.html"
            title="Misty Valley Farm Logo Reveal"
            className="w-full h-full border-none"
            style={{ display: 'block' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
