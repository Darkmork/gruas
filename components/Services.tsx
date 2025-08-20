import React from 'react';
import { Service } from '../types';
import { ArrowRightIcon, CraneIcon, WrenchIcon, TruckIcon, ConveyorBeltIcon, ThumbsUpIcon, ScissorLiftIcon } from './icons';

const servicesData: Service[] = [
  {
    icon: <CraneIcon className="h-8 w-8 text-brand-safety" />,
    title: 'Izaje de Cargas',
    description: 'Maniobras de precisión con equipos certificados para cargas de todo tonelaje.'
  },
  {
    icon: <WrenchIcon className="h-8 w-8 text-brand-safety" />,
    title: 'Montaje Industrial',
    description: 'Instalación de estructuras, maquinaria pesada y componentes críticos.'
  },
  {
    icon: <TruckIcon className="h-8 w-8 text-brand-safety" />,
    title: 'Movimiento de Equipos',
    description: 'Traslado seguro y eficiente de equipos dentro y fuera de faenas.'
  },
  {
    icon: <ConveyorBeltIcon className="h-8 w-8 text-brand-safety" />,
    title: 'Montaje Correas Transportadoras',
    description: 'Servicio especializado para el sector minero, garantizando operatividad.'
  },
  {
    icon: <ThumbsUpIcon className="h-8 w-8 text-brand-safety" />,
    title: 'Asistencia en Ruta',
    description: 'Rescate y posicionamiento de vehículos y maquinaria de alto tonelaje.'
  },
  {
    icon: <ScissorLiftIcon className="h-8 w-8 text-brand-safety" />,
    title: 'Arriendo de Equipos',
    description: 'Alza hombres, manipuladores y otros equipos complementarios a su proyecto.'
  }
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <article className="group rounded-xl border border-white/5 bg-brand-steel/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
    <div className="mb-4">{service.icon}</div>
    <h3 className="font-display text-xl font-semibold text-brand-white">{service.title}</h3>
    <p className="mt-2 text-brand-slate">{service.description}</p>
    <a href="#" className="mt-4 inline-flex items-center text-sm font-semibold text-brand-safety group-hover:underline">
      Ver detalle <ArrowRightIcon className="ml-2 h-4 w-4" />
    </a>
  </article>
);

const Services: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-brand-iron" id="servicios">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-brand-white sm:text-4xl">Soluciones Integrales de Izaje</h2>
          <p className="mt-4 text-lg leading-8 text-brand-slate">Cubrimos cada fase de su proyecto con seguridad y precisión.</p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
