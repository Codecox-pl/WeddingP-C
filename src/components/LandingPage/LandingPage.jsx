/**
 * @file LandingPage.jsx
 * @description Página de bienvenida con código de invitación integrado.
 * Compone visualmente: fondo hero, encabezado con nombres/fecha, y formulario de código.
 */
import React from 'react';
import { motion } from 'framer-motion';
import HeroBackground from './HeroBackground';
import WeddingHeader from './WeddingHeader';
import CodeForm from './CodeForm';

export default function LandingPage({ onAuthenticated }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
    >
      <HeroBackground />

      <div className="relative z-10 text-center px-6 w-full max-w-md flex flex-col items-center">
        <WeddingHeader />
        <CodeForm onAuthenticated={onAuthenticated} />
      </div>
    </motion.div>
  );
}
