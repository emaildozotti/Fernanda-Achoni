import React, { useState, useEffect } from 'react';
import { Button } from './UI';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden md:block ${isScrolled ? 'bg-stone-50/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="font-serif text-xl md:text-2xl tracking-wide text-stone-800 font-semibold">
          Fernanda Achoni
        </div>
        <div>
          <a href="#contato">
            <Button variant="primary" className="!px-6 !py-2 text-xs">
              Agendar Conversa
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};