/**
 * @file InteractiveSection.jsx
 * @description Engloba el "Digital Guestbook" (Libro de firmas)
 * conectado directamente a la base de datos para recuperar respuestas.
 */
import React, { useState } from 'react';
import { FiBookOpen } from 'react-icons/fi';

export default function InteractiveSection({ guestData }) {
   const [message, setMessage] = useState('');
   const [isLoading, setIsLoading] = useState(false);
   const [feedback, setFeedback] = useState(null);

   const name = guestData?.name || 'Invitado Especial';
   const row = guestData?.row;

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (!message.trim()) return;

      setIsLoading(true);
      setFeedback(null);

      try {
         const API_URL = import.meta.env.VITE_SCRIPT_URL;

         if (API_URL && row) {
            await fetch(API_URL, {
               method: 'POST',
               headers: { 'Content-Type': 'text/plain;charset=utf-8' },
               body: JSON.stringify({
                  action: 'guestbook',
                  row: row,
                  name: name,
                  message: message
               })
            });
         } else {
            // Emulación local segura
            await new Promise(r => setTimeout(r, 1000));
         }

         setFeedback({ type: 'success', text: '¡Tesoros guardados! Tu mensaje está en nuestro buzón.' });
         setMessage(''); // Auto-limpiar para permitir múltiples envíos
      } catch (error) {
         console.error(error);
         setFeedback({ type: 'error', text: 'Ups... Ocurrió un error. Intenta de nuevo.' });
      } finally {
         setIsLoading(false);
         setTimeout(() => setFeedback(null), 5000);
      }
   };

   return (
      <section className="bg-white/80 py-24 px-6 border-t border-black/5">
         <div className="max-w-2xl mx-auto">

            {/* Libro de Visitas Digital */}
            <div className="bg-white p-8 md:p-12 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow rounded-sm">
               <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                  <FiBookOpen className="text-[#a68c7c] text-3xl" />
                  <h3 className="text-3xl md:text-4xl font-serif text-text-primary">Libro de Visitas</h3>
               </div>
               <p className="font-sans text-[13px] text-text-secondary mb-8 leading-relaxed">
                  Siéntete libre de dejarnos un consejo, palabras de cariño o memorias graciosas antes del gran día. Prometemos leerlos todos la mañana de la boda.
               </p>

               <form onSubmit={handleSubmit} className="space-y-5 font-sans border-t border-gray-100 pt-6">
                  <textarea
                     value={message}
                     onChange={(e) => setMessage(e.target.value)}
                     className="w-full bg-[#fcfbf9] border border-gray-200 p-5 focus:outline-none focus:border-accent min-h-35 text-xs text-text-secondary rounded-sm resize-y"
                     placeholder="Tu mensaje más sincero (o gracioso) aquí..."
                     required
                     disabled={isLoading}
                  ></textarea>

                  {feedback && (
                     <div className={`p-4 rounded-sm text-[11px] font-bold tracking-[2px] uppercase text-center transition-all ${feedback.type === 'success' ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-red-50 text-red-700 border border-red-100'}`}>
                        {feedback.text}
                     </div>
                  )}

                  <button
                     type="submit"
                     disabled={isLoading || !message.trim()}
                     className="w-full py-5 bg-[#e3d7cf] hover:bg-[#cca894] hover:text-white text-[#5c4a40] font-sans text-[10px] tracking-[4px] uppercase transition-colors rounded-sm shadow-sm font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                     {isLoading ? 'Enviando paloma mensajera...' : 'Sellar mensaje en el libro'}
                  </button>
               </form>
            </div>

         </div>
      </section>
   );
}
