import React from 'react';
import { Section, FadeIn } from './UI';

export const BioSection: React.FC = () => {
  return (
    <Section className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image Column */}
        <FadeIn className="order-1 md:order-1">
          <div className="relative">
            <div className="absolute top-4 -left-4 w-full h-full border-2 border-teal-900/20 rounded-sm z-0"></div>
            <img
              src="https://i.imgur.com/UVvAr0U.jpeg"
              alt="Fernanda Achoni"
              className="relative z-10 w-full h-auto rounded-sm shadow-xl hover:scale-[1.02] transition-all duration-700"
            />
          </div>
        </FadeIn>

        {/* Text Column */}
        <FadeIn delay={200} className="order-2 md:order-2">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-800 mb-6">
            Olá, eu sou a <span className="italic text-teal-800">Fernanda Achoni.</span>
          </h2>
          <div className="space-y-5 text-stone-600 text-lg leading-relaxed font-light">
            <p>
              Antes de ser psicanalista, eu fui a "filha perfeita". Fui a amiga que resolvia tudo. Fui a mulher que sorria para fora enquanto desmoronava por dentro.
            </p>
            <p>
              Eu sei exatamente como é o lugar onde você está agora. Eu conheço a dor de <span className="font-medium text-stone-800 underline decoration-teal-900/20 underline-offset-4">não ter identidade</span> e de viver para corresponder expectativas. Foi preciso <span className="font-semibold text-teal-900 italic">muita coragem</span> (e muita análise) para entender que eu não precisava anular quem eu era para ser amada.
            </p>
            <p className="font-medium text-stone-800">
              Hoje, dedico minha vida a ser a <span className="bg-teal-900/5 px-1 rounded-sm">profissional que eu gostaria de ter encontrado</span> lá trás.
            </p>
            <p>
              Minha abordagem une a profundidade da Psicanálise Clássica e Relacional com uma <span className="font-semibold text-stone-800 italic">escuta extremamente humana</span>. Não estou aqui para te julgar, estou aqui para <span className="text-teal-900 font-bold">segurar a lanterna</span> enquanto você caminha de volta para casa.
            </p>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
};