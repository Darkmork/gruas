import React from 'react';
import { CheckCircleIcon, HelmetIcon, CertificateIcon, RulerIcon } from './icons';

const safetyPoints = [
  { icon: <HelmetIcon className="h-8 w-8 text-brand-safety" />, title: 'Operadores Certificados', description: 'Personal calificado y en constante capacitación bajo estándares SEC y mineros.' },
  { icon: <CertificateIcon className="h-8 w-8 text-brand-safety" />, title: 'Equipos Certificados', description: 'Inspecciones diarias y certificaciones vigentes para toda nuestra flota.' },
  { icon: <CheckCircleIcon className="h-8 w-8 text-brand-safety" />, title: 'Plan de Izaje (Rigging Plan)', description: 'Análisis de riesgo y planificación detallada para cada maniobra, sin excepción.' },
  { icon: <RulerIcon className="h-8 w-8 text-brand-safety" />, title: 'Cumplimiento HSE', description: 'Adhesión estricta a las políticas de Higiene, Seguridad y Medio Ambiente.' },
];

const Safety: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-brand-steel/30" id="seguridad">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-white sm:text-4xl">Seguridad y Certificaciones: Nuestra Prioridad</h2>
            <p className="mt-4 text-lg leading-8 text-brand-slate">
              Operamos con estándar minero donde la seguridad no es negociable. Cada proyecto se ejecuta bajo estrictos protocolos para garantizar cero incidentes.
            </p>
            <div className="mt-10 space-y-8">
                {safetyPoints.map((point) => (
                    <div key={point.title} className="flex gap-4">
                        <div>{point.icon}</div>
                        <div>
                            <h3 className="font-semibold text-brand-white">{point.title}</h3>
                            <p className="text-brand-slate mt-1">{point.description}</p>
                        </div>
                    </div>
                ))}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src="https://picsum.photos/seed/safety-first/500/600" alt="Operador de grúa realizando inspección de seguridad" className="rounded-xl shadow-lift object-cover aspect-[5/6]"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Safety;
