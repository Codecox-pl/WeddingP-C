/**
 * @file WeddingHeader.jsx
 * @description Encabezado decorativo con los nombres y fecha del evento.
 */
import React from 'react';
import { motion } from 'framer-motion';

export default function WeddingHeader() {
  return (
    <>
      {/* Línea decorativa superior */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
        className="w-16 h-px bg-white/50 mb-8"
      />

      {/* Subtítulo */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="font-sans text-[10px] md:text-[11px] uppercase tracking-[5px] text-white/70 mb-4"
      >
        Estás invitad@ a la boda de
      </motion.p>

      {/* Nombres */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
        className="text-[42px] leading-[1.05] md:text-7xl font-serif text-white mb-3 drop-shadow-lg font-medium"
      >
        Patrick & Claudia
      </motion.h1>

      {/* Fecha */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="font-sans text-[11px] md:text-[13px] uppercase tracking-[4px] text-white/80 mb-10"
      >
        12 · Septiembre · 2026
      </motion.p>

      {/* Línea divisora */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="w-10 h-px bg-white/30 mb-10"
      />
    </>
  );
}
