/**
 * @file HeroSection.jsx
 * @description Contiene la vista inicial interactiva. Muestra los nombres de los novios,
 * refactorizado para utilizar componentes aislados/widgets que manejan independientemente el contador y el sistema de calendario.
 */
import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { motion } from 'framer-motion';
import CountdownWidget from '../../../../components/CountdownWidget/CountdownWidget';
import CalendarWidget from '../../../../components/CalendarWidget/CalendarWidget';

export default function HeroSection() {
  const targetDate = '2026-09-12T12:00:00';

  const eventDetails = {
    title: "Boda de Patrick y Claudia",
    description: "¡Te esperamos para celebrar este gran día con nosotros! Toda la logística la encuentras en la invitación virtual.",
    location: "Hacienda Los Arcángeles, San Miguel de Allende",
    startObj: new Date('2026-09-12T12:00:00'),
    endObj: new Date('2026-09-13T02:00:00') // Fiesta hasta las 2 AM
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/d/1_Ro6x72p1OiEEJuqnkW_0RqQMc299rMx")', filter: 'brightness(0.75)' }}
      />
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative z-10 text-center text-white px-4 flex flex-col items-center translate-y-[-5%]">
        <h1 className="text-[40px] leading-[1.1] font-[500] md:text-8xl font-serif mb-6 drop-shadow-md">Patrick & Claudia</h1>

        {/* Widget Independiente del Contador */}
        <CountdownWidget targetDate={targetDate} />

        {/* Widget Independiente de Calendario (Detección Auto-OS) */}
        <CalendarWidget eventDetails={eventDetails} />
      </div>

      {/* Indicador animado para deslizar hacia abajo */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 flex flex-col items-center justify-center text-white/80 cursor-pointer hover:text-white transition-colors z-20"
        onClick={() => document.getElementById('historia')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="font-sans text-[9px] uppercase tracking-[4px] mb-2 drop-shadow-md font-semibold">Deslizar</span>
        <FiChevronDown className="text-2xl drop-shadow-md" />
      </motion.div>
    </section>
  );
}
