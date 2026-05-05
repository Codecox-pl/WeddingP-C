/**
 * @file RSVPSection.jsx
 * @description Módulo vital para la planificación: "RSVP Inteligente". Captura asistencia, 
 * necesidades alimentarias particulares (alergias/celiaquía/veganos) y transporte requerido.
 */
import React, { useState, useEffect } from 'react';
import { GiPenguin } from 'react-icons/gi';
import { FaWhatsapp } from 'react-icons/fa';

export default function RSVPSection({ guestData }) {
  // Fallback seguro si no hay dato
  const name = guestData?.name || '';
  const passes = guestData?.passes || 1;
  const row = guestData?.row;

  const [status, setStatus] = useState(passes === 1 ? 'Sí, ahí estaré.' : 'Sí, ahí estaremos.');
  const [extraInfo, setExtraInfo] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState('');

  // Sincronizar el estado por defecto cuando llega o cambia el número de pases
  useEffect(() => {
    setStatus(passes === 1 ? 'Sí, ahí estaré.' : 'Sí, ahí estaremos.');
  }, [passes]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Si el usuario tiene 1 pase, o no marca que irán todos, no debería enviar acompañantes
    const showExtraInfo = passes > 1 && status === 'Sí, ahí estaremos.';
    const submitExtraInfo = showExtraInfo ? extraInfo : '';

    try {
      const API_URL = import.meta.env.VITE_SCRIPT_URL;

      // Intentar enviar a Google Sheets primero si hay URL configurada
      if (API_URL && row) {
        await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify({
            action: 'rsvp',
            row: row,
            status: status,
            extraInfo: submitExtraInfo,
          })
        });
      } else {
        // Simulación local si no hay API_URL (para que no falle en UI)
        await new Promise(r => setTimeout(r, 1000));
      }

      setIsSuccess(true);
      setIsLoading(false);

      // Redirigir a WhatsApp
      const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "1234567890";
      const message = `Hola, soy ${name}.\nQuiero confirmar mi respuesta de asistencia:\n*${status}*\nPases asignados: ${passes}${showExtraInfo && submitExtraInfo ? `\nAcompañantes: ${submitExtraInfo}` : ''}`;

      const generatedUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      setWhatsappLink(generatedUrl);

      setIsSuccess(true);
      setIsLoading(false);

      // Intento de apertura automática (suele bloquearse en Safari/iPhones por ser asíncrono)
      window.open(generatedUrl, '_blank');

    } catch (error) {
      console.error(error);
      alert('Hubo un error enviando la confirmación. Por favor intenta mediante WhatsApp directo.');
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-[#fcfbf9] py-16 md:py-24 px-4 sm:px-6 relative border-t border-black/5">
      <div className="max-w-3xl mx-auto bg-white p-6 sm:p-10 md:p-14 shadow-2xl text-center border border-black/5 relative z-10">
        <h2 className="font-serif mb-4 text-text-primary text-[32px] leading-[1.15] font-medium md:text-5xl lg:text-6xl flex flex-nowrap justify-center items-center gap-2 md:gap-5 text-center px-2 w-full">
          <GiPenguin className="text-[32px] md:text-5xl lg:text-6xl text-accent opacity-80 shrink-0" />
          <span className="leading-tight whitespace-normal min-w-0 text-center">Confirmar Asistencia</span>
          <GiPenguin className="text-[32px] md:text-5xl lg:text-6xl text-accent opacity-80 scale-x-[-1] shrink-0" />
        </h2>

        <p className="font-sans text-[10px] sm:text-[11px] leading-[1.6] text-red-500 mb-6 tracking-[1px] sm:tracking-[2px] uppercase font-bold bg-red-50 py-3 px-4 rounded-sm inline-block max-w-full wrap-break-word border border-red-100">
          Por favor, confirma antes del 15 de Septiembre
        </p>

        <p className="text-xl font-serif text-wedding-navy mb-8">
          ¡Hola <span className="font-bold underline decoration-accent decoration-2">{name}</span>!<br />
          <span className="text-sm font-sans mt-2 block text-gray-500">
            Tienes <b>{passes}</b> {passes === 1 ? 'pase asignado' : 'pases asignados'}.
          </span>
        </p>

        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="text-left font-sans">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div>
                <label className="block text-[11px] leading-normal font-bold uppercase tracking-widest text-text-secondary mb-2">Nombre registrado</label>
                <input type="text" readOnly value={name} className="w-full border-b border-[#e5d5cb] py-2 focus:outline-none bg-transparent text-[16px] leading-normal font-normal pb-3 text-gray-500 cursor-not-allowed" />
              </div>
              <div>
                <label className="block text-[11px] leading-normal font-bold uppercase tracking-widest text-text-secondary mb-2">¿Asistirás?</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full border-b border-[#e5d5cb] py-2 focus:outline-none focus:border-accent bg-transparent text-[16px] leading-normal font-normal text-text-secondary pb-3"
                >
                  {passes === 1 ? (
                    <>
                      <option>Sí, ahí estaré.</option>
                      <option>Con dolor en mi corazón, no puedo.</option>
                    </>
                  ) : (
                    <>
                      <option>Sí, ahí estaremos.</option>
                      <option>Sí iré, pero sol@.</option>
                      <option>Con dolor en mi corazón, no podemos.</option>
                    </>
                  )}
                </select>
              </div>
            </div>

            {(passes > 1 && status === 'Sí, ahí estaremos.') && (
              <div className="mb-10 w-full animate-fade-in opacity-100 transition-opacity duration-300">
                <label className="block text-[11px] leading-normal font-bold uppercase tracking-widest text-text-secondary mb-4">Nombres de Acompañante</label>
                <input
                  type="text"
                  value={extraInfo}
                  onChange={(e) => setExtraInfo(e.target.value)}
                  className="w-full bg-[#faf9f8] border border-gray-100 p-4 focus:outline-none focus:border-accent text-[14px] leading-[1.4] font-normal text-text-secondary"
                  placeholder="Ej: Acompañante es Claudia..."
                  required
                />
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full md:w-auto md:min-w-[350px] md:mx-auto py-5 px-10 mt-4 bg-accent hover:bg-accent-hover text-white font-sans text-[11px] leading-normal font-bold tracking-[4px] uppercase transition-colors shadow-sm disabled:opacity-50 flex justify-center items-center"
            >
              {isLoading ? 'Enviando...' : 'Confirmar y Enviar WhatsApp'}
            </button>
          </form>
        ) : (
          <div className="border border-green-200 bg-green-50 p-8 rounded-lg mt-8 flex flex-col items-center">
            <p className="text-green-800 font-medium text-lg mb-2">¡Confirmación Guardada!</p>
            <p className="text-green-700 text-[13px] mb-6 font-sans">
              Tus datos se registraron correctamente en nuestra lista oficial. Para culminar el proceso, por favor presiona el botón para enviarnos tu confirmación por WhatsApp.
            </p>
            {whatsappLink && (
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-3 w-full max-w-xs py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-sans text-[11px] font-bold tracking-[3px] uppercase transition-colors rounded-sm shadow-md"
              >
                <FaWhatsapp className="text-lg" /> Ir a WhatsApp
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
