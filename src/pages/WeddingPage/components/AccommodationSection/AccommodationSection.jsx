/**
 * @file AccommodationSection.jsx
 * @description Módulo estratégico dedicado a la logística hotelera y turismo de los invitados foráneos.
 * Presenta opciones para hospedarse vía enlaces y lista de "Qué Hacer" en la ciudad elegida.
 */
import React from 'react';
import { GiPenguin } from 'react-icons/gi';
import { FaWhatsapp } from 'react-icons/fa';

export default function AccommodationSection() {
  return (
    <section className="bg-transparent py-12 md:py-24 px-6 md:px-12 border-t border-black/5">
      <h2 className="font-serif mb-12 md:mb-16 text-text-primary text-[26px] leading-[1.15] font-[500] md:text-5xl lg:text-6xl flex flex-nowrap justify-center items-center gap-2 md:gap-5 text-center px-1 w-full">
         <GiPenguin className="text-[26px] md:text-5xl lg:text-6xl text-accent opacity-80 shrink-0" />
         <span className="leading-tight whitespace-nowrap sm:whitespace-normal min-w-0 text-center tracking-tight">Alojamiento & Logística</span>
         <GiPenguin className="text-[26px] md:text-5xl lg:text-6xl text-accent opacity-80 scale-x-[-1] shrink-0" />
      </h2>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-6 shadow-md border border-black/5 hover:border-accent/40 transition-colors">
             <div className="w-full h-56 bg-cover bg-center mb-6" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542314831-c6a4d14b8ba2?auto=format&fit=crop&w=800&q=80")' }} />
             <h3 className="text-2xl font-serif mb-2 text-[#333]">NH Collection Palacio de Tepa</h3>
             <p className="font-sans text-[13px] text-text-secondary mb-4 leading-relaxed">
               Ubicado a 15 min del epicentro. Para reservar, haz clic abajo usando el código "B_PATRICK CLAUDIA" en el portal exclusivo del hotel.
             </p>
             <a href="#" className="font-sans text-[10px] bg-[#25D366] w-max px-6 py-3 text-white uppercase tracking-widest hover:opacity-90 inline-flex items-center gap-2 font-bold rounded-sm transition-colors shadow-sm">
                <FaWhatsapp className="text-[14px]" /> Reservar
             </a>
          </div>

          <div className="bg-white p-6 shadow-md border border-black/5 hover:border-[#bfa18f]/40 transition-colors">
             <div className="w-full h-56 bg-cover bg-center mb-6" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80")' }} />
             <h3 className="text-2xl font-serif mb-2 text-[#333]">Only YOU Boutique Hotel Ejecutivo</h3>
             <p className="font-sans text-[13px] text-text-secondary mb-4 leading-relaxed">
               Opción lujosa a 5 min caminando al evento, céntrico e ideal para familias. Descuento temporal activado al llamar a recepción.
             </p>
             <a href="#" className="font-sans text-[10px] bg-transparent border border-[#25D366] text-[#25D366] w-max px-6 py-3 uppercase tracking-widest hover:bg-[#25D366] hover:text-white inline-flex items-center gap-2 transition-colors font-bold rounded-sm shadow-sm">
                <FaWhatsapp className="text-[14px]" /> Reservar
             </a>
          </div>
      </div>
      
      {/* Mini Guía Turística */}
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-sm border border-black/5 text-center mt-8">
         <h3 className="font-serif text-3xl mb-4 text-[#a68c7c]">Cosas que hacer en la ciudad</h3>
         <p className="font-sans text-[13px] md:text-[14px] text-text-secondary leading-[1.8] text-justify md:text-center mb-6">
           Huacho ofrece un destino muy completo y versátil donde puedes conectar con la naturaleza practicando deportes acuáticos en la laguna La Encantada o visitando la playa El Colorado; para luego sumergirte en su profunda historia explorando los milenarios centros arqueológicos de Bandurria y Vichama, además de visitar el emblemático Balcón de Huaura y su imponente Catedral. Para coronar la experiencia, la ciudad te invita a saborear su cultura viva disfrutando del tradicional desayuno de salchicha huachana y chicharrón, adquiriendo productos típicos en el Mercado Modelo y descansando con una hermosa vista panorámica en el Hotel Terrazas del Mar.
         </p>
      </div>
    </section>
  );
}
