import React from 'react';
import { PhoneIcon, CraneIcon } from './icons';

const Footer: React.FC = () => {
  const navLinks = ['Servicios', 'Capacidades', 'Flota', 'Seguridad', 'Casos', 'Cotizar'];
  return (
    <footer className="bg-brand-iron border-t border-brand-copper/30">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="md:col-span-2 lg:col-span-1">
                <a href="#inicio" className="flex items-center gap-2 text-brand-white">
                    <CraneIcon className="h-8 w-8 text-brand-safety"/>
                    <span className="font-display text-2xl font-bold">Grúas y Servicios D&R</span>
                </a>
                <p className="mt-4 text-sm text-brand-slate">Izaje de alto tonelaje con estándar minero. Seguridad, precisión y respuesta inmediata 24/7 en Antofagasta.</p>
                <div className="mt-6 flex gap-4">
                    <span className="inline-flex items-center rounded-md bg-brand-steel px-2 py-1 text-xs font-medium text-brand-slate ring-1 ring-inset ring-white/10">Operación 24/7</span>
                    <span className="inline-flex items-center rounded-md bg-brand-steel px-2 py-1 text-xs font-medium text-brand-slate ring-1 ring-inset ring-white/10">Plan de Izaje</span>
                    <span className="inline-flex items-center rounded-md bg-brand-steel px-2 py-1 text-xs font-medium text-brand-slate ring-1 ring-inset ring-white/10">Antofagasta</span>
                </div>
            </div>
            <div>
                <h3 className="font-semibold text-brand-white">Atajos</h3>
                <ul className="mt-4 space-y-2">
                    {navLinks.map(link => (
                        <li key={link}><a href={`#${link.toLowerCase()}`} className="text-sm text-brand-slate hover:text-brand-safety">{link}</a></li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="font-semibold text-brand-white">Contacto 24/7</h3>
                <div className="mt-4 space-y-4">
                    <a href="tel:+56912345678" className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-safety px-5 py-3 font-semibold text-brand-iron hover:bg-brand-safety/90 active:translate-y-[1px] transition-transform">
                        <PhoneIcon className="h-5 w-5"/>
                        Llamar Ahora
                    </a>
                    <p className="text-sm text-brand-slate">
                        <strong>Correo:</strong> contacto@gruasdyr.cl<br/>
                        <strong>Dirección:</strong> Antofagasta, Chile
                    </p>
                </div>
            </div>
        </div>
      </div>
      <div className="border-t border-brand-copper/30 py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-sm text-brand-slate">
          <p>&copy; {new Date().getFullYear()} Grúas y Servicios D&R. Todos los derechos reservados.</p>
          <div className="mt-4 sm:mt-0 flex gap-4">
            <a href="#" className="hover:text-brand-white">Términos</a>
            <a href="#" className="hover:text-brand-white">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
