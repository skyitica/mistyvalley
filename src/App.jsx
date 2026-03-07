import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IntroReveal from './components/IntroReveal';
import Hero from './components/Hero';
import ExperienceCards from './components/ExperienceCards';
import LocationAtmosphere from './components/LocationAtmosphere';
import GinDistillery from './components/GinDistillery';
import Weddings from './components/Weddings';
import TradingHoursContact from './components/TradingHoursContact';
import Footer from './components/Footer';

const ease = [0.22, 1, 0.36, 1];

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);
  const [logoTransitionDone, setLogoTransitionDone] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);

  const handleLogoTransitionComplete = useCallback(() => {
    setLogoTransitionDone(true);
  }, []);

  return (
    <>
      <IntroReveal onComplete={handleIntroComplete} />
      <AnimatePresence>
        {introComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease }}
          >
            <Hero
              transitionFromIntro={!logoTransitionDone}
              onTransitionComplete={handleLogoTransitionComplete}
            />
            <ExperienceCards />
            <LocationAtmosphere />
            <GinDistillery />
            <Weddings />
            <TradingHoursContact />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
