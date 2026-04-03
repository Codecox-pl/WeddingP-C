/**
 * @file FAQSection.jsx
 * @description Listado de las "Preguntas Frecuentes" expandibles, diseñado para 
 * anticipar las posibles dudas de los invitados (relativas a niños, estacionamiento,
 * fechas límite, menú) y agilizar la comunicación con los novios.
 */
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { GiPenguin } from 'react-icons/gi';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(null);

  const faqData = [
    { q: "¿Puedo llevar a niños al evento?", a: "Amamos a los más pequeños, pero hemos decidido que la recepción sea un evento para 'adultos' (mayores de 15 años). ¡Aprovechen la noche libre para bailar!" },
    { q: "¿Cuentan con estacionamiento propio (Valet Parking)?", a: "Sí, la hacienda cuenta con un área privada de estacionamiento muy seguro. Sin embargo, si planean beber, recomendamos ampliamente el uso de Taxis/Didi/Uber de la ciudad." },
    { q: "¿Hay menú disponible pensado para alergias o vegetarianos?", a: "Totalmente. En el módulo de Cuestionario/Asistencia (RSVP) de más arriba, asegúrate de indicarlo en la sección correspondiente." },
    { q: "¿Hasta qué fecha es el límite de confirmación?", a: "Requerimos su asistencia confirmada digitalmente antes del 15 de Septiembre. De lo contrario, lamentosamente tendremos que liberar sus lugares." },
    { q: "¿El regalo debe ser un objeto físico?", a: "No es obligatorio. Sugerimos aportaciones voluntarias a la cuenta bancaria de la Mesa de Regalos ('Lluvia de Sobres') dada la practicidad para nuestro viaje, pero cualquier detalle físico también será muy apreciado allí." }
  ];

  const onToggle = (idx) => setOpenIdx(openIdx === idx ? null : idx);

  return (
    <section className="bg-transparent py-24 px-6 md:px-12 border-t border-black/5">
       <div className="max-w-4xl mx-auto">
          <h2 className="md:text-center font-serif mb-16 text-text-primary justify-center text-3xl md:text-5xl flex flex-wrap justify-center items-center gap-2 md:gap-4 text-center px-2">
          <GiPenguin className="text-2xl md:text-4xl text-accent opacity-80" />
          <span className="leading-tight break-words max-w-full">F.A.Q.</span>
          <GiPenguin className="text-2xl md:text-4xl text-accent opacity-80 scale-x-[-1]" />
        </h2>
          
          <div className="space-y-4">
             {faqData.map((faq, idx) => (
                <div 
                  key={idx} 
                  className={`bg-white border transition-colors cursor-pointer p-6 md:p-8 rounded-sm shadow-sm ${openIdx === idx ? 'border-accent' : 'border-black/5 hover:border-black/20'}`}
                  onClick={() => onToggle(idx)}
                >
                   <div className="flex justify-between items-center gap-4">
                      <h3 className="font-sans font-semibold text-[13px] md:text-sm text-text-primary uppercase tracking-wide">
                        {faq.q}
                      </h3>
                      <div className="text-accent text-xl">
                         {openIdx === idx ? <FiChevronUp /> : <FiChevronDown />}
                      </div>
                   </div>
                   
                   {openIdx === idx && (
                      <div className="font-sans text-[13px] md:text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-accent/20">
                        {faq.a}
                      </div>
                   )}
                </div>
             ))}
          </div>
       </div>
    </section>
  );
}
