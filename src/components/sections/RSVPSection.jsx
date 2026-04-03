/**
 * @file RSVPSection.jsx
 * @description Módulo vital para la planificación: "RSVP Inteligente". Captura asistencia, 
 * necesidades alimentarias particulares (alergias/celiaquía/veganos) y transporte requerido.
 */
import React from 'react';
import { GiPenguin } from 'react-icons/gi';

export default function RSVPSection() {
  return (
    <section className="bg-white/80 py-16 md:py-24 px-4 sm:px-6 relative border-t border-black/5">
       <div className="max-w-3xl mx-auto bg-white p-6 sm:p-10 md:p-14 shadow-2xl text-center border border-black/5 relative z-10">
          <h2 className="font-serif mb-4 text-text-primary text-[32px] leading-[1.15] font-[500] md:text-5xl lg:text-6xl flex flex-nowrap justify-center items-center gap-2 md:gap-5 text-center px-2 w-full">
          <GiPenguin className="text-[32px] md:text-5xl lg:text-6xl text-accent opacity-80 shrink-0" />
          <span className="leading-tight whitespace-normal min-w-0 text-center">Confirmar Asistencia</span>
          <GiPenguin className="text-[32px] md:text-5xl lg:text-6xl text-accent opacity-80 scale-x-[-1] shrink-0" />
        </h2>
          <p className="font-sans text-[11px] leading-[1.5] text-red-500 mb-12 tracking-[2px] uppercase font-[700] bg-red-50 py-2 rounded-sm w-max mx-auto px-6 border border-red-100">
             Por favor, confirma antes del 15 de Septiembre
          </p>

          <form className="text-left font-sans">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div>
                  <label className="block text-[11px] leading-[1.5] font-[700] uppercase tracking-widest text-text-secondary mb-2">Nombre completo de los asistentes</label>
                  <input type="text" className="w-full border-b border-[#e5d5cb] py-2 focus:outline-none focus:border-accent bg-transparent text-[16px] leading-[1.5] font-[400] pb-3" placeholder="Tu nombre..." />
                </div>
                <div>
                  <label className="block text-[11px] leading-[1.5] font-[700] uppercase tracking-widest text-text-secondary mb-2">¿Asistirás?</label>
                  <select className="w-full border-b border-[#e5d5cb] py-2 focus:outline-none focus:border-accent bg-transparent text-[16px] leading-[1.5] font-[400] text-text-secondary pb-3">
                    <option>Sí, ahí estaremos.</option>
                    <option>Con dolor en mi corazón, no puedo.</option>
                  </select>
                </div>
             </div>
             
             <div className="mb-10">
                <label className="block text-[11px] leading-[1.5] font-[700] uppercase tracking-widest text-text-secondary mb-4">Restricciones Alimentarias (vital para el catering)</label>
                <div className="flex flex-wrap gap-5">
                   <label className="flex items-center gap-2 text-[14px] leading-[1.4] font-[400] tracking-wide text-text-secondary"><input type="checkbox" className="accent-accent" /> Ninguna (Tradicional)</label>
                   <label className="flex items-center gap-2 text-[14px] leading-[1.4] font-[400] tracking-wide text-text-secondary"><input type="checkbox" className="accent-accent" /> Vegano</label>
                   <label className="flex items-center gap-2 text-[14px] leading-[1.4] font-[400] tracking-wide text-text-secondary"><input type="checkbox" className="accent-accent" /> Celíaco (Sin Gluten)</label>
                   <label className="flex items-center gap-2 text-[14px] leading-[1.4] font-[400] tracking-wide text-text-secondary"><input type="checkbox" className="accent-accent" /> Alergia a nueces</label>
                </div>
             </div>

             <div className="mb-10 w-full hidden md:block">
                <input type="text" className="w-full bg-[#faf9f8] border border-gray-100 p-4 focus:outline-none focus:border-accent text-[14px] leading-[1.4] font-[400] text-text-secondary" placeholder="Alguna otra alergia estricta específica..." />
             </div>

             <div className="mb-12">
                <label className="block text-[11px] leading-[1.5] font-[700] uppercase tracking-widest text-text-secondary mb-4">Transporte Logístico</label>
                <p className="text-[14px] leading-[1.4] font-[400] text-text-secondary mb-4">Para calcular cupos, ¿necesitas tomar el bus de la boda desde el hospedaje centro hacia la hacienda?</p>
                <div className="flex flex-wrap gap-6">
                   <label className="flex items-center gap-2 text-[14px] leading-[1.4] font-[400] text-text-secondary"><input type="checkbox" className="accent-accent" /> Sí, necesito espacio en el Bus.</label>
                   <label className="flex items-center gap-2 text-[14px] leading-[1.4] font-[400] text-text-secondary"><input type="checkbox" className="accent-accent" /> No, voy en vehículo/taxi por mi cuenta.</label>
                </div>
             </div>

             <button type="button" className="w-full py-5 bg-[#bfa18f] hover:bg-[#a68c7c] text-white font-sans text-[11px] leading-[1.5] font-[700] tracking-[4px] uppercase transition-colors shadow-sm">
               Enviar Confirmación Final
             </button>
          </form>
       </div>
    </section>
  );
}
