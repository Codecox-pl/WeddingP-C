import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Envelope from './components/Envelope';
import WeddingPage from './components/WeddingPage';
import Navbar from './components/Navbar';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  return (
    <div className={`relative min-h-screen w-full bg-wedding-bg max-w-[100vw] overflow-x-hidden ${!isFinished ? 'flex flex-col items-center justify-center h-screen' : ''}`}>
      <Navbar isVisible={isOpen} />
      <AnimatePresence onExitComplete={() => setIsFinished(true)}>
        {!isOpen && (
          <motion.div 
            key="envelope-overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 flex justify-center items-center z-50 bg-wedding-bg"
          >
             <Envelope onOpen={() => setIsOpen(true)} />
          </motion.div>
        )}
      </AnimatePresence>
      
      {isFinished && <WeddingPage />}
    </div>
  );
}
