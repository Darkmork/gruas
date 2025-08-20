import React from 'react';
import { SuccessCase } from '../types';

const casesData: SuccessCase[] = [
    {
        title: "Montaje de Generador en Faena",
        image: "https://picsum.photos/seed/case1/800/600",
        metrics: [
            { value: "25 t", label: "Peso" },
            { value: "18 m", label: "Radio" },
            { value: "2 hrs", label: "Tiempo" },
            { value: "0", label: "Incidentes" },
        ]
    },
    {
        title: "Izaje de Correa Transportadora",
        image: "https://picsum.photos/seed/case2/800/600",
        metrics: [
            { value: "15 t", label: "Componente" },
            { value: "35 m", label: "Altura" },
            { value: "4 hrs", label: "Maniobra" },
            { value: "0", label: "Incidentes" },
        ]
    },
];

const SuccessCases: React.FC = () => {
    return (
        <section className="py-20 sm:py-24 bg-brand-steel/30" id="casos">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="font-display text-3xl font-bold tracking-tight text-brand-white sm:text-4xl">Casos de Éxito</h2>
                    <p className="mt-4 text-lg leading-8 text-brand-slate">Proyectos completados con precisión, seguridad y eficiencia.</p>
                </div>
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {casesData.map((c) => (
                        <div key={c.title} className="group rounded-xl overflow-hidden border border-white/5 bg-brand-steel/60 backdrop-blur-sm transition-all duration-300 hover:shadow-lift">
                           <img src={c.image} alt={c.title} className="w-full h-64 object-cover" />
                           <div className="p-6">
                                <h3 className="font-display text-xl font-semibold text-brand-white">{c.title}</h3>
                                <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/10 pt-4">
                                    {c.metrics.map(metric => (
                                        <div key={metric.label} className="text-center md:text-left">
                                            <p className="font-display text-2xl font-bold text-brand-safety tabular-nums">{metric.value}</p>
                                            <p className="text-xs text-brand-slate uppercase tracking-wider">{metric.label}</p>
                                        </div>
                                    ))}
                                </div>
                           </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SuccessCases;
