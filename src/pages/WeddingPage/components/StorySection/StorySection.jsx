/**
 * @file StorySection.jsx
 * @description Crea una conexión emocional inmediata detallando la "Nuestra Historia"
 * de amor mediante una fotografía enmarcada asimétricamente y un relato inspirador.
 */
import React from 'react';
import { GiPenguin } from 'react-icons/gi';

export default function StorySection() {
  return (
    <section className="max-w-6xl mx-auto py-16 md:py-24 px-6 sm:px-12">
      {/* Título centrado en la parte superior para Desktop y Móvil */}
      <h2 className="font-serif mb-12 md:mb-20 text-text-primary text-[32px] leading-[1.15] md:text-5xl lg:text-6xl font-medium flex flex-nowrap justify-center items-center gap-2 md:gap-5 text-center w-full">
        <GiPenguin className="text-[32px] md:text-5xl lg:text-6xl text-accent opacity-80 shrink-0" />
        <span className="leading-tight whitespace-normal min-w-0 text-center">Nuestra Historia</span>
        <GiPenguin className="text-[32px] md:text-5xl lg:text-6xl text-accent opacity-80 scale-x-[-1] shrink-0" />
      </h2>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="bg-white p-4 pb-16 shadow-xl -rotate-2 max-w-sm lg:max-w-md w-full border border-gray-100">
            <div
              className="w-full aspect-4/5 bg-cover bg-center border border-black/5"
              style={{ backgroundImage: 'url("https://res.cloudinary.com/dlpxjxb9k/image/upload/c_scale,w_1200,q_auto:best,f_auto/v1781236461/foto-g-4_mqi0dc.jpg")' }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <p className="font-sans text-[15px] sm:text-lg md:text-xl leading-relaxed mb-6 text-text-secondary text-center lg:text-left font-medium">
            Todo comenzó con un chat, conversaciones interminables, llamadas de largas horas y la sensación instantánea de conocernos de toda la vida.
            Descubrimos rápidamente que compartíamos el mismo sentido de aventura, y la misma visión de la felicidad.
          </p>
          <p className="font-sans text-[15px] sm:text-lg md:text-xl leading-relaxed mb-6 text-text-secondary text-center lg:text-left font-medium">
            Desde aquel entonces hemos cruzado océanos dificiles, construido nuestro propio rincón de paz y descubierto el amor más sincero de cada uno.
            Hoy, queremos celebrar contigo el inicio del capítulo más fundamental de nuestro viaje.
          </p>
          <p className="font-serif italic text-2xl sm:text-xl md:text-3xl lg:text-4xl mt-10 text-accent text-center lg:text-left font-medium leading-normal">
            "Y como los pingüinos eligen una pareja para toda la vida. Así nos elegimos nosotros"
          </p>
        </div>
      </div>
    </section>
  );
}
