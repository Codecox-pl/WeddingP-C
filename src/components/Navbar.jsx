/**
 * @file Navbar.jsx
 * @description Barra de navegación flotante para desplazarse fluidamente (Smooth Scroll).
 * Incluye un módulo integrado de Música de Fondo ("Background Music").
 */
import React, { useState, useEffect, useRef } from 'react';
import { FiMusic, FiVolumeX, FiMenu, FiX } from 'react-icons/fi';
import { weddingConfig } from '../config';

export default function Navbar({ isVisible }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const audioRef = useRef(null);

  // Escuchar el scroll para aplicar efecto Glassmorphism a la nav
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Iniciar la música imperativamente saltándose restricciones estrictas asíncronas
  useEffect(() => {
    if (isVisible && audioRef.current && !isPlaying) {
      audioRef.current.volume = weddingConfig.music.volume;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => setIsPlaying(true))
        .catch(error => console.error("Auto-play blocked by browser. User must click the play button manually.", error));
      }
    }
  }, [isVisible]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) playPromise.catch(() => {});
      }
      setIsPlaying(!isPlaying);
    }
  };

  const navLinks = [
    { name: 'Nuestra Historia', href: '#historia' },
    { name: 'Ubicación', href: '#ubicacion' },
    { name: 'Cronograma', href: '#cronograma' },
    { name: 'Regalos', href: '#regalos' },
    { name: 'Asistencia', href: '#asistencia' }
  ];

  return (
    <>
      <audio ref={audioRef} loop src={weddingConfig.music.url} />

      {isVisible && (
        <>
          <nav className={`fixed top-0 w-full z-40 transition-full duration-300 px-6 py-4 flex justify-between items-center ${scrolled || menuOpen ? 'bg-white/85 backdrop-blur-md shadow-sm' : 'bg-transparent pt-6'}`}>

          <div className={`font-serif text-2xl tracking-widest transition-colors ${scrolled || menuOpen ? 'text-text-primary' : 'text-white drop-shadow-sm'}`}>
            P & C
          </div>

          {/* Escritorio Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <a key={idx} href={link.href} className={`font-sans text-[10px] uppercase tracking-[2px] hover:text-accent-hover transition-colors ${scrolled ? 'text-text-secondary' : 'text-white/90 drop-shadow-sm'}`}>
                {link.name}
              </a>
            ))}

            <button onClick={toggleMusic} className={`w-10 h-10 rounded-full flex justify-center items-center transition-colors shadow-sm ${scrolled ? 'bg-accent/10 text-accent hover:bg-accent hover:text-white' : 'bg-white/20 text-white backdrop-blur-sm hover:bg-white hover:text-accent'}`}>
              {isPlaying ? <FiMusic /> : <FiVolumeX />}
            </button>
          </div>

          {/* Móvil Toggle */}
          <div className="flex lg:hidden items-center gap-3">
            <button onClick={toggleMusic} className={`w-9 h-9 shrink-0 rounded-full flex justify-center items-center backdrop-blur-sm transition-all shadow-md ${scrolled || menuOpen ? 'bg-accent text-white' : 'bg-white/20 text-white'}`}>
              {isPlaying ? <FiMusic className="text-lg" /> : <FiVolumeX className="text-lg" />}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className={`text-2xl shrink-0 transition-colors ${scrolled || menuOpen ? 'text-text-primary' : 'text-white drop-shadow-md'}`}>
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
          </nav>

      {/* Menú de pantalla completa para móviles */}
      {menuOpen && (
        <div className="fixed inset-0 z-30 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 animate-fade-in lg:hidden">
          {navLinks.map((link, idx) => (
            <a key={idx} href={link.href} onClick={() => setMenuOpen(false)} className="font-sans text-lg uppercase tracking-[4px] text-text-primary hover:text-accent transition-colors">
              {link.name}
            </a>
          ))}
        </div>
      )}
      </>
    )}
    </>
  );
}
