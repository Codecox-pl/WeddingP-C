import React from 'react';
import { motion } from 'framer-motion';
import Seal from './Seal';

export default function Envelope({ onOpen }) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 1.1, opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
      className="relative w-[90%] max-w-[380px] h-[240px] cursor-pointer block mx-auto"
      onClick={onOpen}
    >
      <div className="absolute inset-0 bg-envelope rounded-lg shadow-[0_12px_30px_rgba(0,0,0,0.06)] flex justify-center items-center border border-black/5">
        
        {/* Solapa del sobre */}
        <div 
          className="absolute top-0 left-0 right-0 h-[55%] bg-envelope-flap rounded-t-lg border-b border-black/5"
          style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }} 
        />

        <Seal />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute -bottom-10 font-sans text-[11px] tracking-widest uppercase text-text-secondary w-full text-center"
        >
          Toca el sello para abrir
        </motion.div>
      </div>
    </motion.div>
  );
}
