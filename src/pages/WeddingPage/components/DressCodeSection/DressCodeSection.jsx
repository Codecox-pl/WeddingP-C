/**
 * @file DressCodeSection.jsx
 * @description Explicación concisa y visual del *Dress Code* o Código de Vestimenta,
 * incluyendo un Moodboard visual corto para resolver dudas de manera definitiva sin palabras.
 */
import React from 'react';
import { GiPenguin } from 'react-icons/gi';

export default function DressCodeSection() {
  return (
    <section className="py-12 md:py-24 px-6 sm:px-12 bg-[#fcfbf9] border-t border-black/5">
       <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-serif mb-4 text-text-primary text-[26px] leading-[1.15] font-[500] md:text-5xl lg:text-6xl flex flex-nowrap justify-center items-center gap-2 md:gap-5 text-center px-1 w-full">
            <GiPenguin className="text-[26px] md:text-5xl lg:text-6xl text-accent opacity-80 shrink-0" />
            <span className="leading-tight whitespace-nowrap sm:whitespace-normal min-w-0 text-center tracking-tight">Código de Vestimenta</span>
            <GiPenguin className="text-[26px] md:text-5xl lg:text-6xl text-accent opacity-80 scale-x-[-1] shrink-0" />
          </h2>
          <p className="font-sans text-[11px] leading-[1.5] font-[700] text-[#8c786a] mb-6 md:mb-10 uppercase tracking-[3px]">Formal / Elegante</p>
          
          <div className="bg-white p-8 md:p-12 rounded-sm shadow-md max-w-2xl mx-auto border border-black/5 flex flex-col items-center">
             <p className="font-sans text-[14px] leading-[1.5] font-[400] text-text-secondary mb-8 max-w-lg">
                Para mantener la armonía de la ocasión, te pedimos muy amablemente que los siguientes colores sean <strong className="font-bold text-text-primary">exclusivos de la novia</strong>:
             </p>
             
             <div className="flex gap-6 md:gap-10 mb-8">
                <div className="flex flex-col items-center gap-3">
                   <div className="w-14 h-14 rounded-full bg-[#ffffff] border border-gray-200 shadow-inner"></div>
                   <span className="font-sans text-[9px] uppercase tracking-wider text-text-secondary">Blanco</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                   <div className="w-14 h-14 rounded-full bg-[#fdf5e6] border border-gray-200 shadow-inner"></div>
                   <span className="font-sans text-[9px] uppercase tracking-wider text-text-secondary">Crema / Perla</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                   <div className="w-14 h-14 rounded-full bg-[#f5e6d3] border border-gray-200 shadow-inner"></div>
                   <span className="font-sans text-[9px] uppercase tracking-wider text-text-secondary">Beige Clarito</span>
                </div>
             </div>
             
             <p className="font-sans text-[12px] leading-[1.5] font-[400] text-text-secondary bg-gray-50 py-3 px-6 rounded-full border border-gray-100 italic">
                Agradecemos inmensamente tu comprensión ♥
             </p>
          </div>
       </div>
    </section>
  );
}
