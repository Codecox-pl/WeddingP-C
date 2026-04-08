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
    <div className={`relative min-h-screen w-full bg-wedding-bg overflow-x-hidden ${(!isAuthenticated || !isFinished) ? 'flex flex-col items-center justify-center h-screen' : ''}`}>
      {!isAuthenticated && (
         <LoginModal onAuthenticated={handleAuthenticated} />
      )}

      {isAuthenticated && (
        <>
          <Navbar isVisible={isOpen} />
          <AnimatePresence onExitComplete={() => setIsFinished(true)}>
            {!isOpen && (
              <motion.div 
                key="envelope-overlay"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="fixed inset-0 flex flex-col justify-center items-center z-50 bg-wedding-bg"
              >
                 <Envelope onOpen={() => setIsOpen(true)} guestData={guestData} />
              </motion.div>
            )}
          </AnimatePresence>
          
          {isFinished && <WeddingPage guestData={guestData} />}
        </>
      )}
    </div>
  );
}
