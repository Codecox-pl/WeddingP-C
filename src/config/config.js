/**
 * @file config.js
 * @description Centraliza las variables de configuración de la invitación.
 * Al modificar los valores aquí, repercuten automáticamente en el resto de la web.
 */

export const weddingConfig = {
  music: {
    // Has enlazado el archivo local "fondo.mp3" que se encuentra en la carpeta public
    url: "https://res.cloudinary.com/dlpxjxb9k/video/upload/v1777256616/fondo_azwylq.mp3",

    // Volumen inicial (0.0 a 1.0). Mantenerlo bajo (ej. 0.15) es ideal para no saturar al usuario.
    volume: 0.15
  }
};
