import React from 'react';
import { motion } from 'framer-motion';

export default function InvitationCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white px-10 py-[60px] rounded shadow-[0_25px_50px_rgba(0,0,0,0.05)] w-[90%] max-w-[420px] text-center border border-black/5 mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <h3 className="font-sans text-accent uppercase tracking-[3px] text-[11px] mb-5">
          Tenemos el honor de invitarte
        </h3>
        
        <h1 className="text-[42px] mb-[15px] text-text-primary leading-tight font-serif">
          Eugenio<br/>
          <span className="text-2xl font-light italic">&</span> Valeria
        </h1>
        
        <div className="w-[1px] h-[40px] bg-accent mx-auto my-[25px]" />
        
        <p className="text-text-secondary mb-[35px] text-lg leading-relaxed font-serif">
          Acompáñanos a celebrar el comienzo de nuestra historia.
        </p>
        
        <div className="mb-[30px]">
          <h2 className="text-[22px] mb-[5px] font-serif">24 de Octubre, 2026</h2>
          <p className="font-sans text-text-secondary text-[12px] tracking-[1px]">16:00 HORAS</p>
        </div>

        <div>
          <h2 className="text-[20px] mb-[5px] font-serif">Hacienda Los Arcángeles</h2>
          <p className="font-sans text-text-secondary text-[11px] tracking-[1px]">SAN MIGUEL DE ALLENDE, GTO.</p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-[50px] px-[35px] py-[14px] bg-accent hover:bg-accent-hover text-white flex border-none mx-auto justify-center
                     rounded-sm font-sans text-[11px] tracking-[2px] uppercase cursor-pointer transition-colors duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.1)]"
        >
          Confirmar Asistencia
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
