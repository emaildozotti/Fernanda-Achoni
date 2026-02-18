import React from 'react';
import { Section, FadeIn, Button } from './UI';
import { PainPoint, MethodologyStep } from '../types';

// Icons
const BatteryIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="10" x="2" y="7" rx="2" ry="2" /><line x1="22" x2="22" y1="11" y2="13" /><line x1="6" x2="6" y1="11" y2="13" /><line x1="10" x2="10" y1="11" y2="13" /><line x1="14" x2="14" y1="11" y2="13" /></svg>
);
const HeartPulseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
);
const UserMaskIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 21a8 8 0 0 0-16 0" /><circle cx="10" cy="8" r="5" /><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-4.5-6" /></svg>
);
const VoidIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /></svg>
);
const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white opacity-90"><polygon points="5 3 19 12 5 21 5 3" /></svg>
);


// --- PAIN POINTS ---
export const PainPoints: React.FC = () => {
  const points: PainPoint[] = [
    {
      title: 'A Exaustão da "Mulher Forte"',
      description: <>Você sente um cansaço que o sono não resolve. É o <span className="text-teal-900 font-medium">peso de carregar responsabilidades</span> que, muitas vezes, nem deveriam ser suas.</>,
      icon: <BatteryIcon />
    },
    {
      title: 'O Corpo que Grita',
      description: <>Ansiedade, gastrite, enxaqueca, aperto no peito... Seu corpo está <span className="text-teal-900 font-medium italic">somatizando as emoções</span> que você aprendeu a engolir para "manter a paz".</>,
      icon: <HeartPulseIcon />
    },
    {
      title: 'A Camaleoa Social',
      description: <>Você se <span className="font-medium text-stone-800">molda tanto para agradar</span> e evitar conflitos que, hoje, já não sabe mais onde termina a expectativa do outro e onde começa a sua vontade real.</>,
      icon: <UserMaskIcon />
    },
    {
      title: 'O Vazio Silencioso',
      description: <>A sensação constante de que <span className="font-semibold text-teal-900">falta algo</span>, mesmo quando tudo parece estar "certo" do lado de fora.</>,
      icon: <VoidIcon />
    }
  ];

  return (
    <Section className="bg-stone-50">
      <FadeIn>
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-800 mb-6">
            Quem cuida de <span className="italic text-teal-800">você</span> enquanto você <span className="italic text-teal-800">cuida de todo mundo?</span>
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed">
            Você construiu uma vida admirável. É a profissional competente, a amiga que sempre tem um conselho, o pilar da família. Mas quando a porta do quarto se fecha e o silêncio chega, a sensação é outra.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {points.map((point, idx) => (
          <FadeIn key={idx} delay={idx * 100}>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-stone-100 hover:shadow-md transition-shadow h-full flex flex-col items-start">
              <div className="mb-6 p-3 bg-stone-100 rounded-full text-teal-900">
                {point.icon}
              </div>
              <h3 className="font-serif text-xl text-stone-800 mb-4">{point.title}</h3>
              <div className="text-stone-600 text-sm leading-relaxed">{point.description}</div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};

// --- VIDEO SECTION ---
export const VideoSection: React.FC = () => {
  return (
    <Section className="bg-stone-100">
      <FadeIn>
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl md:text-3xl text-stone-800">
            Assista ao vídeo de apresentação
          </h2>
        </div>
        <div className="max-w-[500px] mx-auto shadow-2xl rounded-2xl overflow-hidden bg-stone-200">
          <div className="relative pt-[125%] w-full">
            <iframe
              id="js_video_iframe"
              src="https://www.youtube.com/embed/awoL2jAMvvU"
              frameBorder="0"
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              title="Vídeo de Apresentação"
            ></iframe>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
};

// --- SOLUTION (THE TURN) ---
export const Solution: React.FC = () => {
  return (
    <Section className="bg-stone-50">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <h2 className="font-serif text-3xl md:text-4xl text-stone-800 mb-8">
            Não é sobre "consertar" você. É sobre <span className="italic text-teal-800">reencontrar você.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={150}>
          <div className="space-y-6 text-lg text-stone-600 leading-relaxed text-left md:text-center">
            <p>
              Passamos a vida construindo armaduras para nos proteger. Elas funcionaram por um tempo, mas agora estão <span className="text-stone-800 font-medium">pesadas demais.</span>
            </p>
            <p>
              No meu consultório, o objetivo não é te dar fórmulas mágicas ou frases motivacionais vazias. O meu trabalho é sustentar um <span className="font-semibold text-stone-800">espaço ético e seguro</span> onde você tem permissão para desabar, para sentir raiva, para chorar ou para ficar em silêncio.
            </p>
            <p>
              Aqui, tiramos as camadas de "quem você deveria ser" para <span className="text-teal-900 font-bold italic underline decoration-teal-900/20 underline-offset-4">descobrir quem você realmente é.</span>
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="mt-16 relative">
            <div className="absolute left-1/2 -top-6 -translate-x-1/2 text-6xl text-stone-200 font-serif opacity-50">"</div>
            <p className="font-serif text-2xl md:text-3xl text-teal-900 italic relative z-10 px-4">
              A cura começa quando você para de abandonar a si mesma.
            </p>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
};

// --- METHODOLOGY ---
export const Methodology: React.FC = () => {
  const steps: MethodologyStep[] = [
    {
      title: "1. Aplicação Recebida",
      description: <>Sua aplicação foi processada. Analisei seu perfil e identifiquei que este é o <span className='text-teal-900 font-medium'>momento ideal</span> para iniciarmos seu acompanhamento.</>
    },
    {
      title: "2. Agendamento da Sessão",
      description: <>Seu próximo passo é clicar no botão abaixo para agendar nossa <span className='text-teal-900 font-medium'>Sessão de Clareza</span> e validar sua vaga no meu consultório.</>
    },
    {
      title: "3. O Processo Terapêutico",
      description: <>Sessões semanais ou quinzenais, no seu tempo psíquico. Um <span className='text-teal-900 font-medium underline decoration-teal-900/20'>compromisso inegociável</span> com a sua nova fase.</>
    }
  ];

  return (
    <Section className="bg-stone-100">
      <FadeIn>
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-800">
            Qual o <span className="italic text-teal-800">próximo passo</span> da sua jornada?
          </h2>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {steps.map((step, idx) => (
          <FadeIn key={idx} delay={idx * 150}>
            <div className="relative pl-8 md:pl-0 md:pt-8 group">
              {/* Timeline Line (Desktop) */}
              <div className="hidden md:block absolute top-0 left-0 w-full h-0.5 bg-stone-300"></div>
              {/* Timeline Dot (Desktop) */}
              <div className={`hidden md:block absolute top-0 left-0 -translate-y-1/2 w-4 h-4 rounded-full border-4 border-stone-100 ${idx === 0 ? 'bg-teal-700' : 'bg-teal-900'}`}>
                {idx === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                )}
              </div>

              {/* Timeline Line (Mobile) */}
              <div className="md:hidden absolute top-0 left-2 w-0.5 h-full bg-stone-300"></div>
              {/* Timeline Dot (Mobile) */}
              <div className={`md:hidden absolute top-0 left-2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-stone-100 ${idx === 0 ? 'bg-teal-700' : 'bg-teal-900'}`}>
                {idx === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                )}
              </div>

              <h3 className={`font-serif text-xl mb-3 ${idx === 0 ? 'text-stone-400' : 'text-stone-800'}`}>
                {step.title}
                {idx === 0 && <span className="ml-2 text-xs font-sans uppercase tracking-tighter text-teal-700 bg-teal-50 px-2 py-0.5 rounded">Concluído</span>}
              </h3>
              <div className={`text-sm leading-relaxed ${idx === 0 ? 'text-stone-400' : 'text-stone-600'}`}>{step.description}</div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={400}>
        <div className="text-center mt-12">
          <a
            href={`https://wa.me/5519984609457?text=${encodeURIComponent("Olá Fernanda, vim pelo seu site e gostaria de saber mais sobre seu atendimento.")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary" className="shadow-sm hover:shadow-md transition-all">
              VERIFICAR DISPONIBILIDADE NA AGENDA
            </Button>
          </a>
        </div>
      </FadeIn>
    </Section>
  );
};