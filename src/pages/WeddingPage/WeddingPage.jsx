import React from 'react';
import { motion } from 'framer-motion';

// Index de Secciones para el Guest Journey Inteligente
import HeroSection from './components/HeroSection/HeroSection';
import StorySection from './components/StorySection/StorySection';
import GallerySection from './components/GallerySection/GallerySection';
import LocationSection from './components/LocationSection/LocationSection';
import TimelineSection from './components/TimelineSection/TimelineSection';
import DressCodeSection from './components/DressCodeSection/DressCodeSection';
import AccommodationSection from './components/AccommodationSection/AccommodationSection';
import RSVPSection from './components/RSVPSection/RSVPSection';
import InteractiveSection from './components/InteractiveSection/InteractiveSection';
import GiftsSection from './components/GiftsSection/GiftsSection';
import FAQSection from './components/FAQSection/FAQSection';

export default function WeddingPage({ guestData }) {
   return (
      <motion.div
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
         className="w-full bg-wedding-bg text-text-primary min-h-screen"
      >
         {/* 1. MÓDULO HERO & CUENTA REGRESIVA */}
         <HeroSection />

         {/* 2. MÓDULO NUESTRA HISTORIA */}
         <div id="historia"><StorySection /></div>

         {/* 3. GALERÍA W.O.W. */}
         <GallerySection />

         {/* 4. MÓDULO LOGÍSTICA DE UBICACIÓN + MAPS */}
         <div id="ubicacion"><LocationSection /></div>

         {/* 5. MÓDULO CRONOGRAMA */}
         <div id="cronograma"><TimelineSection /></div>

         {/* 6. MÓDULO MESA DE REGALOS & PAYPAL */}
         <div id="regalos"><GiftsSection /></div>

         {/* 7. MÓDULO DRESS CODE */}
         <DressCodeSection />

         {/* 8. MÓDULO ALOJAMIENTO EXTERNO & TURISMO */}
         <AccommodationSection />

         {/* 9. MÓDULO INTERACTIVO & GUESTBOOK */}
         <InteractiveSection guestData={guestData} />

         {/* 10. MÓDULO PREGUNTAS FRECUENTES (FAQ) */}
         <FAQSection />

         {/* 11. MÓDULO CUESTIONARIO RSVP ESTRATÉGICO (Al final como ancla) */}
         <div id="asistencia"><RSVPSection guestData={guestData} /></div>

         {/* FOOTER */}
         <footer className="w-full text-center py-12 text-[#999] bg-[#fdfbf9] mt-20 border-t border-black/5">
            <p className="font-sans text-[10px] uppercase tracking-[3px] mb-2">Gracias por formar parte de nuestra historia</p>
            <p className="font-serif text-3xl italic mb-6 text-text-primary">Patrick & Claudia</p>
            <p className="font-sans text-[8px] uppercase tracking-widest text-gray-400 mt-6 md:mt-10">© 2026 PATRICK & CLAUDIA. Hecho por y para el amor ♥.</p>
         </footer>
      </motion.div>
   );
}
