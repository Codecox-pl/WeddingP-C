import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoginModal({ onAuthenticated }) {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!code.trim()) {
      setError('Por favor ingresa un código.');
      return;
    }

    setError('');
    setIsLoading(true);

    try {
      // API_URL será cargado desde config o env. Temporalmente es vacía.
      const API_URL = import.meta.env.VITE_SCRIPT_URL;

      // Si aún no tenemos API_URL configurada en Google, usaremos un mock rápido local
      // para que el desarrollo no se detenga.
      if (!API_URL) {
        setTimeout(() => {
          if (code.toUpperCase() === 'PH2026') {
            onAuthenticated({ code: 'PH2026', name: 'Patrick Hernández', passes: 2, row: 2 });
          } else {
            setError('Código inválido. Intenta con PH2026');
            setIsLoading(false);
          }
        }, 800);
        return;
      }

      // Llamada real (Añadimos t=Date.now() para evitar que el navegador guarde en caché respuestas antiguas)
      const response = await fetch(`${API_URL}?action=verify&code=${encodeURIComponent(code)}&t=${Date.now()}`);
      const data = await response.json();

      if (data.success) {
        onAuthenticated(data.guest); // Pasamos los datos del invitado al componente padre
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

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-100 flex items-center justify-center bg-wedding-bg/95 backdrop-blur-sm p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white p-8 md:p-10 shadow-2xl max-w-sm w-full text-center border border-black/5"
          initial={{ y: 20, scale: 0.95 }}
          animate={{ y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <div className="mb-8">
            <h2 className="text-[32px] md:text-4xl font-serif text-text-primary mb-2 leading-tight">Bienvenidos</h2>
            <p className="text-text-secondary font-sans text-[12px] leading-relaxed tracking-wider uppercase">Por favor, ingresa tu código de invitación para acceder.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                value={code}
                onChange={(e) => {
                  const cleanedValue = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
                  setCode(cleanedValue);
                  if (error) setError('');
                }}
                maxLength={6}
                placeholder="Ej. AA2026"
                className="w-full text-center text-[16px] font-sans font-medium tracking-[3px] border-b border-[#e5d5cb] py-3 focus:outline-none focus:border-accent bg-transparent text-text-secondary uppercase"
                disabled={isLoading}
              />
            </div>

            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <p className="text-red-500 font-sans text-[11px] leading-normal tracking-[2px] uppercase font-bold bg-red-50 py-2 rounded-sm w-max mx-auto px-4 border border-red-100">
                    {error}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 mt-2 bg-[#bfa18f] hover:bg-[#a68c7c] text-white font-sans text-[11px] leading-normal font-bold tracking-[4px] uppercase transition-colors shadow-sm disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                'Validar Código'
              )}
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
