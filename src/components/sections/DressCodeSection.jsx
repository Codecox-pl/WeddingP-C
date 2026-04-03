/**
 * @file DressCodeSection.jsx
 * @description Explicación concisa y visual del *Dress Code* o Código de Vestimenta,
 * incluyendo un Moodboard visual corto para resolver dudas de manera definitiva sin palabras.
 */
import React from 'react';
import { GiPenguin } from 'react-icons/gi';

export default function DressCodeSection() {
  return (
    <section className="py-24 px-6 sm:px-12 bg-[#eee2d7] border-t border-black/5">
       <div className="max-w-5xl mx-auto text-center">
          <h2 className="md:font-serif mb-4 text-text-primary justify-center text-3xl md:text-5xl flex flex-wrap justify-center items-center gap-2 md:gap-4 text-center px-2">
          <GiPenguin className="text-2xl md:text-4xl text-accent opacity-80" />
          <span className="leading-tight break-words max-w-full">Código de Vestimenta</span>
          <GiPenguin className="text-2xl md:text-4xl text-accent opacity-80 scale-x-[-1]" />
        </h2>
          <p className="font-sans text-sm text-[#8c786a] mb-10 uppercase tracking-[3px] font-bold">Formal / Elegante</p>
          
          {/* Moodboard Visual */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto h-[320px] mb-10">
             <div className="bg-cover bg-center shadow-lg border border-black/5" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=400&q=80")' }}></div>
             <div className="bg-cover bg-center shadow-lg border border-black/5" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=400&q=80")' }}></div>
             <div className="bg-cover bg-center shadow-lg border border-black/5 hidden md:block" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1610444654955-442490cc950a?auto=format&fit=crop&w=400&q=80")' }}></div>
             <div className="bg-cover bg-center shadow-lg border border-black/5 hidden md:block" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1594938328870-9117ee584b47?auto=format&fit=crop&w=400&q=80")' }}></div>
          </div>

          <div className="bg-white/50 p-6 md:p-8 rounded-sm max-w-3xl mx-auto border border-black/5">
             <p className="font-sans text-[13px] text-text-secondary italic leading-relaxed">
               "Les pedimos por favor **evitar el uso del color blanco**, champagne y colores pasteles muy claros exclusivos de la novia.
               Los eventos se desarrollarán tanto en jardín como en interiores, consideren zapatos de plataforma ancha para mayor comodidad en el pasto."
             </p>
          </div>
       </div>
    </section>
  );
}
