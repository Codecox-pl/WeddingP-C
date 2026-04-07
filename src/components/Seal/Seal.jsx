import React from 'react';
import { motion } from 'framer-motion';
// Importamos el ícono específico. El "/gi" indica que es de la colección GameIcons
import { GiPenguin } from 'react-icons/gi';

export default function Seal() {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: -5 }}
      whileTap={{ scale: 0.95 }}
      className="w-[65px] h-[65px] bg-accent rounded-full z-10 flex justify-center items-center shadow-[0_6px_15px_rgba(137,193,223,0.5),inset_0_2px_6px_rgba(255,255,255,0.5)] border border-white/30"
    >
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="flex justify-center items-center w-full h-full text-white"
      >
        {/* Renderizamos el ícono como si fuera un componente de React */}
        <GiPenguin size={32} />
      </motion.div>
    </motion.div>
  );
}