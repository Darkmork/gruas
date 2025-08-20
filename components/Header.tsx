import React, { useState, useEffect } from 'react';
import { PhoneIcon, WhatsAppIcon, HelmetIcon, CertificateIcon, CraneIcon } from './icons';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Servicios', 'Capacidades', 'Flota', 'Zonas', 'Seguridad', 'Casos', 'Cotizar'];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-steel/80 backdrop-blur-lg border-b border-brand-copper/30' : 'bg-transparent'}`}>
      <div className="bg-black/20 text-brand-slate text-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-8 items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5"><HelmetIcon className="h-4 w-4 text-brand-safety" /> Operación 24/7</span>
              <span className="hidden md:flex items-center gap-1.5"><CertificateIcon className="h-4 w-4 text-brand-safety" /> Antofagasta</span>
              <span className="hidden lg:flex items-center gap-1.5">Respuesta en &lt;30 min</span>
            </div>
          </div>
        </div>
      </div>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2 text-brand-white">
            <CraneIcon className="h-8 w-8 text-brand-safety"/>
            <span className="font-display text-2xl font-bold">D&R</span>
          </a>
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-medium text-brand-slate hover:text-brand-white transition-colors">{link}</a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex items-center gap-2 rounded-md border border-brand-safety/50 bg-brand-safety/10 px-4 py-2 text-sm font-semibold text-brand-safety hover:bg-brand-safety/20 transition-colors">
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
            <a href="tel:+56912345678" className="inline-flex items-center gap-2 rounded-md bg-brand-safety px-4 py-2 text-sm font-semibold text-brand-iron hover:bg-brand-safety/90 active:translate-y-[1px] transition-transform">
              <PhoneIcon className="h-4 w-4"/>
              Llamar ahora
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
