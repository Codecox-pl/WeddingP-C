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
      <section className="bg-transparent py-12 md:py-24 px-6 border-t border-black/5" id="regalos">
         <div className="max-w-5xl mx-auto text-center">
            <h2 className="md:font-serif mb-6 text-text-primary text-3xl md:text-5xl flex flex-wrap justify-center items-center gap-2 md:gap-4 text-center px-2">
               <GiPenguin className="text-2xl md:text-4xl text-accent opacity-80" />
               <span className="leading-tight wrap-break-word max-w-full">Detalles & Regalos</span>
               <GiPenguin className="text-2xl md:text-4xl text-accent opacity-80 scale-x-[-1]" />
            </h2>
            <p className="font-sans text-[13px] leading-relaxed text-text-secondary max-w-2xl mx-auto uppercase tracking-wide mb-12">
               Tu asistencia es nuestro mejor regalo. Sin embargo, si deseas hacernos un detalle, será inmensamente agradecido.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
               {/* Lluvia de sobres / Cuenta Bancaria */}
               <div className="bg-white p-10 shadow-md border border-black/5 flex flex-col items-center justify-between">
                  <h4 className="font-sans text-[10px] uppercase tracking-[3px] text-accent font-bold mb-6">Transferencia</h4>
                  <div className="mb-6 w-full text-center flex flex-col items-center">
                     <img src="https://res.cloudinary.com/dlpxjxb9k/image/upload/f_auto,q_auto,w_300/v1777256489/bcp-logo_ectju7.png" alt="Logo BCP" className="h-8 lg:h-10 object-contain mb-4" />

                     <div className="w-full bg-gray-50 py-3 px-2 rounded-sm mb-3 border border-gray-100">
                        <p className="font-sans text-[9px] uppercase tracking-wider text-text-secondary mb-1">Cuenta BCP Soles</p>
                        <p className="font-sans text-text-primary tracking-[0.15em] text-lg font-medium">{import.meta.env.VITE_BANK_BCP_ACCOUNT || "19194674634041"}</p>
                     </div>

                     <div className="w-full bg-gray-50 py-3 px-2 rounded-sm mb-4 border border-gray-100">
                        <p className="font-sans text-[9px] uppercase tracking-wider text-text-secondary mb-1">Cuenta Interbancaria</p>
                        <p className="font-sans text-text-primary tracking-[0.05em] sm:tracking-widest text-sm sm:text-base font-medium">{import.meta.env.VITE_BANK_BCP_CCI || "00219119467463404156"}</p>
                     </div>

                     <p className="font-sans text-[13px] uppercase tracking-wider text-text-secondary">Titular: <span className="font-semibold text-text-primary mt-1 block sm:inline">Patrick Luis Muñoz</span></p>
                  </div>


               </div>
               {/* Mesa Virtual */}
               <div className="bg-white p-10 shadow-md border border-black/5 flex flex-col items-center justify-between">
                  <h4 className="font-sans text-[10px] uppercase tracking-[3px] text-accent font-bold mb-6">Billeteras Digitales</h4>
                  <div className="mb-6 w-full text-center flex flex-col items-center">
                     <img src="https://res.cloudinary.com/dlpxjxb9k/image/upload/f_auto,q_auto,w_400/v1777256669/yape-plin-logo_pujhgu.png" alt="Plin y Yape" className="h-15 lg:h-17.5 object-contain mb-4 mix-blend-multiply" />

                     <div className="w-full bg-gray-50 py-3 px-2 rounded-sm mb-3 border border-gray-100 text-center">
                        <p className="font-sans text-[9px] uppercase tracking-wider text-text-secondary mb-1">PLIN</p>
                        <p className="font-sans text-text-primary tracking-widest text-lg font-medium">{import.meta.env.VITE_BANK_PLIN || "991995630"}</p>
                     </div>

                     <div className="w-full bg-gray-50 py-3 px-2 rounded-sm mb-6 border border-gray-100 text-center">
                        <p className="font-sans text-[9px] uppercase tracking-wider text-text-secondary mb-1">YAPE</p>
                        <p className="font-sans text-text-primary tracking-widest text-lg font-medium">{import.meta.env.VITE_BANK_YAPE || "917812695"}</p>
                     </div>

                     <p className="font-sans text-[10px] uppercase tracking-wider text-text-secondary">Titulares: <span className="font-semibold text-text-primary mt-1 flex sm:inline justify-center">Claudia y Patrick</span></p>
                  </div>
               </div>


            </div>
         </div>
      </section>
   );
}
