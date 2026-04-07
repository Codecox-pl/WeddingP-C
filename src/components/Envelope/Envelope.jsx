import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Seal from '../Seal/Seal';

export default function Envelope({ onOpen, guestData }) {
  const firstName = guestData?.name ? guestData.name.split(' ')[0] : 'Invitado Especial';

  return (
    <div className="flex flex-col items-center w-full">
      <AnimatePresence>
        {guestData && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-8 md:mb-12 text-center"
          >
            <h3 className="font-sans text-[12px] tracking-[4px] uppercase text-text-secondary mb-2">Una invitación para</h3>
            <h2 className="font-serif text-4xl md:text-5xl text-text-primary capitalize">{firstName}</h2>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 1.1, opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
        className="relative w-[90%] max-w-[380px] h-[240px] cursor-pointer block mx-auto group"
        onClick={onOpen}
      >
        {/* Cuerpo del Sobre */}
        <div className="absolute inset-0 bg-envelope rounded-lg shadow-xl flex justify-center items-center border border-black/10 overflow-hidden">
          
          {/* Líneas divisorias del sobre (efecto pliegue interior) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40 mix-blend-multiply" viewBox="0 0 380 240" fill="none" preserveAspectRatio="none">
             {/* Diagonal 1 (Abajo izquierda al centro) */}
             <path d="M0 240 L190 135 L380 240" stroke="#bfa18f" strokeWidth="2" strokeLinejoin="round" />
             {/* Diagonal 2 (Arriba hacia el centro) */}
             <path d="M0 0 L190 135 L380 0" stroke="#bfa18f" strokeWidth="2" strokeLinejoin="round" />
          </svg>

          {/* Solapa superior del sobre */}
          <div 
            className="absolute top-0 left-0 right-0 h-[58%] bg-envelope-flap rounded-t-lg transition-transform duration-500 origin-top group-hover:-translate-y-1"
            style={{ 
              clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
              filter: 'drop-shadow(0px 6px 4px rgba(0,0,0,0.15))' 
            }} 
          />
          
          {/* Sello de acento centrado y ajustado */}
          <div className="absolute top-[48%] -translate-y-1/2 group-hover:-translate-y-[52%] transition-transform duration-500">
             <Seal />
          </div>
        </div>
        
        {/* Texto de Acción (Fuera del overflow-hidden para que se vea abajo) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute -bottom-10 font-sans text-[11px] tracking-widest uppercase text-text-secondary w-full text-center"
        >
          Toca el sello para abrir
        </motion.div>
      </motion.div>
    </div>
  );
}
