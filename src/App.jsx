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
      <AnimatePresence>
        {!isAuthenticated && (
          <motion.div
            key="landing"
            className="absolute top-0 left-0 w-full min-h-screen"
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', ease: 'easeInOut', duration: 0.9 }}
          >
            <LandingPage onAuthenticated={handleAuthenticated} />
          </motion.div>
        )}

        {isAuthenticated && (
          <motion.div
            key="invitation"
            className="absolute top-0 left-0 w-full min-h-screen"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ type: 'tween', ease: 'easeInOut', duration: 0.7 }}
          >
            <Navbar isVisible={true} />
            <WeddingPage guestData={guestData} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
