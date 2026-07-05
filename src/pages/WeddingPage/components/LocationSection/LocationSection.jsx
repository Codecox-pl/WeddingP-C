/**
 * @file LocationSection.jsx
 * @description Presenta la información clave de ubicación geográfica del evento.
 * Se divide en dos módulos independientes visualmente ('Ceremonia' y 'Recepción')
 * para garantizar la máxima claridad a los invitados. Posee integración directa 
 * con Google Maps y Waze.
 */
import React from 'react';
import { FiMapPin, FiNavigation } from 'react-icons/fi';
import { GiPenguin, GiPartyPopper } from 'react-icons/gi';
import { PiChurch } from "react-icons/pi";

export default function LocationSection() {

  // Función para manejar el disparo dinámico de las aplicaciones nativas de mapas
  const handleMapRedirect = (type, location) => {
    let url = "";

    // Algoritmo para ensamblar la URL correcta del proveedor de mapas y ubicación
    if (type === 'google') {
      if (location === 'ceremonia') {
        url = "https://maps.app.goo.gl/dQLx9mZUUjurUF7m7";
      } else {
        url = "https://maps.app.goo.gl/GLZoFbWYzf9ApooQA";
      }
    } else if (type === 'waze') {
      if (location === 'ceremonia') {
        url = "https://waze.com/ul/h6q0c40n0d";
      } else {
        url = "https://waze.com/ul/h6q0bf6ye7";
      }
    }

    // Ejecutamos la apertura en una nueva ventana para no sacar al usuario de la invitación web
    window.open(url, '_blank');
  };

  return (
    <section className="bg-transparent py-12 md:py-20 px-6 sm:px-12 border-t border-b border-black/5" id="ubicacion">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-serif mb-6 md:mb-10 text-text-primary text-[32px] leading-[1.15] font-medium md:text-5xl lg:text-6xl flex flex-nowrap justify-center items-center gap-2 md:gap-5 text-center px-2 w-full">
          <GiPenguin className="text-[32px] md:text-5xl lg:text-6xl text-accent opacity-80 shrink-0" />
          <span className="leading-tight whitespace-normal min-w-0 text-center">Ubicación</span>
          <GiPenguin className="text-[32px] md:text-5xl lg:text-6xl text-accent opacity-80 scale-x-[-1] shrink-0" />
        </h2>
        <p className="font-sans text-[13px] leading-relaxed font-normal mb-16 text-text-secondary max-w-2xl mx-auto uppercase tracking-wide md:text-sm">
          Te esperamos en la provincia de Huaura. Consulta los mapas para llegar sin contratiempos.
        </p>

        {/* CSS Grid para distribuir perfectamente las tarjetas. 1 Columna en Móvil, 2 en Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

          {/* == Tarjeta 1: Ceremonia == */}
          <div className="bg-white p-8 md:p-12 shadow-lg border border-black/5 flex flex-col items-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 border-2 border-accent rounded-full flex items-center justify-center mb-6">
              <PiChurch className="text-accent text-3xl" />
            </div>

            <h4 className="font-sans text-[11px] leading-normal font-bold uppercase tracking-[4px] text-accent mb-3">Ceremonia Religiosa</h4>
            <h3 className="font-sans text-[18px] leading-tight font-semibold md:text-[22px] text-text-primary mb-2">Iglesia Nuestra Señora del Carmen</h3>
            <h3 className="font-sans text-[15px] leading-tight font-normal md:text-[16px] text-text-primary mb-4">Hora: 11:00 am</h3>

            {/* Contenedor flexible para garantizar que ambas tarjetas midan exactamente igual sin importar el texto */}
            <div className="flex-1 flex flex-col justify-start items-center mt-2">
              <p className="font-sans text-[16px] leading-normal font-normal md:text-lg text-text-secondary max-w-70">
                <span className="text-text-primary">Av. Panamericana Nte.</span><br />
                Huaura 15138
              </p>
            </div>

            {/* Contenedor de Botones de GPS */}
            <div className="flex flex-col gap-3 w-full justify-end mt-8">
              <button
                onClick={() => handleMapRedirect('google', 'ceremonia')}
                className="flex justify-center items-center gap-3 px-6 py-4 bg-accent text-white font-sans text-xs tracking-[3px] uppercase hover:bg-accent-hover transition-colors rounded-sm shadow-md"
              >
                <FiMapPin className="text-lg" /> Google Maps
              </button>
              <button
                onClick={() => handleMapRedirect('waze', 'ceremonia')}
                className="flex justify-center items-center gap-3 px-6 py-4 bg-accent text-white font-sans text-xs tracking-[3px] uppercase hover:bg-accent-hover transition-colors rounded-sm shadow-md"
              >
                <FiNavigation className="text-lg" /> Waze
              </button>
            </div>
          </div>

          {/* == Tarjeta 2: Recepción == */}
          <div className="bg-white p-8 md:p-12 shadow-lg border border-black/5 flex flex-col items-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 border-2 border-accent rounded-full flex items-center justify-center mb-6">
              <GiPartyPopper className="text-accent text-3xl" />
            </div>

            <h4 className="font-sans text-[11px] leading-normal font-bold uppercase tracking-[4px] text-accent mb-3">Recepción</h4>
            <h3 className="font-sans text-[18px] leading-tight font-semibold md:text-[22px] text-text-primary mb-2">La Estancia</h3>
            <h3 className="font-sans text-[15px] leading-tight font-normal md:text-[16px] text-text-primary mb-4">Hora: 2:00 pm</h3>
            <div className="flex-1 flex flex-col justify-start items-center mt-2">
              <p className="font-sans text-[16px] leading-normal font-normal md:text-lg text-text-secondary max-w-70">
                <span className="text-text-primary">El Milagro 540</span><br />
                Santa María 15137
              </p>
            </div>

            <div className="flex flex-col gap-3 w-full justify-end mt-8">
              <button
                onClick={() => handleMapRedirect('google', 'recepcion')}
                className="flex justify-center items-center gap-3 px-6 py-4 bg-accent text-white font-sans text-xs tracking-[3px] uppercase hover:bg-accent-hover transition-colors rounded-sm shadow-md"
              >
                <FiMapPin className="text-lg" /> Google Maps
              </button>
              <button
                onClick={() => handleMapRedirect('waze', 'recepcion')}
                className="flex justify-center items-center gap-3 px-6 py-4 bg-accent text-white font-sans text-xs tracking-[3px] uppercase hover:bg-accent-hover transition-colors rounded-sm shadow-md"
              >
                <FiNavigation className="text-lg" /> Waze
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
