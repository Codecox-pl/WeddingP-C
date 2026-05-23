/**
 * @file HeroBackground.jsx
 * @description Fondo visual con imagen y overlay para la landing page.
 */
import React from 'react';

export default function HeroBackground() {
  return (
    <>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://res.cloudinary.com/dlpxjxb9k/image/upload/f_auto,q_auto,w_1920/v1777256660/penguins_background_zzfcib.jpg")',
          filter: 'brightness(0.55)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/50" />
    </>
  );
}
