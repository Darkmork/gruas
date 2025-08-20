import React, { useState } from 'react';
import { FaqItem } from '../types';
import { ChevronDownIcon } from './icons';

const faqData: FaqItem[] = [
  { question: '¿Qué datos necesito para cotizar un izaje?', answer: 'Para una cotización precisa, necesitamos el peso y dimensiones de la carga, el radio (distancia horizontal desde la grúa a la carga), la altura a la que se debe elevar, y la dirección o lugar de la maniobra.' },
  { question: '¿Cómo definimos la grúa adecuada para el trabajo?', answer: 'Nuestro equipo técnico analiza los datos de la carga, el radio, la altura y las condiciones del terreno para seleccionar la grúa que cumpla con las capacidades de forma segura y eficiente, siempre con un margen de seguridad.' },
  { question: '¿El servicio incluye el plan de izaje y señalizadores (rigger)?', answer: 'Sí, todos nuestros servicios de izaje incluyen un plan de izaje detallado (rigging plan) y un rigger certificado para dirigir la maniobra de forma segura en terreno.' },
  { question: '¿Ofrecen atención 24/7 para emergencias?', answer: 'Absolutamente. Operamos 24 horas al día, 7 días a la semana, para atender emergencias y requerimientos programados fuera de horario comercial en toda la región de Antofagasta.' },
];

const FaqItemComponent: React.FC<{ item: FaqItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 py-6">
      <dt>
        <button onClick={() => setIsOpen(!isOpen)} className="flex w-full items-start justify-between text-left text-brand-white">
          <span className="text-base font-semibold leading-7">{item.question}</span>
          <span className="ml-6 flex h-7 items-center">
            <ChevronDownIcon className={`h-6 w-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
          </span>
        </button>
      </dt>
      {isOpen && (
        <dd className="mt-4 pr-12">
          <p className="text-base leading-7 text-brand-slate animate-fade-in">{item.answer}</p>
        </dd>
      )}
    </div>
  );
}

const Faq: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-brand-iron" id="faq">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-brand-white sm:text-4xl">Preguntas Frecuentes</h2>
          <p className="mt-4 text-lg leading-8 text-brand-slate">Aclaramos sus dudas para que tome la mejor decisión.</p>
        </div>
        <div className="mx-auto mt-16 max-w-4xl">
          <dl className="space-y-3">
            {faqData.map((item) => (
              <FaqItemComponent key={item.question} item={item} />
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Faq;
