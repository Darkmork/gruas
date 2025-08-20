import React, { useState } from 'react';
import { FleetItem } from '../types';

const fleetData: FleetItem[] = [
  { name: 'Grove GMK5250L', type: 'telescopica', capacity: 250, image: 'https://picsum.photos/seed/grove-gmk/600/400', specs: [{label: 'Pluma', value: '70m'}, {label: 'Jib', value: '37m'}], available: 'Hoy' },
  { name: 'Liebherr LTM 1120', type: 'telescopica', capacity: 120, image: 'https://picsum.photos/seed/liebherr-ltm/600/400', specs: [{label: 'Pluma', value: '60m'}, {label: 'Jib', value: '19m'}], available: 'Mañana' },
  { name: 'Tadano GR-1000XL', type: 'rt', capacity: 100, image: 'https://picsum.photos/seed/tadano-gr/600/400', specs: [{label: 'Pluma', value: '51m'}, {label: 'Tracción', value: '4x4'}], available: 'Hoy' },
  { name: 'Camión Pluma Fassi F195A', type: 'pluma', capacity: 18, image: 'https://picsum.photos/seed/fassi-f195a/600/400', specs: [{label: 'Alcance', value: '20m'}, {label: 'Montaje', value: 'Rápido'}], available: 'Consultar' },
];

const FleetCard: React.FC<{ item: FleetItem }> = ({ item }) => (
  <div className="group rounded-xl overflow-hidden border border-white/5 bg-brand-steel/60 backdrop-blur-sm transition-all duration-300 hover:shadow-lift">
    <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
    <div className="p-6">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-brand-safety tabular-nums">Hasta {item.capacity} t</p>
          <h3 className="font-display text-xl font-semibold text-brand-white mt-1">{item.name}</h3>
        </div>
        <span className={`rounded-full px-3 py-1 text-xs ${item.available === 'Hoy' ? 'bg-green-500/20 text-green-400' : 'bg-amber-500/20 text-amber-400'}`}>{item.available}</span>
      </div>
      <div className="mt-4 border-t border-white/10 pt-4 flex gap-4">
        {item.specs.map(spec => (
            <div key={spec.label}>
                <p className="text-xs text-brand-slate">{spec.label}</p>
                <p className="text-brand-white font-medium tabular-nums">{spec.value}</p>
            </div>
        ))}
      </div>
      <button className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-md bg-brand-safety/10 px-4 py-2 text-sm font-semibold text-brand-safety hover:bg-brand-safety/20 transition-colors">
        Solicitar esta unidad
      </button>
    </div>
  </div>
);


const Fleet: React.FC = () => {
    const [filter, setFilter] = useState('all');

    const filters = [
        { key: 'all', label: 'Toda la Flota' },
        { key: 'telescopica', label: 'Telescópica' },
        { key: 'rt', label: 'RT (Terreno)' },
        { key: 'pluma', label: 'Camión Pluma' },
    ];

  return (
    <section className="py-20 sm:py-24 bg-brand-iron" id="flota">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-brand-white sm:text-4xl">Nuestra Flota</h2>
          <p className="mt-4 text-lg leading-8 text-brand-slate">Equipos certificados y mantenidos para máxima performance y seguridad.</p>
        </div>
        <div className="mt-10 flex justify-center flex-wrap gap-2">
            {filters.map(({key, label}) => (
                <button 
                    key={key} 
                    onClick={() => setFilter(key)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${filter === key ? 'bg-brand-safety text-brand-iron' : 'bg-brand-steel hover:bg-brand-steel/70 text-brand-slate'}`}
                >
                    {label}
                </button>
            ))}
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {fleetData
            .filter(item => filter === 'all' || item.type === filter)
            .map((item) => (
                <FleetCard key={item.name} item={item} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
