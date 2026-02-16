import React from 'react';
import { Button } from './UI';

export const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-stone-900 text-stone-300 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-50 mb-8">
          Você não precisa carregar esse peso sozinha para sempre.
        </h2>

        <div className="mb-16">
          <a
            href={`https://wa.me/5519984609457?text=${encodeURIComponent("Olá Fernanda, vim pelo seu site e gostaria de saber mais sobre seu atendimento.")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary" className="text-base px-10 py-5 bg-teal-800 hover:bg-teal-700 text-white border-none shadow-none transform hover:-translate-y-1 transition-all">
              QUERO AGENDAR MINHA CONVERSA
            </Button>
          </a>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-stone-500 gap-4">
          <div className="flex flex-col md:text-left">
            <span className="text-stone-300 font-serif text-lg mb-1">Fernanda Achoni</span>
            <span>Psicanalista | Terapeuta</span>
          </div>
          <div className="flex gap-6">
            <span className="hover:text-stone-300 cursor-pointer transition-colors">Política de Privacidade</span>
            <span className="hover:text-stone-300 cursor-pointer transition-colors">Termos de Uso</span>
          </div>
        </div>
      </div>
    </footer>
  );
};