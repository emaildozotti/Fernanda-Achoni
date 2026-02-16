import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PainPoints, VideoSection, Solution, Methodology } from './components/ContentSections';
import { BioSection } from './components/BioSection';
import { Testimonials, FAQ } from './components/SocialProof';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        <HeroSection />
        <PainPoints />
        <VideoSection />
        <Solution />
        <BioSection />
        <Methodology />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;