import React from 'react';
import { MapPinIcon } from './icons';

const Coverage: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-brand-iron" id="zonas">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-white sm:text-4xl">Cobertura 24/7 en la Región de Antofagasta</h2>
            <p className="mt-4 text-lg leading-8 text-brand-slate">Respuesta rápida en faenas mineras, puertos y zonas industriales de la región.</p>
        </div>
        <div className="mt-16 relative">
            <img src="https://picsum.photos/seed/antofagasta-map/1200/600" alt="Mapa de cobertura en la región de Antofagasta" className="w-full h-auto object-cover rounded-xl opacity-20"/>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div className="flex flex-col items-center">
                        <MapPinIcon className="h-10 w-10 text-brand-safety"/>
                        <p className="mt-2 font-semibold text-brand-white">Antofagasta</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <MapPinIcon className="h-10 w-10 text-brand-safety"/>
                        <p className="mt-2 font-semibold text-brand-white">Mejillones</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <MapPinIcon className="h-10 w-10 text-brand-safety"/>
                        <p className="mt-2 font-semibold text-brand-white">Calama</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <MapPinIcon className="h-10 w-10 text-brand-safety"/>
                        <p className="mt-2 font-semibold text-brand-white">Faenas Mineras</p>
                    </div>
                </div>
                <div className="mt-12 text-center">
                    <p className="text-brand-slate">¿Tu proyecto está fuera de zona?</p>
                    <a href="#cotizar" className="font-semibold text-brand-safety hover:underline">Coordina logística con nosotros</a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
