import React from 'react';
import { PhoneIcon, WhatsAppIcon, ArrowRightIcon } from './icons';

const QuoteForm: React.FC = () => {
  return (
    <div className="rounded-xl border border-white/10 bg-brand-steel/60 p-6 md:p-8 backdrop-blur-sm shadow-lift">
      <h3 className="font-display text-2xl font-bold text-brand-white">Cotiza en 60 segundos</h3>
      <p className="mt-2 text-sm text-brand-slate">Te llamamos en menos de 30 minutos.</p>
      
      <form className="mt-6 space-y-4">
        <div>
          <label htmlFor="service" className="sr-only">Servicio</label>
          <input type="text" name="service" id="service" className="block w-full rounded-md border-0 bg-white/5 py-2.5 px-3.5 text-brand-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-brand-safety sm:text-sm" placeholder="¿Qué necesitas izar? (ej: contenedor, generador)" />
        </div>
        <div>
          <label htmlFor="weight" className="sr-only">Peso</label>
          <input type="text" name="weight" id="weight" className="block w-full rounded-md border-0 bg-white/5 py-2.5 px-3.5 text-brand-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-brand-safety sm:text-sm" placeholder="Peso estimado (toneladas)" />
        </div>
        <div>
          <label htmlFor="contact" className="sr-only">Contacto</label>
          <input type="text" name="contact" id="contact" className="block w-full rounded-md border-0 bg-white/5 py-2.5 px-3.5 text-brand-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-brand-safety sm:text-sm" placeholder="Tu nombre y teléfono" />
        </div>
        
        <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-brand-safety px-5 py-3 font-semibold text-brand-iron hover:bg-brand-safety/90 active:translate-y-[1px] transition-transform">
          Cotizar ahora <ArrowRightIcon className="h-5 w-5" />
        </button>
      </form>
      
      <div className="mt-6 flex items-center justify-center gap-4">
        <a href="tel:+56912345678" className="flex items-center gap-2 text-sm text-brand-slate hover:text-brand-white transition-colors">
          <PhoneIcon className="h-4 w-4"/> Llamar 24/7
        </a>
        <div className="h-4 w-px bg-white/20"></div>
        <a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-brand-slate hover:text-brand-white transition-colors">
          <WhatsAppIcon className="h-4 w-4"/> WhatsApp
        </a>
      </div>
    </div>
  );
};

export default QuoteForm;
