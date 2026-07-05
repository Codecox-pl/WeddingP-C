import React from 'react';

export default function FamilySection() {
  return (
    <section className="bg-[#fcfbf9] py-20 md:py-32 px-6 border-t border-black/5 relative overflow-hidden">
      {/* Decorative subtle element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-accent/30"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">

        {/* Intro */}
        <p className="font-sans text-[10px] md:text-xs uppercase tracking-[4px] text-accent mb-12 md:mb-16 font-bold">
          Con la bendición de Dios y nuestros padres
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 mb-20">
          {/* Parents of the Groom */}
          <div className="flex flex-col items-center">
            <h3 className="font-sans text-[9px] uppercase tracking-widest text-text-secondary mb-6 opacity-70">
              Padres del Novio
            </h3>
            <div className="space-y-4">
              <p className="font-serif text-2xl md:text-3xl text-text-primary italic">Walter Edde Luis Villanueva</p>
              <p className="font-serif text-2xl md:text-3xl text-text-primary italic">&amp;</p>
              <p className="font-serif text-2xl md:text-3xl text-text-primary italic">Madeleyne Graviela Muñoz Obispo</p>
            </div>
          </div>

          {/* Parents of the Bride */}
          <div className="flex flex-col items-center">
            <h3 className="font-sans text-[9px] uppercase tracking-widest text-text-secondary mb-6 opacity-70">
              Padres de la Novia
            </h3>
            <div className="space-y-4">
              <p className="font-serif text-2xl md:text-3xl text-text-primary italic">Eduardo Javier Ruiz Canales</p>
              <p className="font-serif text-2xl md:text-3xl text-text-primary italic">&amp;</p>
              <p className="font-serif text-2xl md:text-3xl text-text-primary italic"> Lidia Ruiz Bazalar</p>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="flex justify-center items-center gap-4 mb-20 opacity-50">
          <div className="w-12 h-px bg-accent"></div>
          <div className="w-2 h-2 rounded-full border border-accent"></div>
          <div className="w-12 h-px bg-accent"></div>
        </div>

        {/* Godparents */}
        <div className="flex flex-col items-center">
          <h3 className="font-sans text-[10px] uppercase tracking-[4px] text-accent mb-8 font-bold">
            Nuestros Padrinos
          </h3>
          <div className="space-y-4">
            <p className="font-serif text-2xl md:text-3xl text-text-primary italic">Óscar Armando Quiñonez López</p>
            <p className="font-serif text-2xl md:text-3xl text-text-primary italic">&amp;</p>
            <p className="font-serif text-2xl md:text-3xl text-text-primary italic">Guadalupe Corina Ruiz Canales</p>
          </div>
        </div>

      </div>
    </section>
  );
}
