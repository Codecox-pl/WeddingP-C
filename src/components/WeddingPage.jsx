import React from 'react';
import { motion } from 'framer-motion';

// Index de Secciones para el Guest Journey Inteligente
import HeroSection from './sections/HeroSection';
import StorySection from './sections/StorySection';
import GallerySection from './sections/GallerySection';
import LocationSection from './sections/LocationSection';
import TimelineSection from './sections/TimelineSection';
import DressCodeSection from './sections/DressCodeSection';
import AccommodationSection from './sections/AccommodationSection';
import RSVPSection from './sections/RSVPSection';
import InteractiveSection from './sections/InteractiveSection';
import GiftsSection from './sections/GiftsSection';
import FAQSection from './sections/FAQSection';

export default function WeddingPage() {
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

         {/* 9. MÓDULO INTERACTIVO & PLAYLIST SPOTIFY */}
         <InteractiveSection />

         {/* 10. MÓDULO PREGUNTAS FRECUENTES (FAQ) */}
         <FAQSection />

         {/* 11. MÓDULO CUESTIONARIO RSVP ESTRATÉGICO (Al final como ancla) */}
         <div id="asistencia"><RSVPSection /></div>

         {/* FOOTER */}
         <footer className="w-full text-center py-12 text-[#999] bg-[#fdfbf9] mt-20 border-t border-black/5">
            <p className="font-sans text-[10px] uppercase tracking-[3px] mb-2">Gracias por formar parte de nuestra historia</p>
            <p className="font-serif text-3xl italic mb-6 text-text-primary">Patrick & Claudia</p>
            <div className="flex justify-center gap-6 text-[10px] font-sans uppercase tracking-[2px] mb-4 text-[#888]">
               <a href="#" className="hover:text-accent transition-colors">Instagram Oficial</a>
               <a href="#" className="hover:text-accent transition-colors">Tel de Contacto</a>
            </div>
            <p className="font-sans text-[8px] uppercase tracking-widest text-gray-400 mt-6 md:mt-10">© 2026 PATRICK & CLAUDIA. Hecho por y para el amor ♥.</p>
         </footer>
      </motion.div>
   );
}
