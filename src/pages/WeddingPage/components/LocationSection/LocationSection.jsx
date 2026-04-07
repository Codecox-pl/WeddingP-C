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
        url = "https://www.google.com/maps/search/?api=1&query=[DIRECCION_CEREMONIA]";
      } else {
        url = "https://maps.app.goo.gl/[LINK_RECEPCION]";
      }
    } else if (type === 'waze') {
      if (location === 'ceremonia') {
        // Si el usuario usa móvil y tiene la app, "waze://?q=" dispara la app directamente
        url = "https://waze.com/ul?q=[DIRECCION_CEREMONIA]&navigate=yes";
      } else {
        url = "https://waze.com/ul?q=[DIRECCION_RECEPCION]&navigate=yes";
      }
    }

    // Ejecutamos la apertura en una nueva ventana para no sacar al usuario de la invitación web
    window.open(url, '_blank');
  };

  return (
    <section className="bg-white/40 py-12 md:py-20 px-6 sm:px-12 border-t border-b border-black/5" id="ubicacion">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-serif mb-6 md:mb-10 text-text-primary text-[32px] leading-[1.15] font-[500] md:text-5xl lg:text-6xl flex flex-nowrap justify-center items-center gap-2 md:gap-5 text-center px-2 w-full">
          <GiPenguin className="text-[32px] md:text-5xl lg:text-6xl text-accent opacity-80 shrink-0" />
          <span className="leading-tight whitespace-normal min-w-0 text-center">Ubicación</span>
          <GiPenguin className="text-[32px] md:text-5xl lg:text-6xl text-accent opacity-80 scale-x-[-1] shrink-0" />
        </h2>
        <p className="font-sans text-[14px] leading-[1.4] font-[400] mb-16 text-text-secondary uppercase tracking-[2px] md:text-sm">
          Te esperamos en la provincia de Huaura. Consulta los mapas para llegar sin contratiempos.
        </p>

        {/* CSS Grid para distribuir perfectamente las tarjetas. 1 Columna en Móvil, 2 en Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

          {/* == Tarjeta 1: Ceremonia == */}
          <div className="bg-white p-8 md:p-12 shadow-lg border border-black/5 flex flex-col items-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 border-2 border-accent rounded-full flex items-center justify-center mb-6">
              <PiChurch className="text-accent text-3xl" />
            </div>

            <h4 className="font-sans text-[11px] leading-[1.5] font-[700] uppercase tracking-[4px] text-accent mb-3">Ceremonia Religiosa</h4>
            <h3 className="font-serif text-[22px] leading-[1.25] font-[500] md:text-3xl text-text-primary tracking-wide mb-4">Iglesia Nuestra Señora del Carmen</h3>

            {/* Contenedor flexible para garantizar que ambas tarjetas midan exactamente igual sin importar el texto */}
            <div className="flex-1 flex flex-col justify-start items-center mt-2">
              <p className="font-sans text-[16px] leading-[1.5] font-[400] md:text-lg text-text-secondary max-w-[280px]">
                <strong className="text-text-primary font-[600] text-[16px] md:text-lg">Av. Panamericana Nte.</strong><br />
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
                className="flex justify-center items-center gap-3 px-6 py-4 bg-[#bfa18f] text-white font-sans text-xs tracking-[3px] uppercase hover:bg-[#a68c7c] transition-colors rounded-sm shadow-md"
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

            <h4 className="font-sans text-[11px] leading-[1.5] font-[700] uppercase tracking-[4px] text-accent mb-3">Recepción</h4>
            <h3 className="font-serif text-[22px] leading-[1.25] font-[500] md:text-3xl text-text-primary tracking-wide mb-4">La Estancia</h3>
            <div className="flex-1 flex flex-col justify-start items-center mt-2">
              <p className="font-sans text-[16px] leading-[1.5] font-[400] md:text-lg text-text-secondary max-w-[280px]">
                <strong className="text-text-primary font-[600] text-[16px] md:text-lg">El Milagro 540</strong><br />
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
                className="flex justify-center items-center gap-3 px-6 py-4 bg-[#bfa18f] text-white font-sans text-xs tracking-[3px] uppercase hover:bg-[#a68c7c] transition-colors rounded-sm shadow-md"
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
