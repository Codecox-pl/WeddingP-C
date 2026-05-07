import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Envelope from './components/Envelope/Envelope';
import WeddingPage from './pages/WeddingPage/WeddingPage';
import Navbar from './components/Navbar/Navbar';
import LoginModal from './components/LoginModal/LoginModal';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [guestData, setGuestData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const handleAuthenticated = (data) => {
    setGuestData(data);
    setIsAuthenticated(true);
  };

  return (
    <div className="relative min-h-screen w-full bg-wedding-bg overflow-x-clip">
      {!isAuthenticated && (
         <div className="flex flex-col items-center justify-center h-screen">
           <LoginModal onAuthenticated={handleAuthenticated} />
         </div>
      )}

      {isAuthenticated && (
        <>
          <Navbar isVisible={isOpen} />
          
          {/* Renderizamos WeddingPage de fondo. Ocultamos el scroll mientras el sobre esté activo */}
          <div className={!isFinished ? "h-screen overflow-hidden" : ""}>
             <WeddingPage guestData={guestData} />
          </div>

          <AnimatePresence onExitComplete={() => setIsFinished(true)}>
            {!isOpen && (
              <motion.div 
                key="envelope-overlay"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className="fixed inset-0 flex flex-col justify-center items-center z-50 bg-wedding-bg/95 backdrop-blur-sm"
              >
                 <Envelope onOpen={() => setIsOpen(true)} guestData={guestData} />
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
}
