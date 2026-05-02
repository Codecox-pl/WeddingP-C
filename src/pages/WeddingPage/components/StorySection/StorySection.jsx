/**
 * @file StorySection.jsx
 * @description Crea una conexión emocional inmediata detallando la "Nuestra Historia"
 * de amor mediante una fotografía enmarcada asimétricamente y un relato inspirador.
 */
import React from 'react';
import { GiPenguin } from 'react-icons/gi';

export default function StorySection() {
  return (
    <section className="max-w-6xl mx-auto py-16 md:py-24 px-6 sm:px-12 flex flex-col-reverse md:flex-row items-center gap-16">
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="bg-white p-4 pb-16 shadow-xl -rotate-2 max-w-sm w-full border border-gray-100">
          <div
            className="w-full aspect-4/5 bg-cover bg-center border border-black/5"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80")' }}
          />
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="font-serif mb-6 md:mb-12 text-text-primary text-[32px] leading-[1.15] md:text-5xl lg:text-6xl font-medium flex flex-nowrap justify-center md:justify-start items-center gap-2 md:gap-5 text-center md:text-left w-full">
          <GiPenguin className="text-[32px] md:text-5xl lg:text-6xl text-accent opacity-80 shrink-0" />
          <span className="leading-tight whitespace-normal min-w-0 text-center md:text-left">Nuestra Historia</span>
          <GiPenguin className="text-[32px] md:text-5xl lg:text-6xl text-accent opacity-80 scale-x-[-1] shrink-0" />
        </h2>
        <p className="font-sans text-[14px] sm:text-lg md:text-xl leading-relaxed mb-6 text-text-secondary text-center md:text-left font-medium">
          Todo comenzó con un chat, conversaciones interminables, llamadas de largas horas y la sensación instantánea de conocernos de toda la vida.
          Descubrimos rápidamente que compartíamos el mismo sentido de aventura, y la misma visión de la felicidad.
        </p>
        <p className="font-sans text-[14px] sm:text-lg md:text-xl leading-relaxed mb-6 text-text-secondary text-center md:text-left font-medium">
          Desde aquel entonces hemos cruzado océanos dificiles, construido nuestro propio rincón de paz y descubierto el amor más sincero de cada uno.
          Hoy, queremos celebrar contigo el inicio del capítulo más fundamental de nuestro viaje.
        </p>
        <p className="font-serif italic text-2xl sm:text-xl lg:text-4xl mt-10 text-accent text-center md:text-left font-medium leading-normal">
          "Y como los pingüinos eligen una pareja para toda la vida. Así nos elegimos nosotros"
        </p>
      </div>
    </section>
  );
}
