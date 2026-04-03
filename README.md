# 🐧 Digital Wedding Invitation (Mobile-First)

Una elegante y moderna invitación de bodas digital desarrollada en ReactJS + Vite + Tailwind CSS. Diseñada pensando primariamente en dispositivos móviles con una estética premium, tipografía balanceada y animaciones fluidas.

## 🚀 Características Principales
- **Mobile-First Design**: Optimizada pixel-perfect para el viewport más común (teléfonos) pero soportando fluidamente resoluciones de tablets y desktop mediante layout responsivo CSS.
- **Performance**: Construido con Vite para compilación instantánea y Framer Motion para micro-interacciones suaves.
- **Configuración Segura**: Variables sensibles como cuentas bancarias y ubicaciones protegidas de vista pública mediante `.env`.

## ⚙️ Configuración (Setup local)

1. Clona el repositorio e instala las dependencias:
   ```bash
   npm install
   ```

2. Renombra el archivo `.env.example` a `.env` y coloca tu información real (esto jamás se subirá a Github):
   ```bash
   cp .env.example .env
   ```

3. Ejecuta el entorno de desarrollo:
   ```bash
   npm run dev
   ```

## 🏗️ Despliegue (Deploy) para el gran día
Cuando estés listo para enviar el link a tus invitados compila la versión final:

```bash
npm run build
```

Generará una carpeta de código súper rápida en `dist/` que podrás arrastrar directamente a servicios gratuitos de hosting estático (como Vercel, Netlify o Github Pages).
