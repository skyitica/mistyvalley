import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ExperienceCards from './components/ExperienceCards';
import DeliRestaurant from './components/DeliRestaurant';
import LocationAtmosphere from './components/LocationAtmosphere';
import GinDistillery from './components/GinDistillery';
import Weddings from './components/Weddings';
import TradingHoursContact from './components/TradingHoursContact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <ExperienceCards />
      <DeliRestaurant />
      <LocationAtmosphere />
      <GinDistillery />
      <Weddings />
      <TradingHoursContact />
      <Footer />
    </>
  );
}
