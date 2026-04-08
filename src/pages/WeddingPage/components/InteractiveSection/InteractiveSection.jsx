/**
 * @file InteractiveSection.jsx
 * @description Engloba el "Digital Guestbook" (Libro de firmas) y el "Playlist Colaborativo"
 * donde los usuarios interactivamente recomiendan música en Spotify o sujan mensajes a los novios.
 */
import React from 'react';
import { FiMusic, FiBookOpen } from 'react-icons/fi';

export default function InteractiveSection() {
   return (
      <section className="bg-white/80 py-24 px-6 border-t border-black/5">
         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">



            {/* Libro de Visitas Digital */}
            <div className="bg-white p-8 md:p-12 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
               <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                  <FiBookOpen className="text-[#a68c7c] text-3xl" />
                  <h3 className="text-3xl md:text-4xl font-serif text-text-primary">Libro de Visitas</h3>
               </div>
               <p className="font-sans text-[13px] text-text-secondary mb-8 leading-relaxed">
                  Siéntete libre de dejarnos un consejo, palabras de cariño o memorias graciosas antes del gran día. Prometemos leerlos todos la mañana de la boda.
               </p>
               <div className="space-y-4 font-sans border-t border-gray-100 pt-6">
                  <textarea className="w-full bg-[#fcfbf9] border border-gray-200 p-5 focus:outline-none focus:border-accent min-h-[140px] text-xs text-text-secondary rounded-sm" placeholder="Tu mensaje más sincero (o gracioso) aquí..."></textarea>
                  <input type="text" className="w-full bg-[#fcfbf9] border border-gray-200 p-4 focus:outline-none focus:border-accent text-xs text-text-secondary rounded-sm uppercase tracking-wider" placeholder="¿Quién lo firma?" />
                  <button className="w-full py-5 bg-[#e3d7cf] hover:bg-[#cca894] hover:text-white text-[#5c4a40] font-sans text-[10px] tracking-[4px] uppercase transition-colors rounded-sm shadow-sm font-bold">
                     Sellar mensaje en el libro
                  </button>
               </div>
            </div>

         </div>
      </section>
   );
}
