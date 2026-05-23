/**
 * @file CodeForm.jsx
 * @description Formulario de ingreso de código de invitación.
 * Maneja validación, llamada a la API y mensajes de error.
 */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CodeForm({ onAuthenticated }) {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!code.trim()) {
      setError('Por favor ingresa tu código.');
      return;
    }

    setError('');
    setIsLoading(true);

    try {
      const API_URL = import.meta.env.VITE_SCRIPT_URL;
      const response = await fetch(`${API_URL}?action=verify&code=${encodeURIComponent(code)}&t=${Date.now()}`);
      const data = await response.json();

      if (data.success) {
        onAuthenticated(data.guest);
      } else {
        setError(data.error || 'Código inválido. Intenta de nuevo.');
        setIsLoading(false);
      }
    } catch (err) {
      console.error(err);
      setError('Error de conexión. Intenta de nuevo.');
      setIsLoading(false);
    }
  };

  const handleCodeChange = (e) => {
    const cleanedValue = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
    setCode(cleanedValue);
    if (error) setError('');
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1, duration: 0.7 }}
      className="w-full space-y-5"
    >
      <p className="font-sans text-[10px] md:text-[11px] uppercase tracking-[3px] text-white/60 mb-1">
        Ingresa tu código de invitación
      </p>

      <input
        type="text"
        value={code}
        onChange={handleCodeChange}
        maxLength={6}
        placeholder="Ej. AA2026"
        className="w-full text-center text-[18px] font-sans font-medium tracking-[5px] bg-white/10 backdrop-blur-sm border border-white/25 py-4 px-4 focus:outline-none focus:border-white/60 text-white placeholder-white/30 uppercase transition-all duration-300 rounded-sm"
        disabled={isLoading}
        autoComplete="off"
      />

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="text-red-300 font-sans text-[10px] leading-normal tracking-[2px] uppercase font-bold bg-red-500/20 backdrop-blur-sm py-2 rounded-sm w-max mx-auto px-4 border border-red-400/30 overflow-hidden"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-4 bg-accent hover:bg-accent-hover text-white font-sans text-[11px] leading-normal font-bold tracking-[4px] uppercase transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center rounded-sm"
      >
        {isLoading ? (
          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          'Abrir mi Invitación'
        )}
      </button>
    </motion.form>
  );
}
