/**
 * @file TimelineSection.jsx
 * @description Crea una línea de tiempo estructurada para que los invitados 
 * comprendan el flujo visual u "horario" planificado a disfrutar el día de la boda.
 */
import React from 'react';
import { GiPenguin } from 'react-icons/gi';

export default function TimelineSection() {
  const schedule = [
    {
       time: "12:00",
       title: "Ceremonia Religiosa",
       desc: "Lectura de votos y lágrimas de alegría aseguradas en la iglesia."
    },
    {
       time: "14:00",
       title: "Recepción y Almuerzo",
       desc: "Aperitivos, música suave y primeros brindis en la hacienda."
    },
    {
       time: "16:00",
       title: "Primer Baile y Pastel",
       desc: "Momento de recargar energías y partir nuestro gran pastel."
    },
    {
       time: "18:00",
       title: "¡Que comience la Fiesta!",
       desc: "A dejarlo todo en la pista de baile. Zapatos cómodos indispensables."
    },
    {
       time: "22:00",
       title: "Fin de la Celebración",
       desc: "Agradecemos tu inolvidable compañía en este día tan especial."
    }
  ];

  return (
    <section className="max-w-4xl mx-auto py-16 md:py-28 px-6">
       <h2 className="font-serif mb-12 md:mb-24 text-text-primary text-[32px] leading-[1.15] font-[500] md:text-5xl lg:text-6xl flex flex-nowrap justify-center items-center gap-2 md:gap-5 text-center px-2 w-full">
          <GiPenguin className="text-[32px] md:text-5xl lg:text-6xl text-accent opacity-80 shrink-0" />
          <span className="leading-tight whitespace-normal min-w-0 text-center">El Cronograma</span>
          <GiPenguin className="text-[32px] md:text-5xl lg:text-6xl text-accent opacity-80 scale-x-[-1] shrink-0" />
        </h2>
       
       <div className="relative border-l border-[#c0d6c0] ml-[25px] md:ml-[50%] space-y-16">
          {schedule.map((item, idx) => (
             <div key={idx} className={`relative flex flex-col md:flex-row md:justify-between items-center md:-ml-[50%] w-full ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Dot */}
                <div className="absolute left-[-29px] md:left-[50%] md:-ml-[6.5px] w-3 h-3 bg-[#a2c2a2] rounded-full z-10 shadow-[0_0_0_6px_#f6e5db]" />
                
                <div className={`w-full md:w-5/12 ml-8 md:ml-0 ${idx % 2 === 0 ? 'md:text-right pr-0 md:pr-12' : 'md:text-left pl-0 md:pl-12'}`}>
                    <h3 className="text-[18px] leading-[1.3] font-[500] md:text-3xl font-serif text-accent mb-2">{item.time}</h3>
                    <h4 className="font-sans text-[22px] leading-[1.25] font-[500] md:text-2xl mb-2 text-text-primary tracking-wide">{item.title}</h4>
                    <p className="font-sans text-[16px] leading-[1.5] font-[400] text-text-secondary md:text-lg">{item.desc}</p>
                </div>
                
                {/* Espaciador vacío para equilibrar el diseño en zig-zag sin imágenes en PC */}
                <div className="hidden md:block md:w-5/12" />
             </div>
          ))}
       </div>
    </section>
  );
}
