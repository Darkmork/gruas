import React from 'react';
import QuoteForm from './QuoteForm';
import { CheckCircleIcon } from './icons';

const QuoteFormSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-brand-steel/30" id="cotizar">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-white sm:text-4xl">¿Listo para Iniciar su Proyecto?</h2>
            <p className="mt-4 text-lg leading-8 text-brand-slate">
              Complete el formulario y nuestro equipo de expertos se pondrá en contacto en menos de 30 minutos para coordinar todos los detalles de su requerimiento de izaje.
            </p>
            <ul className="mt-8 space-y-4 text-brand-slate">
                <li className="flex gap-3">
                    <CheckCircleIcon className="h-6 w-6 text-brand-safety flex-shrink-0" />
                    <span><strong>Atención 24/7:</strong> Estamos disponibles para emergencias y operaciones nocturnas.</span>
                </li>
                <li className="flex gap-3">
                    <CheckCircleIcon className="h-6 w-6 text-brand-safety flex-shrink-0" />
                    <span><strong>Visita Técnica:</strong> Si es necesario, evaluamos las condiciones en terreno sin costo.</span>
                </li>
            </ul>
          </div>
          <QuoteForm />
        </div>
      </div>
    </section>
  );
};

export default QuoteFormSection;
