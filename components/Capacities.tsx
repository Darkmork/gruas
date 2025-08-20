import React from 'react';

const Capacities: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-brand-steel/30" id="capacidades">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-white sm:text-4xl">Capacidades a su Medida</h2>
            <p className="mt-4 text-lg leading-8 text-brand-slate">
              Seleccione el tonelaje y las especificaciones para encontrar la grúa perfecta para su maniobra. Nuestra flota cubre desde 10 hasta 300 toneladas.
            </p>
            <div className="mt-8">
                <button className="inline-flex items-center gap-2 rounded-md bg-brand-safety px-5 py-3 font-semibold text-brand-iron hover:bg-brand-safety/90 active:translate-y-[1px] transition-transform">
                  Ver Flota Compatible
                </button>
            </div>
          </div>
          <div className="space-y-8">
            <div>
                <label htmlFor="tonnage" className="block text-sm font-medium leading-6 text-brand-slate mb-2">Tonelaje (t)</label>
                <div className="relative">
                    <input id="tonnage" type="range" min="10" max="300" defaultValue="120" className="w-full h-2 bg-brand-slate/20 rounded-lg appearance-none cursor-pointer accent-brand-safety" />
                    <div className="flex justify-between text-xs text-brand-slate mt-2 tabular-nums">
                        <span>10 t</span>
                        <span>120 t</span>
                        <span>300 t</span>
                    </div>
                </div>
            </div>
            <div className="space-y-4">
              <p className="text-sm font-medium leading-6 text-brand-slate">Especificaciones Clave:</p>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-safety/30 bg-brand-iron px-3 py-1 text-brand-safety text-sm">Radio: 50m</span>
                <span className="rounded-full border border-safety/30 bg-brand-iron px-3 py-1 text-brand-safety text-sm">Altura: 75m</span>
                <span className="rounded-full border border-safety/30 bg-brand-iron px-3 py-1 text-brand-safety text-sm">Carga: 25t</span>
                <span className="rounded-full border border-slate/30 bg-brand-steel px-3 py-1 text-brand-slate text-sm">Terreno RT</span>
                <span className="rounded-full border border-slate/30 bg-brand-steel px-3 py-1 text-brand-slate text-sm">Carretera</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capacities;
