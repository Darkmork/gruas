import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Capacities from './components/Capacities';
import Fleet from './components/Fleet';
import Safety from './components/Safety';
import Coverage from './components/Coverage';
import SuccessCases from './components/SuccessCases';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import QuoteFormSection from './components/QuoteFormSection';

const App: React.FC = () => {
  return (
    <div className="bg-brand-iron text-brand-white font-sans">
      <Header />
      <main>
        <Hero />
        <Services />
        <Capacities />
        <Fleet />
        <Safety />
        <Coverage />
        <SuccessCases />
        <Testimonials />
        <QuoteFormSection />
        <Faq />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
