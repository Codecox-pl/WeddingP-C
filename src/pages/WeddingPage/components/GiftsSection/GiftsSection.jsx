/**
 * @file GiftsSection.jsx
 * @description Presenta la logística de recepción de regalos a través de "Lluvia de sobres", 
 * botones interactivos tipo PayPal o enlaces directos a tiendas especializadas.
 */
import React from 'react';
import { FiGift } from 'react-icons/fi';
import { SiPaypal } from 'react-icons/si';
import { GiPenguin } from 'react-icons/gi';

export default function GiftsSection() {
   return (
      <section className="bg-white/60 py-12 md:py-24 px-6 border-t border-black/5" id="regalos">
         <div className="max-w-5xl mx-auto text-center">
            <h2 className="md:font-serif mb-6 text-text-primary justify-center text-3xl md:text-5xl flex flex-wrap justify-center items-center gap-2 md:gap-4 text-center px-2">
               <GiPenguin className="text-2xl md:text-4xl text-accent opacity-80" />
               <span className="leading-tight break-words max-w-full">Detalles & Regalos</span>
               <GiPenguin className="text-2xl md:text-4xl text-accent opacity-80 scale-x-[-1]" />
            </h2>
            <p className="font-sans text-[13px] leading-relaxed text-text-secondary max-w-2xl mx-auto uppercase tracking-wide mb-12">
               Tu asistencia es nuestro mejor regalo. Sin embargo, si deseas hacernos un detalle, será inmensamente agradecido.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
               {/* Lluvia de sobres / Cuenta Bancaria */}
               <div className="bg-white p-10 shadow-md border border-black/5 flex flex-col items-center justify-between">
                  <h4 className="font-sans text-[10px] uppercase tracking-[3px] text-accent font-bold mb-4">Transferencia</h4>
                  <div className="mb-6 w-full text-center">
                     <p className="font-serif text-[22px] mb-2 text-text-primary bg-gray-50 py-1">BCP - Cuenta Corriente</p>
                     <p className="font-sans text-text-secondary font-mono tracking-widest text-lg">[TU_CUENTA_AQUI]</p>
                     <p className="font-sans text-[10px] uppercase tracking-wider text-gray-500 mt-2">Titulares: [TU_NOMBRE_AQUI]</p>
                  </div>

                  <div className="w-full flex-col flex items-center mt-2 border-t border-gray-100 pt-6">
                     <p className="text-[10px] text-text-secondary uppercase tracking-widest mb-3">Envíos online sin comisión:</p>
                     <button className="flex items-center gap-2 px-8 py-3 bg-[#00457C] text-white font-sans text-xs tracking-widest uppercase hover:bg-[#003087] transition-colors rounded-sm shadow-md">
                        <SiPaypal className="text-lg" /> PayPal
                     </button>
                  </div>
               </div>
               {/* Mesa Virtual */}
               <div className="bg-white p-10 shadow-md border border-black/5 flex flex-col justify-center items-center">
                  <h4 className="font-sans text-[10px] uppercase tracking-[3px] text-accent font-bold mb-4">Lista en Tiendas</h4>
                  <p className="font-serif text-3xl mb-4 text-text-primary">Amazon / Zola</p>
                  <p className="font-sans text-xs text-text-secondary leading-relaxed mb-8 max-w-[250px]">
                     Para su mayor comodidad, hemos consolidado opciones directamente en portales internacionales de compra.
                  </p>
                  <button className="w-full sm:w-auto px-8 py-3 bg-transparent border border-[#a68c7c] text-[#a68c7c] font-sans text-[10px] tracking-widest uppercase hover:bg-[#a68c7c] hover:text-white transition-colors">
                     Ver Mesa de Regalos
                  </button>
               </div>


            </div>
         </div>
      </section>
   );
}
