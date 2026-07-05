/**
 * @file RSVPSection.jsx
 * @description Módulo vital para la planificación: "RSVP Inteligente". Captura asistencia, 
 * necesidades alimentarias particulares (alergias/celiaquía/veganos) y transporte requerido.
 */
import React, { useState, useEffect } from 'react';
import { GiPenguin } from 'react-icons/gi';

export default function RSVPSection({ guestData }) {
  // Fallback seguro si no hay dato
  const name = guestData?.name || '';
  const passes = guestData?.passes || 1;
  const row = guestData?.row;

  const [status, setStatus] = useState(passes === 1 ? 'Sí, ahí estaré.' : 'Sí, ahí estaremos.');
  const [extraInfo, setExtraInfo] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  // Sincronizar el estado de confirmación con la Base de Datos (Excel)
  useEffect(() => {
    // Si el backend nos envía el campo status (incluso si está vacío)
    if (guestData && 'status' in guestData) {
      const backendStatus = guestData.status || '';

      if (backendStatus.trim() !== '') {
        // Ya está confirmado en el Excel
        setIsConfirmed(true);
        setStatus(backendStatus);
        if (row) localStorage.setItem(`rsvp_confirmed_row_${row}`, 'true');
      } else {
        // La celda en Excel está VACÍA. El gestor la borró para resetear el formulario.
        setIsConfirmed(false);
        setStatus(passes === 1 ? 'Sí, ahí estaré.' : 'Sí, ahí estaremos.');
        if (row) localStorage.removeItem(`rsvp_confirmed_row_${row}`);
      }
    } else {
      // Fallback por si usan el entorno local de pruebas (sin API)
      if (row && localStorage.getItem(`rsvp_confirmed_row_${row}`)) {
        setIsConfirmed(true);
      } else {
        setStatus(passes === 1 ? 'Sí, ahí estaré.' : 'Sí, ahí estaremos.');
      }
    }
  }, [passes, row, guestData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Si el usuario tiene 1 pase, o no marca que irán todos, no debería enviar acompañantes
    const showExtraInfo = passes > 1 && status === 'Sí, ahí estaremos.';
    const submitExtraInfo = showExtraInfo ? extraInfo : '';

    // Calcular pases restantes
    let usedPasses = 0;
    if (status === 'Sí, ahí estaré.' || status === 'Sí iré, pero sol@.') {
      usedPasses = 1;
    } else if (status === 'Sí, ahí estaremos.') {
      usedPasses = passes;
    } // Si no van ("no puedo"), usedPasses = 0

    const remainingPasses = passes - usedPasses;

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
            remainingPasses: remainingPasses
          })
        });
      } else {
        // Simulación local si no hay API_URL (para que no falle en UI)
        await new Promise(r => setTimeout(r, 1000));
      }

      // Marcar como confirmado localmente
      if (row) {
        localStorage.setItem(`rsvp_confirmed_row_${row}`, 'true');
      }
      setIsConfirmed(true);

      setFeedback({ type: 'success', text: '¡Datos guardados correctamente!' });

    } catch (error) {
      console.error(error);
      setFeedback({ type: 'error', text: 'Hubo un error de conexión. Por favor intenta de nuevo.' });
    } finally {
      setIsLoading(false);
      // Limpiar el mensaje de éxito después de 8 segundos
      setTimeout(() => setFeedback(null), 8000);
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

        {/* Banner informativo: Evento solo para adultos */}
        <div className="bg-amber-50 border border-amber-200 p-4 md:p-5 rounded-sm mb-6 text-center max-w-xl mx-auto">
          <p className="font-sans text-[11px] sm:text-[12px] text-amber-800 uppercase tracking-[2px] font-bold mb-1.5">
            ✨ Evento exclusivo para adultos
          </p>
          <p className="font-sans text-[11px] sm:text-[12px] text-amber-700 leading-relaxed">
            Con mucho cariño, hemos decidido que nuestra celebración sea exclusiva para mayores de 15 años. ¡Aprovechen la noche libre para bailar!
          </p>
        </div>

        {!isConfirmed ? (
          <>
            <p className="font-sans text-[10px] sm:text-[11px] leading-[1.6] text-red-500 mb-6 tracking-[1px] sm:tracking-[2px] uppercase font-bold bg-red-50 py-3 px-4 rounded-sm inline-block max-w-full wrap-break-word border border-red-100">
              Por favor, confirma antes del 15 de Agosto
            </p>

            <p className="text-xl font-serif text-wedding-navy mb-8">
              ¡Hola <span className="font-bold underline decoration-accent decoration-2">{name}</span>!<br />
              <span className="text-sm font-sans mt-2 block text-gray-500">
                Tienes <b>{passes}</b> {passes === 1 ? 'pase asignado' : 'pases asignados'}.
              </span>
            </p>

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

              {feedback && (
                <div className={`mb-6 p-4 rounded-sm text-[11px] font-bold tracking-[2px] uppercase text-center transition-all ${feedback.type === 'success' ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-red-50 text-red-700 border border-red-100'}`}>
                  {feedback.text}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full md:w-auto md:min-w-87.5 md:mx-auto py-5 px-10 mt-4 bg-accent hover:bg-accent-hover text-white font-sans text-[11px] leading-normal font-bold tracking-[4px] uppercase transition-colors shadow-sm disabled:opacity-50 flex justify-center items-center"
              >
                {isLoading ? 'Guardando...' : 'Confirmar Asistencia'}
              </button>
            </form>
          </>
        ) : (
          <div className="mt-4 bg-green-50 border border-green-100 p-8 md:p-12 rounded-sm text-center animate-fade-in shadow-sm max-w-2xl mx-auto">
            <p className="text-green-800 font-bold text-[12px] md:text-[14px] uppercase tracking-[3px] mb-6">Confirmación Registrada</p>
            <p className="text-green-700 font-sans text-[14px] md:text-[16px] leading-relaxed max-w-lg mx-auto">
              Tu confirmación fue realizada correctamente. Si en caso quieres modificar o volver a enviar tu confirmación comunícate al siguiente número:
            </p>
            <a
              href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || "1234567890"}?text=${encodeURIComponent(`Hola, soy ${name}, tengo una consulta.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-[18px] md:text-[20px] font-bold tracking-widest text-accent hover:text-accent-hover transition-colors underline decoration-2 underline-offset-4"
            >
              {import.meta.env.VITE_WHATSAPP_NUMBER || "1234567890"}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
