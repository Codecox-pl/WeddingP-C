import React from 'react';
import { motion } from 'framer-motion';

// Secciones optimizadas para el flujo reestructurado
import HeroSection from './components/HeroSection/HeroSection';
import FamilySection from './components/FamilySection/FamilySection';
import StorySection from './components/StorySection/StorySection';
import GallerySection from './components/GallerySection/GallerySection';
import LocationSection from './components/LocationSection/LocationSection';
import DressCodeSection from './components/DressCodeSection/DressCodeSection';
import GiftsSection from './components/GiftsSection/GiftsSection';
import RSVPSection from './components/RSVPSection/RSVPSection';
import InteractiveSection from './components/InteractiveSection/InteractiveSection';

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

         {/* 2. MÓDULO FAMILIA (PADRES Y PADRINOS) */}
         <FamilySection />

         {/* 3. MÓDULO NUESTRA HISTORIA */}
         <div id="historia"><StorySection /></div>

         {/* 4. GALERÍA */}
         <GallerySection />

         {/* 5. MÓDULO LOGÍSTICA DE UBICACIÓN + MAPS */}
         <div id="ubicacion"><LocationSection /></div>

         {/* 6. MÓDULO DRESS CODE */}
         <DressCodeSection />

         {/* 7. MÓDULO MESA DE REGALOS */}
         <div id="regalos"><GiftsSection /></div>

         {/* 8. MÓDULO RSVP — Posición estratégica (antes estaba al final) */}
         <div id="asistencia"><RSVPSection guestData={guestData} /></div>

         {/* 9. MÓDULO LIBRO DE VISITAS — Después del RSVP como valor emocional */}
         <InteractiveSection guestData={guestData} />

         {/* FOOTER */}
         <footer className="w-full text-center py-12 text-[#999] bg-[#fdfbf9] mt-20 border-t border-black/5">
            <p className="font-sans text-[10px] uppercase tracking-[3px] mb-2">Gracias por formar parte de nuestra historia</p>
            <p className="font-serif text-3xl italic mb-6 text-text-primary">Patrick & Claudia</p>
            <p className="font-sans text-[8px] uppercase tracking-widest text-gray-400 mt-6 md:mt-10">© 2026 PATRICK & CLAUDIA. Hecho por y para el amor ♥.</p>
         </footer>
      </motion.div>
   );
}
