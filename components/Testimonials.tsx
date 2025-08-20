import React from 'react';
import { Testimonial } from '../types';

const testimonialsData: Testimonial[] = [
    {
        quote: "Respuesta inmediata y una ejecución impecable. D&R es nuestro socio estratégico para izajes críticos en Antofagasta.",
        author: "Jefe de Operaciones",
        company: "Minera Escondida",
        logo: "https://logo.clearbit.com/bhp.com"
    },
    {
        quote: "La seguridad y profesionalismo de su equipo es de primer nivel. Siempre cumplen con los plazos y superan las expectativas.",
        author: "Gerente de Proyectos",
        company: "Puerto de Antofagasta",
        logo: "https://logo.clearbit.com/maersk.com"
    },
    {
        quote: "Su capacidad de respuesta 24/7 nos ha salvado en más de una emergencia. Un servicio totalmente confiable.",
        author: "Supervisor de Mantenimiento",
        company: "Empresa Constructora",
        logo: "https://logo.clearbit.com/fluor.com"
    },
];

const Testimonials: React.FC = () => {
    const clientLogos = [
        "https://logo.clearbit.com/bhp.com",
        "https://logo.clearbit.com/codelco.com",
        "https://logo.clearbit.com/antofagasta-minerals.com",
        "https://logo.clearbit.com/sqm.com",
        "https://logo.clearbit.com/komatsu.com",
        "https://logo.clearbit.com/finning.com",
    ];

    return (
        <section className="py-20 sm:py-24 bg-brand-iron">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="font-display text-3xl font-bold tracking-tight text-brand-white sm:text-4xl">Confían en Nosotros</h2>
                    <p className="mt-4 text-lg leading-8 text-brand-slate">Somos el partner de confianza para las industrias más exigentes de la región.</p>
                </div>

                <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                    {clientLogos.map((logo) => (
                        <div key={logo} className="flex justify-center">
                            <img src={logo} alt={`Logo cliente`} className="h-10 w-auto object-contain filter grayscale brightness-200 contrast-0 hover:filter-none transition-all duration-300"/>
                        </div>
                    ))}
                </div>

                <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {testimonialsData.map((testimonial) => (
                        <figure key={testimonial.company} className="rounded-xl border border-white/5 bg-brand-steel/60 p-8 backdrop-blur-sm">
                            <blockquote className="text-brand-slate">
                                <p>“{testimonial.quote}”</p>
                            </blockquote>
                            <figcaption className="mt-6 flex items-center gap-4">
                                <img className="h-10 w-10 rounded-full bg-gray-500" src={testimonial.logo} alt={testimonial.company} />
                                <div>
                                    <div className="font-semibold text-brand-white">{testimonial.author}</div>
                                    <div className="text-brand-slate">{testimonial.company}</div>
                                </div>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
