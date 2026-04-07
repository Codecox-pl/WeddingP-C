/**
 * @file CalendarWidget.jsx
 * @description Widget independiente que detecta el OS (User Agent) y automatiza el evento (Apple/Outlook vs Google Calendar) con un solo clic.
 */
import React from 'react';
import { FiCalendar } from 'react-icons/fi';

export default function CalendarWidget({ eventDetails }) {
  const generateGoogleCalendarUrl = () => {
    const formatDate = (date) => date.toISOString().replace(/-|:|\.\d+/g, '');
    const start = formatDate(eventDetails.startObj);
    const end = formatDate(eventDetails.endObj);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.title)}&dates=${start}/${end}&details=${encodeURIComponent(eventDetails.description)}&location=${encodeURIComponent(eventDetails.location)}`;
  };

  const downloadICS = () => {
    const formatDate = (date) => {
      const pad = (n) => n < 10 ? '0' + n : n;
      return `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}T${pad(date.getHours())}${pad(date.getMinutes())}${pad(date.getSeconds())}`;
    };

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//PatrickYClaudia//Boda//EN
CALSCALE:GREGORIAN
BEGIN:VEVENT
SUMMARY:${eventDetails.title}
DTSTART:${formatDate(eventDetails.startObj)}
DTEND:${formatDate(eventDetails.endObj)}
LOCATION:${eventDetails.location}
DESCRIPTION:${eventDetails.description}
STATUS:CONFIRMED
SEQUENCE:0
BEGIN:VALARM
TRIGGER:-PT24H
ACTION:DISPLAY
DESCRIPTION:Recordatorio de Boda
END:VALARM
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'boda_patrick_claudia.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleAddToCalendar = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    const isMac = /Macintosh|Mac OS X/.test(userAgent);
    
    // Si es ecosistema Apple, descargamos ICS para sincronización nativa inmediata.
    if (isIOS || isMac) {
      downloadICS();
    } else {
      // Para Android / Windows / Web general, usamos la plataforma en la nube (Google Calendar)
      window.open(generateGoogleCalendarUrl(), '_blank');
    }
  };

  return (
    <button 
      onClick={handleAddToCalendar}
      className="flex items-center gap-3 px-8 py-3 border border-white/60 text-white font-sans text-xs uppercase tracking-[3px] hover:bg-white hover:text-black transition-colors rounded-3xl backdrop-blur-sm shadow-md"
    >
       <FiCalendar className="text-lg" /> Añadir al Calendario
    </button>
  );
}
