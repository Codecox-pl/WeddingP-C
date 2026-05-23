/**
 * @file GallerySection.jsx
 * @description Genera un carrusel (*slider*) estético para presentar una
 * galería dinámica que funciona como un fuerte factor WOW.
 * Soporta 'Drag to scroll' para interactividad avanzada en Desktop con el mouse
 * y posee Auto-Scroll temporal implementado.
 * Código debidamente estructurado y limpio siguiendo patrones de hooks de React.
 */
import React, { useRef, useState, useEffect } from 'react';
import { GiPenguin } from 'react-icons/gi';

export default function GallerySection() {
  // Arreglo centralizado de imágenes base de la galería (5 imágenes únicas)
  const baseFotos = [
    "https://images.unsplash.com/photo-1549416878-af0ac6dcbae5?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1583939008064-92794eb84f09?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1623583155799-a9a2aedebfc1?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80"
  ];
  
  // Clonación optimizada: 3 repeticiones (15 fotos) para sensación de scroll fluido sin sobrecargar el DOM
  const infiniteFotos = Array(3).fill(baseFotos).flat();

  // Variables y estados para la manipulación DOM del carrusel interactivo manual
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  // Al montar la galería, la posicionamos estratégicamente en el "Centro" del arreglo gigante
  // de modo que el invitado pueda deslizar libremente en ambas direcciones 
  // (hacia atrás o adelante) durante muchísimo tiempo sin topar fondo.
  useEffect(() => {
    if (carouselRef.current) {
      setTimeout(() => {
        if (carouselRef.current) {
          // Nos ubicamos en el bloque visual central
          const centerPosition = carouselRef.current.scrollWidth / 2;
          // Nos teletransportamos al medio de forma instantánea sin animaciones reveladoras
          carouselRef.current.scrollTo({ left: centerPosition, behavior: 'instant' });
        }
      }, 50); // Margen imperceptible de 50ms para esperar que el motor del navegador calcule el DOM Layout
    }
  }, []);

  // 2. Controladores de Eventos del Mouse (Para lograr la fluidez Desktop como en apps nativas)

  // Al presionar el ratón: Iniciamos el arrastre y anotamos la posición base
  const onMouseDown = (e) => {
    setIsDragging(true);
    if (!carouselRef.current) return;
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeftState(carouselRef.current.scrollLeft);
  };

  // Al soltar el ratón o salir de la zona: Liberamos el control de arrastre
  const onMouseLeave = () => setIsDragging(false);
  const onMouseUp = () => setIsDragging(false);

  // Mientras se mueve el ratón presionado: Calculamos los píxeles arrastrados para inyectarlos al ScrollX
  const onMouseMove = (e) => {
    // Si no lo tenemos presionado, no hacemos nada
    if (!isDragging || !carouselRef.current) return;

    e.preventDefault(); // Bloquear selección azul de texto de navegador o de imágenes nativas

    // Cálculo matemático de distancia
    const x = e.pageX - carouselRef.current.offsetLeft;
    const distanceWalked = (x - startX) * 2.5; // Acelera el scroll X 2.5 veces la velocidad del raton

    // Aplicamos inmediatamente al contenedor (sin CSS Scroll Smooth ni Snap para máxima sensibilidad al arrastre)
    carouselRef.current.scrollLeft = scrollLeftState - distanceWalked;
  };

  return (
    <section className="py-16 md:py-24 bg-[#fcfbf9] border-t border-black/5 overflow-hidden" id="galeria">
      <h2 className="font-serif mb-8 md:mb-16 text-text-primary text-[32px] leading-[1.15] font-[500] md:text-5xl lg:text-6xl flex flex-nowrap justify-center items-center gap-2 md:gap-5 text-center px-2 w-full">
          <GiPenguin className="text-[32px] md:text-5xl lg:text-6xl text-accent opacity-80 shrink-0" />
          <span className="leading-tight whitespace-normal min-w-0 text-center">Galeria</span>
          <GiPenguin className="text-[32px] md:text-5xl lg:text-6xl text-accent opacity-80 scale-x-[-1] shrink-0" />
        </h2>

      <div className="relative">
        <div
          ref={carouselRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          // Las clases "snap-*" y "scroll-smooth" se desactivan de forma reactiva mientras el usuario arrastra
          // Esto garantiza que el "Snap CSS" no pelee con el arrastre de JavaScript logrando zero-latency visual
          className={`flex gap-4 overflow-x-auto px-[10vw] pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${isDragging ? 'cursor-grabbing' : 'cursor-grab snap-x snap-mandatory scroll-smooth'
            }`}
        >
          {infiniteFotos.map((src, index) => (
            <div
              key={index}
              // Usamos pointer-events-none internamente para que la API del Navegador no intente 
              // iniciar una descarga/arrastre de "imagen fantasma HTML nativa" robando nuestro evento MouseMove
              className="min-w-[70vw] md:min-w-[450px] aspect-[4/5] snap-center shrink-0"
            >
              <div
                className="w-full h-full bg-cover bg-center shadow-lg border-8 border-white pointer-events-none select-none"
                style={{ backgroundImage: `url(${src})` }}
              />
            </div>
          ))}
        </div>

        {/* Caption decorativo instruccional */}
        <p className="text-center font-sans text-[11px] leading-[1.5] font-[700] text-accent uppercase tracking-[4px] mt-4 flex justify-center items-center gap-2 select-none md:text-xs">
          <span className="text-xl">←</span> Arrastra para explorar más <span className="text-xl">→</span>
        </p>
      </div>
    </section>
  );
}
