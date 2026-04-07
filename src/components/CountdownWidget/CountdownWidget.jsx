/**
 * @file CountdownWidget.jsx
 * @description Widget independiente que calcula y muestra la vista del contador hasta la fecha de la boda.
 */
import React, { useState, useEffect } from 'react';

export default function CountdownWidget({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60)
      };
    } else {
      timeLeft = { dias: 0, horas: 0, minutos: 0, segundos: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const pad = (num) => String(num).padStart(2, '0');

  const isFinished = timeLeft.dias === 0 && timeLeft.horas === 0 && timeLeft.minutos === 0 && timeLeft.segundos === 0;

  if (isFinished) {
    return (
      <div className="font-serif text-[26px] leading-[1.2] font-[600] md:text-5xl tracking-widest text-[#f5f5f7] drop-shadow-md mb-10 mt-4 italic">
        Es hora de disfrutar la fiesta
      </div>
    );
  }

  return (
    <div className="flex gap-3 sm:gap-6 justify-center items-center text-[26px] leading-[1.2] font-[600] md:text-4xl font-serif tracking-widest drop-shadow-lg mb-10 w-full">
      <div className="flex flex-col items-center min-w-[60px]">
        <span>{pad(timeLeft.dias)}</span><span className="text-[11px] leading-[1.5] uppercase font-[500] md:text-xs font-sans mt-1 tracking-widest">Días</span>
      </div>
      <p className="opacity-50 text-[18px] leading-[1.3] font-sans mb-4">:</p>
      <div className="flex flex-col items-center min-w-[60px]">
        <span>{pad(timeLeft.horas)}</span><span className="text-[11px] leading-[1.5] uppercase font-[500] md:text-xs font-sans mt-1 tracking-widest">Hrs</span>
      </div>
      <p className="opacity-50 text-[18px] leading-[1.3] font-sans mb-4">:</p>
      <div className="flex flex-col items-center min-w-[60px]">
        <span>{pad(timeLeft.minutos)}</span><span className="text-[11px] leading-[1.5] uppercase font-[500] md:text-xs font-sans mt-1 tracking-widest">Min</span>
      </div>
      <p className="opacity-50 text-[18px] leading-[1.3] font-sans mb-4">:</p>
      <div className="flex flex-col items-center min-w-[60px]">
        <span>{pad(timeLeft.segundos)}</span><span className="text-[11px] leading-[1.5] uppercase font-[500] md:text-xs font-sans mt-1 tracking-widest">Seg</span>
      </div>
    </div>
  );
}
