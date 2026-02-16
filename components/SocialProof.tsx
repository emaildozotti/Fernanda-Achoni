import React, { useState } from 'react';
import { Section, FadeIn } from './UI';
import { TestimonialItem, FaqItem } from '../types';

// --- TESTIMONIALS ---
export const Testimonials: React.FC = () => {
  const reviews: TestimonialItem[] = [
    {
      quote: "Eu achava que terapia era para gente fraca. Com a Fernanda, descobri que precisa de muita coragem para tirar as máscaras. Hoje respiro aliviada.",
      author: "M.S., 34 anos"
    },
    {
      quote: "Pela primeira vez na vida, senti que alguém me ouviu de verdade, sem me julgar ou me dar conselhos prontos. O consultório dela é meu refúgio.",
      author: "A.L., 29 anos"
    },
    {
      quote: "Cheguei com crises de ansiedade diárias. Entendi que meu corpo estava gritando o que eu calava. O processo é doído, mas libertador.",
      author: "J.C., 41 anos"
    }
  ];

  return (
    <Section className="bg-stone-50">
      <FadeIn>
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl text-stone-800">
            Histórias de quem se permitiu <span className="italic text-teal-800">olhar para dentro</span>
          </h2>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, idx) => (
          <FadeIn key={idx} delay={idx * 100}>
            <div className="bg-white p-8 rounded-sm shadow-sm border-t-4 border-teal-900 h-full flex flex-col justify-between">
              <p className="text-stone-600 italic mb-6 leading-relaxed">"{review.quote}"</p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-px bg-stone-300"></div>
                <span className="text-sm font-bold text-stone-800">{review.author}</span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};

// --- FAQ ---
export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const questions: FaqItem[] = [
    {
      question: "O atendimento online funciona mesmo?",
      answer: "Sim. A psicanálise acontece através da fala e da escuta. Estando em um local com privacidade e boa internet, a eficácia e a conexão são as mesmas do presencial."
    },
    {
      question: "Eu tenho medo de ser julgada pelo que sinto.",
      answer: "O pilar central do meu trabalho é a ética e o não-julgamento. O consultório é o lugar onde \"o feio\", \"o errado\" e \"o vergonhoso\" podem ser ditos e acolhidos com humanidade."
    },
    {
      question: "Aceita convênios?",
      answer: "Trabalho apenas com atendimentos particulares para garantir a liberdade de tempo e a profundidade que o convênio muitas vezes limita. Porém, forneço recibo para reembolso se seu plano permitir."
    },
    {
      question: "Quanto tempo dura o tratamento?",
      answer: "Não vendemos \"pacotes de cura\" com data para acabar. Respeitamos o seu tempo psíquico. A análise dura o tempo que fizer sentido para a sua busca."
    }
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <Section className="bg-stone-100">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="font-serif text-3xl text-stone-800 text-center mb-12">
            Dúvidas <span className="italic text-teal-800">Frequentes</span>
          </h2>
        </FadeIn>

        <div className="space-y-4">
          {questions.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 50}>
              <div className="bg-white rounded-sm overflow-hidden border border-stone-200">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className={`font-serif text-lg ${openIndex === idx ? 'text-teal-900' : 'text-stone-800'}`}>
                    {item.question}
                  </span>
                  <span className={`transform transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 pb-6 text-stone-600 leading-relaxed border-t border-stone-100 pt-4">
                    {item.answer}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
};