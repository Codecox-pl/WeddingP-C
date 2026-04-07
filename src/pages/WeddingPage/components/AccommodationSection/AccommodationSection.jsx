/**
 * @file AccommodationSection.jsx
 * @description Módulo estratégico dedicado a la logística hotelera y turismo de los invitados foráneos.
 * Presenta opciones para hospedarse vía enlaces y lista de "Qué Hacer" en la ciudad elegida.
 */
import React from 'react';
import { GiPenguin } from 'react-icons/gi';

export default function AccommodationSection() {
  return (
    <section className="bg-transparent py-24 px-6 md:px-12 border-t border-black/5">
      <h2 className="text-left md:text-center font-serif mb-16 text-text-primary justify-center text-3xl md:text-5xl flex flex-wrap justify-center items-center gap-2 md:gap-4 text-center px-2">
          <GiPenguin className="text-2xl md:text-4xl text-accent opacity-80" />
          <span className="leading-tight break-words max-w-full">Alojamiento & Logística</span>
          <GiPenguin className="text-2xl md:text-4xl text-accent opacity-80 scale-x-[-1]" />
        </h2>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-6 shadow-md border border-black/5 hover:border-accent/40 transition-colors">
             <div className="w-full h-56 bg-cover bg-center mb-6" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542314831-c6a4d14b8ba2?auto=format&fit=crop&w=800&q=80")' }} />
             <h3 className="text-2xl font-serif mb-2 text-[#333]">NH Collection Palacio de Tepa</h3>
             <p className="font-sans text-[13px] text-text-secondary mb-4 leading-relaxed">
               Ubicado a 15 min del epicentro. Para reservar, haz clic abajo usando el código "B_PATRICK CLAUDIA" en el portal exclusivo del hotel.
             </p>
             <a href="#" className="font-sans text-[10px] bg-accent w-max px-6 py-2 text-white uppercase tracking-widest hover:opacity-90 inline-block font-bold rounded-sm">
                Portal de Reservas
             </a>
          </div>

          <div className="bg-white p-6 shadow-md border border-black/5 hover:border-[#bfa18f]/40 transition-colors">
             <div className="w-full h-56 bg-cover bg-center mb-6" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80")' }} />
             <h3 className="text-2xl font-serif mb-2 text-[#333]">Only YOU Boutique Hotel Ejecutivo</h3>
             <p className="font-sans text-[13px] text-text-secondary mb-4 leading-relaxed">
               Opción lujosa a 5 min caminando al evento, céntrico e ideal para familias. Descuento temporal activado al llamar a recepción.
             </p>
             <a href="#" className="font-sans text-[10px] bg-transparent border border-accent text-accent w-max px-6 py-2 uppercase tracking-widest hover:bg-accent hover:text-white inline-block transition-colors font-bold rounded-sm">
                Visualizar Hotel
             </a>
          </div>
      </div>
      
      {/* Mini Guía Turística */}
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-sm border border-black/5 text-center mt-8">
         <h3 className="font-serif text-3xl mb-4 text-[#a68c7c]">Cosas que hacer en la ciudad</h3>
         <p className="font-sans text-[13px] text-text-secondary leading-relaxed mb-6">
           San Miguel de Allende está lleno de magia. Si es tu primera vez aquí, te invitamos a visitar por la tarde 
           la emblemática "Parroquia de San Miguel Arcángel", degustar un chocolate con churros cerca del parque 
           y terminar el domingo en las grutas termales.
         </p>
      </div>
    </section>
  );
}
