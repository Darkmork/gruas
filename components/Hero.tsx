import React from 'react';
import QuoteForm from './QuoteForm';
import { CheckCircleIcon } from './icons';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] bg-brand-iron flex items-center" id="inicio">
      <div className="absolute inset-0 h-full w-full">
        <img 
          src="https://picsum.photos/seed/craneops/1920/1080" 
          className="absolute inset-0 h-full w-full object-cover opacity-30" 
          alt="Izaje nocturno de alta capacidad en faena minera"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-iron via-brand-iron/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-iron via-brand-iron/40 to-transparent"></div>
      </div>
      
      <div className="relative mx-auto w-full max-w-7xl px-6 py-24 text-brand-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              Izajes de alto tonelaje con estándar minero
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-brand-slate">
              Grúas y equipos certificados, operadores calificados, cobertura Antofagasta 24/7.
              Servicios integrales de izaje con respuesta inmediata.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
              <div className="flex items-center gap-2 text-sm text-brand-slate">
                <CheckCircleIcon className="h-5 w-5 text-brand-safety" />
                <span>Respuesta &lt;30min</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-brand-slate">
                <CheckCircleIcon className="h-5 w-5 text-brand-safety" />
                <span>Plan de izaje incluido</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-brand-slate">
                <CheckCircleIcon className="h-5 w-5 text-brand-safety" />
                <span>Cumplimiento HSE</span>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in [animation-delay:200ms]">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
