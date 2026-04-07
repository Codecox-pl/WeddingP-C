/**
 * @file RSVPSection.jsx
 * @description Módulo vital para la planificación: "RSVP Inteligente". Captura asistencia, 
 * necesidades alimentarias particulares (alergias/celiaquía/veganos) y transporte requerido.
 */
import React, { useState } from 'react';
import { GiPenguin } from 'react-icons/gi';

export default function RSVPSection({ guestData }) {
  const [status, setStatus] = useState('Sí, ahí estaremos.');
  const [extraInfo, setExtraInfo] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Fallback seguro si no hay dato
  const name = guestData?.name || '';
  const passes = guestData?.passes || 1;
  const row = guestData?.row;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const API_URL = import.meta.env.VITE_SCRIPT_URL;
      
      // Intentar enviar a Google Sheets primero si hay URL configurada
      if (API_URL && row) {
        await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
             action: 'rsvp',
             row: row,
             status: status,
             extraInfo: extraInfo,
          })
        });
      } else {
        // Simulación local si no hay API_URL (para que no falle en UI)
        await new Promise(r => setTimeout(r, 1000));
      }

      setIsSuccess(true);
      setIsLoading(false);

      // Redirigir a WhatsApp
      // Nota: Configura aquí el número (incluyendo código de país sin el + ej: 51987654321)
      const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "1234567890";
      const message = `Hola, soy ${name}.\nQuiero confirmar mi respuesta de asistencia:\n*${status}*\nPases asignados: ${passes}\nComentarios: ${extraInfo}`;
      
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');

    } catch (error) {
      console.error(error);
      alert('Hubo un error enviando la confirmación. Por favor intenta mediante WhatsApp directo.');
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-white/80 py-16 md:py-24 px-4 sm:px-6 relative border-t border-black/5">
       <div className="max-w-3xl mx-auto bg-white p-6 sm:p-10 md:p-14 shadow-2xl text-center border border-black/5 relative z-10">
          <h2 className="font-serif mb-4 text-text-primary text-[32px] leading-[1.15] font-[500] md:text-5xl lg:text-6xl flex flex-nowrap justify-center items-center gap-2 md:gap-5 text-center px-2 w-full">
          <GiPenguin className="text-[32px] md:text-5xl lg:text-6xl text-accent opacity-80 shrink-0" />
          <span className="leading-tight whitespace-normal min-w-0 text-center">Confirmar Asistencia</span>
          <GiPenguin className="text-[32px] md:text-5xl lg:text-6xl text-accent opacity-80 scale-x-[-1] shrink-0" />
        </h2>
          
          <p className="font-sans text-[11px] leading-[1.5] text-red-500 mb-6 tracking-[2px] uppercase font-[700] bg-red-50 py-2 rounded-sm w-max mx-auto px-6 border border-red-100">
             Por favor, confirma antes del 15 de Septiembre
          </p>

          <p className="text-xl font-serif text-wedding-navy mb-8">
             ¡Hola <span className="font-bold underline decoration-accent decoration-2">{name}</span>!<br/>
             <span className="text-sm font-sans mt-2 block text-gray-500">
                Tienes <b>{passes}</b> {passes === 1 ? 'pase asignado' : 'pases asignados'}.
             </span>
          </p>

          {!isSuccess ? (
             <form onSubmit={handleSubmit} className="text-left font-sans">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                   <div>
                     <label className="block text-[11px] leading-[1.5] font-[700] uppercase tracking-widest text-text-secondary mb-2">Nombre registrado</label>
                     <input type="text" readOnly value={name} className="w-full border-b border-[#e5d5cb] py-2 focus:outline-none bg-transparent text-[16px] leading-[1.5] font-[400] pb-3 text-gray-500 cursor-not-allowed" />
                   </div>
                   <div>
                     <label className="block text-[11px] leading-[1.5] font-[700] uppercase tracking-widest text-text-secondary mb-2">¿Asistirás?</label>
                     <select 
                       value={status}
                       onChange={(e) => setStatus(e.target.value)}
                       className="w-full border-b border-[#e5d5cb] py-2 focus:outline-none focus:border-accent bg-transparent text-[16px] leading-[1.5] font-[400] text-text-secondary pb-3"
                     >
                       <option>Sí, ahí estaremos.</option>
                       <option>Sí, iré pero yo solo.</option>
                       <option>Con dolor en mi corazón, no puedo.</option>
                     </select>
                   </div>
                </div>
                
                <div className="mb-10 w-full">
                   <label className="block text-[11px] leading-[1.5] font-[700] uppercase tracking-widest text-text-secondary mb-4">Comentarios Extras, Alergias o Nombres de Acompañantes</label>
                   <input 
                     type="text" 
                     value={extraInfo}
                     onChange={(e) => setExtraInfo(e.target.value)}
                     className="w-full bg-[#faf9f8] border border-gray-100 p-4 focus:outline-none focus:border-accent text-[14px] leading-[1.4] font-[400] text-text-secondary" 
                     placeholder="Ej: Soy vegano, mi acompañante es Ana..." 
                   />
                </div>

                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full py-5 bg-[#bfa18f] hover:bg-[#a68c7c] text-white font-sans text-[11px] leading-[1.5] font-[700] tracking-[4px] uppercase transition-colors shadow-sm disabled:opacity-50 flex justify-center items-center"
                >
                  {isLoading ? 'Enviando...' : 'Confirmar y Enviar WhatsApp'}
                </button>
             </form>
          ) : (
             <div className="border border-green-200 bg-green-50 p-8 rounded-lg mt-8">
                <p className="text-green-800 font-medium text-lg mb-2">¡Completado!</p>
                <p className="text-green-700 text-sm">Tu confirmación se ha procesado exitosamente. En un momento se debe abrir la ventana de WhatsApp para enviar el mensaje.</p>
             </div>
          )}
       </div>
    </section>
  );
}
