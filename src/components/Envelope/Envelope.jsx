import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Seal from '../Seal/Seal';

export default function Envelope({ onOpen, guestData }) {
  const [isOpening, setIsOpening] = useState(false);
  const firstName = guestData?.name ? guestData.name.split(' ')[0] : 'Invitado Especial';

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);
    // Sequence: 
    // 0s: Seal fades, Flap opens
    // 0.5s: Card slides up
    // 1.5s: Fade out entire overlay
    setTimeout(() => {
      onOpen();
    }, 1100);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <AnimatePresence>
        {guestData && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isOpening ? 0 : 1, y: 0 }}
            transition={isOpening ? { duration: 0.3 } : { delay: 0.8, duration: 0.8 }}
            className="mb-8 md:mb-12 text-center"
          >
            <h3 className="font-sans text-[11px] tracking-widest uppercase text-text-secondary">Toca el sobre para abrir</h3>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-[90%] max-w-[380px] h-[240px] cursor-pointer block mx-auto group"
        onClick={handleOpen}
        style={{ perspective: '1200px' }}
      >
        {/* Parte trasera del sobre (Fondo) */}
        <div className="absolute inset-0 bg-envelope rounded-lg shadow-xl border border-black/10" />

        {/* Tarjeta de Invitación (Paper) */}
        <div
          className="absolute left-3 right-3 top-3 bottom-3 bg-[#fdfbf9] rounded-sm shadow-md flex flex-col items-center justify-center p-4"
          style={{
            transform: isOpening ? 'translateY(-160px)' : 'translateY(0)',
            transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), z-index 0s',
            transitionDelay: isOpening ? '0.4s, 0.4s' : '0s, 0s',
            zIndex: isOpening ? 40 : 10
          }}
        >
          <div className="border border-accent/30 w-full h-full flex flex-col items-center justify-center rounded-sm">
            <h4 className="font-sans text-[10px] tracking-[3px] uppercase text-text-secondary mb-2">Bienvenid@</h4>
            <h2 className="font-serif text-2xl text-text-primary capitalize">{firstName}</h2>
          </div>
        </div>

        {/* Bolsillo Frontal del sobre (Front Pocket) */}
        <div
          className="absolute inset-0 bg-envelope rounded-lg z-20 overflow-hidden"
          style={{
            clipPath: 'polygon(0 0, 50% 56%, 100% 0, 100% 100%, 0 100%)',
            boxShadow: 'inset 0 0 10px rgba(0,0,0,0.05)'
          }}
        >
          {/* Líneas divisorias del bolsillo frontal */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40 mix-blend-multiply" viewBox="0 0 380 240" fill="none" preserveAspectRatio="none">
            {/* Diagonal inferior */}
            <path d="M0 240 L190 135 L380 240" stroke="#bfa18f" strokeWidth="2" strokeLinejoin="round" />
            {/* Diagonales laterales */}
            <path d="M0 0 L190 135" stroke="#bfa18f" strokeWidth="2" strokeLinejoin="round" />
            <path d="M380 0 L190 135" stroke="#bfa18f" strokeWidth="2" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Solapa superior del sobre */}
        <div
          className="absolute top-0 left-0 right-0 h-[58%] bg-envelope-flap rounded-t-lg z-30"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
            transformOrigin: 'top',
            transform: isOpening ? 'rotateX(180deg)' : 'rotateX(0deg)',
            transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
            filter: isOpening ? 'none' : 'drop-shadow(0px 6px 4px rgba(0,0,0,0.15))'
          }}
        >
          {/* Sombra interior de la solapa cuando está abierta para darle realismo */}
          <div
            className="absolute inset-0 bg-black/5"
            style={{ opacity: isOpening ? 1 : 0, transition: 'opacity 0.6s' }}
          />
        </div>

        {/* Sello de acento centrado */}
        <div
          className="absolute left-1/2 top-[48%] z-40 pointer-events-none"
          style={{
            transform: isOpening ? 'translate(-50%, -50%) scale(1.5)' : 'translate(-50%, -50%) scale(1)',
            opacity: isOpening ? 0 : 1,
            transition: 'all 0.4s ease-in-out'
          }}
        >
          <Seal />
        </div>


      </motion.div>
    </div>
  );
}
