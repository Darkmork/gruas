import React from 'react';
import { WhatsAppIcon } from './icons';

const WhatsAppButton: React.FC = () => {
  return (
    <div className="group fixed bottom-6 right-6 z-40">
      <a 
        href="https://wa.me/56912345678" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-center h-16 w-16 rounded-full bg-green-500 text-white shadow-lg transition-transform duration-300 group-hover:scale-110"
      >
        <WhatsAppIcon className="h-8 w-8" />
      </a>
      <div className="absolute top-1/2 right-full mr-4 -translate-y-1/2 whitespace-nowrap rounded-md bg-brand-steel px-3 py-1.5 text-sm text-brand-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        Resolvemos en minutos
        <div className="absolute top-1/2 -right-1 h-2 w-2 -translate-y-1/2 rotate-45 bg-brand-steel"></div>
      </div>
    </div>
  );
};

export default WhatsAppButton;
