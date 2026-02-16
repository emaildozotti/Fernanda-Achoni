import React from 'react';
import { Button, FadeIn } from './UI';

export const HeroSection: React.FC = () => {
  const whatsappNumber = "5519984609457";
  const whatsappMessage = encodeURIComponent("Olá Fernanda, vim pelo seu site e gostaria de saber mais sobre seu atendimento.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative min-h-screen flex items-center px-6 pt-28 pb-16 bg-stone-100 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-stone-200/50 -skew-x-12 transform translate-x-1/4 z-0 hidden lg:block"></div>

      <div className="max-w-7xl mx-auto z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text Column */}
          <div className="text-left">
            <FadeIn>
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase text-teal-800 bg-teal-800/10 rounded-full">
                Psicanálise & Acolhimento
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-stone-800 leading-[1.1] mb-8">
                Um espaço seguro para você, finalmente, <span className="italic text-teal-800">se reconhecer.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="text-lg md:text-xl text-stone-600 mb-12 leading-relaxed max-w-xl font-light">
                Tire as <span className="font-semibold text-stone-800">máscaras</span> que você usa para agradar o mundo e reencontre a <span className="font-semibold text-stone-800 italic">leveza de ser quem você realmente é</span>. Psicanálise e acolhimento para mulheres que <span className="text-teal-900 font-medium">cansaram de ser fortes</span> o tempo todo.
              </p>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="flex flex-col items-start gap-6">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button variant="primary" className="text-base shadow-xl hover:shadow-2xl hover:-translate-y-1 transform transition-all px-10 py-5">
                    AGENDAR MINHA CONVERSA INICIAL
                  </Button>
                </a>
                <div className="flex flex-col gap-2">
                  <span className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-800"></span>
                    Atendimento Online para todo o mundo
                  </span>
                  <span className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-800"></span>
                    Sigilo Absoluto & Espaço Livre de Julgamentos
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Image Column */}
          <FadeIn delay={600} direction="none" className="relative group">
            <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl border-b-8 border-teal-900/10">
              <img
                src="https://i.imgur.com/07BapvJ.jpeg"
                alt="Fernanda Achoni - Psicanalista"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-teal-900/5 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-0"></div>
            </div>

            {/* Decorative frames behind image */}
            <div className="absolute -top-6 -right-6 w-full h-full border border-stone-300 rounded-2xl z-0 transform translate-x-2 translate-y-2"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-900/5 rounded-full blur-3xl z-0"></div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};