import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import WeddingPage from './pages/WeddingPage/WeddingPage';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [guestData, setGuestData] = useState(null);

  const handleAuthenticated = (data) => {
    setGuestData(data);
    setIsAuthenticated(true);
  };

  return (
    <div className="relative min-h-screen w-full bg-wedding-bg overflow-x-clip">
      <AnimatePresence mode="wait">
        {!isAuthenticated && (
          <motion.div
            key="landing"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <LandingPage onAuthenticated={handleAuthenticated} />
          </motion.div>
        )}

        {isAuthenticated && (
          <motion.div
            key="invitation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          >
            <Navbar isVisible={true} />
            <WeddingPage guestData={guestData} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
